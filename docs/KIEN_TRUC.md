# Kiến trúc và kế hoạch phát triển ứng dụng Tập viết S Pen

Bản tài liệu 0.8 · Cập nhật 28/11/2026 · Áp dụng cho mã nguồn từ bản 0.14.0

Tài liệu này mô tả ứng dụng được tổ chức thế nào, dữ liệu nằm ở đâu, và các bản sắp tới sẽ làm gì. Ai muốn góp ý hay góp mã thì đọc tài liệu này trước.

## Mục lục

1. Mục tiêu
2. Các quyết định đã chốt
3. Hiện trạng bản 0.10.3
4. Kiến trúc bốn lớp
5. Dữ liệu
6. Hai cách dùng: tải vở làm sẵn và tự tạo vở
7. Tổ chức mã nguồn
8. Lộ trình
9. Quy ước chung
10. Danh sách kiểm tra chất lượng vở PDF

---

## 1. Mục tiêu

Ứng dụng phục vụ bốn nhu cầu, cùng dùng một bộ máy vẽ chữ:

| Nhu cầu | Cách đáp ứng |
|---|---|
| Luyện viết trực tiếp bằng bút cảm ứng | Màn hình tập viết (S Pen, bút của máy tính bảng) |
| Luyện viết trên máy đọc sách và máy tính bảng | Vở PDF đúng khổ màn hình (reMarkable, Boox, Kindle Scribe, iPad, Samsung Notes) |
| Luyện viết trên giấy | Vở PDF khổ A4, A5, in được bằng máy in đen trắng |
| Ghi chép hằng ngày | Trang ghi chép: dòng kẻ, kẻ chấm, kiểu Cornell |

Nguyên tắc nền: **một bộ máy vẽ, nhiều đầu ra.** Màn hình và vở PDF dùng chung một đoạn mã vẽ, nên hai bên không bao giờ lệch nhau.

## 2. Các quyết định đã chốt

| Quyết định |
|---|
| Có hai cách dùng: tải vở PDF làm sẵn ở mục Releases, hoặc tự chỉnh rồi tạo vở ngay trong ứng dụng |
| Bộ vở làm sẵn gồm 5 khổ: A4, A5, Samsung Notes, máy đọc sách tỷ lệ 3:4, máy đọc sách tỷ lệ 9:16 |
| Người dùng tự gõ được nội dung để tập (từ bản 0.11) |
| Người dùng dùng được phông chữ của mình (tệp .ttf, .otf). Tệp chỉ nằm trên máy người dùng, không gửi đi đâu |
| Giữ bộ xuất PDF dạng vectơ đang có, nâng cấp chứ không viết lại |
| Mã nguồn chia nhiều tệp cho dễ sửa, khi phát hành thì gộp lại thành một tệp HTML chạy được không cần mạng |
| Cỡ chữ tính theo milimét thật trên mọi khổ. Ba nút cỡ L, M, S giữ lại để chọn nhanh, mỗi nút ứng với một cỡ tính bằng mm |
| Mỗi kiểu chữ (thanh đậm, nét đều, tiểu học) có giáo trình riêng |
| Giáo trình tiểu học theo mẫu chữ viết trong trường tiểu học (Quyết định 31/2002/QĐ-BGD&ĐT), kiểu chữ đứng, nét đều. Chữ mẫu dựng từ đường tâm nét để tô được theo nét đứt |
| Dấu thanh đặt theo kiểu cũ: hòa, khỏe, thủy. Dùng viết tắt chuẩn (VD, SL), không dùng kiểu nhắn tin (ko, đc, vs) |
| Nét đi ngược lại trên nét cũ (như h, n, m: kéo sổ xuống rồi rê ngược lên uốn móc) được tính là nét riêng, có số riêng. Nét chỉ đổi hướng mà không đi lại trên nét cũ (như v) vẫn là một nét |
| Dấu râu của ơ, ư viết từ trên xuống |

## 3. Hiện trạng bản 0.10.3

| Thành phần | Tên trong mã | Tình trạng |
|---|---|---|
| Giáo trình hai kiểu chữ | `SCRIPTS` (`td` = thanh đậm, `qs` = nét đều) | Đã có, dạng dữ liệu |
| Đường đi của nét từng chữ | `DUCTUS` trong `SCRIPTS` | Đã soát và sửa số nét, thứ tự nét ở bản 0.10.2 |
| Số đo phông chữ | `FONTS` (Pinyon Script, Allura, Quicksand) | Đã có |
| Phông nhúng vào PDF | `PDFF` | Đã có, nhưng làm sẵn từ trước, chưa nạp được phông mới lúc đang chạy |
| Bộ xuất PDF vectơ | `assembleVectorPdf`, `PdfDoc` | Đã có: nhúng phông, tìm được chữ, mục lục chạm được |
| Khổ trang | `KHO_TRANG` (`src/data/presets.js`): rm2, rmpp, rmppm, a4, a5, sn, và khổ tự nhập | Tính bằng mm từ bản 0.11; `PDF_PRESETS` dựng tự động từ đây |
| Tùy chọn xuất vở | `pdfOpt` | Đã có, nhưng chưa lưu được vào đường link |
| Bài tự do | bài `free`, nội dung `custom` | Đã có ở mức cơ bản |
| Hàm xuất vở | `exportPdf(cfg)` (từ bản 0.11; trước đó là `generateWorkbookPdf()`) | Nhận một gói `cfg`, không đọc bài đang mở hay giao diện. Bên trong vẫn tạm đổi vài biến chung của bộ vẽ rồi khôi phục (xem mục 5.3) |
| Bút viết chậm | `revealGlyphLayer`, `revealOwnerMap` | Viết lại ở bản 0.10.2: tô theo vùng, luôn đủ 100% chữ |

## 4. Kiến trúc bốn lớp

```
LỚP 4 – GIAO DIỆN
  [Tập viết]          [Tạo vở PDF]          [Trang ghi chép]
        │                   │                       │
LỚP 3 – BỘ VẼ (cùng một cách vẽ trên canvas)
  Vẽ lên màn hình        │        Ghi lại thành PDF vectơ
        │                   │
LỚP 2 – BỘ MÁY DÀN TRANG
  exportPdf(cfg) → dòng kẻ, chữ mẫu, chữ mờ, chấm đặt bút, mũi tên, số trang
        │
LỚP 1 – DỮ LIỆU
  SCRIPTS (giáo trình, nét chữ, sổ tay) │ FONTS, PDFF │ PRESETS (mm) │ cfg (cấu hình vở)
```

Thay đổi chính ở bản 0.11: **lớp 2 nhận một gói cấu hình `cfg` duy nhất**, thay vì đọc các biến chung của ứng dụng. Nhờ vậy:

- Màn Tạo vở dựng `cfg` từ các nút chọn rồi gọi `exportPdf(cfg)`.
- Đường link chứa `cfg`, nên mở link ra là có đúng cấu hình.
- GitHub gọi `exportPdf(cfg)` với từng cấu hình chuẩn để tạo sẵn bộ vở.

### 4.1. Gắn sự kiện và chính sách bảo mật nội dung (bản 0.14)

- Mọi nút và ô nhập không viết sự kiện trực tiếp trong HTML mà dùng thuộc tính `data-action="tên"` (click), `data-doi` (change), `data-nhap` (input), `data-mo` (toggle của `<details>`) và `data-nhan` (pointerdown).
- Hàm xử lý đặt trong `HANH_DONG.tên = (el, e) => …`. Bộ gắn sự kiện chung nằm ở đầu `src/ui/khu.js`; các nút cố định trong `src/app.html` có hàm đặt tại `src/ui/nut-chung.js`.
- Giá trị riêng của từng nút truyền qua thuộc tính `data-…` riêng, không ghép vào chuỗi mã; giá trị chuỗi luôn bọc `escHtml`.
- Không được viết thuộc tính `on…=` trong HTML hay chuỗi HTML; `node tools/kiem-hanh-dong.js` (chạy trong CI) báo lỗi nếu còn `on…=` hoặc nếu có tên hành động chưa có hàm (hay gán trùng).
- Khi gộp file, `tools/build.js` tính mã băm SHA-256 của khối `<script>` duy nhất và ghi thẻ CSP vào vị trí `<!-- @csp -->` trong `src/app.html`.
- Ứng dụng phải giữ đúng một khối `<script>` để mã băm hợp lệ; `style="…"` viết trực tiếp vẫn được phép.

## 5. Dữ liệu

### 5.1. Giáo trình

```
SCRIPTS[kiểu] = {
  name, font, XH: {L, M, S},        // chiều cao thân chữ theo 3 cỡ
  COURSE: [ { part, lessons: [ { id, t, z, note, rows, up, dn } ] } ],
  STROKES,  // hình các nét cơ bản
  DUCTUS,   // đường đi của nét từng chữ, dùng cho bút viết chậm và mũi tên
  SOTAY,    // sổ tay từng bài: [ý chính, [cách làm], [lỗi hay gặp]]
  NHAPMON,  // phần lý thuyết nhập môn
  WORDS     // từ ví dụ cho từng chữ cái
}
```

Kiểu dòng trong `rows`: `stroke` (nét), `pair` (cặp chữ, câu), `rep` (lặp chữ), `blank` (dòng trống).

Hiện có ba kiểu: `td` (Thanh đậm), `qs` (Nét đều) và `th` (Sao Mai Tập Viết, chữ tiểu học, từ bản 0.12; tên hiện trong app là "Sao Mai"; xem mục 5.1.1).

### 5.1.1. Giáo trình tiểu học Sao Mai Tập Viết (`th`)

Khác hai kiểu kia ở chỗ chữ mẫu không lấy từ phông mà vẽ từ **đường tâm nét**, nhờ vậy cho nét đứt để tô đúng kiểu vở tiểu học. Phông Playwrite VN chỉ dùng cho chữ người dùng tự gõ.

```
SCRIPTS.th = {
  name: "Tiểu học", font: "PW",     // PW = Playwrite VN, chỉ dùng cho chữ tự gõ
  CO: { thuong: 2, nho: 1 },        // số ô li ứng với 1 đơn vị chữ: cỡ Thường (cỡ vừa) và cỡ Nhỏ
  STROKES,  // nét cơ bản, cùng dạng với hai kiểu kia: { w, d: [["M",x,y], ["L",x,y], ["C",x1,y1,x2,y2,x,y]] }
  CHU,      // chữ mẫu vẽ từ đường tâm nét (dưới đây)
  DUCTUS,   // không ghi tay: dựng tự động từ CHU (lấy mẫu điểm trên đường cong), để dùng chung phần mũi tên và Xem viết chậm
  COURSE, SOTAY, NHAPMON, WORDS     // như hai kiểu kia
}

CHU[chữ] = {
  rong,              // bề rộng chữ (đơn vị chữ)
  vao, ra,           // điểm nối với chữ đứng trước và chữ đứng sau [x, y]
  cach: [            // một hay nhiều cách viết; cách đầu tiên là mặc định
    { ten: "Cách 1",
      net: [ { loai: "congkin", d: [...], lien?: 1, dau?: 1 }, … ] }
  ]
}
```

- Tọa độ tính theo **đơn vị chữ**: 1 đơn vị = chiều cao chữ o. x qua phải, y lên trên, y = 0 là đường chân. Chữ đứng, không nghiêng.
- `loai` là tên nét cơ bản trong `STROKES` mà nét này thuộc về (VD `congkin`, `mocnguoc`), dùng để tô màu và giải thích "chữ a gồm nét cong kín và nét móc ngược".
- `lien: 1`: nét này viết tiếp từ nét trước, không nhấc viết. Theo quy ước ở mục 2, nét đi ngược lại trên nét cũ vẫn là nét riêng, có số riêng.
- `dau: 1`: dấu phụ (chấm của i, dấu mũ, dấu râu…).
- Điểm đặt viết là điểm đầu của nét đầu tiên; điểm dừng viết là điểm cuối của nét cuối cùng. Không ghi riêng.
- Chiều cao theo mẫu: b g h k l y = 2,5; t = 1,5; r s = 1,25; d đ p q = 2; còn lại = 1; chữ số = 2; dấu thanh nằm trong ô vuông cạnh 0,5.
- **Dấu thanh** (`dausac`, `dauhuyen`, `dauhoi`, `daunga`, `daunang`) nằm trong `STROKES`, vẽ trong ô vuông cạnh 0,5, gốc tọa độ ở góc dưới bên trái ô. Chữ có dấu thanh không ghi riêng trong `CHU` mà ghép lúc vẽ: chữ gốc + dấu, dấu trên đặt cách đỉnh chữ (hoặc đỉnh dấu mũ) 0,1 và canh giữa âm chính, dấu nặng đặt dưới đường chân 0,15.
- **Bộ vẽ** (`src/engine/th-render.js`, từ bản 0.12): `SC.font` của kiểu `th` là phông giả `"TH"`. Khi gặp phông này, `text()`, `mw()`, `arrowsOnText()` và `drawBasic()` vẽ và đo chữ từ đường tâm nét thay vì phông: chữ mẫu nét liền, dòng Tô nét đứt; dấu thanh ghép lúc vẽ; nối chữ trong một tiếng (nối liền hoặc lia viết hở nhẹ tùy cặp chữ), hai tiếng cách 0,8 đơn vị (rộng bằng chữ o). `DUCTUS` dựng từ `CHU` lúc khởi động, gồm cả chữ có dấu thanh và các nét cơ bản (`~` + mã nét). Kiểu `th` luôn dùng lưới 4 ô li, cỡ Thường (2 ô li) và cỡ Nhỏ (1 ô li), in tập viết PDF đúng 1 ô li = 2 mm.
- Trong `COURSE` của kiểu `th`, trường `z` là cỡ chữ: `"thuong"` hoặc `"nho"` (hai kiểu kia dùng `L`, `M`, `S`).

Từ bản 0.12, dữ liệu dùng trong ứng dụng nằm ở `src/data/scripts-th.js` (`SCRIPTS.th`), gồm 32 bài trong 9 phần, hiện trực tiếp ở mục đổi kiểu chữ. Kiểu chữ đang dùng lưu ở khóa `td1:script` (`td`, `qs` hoặc `th`), bài và tiến độ của mỗi kiểu lưu theo tiền tố riêng (`td1:`, `qs1:`, `th1:`).

Mỗi nét trong `DUCTUS` có dạng `{ r: [đoạn 1, đoạn 2, …], s: phía đặt mũi tên, mark?: 1 nếu là dấu phụ }`. Mỗi đoạn là danh sách điểm `[x, y]`, tính theo chiều cao thân chữ (x sang phải, y lên trên, y = 0 là đường chân). Các đoạn trong cùng một nét được viết liền, không nhấc viết.

### 5.2. Khổ trang (thay `PDF_PRESETS` ở bản 0.11)

Mọi số đo tính bằng **mm**. Bộ máy tự đổi sang pt (1 mm = 2,8346 pt). Đã làm ở bản 0.11: `src/data/presets.js`. Máy có độ phân giải công bố thì vẽ trang đúng số điểm ảnh của máy; khổ giấy, Samsung Notes và khổ tự nhập vẽ ở 8 điểm ảnh mỗi mm. Trang hẹp hơn 1240 điểm ảnh thì chữ tiêu đề và lề thu nhỏ theo tỷ lệ. Khổ tự nhập nhận 40 tới 500 mm mỗi chiều (`cfg.preset = "tunhap"`, `cfg.wMm`, `cfg.hMm`).

| Mã | Tên | Khổ (mm) | Mục lục chạm được | Có trong bộ vở làm sẵn |
|---|---|---|---|---|
| a4 | Giấy A4 | 210 × 297 | Có | ✔ |
| a5 | Sổ tay A5 | 148 × 210 | Có | ✔ |
| sn | Samsung Notes | 70 × 140 | **Không** (Samsung Notes không mở được liên kết khi đang viết) | ✔ |
| rm2 | reMarkable 2, Boox 10,3″ | 157 × 209 | Có | ✔ (đại diện tỷ lệ 3:4) |
| rmpp | reMarkable Paper Pro | 179,7 × 239,6 | Có | |
| rmppm | reMarkable Paper Pro Move | 91,8 × 163,2 | Có | ✔ (đại diện tỷ lệ 9:16) |
| tunhap | Tự nhập | rộng × cao | Tùy chọn | |

Các hãng máy đọc sách không công bố khổ trang mẫu, nên số đo ở đây là do bên thứ ba đo. Mỗi khổ sẽ kèm một **trang kiểm tra** (thước 50 mm và 5 mức xám) để người dùng đo lại trên máy thật.

### 5.3. Gói cấu hình vở `cfg` (bản 0.11)

```
cfg = {
  v: 1,                         // phiên bản cấu trúc cfg
  script: "td" | "qs" | "th",   // kiểu chữ
  font: "PS" | "AL" | "QS" | "PW" | "user:<tên>",
  scope: "bai" | "phan" | "tatca" | "luyenthem" | "tudo" | "tugo" | "ghichep",
  lessons: ["n1", "n2"],        // khi chọn bài hoặc phần
  text: "…",                    // khi tự gõ nội dung
  mode: "to" | "nho",           // tô mờ dần / chép theo mẫu
  grid: "french" | "oly4" | "dong" | "cham" | "tron",
  z: "L" | "M" | "S",           // hoặc xhMm: 4.0 (cỡ tính theo mm)
  gray: 0..1,                   // độ đậm chữ mờ
  arrows: true | false,
  preset: "a4" | … | "tunhap", wMm, hMm,
  barSide: "left" | "right",
  links: true | false,
  a5x2: true | false            // in 2 trang A5 trên 1 tờ A4
}
```

**Đã làm (bản 0.11):** hàm `exportPdf(cfg)` ở `src/engine/export-pdf.js`, trả về `{ blob, soTrang, tieuDe, cfg }`. Đang đọc các trường `v`, `script`, `scope`, `lessons`, `mode`, `grid` (`french`, `oly4`), `arrows`, `preset` (`rm2`, `rmpp`, `rmppm`, `a4`, `a5`, `sn`, `tunhap` kèm `wMm`, `hMm`), `barSide`; trường nào thiếu thì lấy mặc định, trường nào sai thì báo lỗi bằng lời dễ hiểu.

| `scope` | Xuất gì |
|---|---|
| `bai` | Các bài ghi trong `lessons` (một bài thì không có mục lục, nhiều bài thì có) |
| `phan` | Cả phần chứa bài `lessons[0]` |
| `tatca` | Cả giáo trình |
| `luyenthem` | Các chữ Luyện thêm; nếu chưa có thì lấy Bài ôn |
| `tudo` | Bài tự do |
| `tugo` | Nội dung tự gõ trong `text` (tối đa 2.000 ký tự), mỗi dòng một dòng tập |

Chưa làm: `ghichep`, `font`, `z`, `gray`, `a5x2`. Trường `links` chưa đọc từ cfg mà theo khổ trang (Samsung Notes tắt). `cfg.script` phải trùng kiểu chữ app đang mở, vì dữ liệu kiểu chữ chỉ nạp một lần lúc khởi động. Bên trong, hàm vẫn tạm đổi vài biến chung của bộ vẽ (khổ trang, giao diện) rồi khôi phục; gỡ hẳn khi viết lại bộ vẽ theo mm. Nút "Tạo và tải file PDF" nay chỉ dựng `cfg` từ màn Xuất PDF rồi gọi `exportPdf(cfg)`.

**Đường link:** `…/index.html#cfg=<JSON nén, mã base64url>`. Phần nằm sau dấu `#` không được trình duyệt gửi lên máy chủ, nên nội dung người dùng tự gõ không lọt ra ngoài.

Đã làm ở bản 0.11 (`src/engine/cfg-link.js`):

- Mã bắt đầu bằng `z` là JSON nén kiểu deflate-raw; bắt đầu bằng `j` là JSON không nén (dùng khi trình duyệt không có `CompressionStream`). Mã dài quá 8.000 ký tự hoặc có ký tự lạ thì bị từ chối.
- Màn Xuất PDF có nút **Chép đường link cấu hình này**. Không chép tự động được thì hiện đường link trong ô để người dùng tự chép.
- Mở link: nếu kiểu chữ trong link khác kiểu đang mở thì đổi kiểu rồi tải lại trang (giữ link); sau đó mở đúng bài, mở màn Xuất PDF đã điền sẵn tùy chọn, rồi xóa phần `#cfg=` khỏi thanh địa chỉ. Link hỏng hoặc cấu hình sai thì báo bằng lời dễ hiểu, app vẫn mở bình thường.
- Màn **Tạo tập viết PDF** (thay màn Xuất PDF cũ, `openPdfModal` trong `src/engine/pdf-export.js`) chọn được: nội dung (Bài này, Chọn bài, Cả phần, Cả giáo trình, Luyện thêm, Bài tự do, Tự gõ), khổ giấy (6 khổ có sẵn và Tự nhập theo mm), Tô hay Chép, kiểu dòng kẻ, lề thanh công cụ, mũi tên. Có nút tạo PDF và nút chép đường link.

### 5.4. Phông chữ của người dùng (bản 0.15)

| Mục | Cách làm |
|---|---|
| Nạp phông | Người dùng chọn tệp .ttf hoặc .otf; tệp lưu trong bộ nhớ trình duyệt, không gửi đi đâu |
| Đọc phông | Cần thêm một thư viện đọc phông để lấy số đo chữ và dựng dữ liệu nhúng vào PDF |
| Kiểm tra đủ dấu | Trước khi dùng, kiểm tra phông có đủ 134 chữ cái tiếng Việt có dấu; thiếu chữ nào thì báo rõ |
| Mũi tên hướng nét | **Tắt**, vì đường đi của nét được làm riêng cho hình chữ của từng phông mẫu |
| Bộ vở làm sẵn | Không dùng phông của người dùng |

## 6. Hai cách dùng: tải vở làm sẵn và tự tạo vở

**Tải vở làm sẵn.** Bộ vở PDF đăng ở mục Releases, tên tệp theo mẫu `TapViet_<KieuChu>_<Kho>_v<phiên bản>.pdf`:

- 2 kiểu chữ × 5 khổ = 10 vở tập viết
- Trang ghi chép (dòng kẻ, kẻ chấm) cho cả 5 khổ
- Trang kiểm tra cho cả 5 khổ

Trang cuối mỗi vở có đường link (kèm mã QR) **Mở cấu hình này trong ứng dụng**, để ai muốn chỉnh thêm thì chuyển sang tự tạo vở.

**Tự tạo vở.** Màn Tạo vở cho chọn mọi mục trong `cfg`, có nút sao chép đường link để chia sẻ cấu hình.

**Cách tạo bộ vở làm sẵn:**

1. Danh sách cấu hình chuẩn nằm trong tệp `release/bo-chuan.json`.
2. GitHub Actions mở ứng dụng bằng Chrome chạy ngầm, gọi `exportPdf(cfg)` cho từng cấu hình rồi lưu tệp.
3. Đăng toàn bộ tệp lên Releases cùng số phiên bản.

Điều kiện: `exportPdf(cfg)` phải chạy được khi không mở giao diện.

## 7. Tổ chức mã nguồn (từ bản 0.11)

Đã tách ở bản 0.11. `src/app.html` là khuôn gộp: mỗi dòng `<!-- @include đường/dẫn -->` được thay bằng nguyên nội dung file đó, theo đúng thứ tự trong khuôn. Các file JavaScript vẫn dùng chung biến toàn cục như khi còn một file; sẽ gỡ dần ở các bước sau (trước tiên là `exportPdf(cfg)`).

```
src/
  app.html                 // khuôn gộp: phần đầu trang, khung giao diện, thứ tự các file
  version.js               // APP_VER, VERSION
  main.js                  // khởi động
  style/fonts.css          // phông nhúng cho màn hình
  style/app.css            // giao diện
  data/icons.js            // biểu tượng
  data/scripts-td.js       // giáo trình Thanh đậm
  data/scripts-qs.js       // giáo trình Nét đều
  data/scripts-th.js       // giáo trình Tiểu học (th)
  data/fonts.js            // số đo phông (FONTS)
  data/presets.js          // khổ trang theo mm (KHO_TRANG)
  data/pdff.js             // phông nhúng vào PDF (PDFF)
  engine/arrows.js         // mũi tên hướng viết, chấm đặt viết
  engine/script-select.js  // chọn kiểu chữ
  engine/storage.js        // lưu trữ, cài đặt
  engine/layout.js         // hình học chữ, bài ôn, phân trang
  engine/draw.js           // vẽ nền, dòng kẻ, chữ mẫu
  engine/th-render.js      // bộ vẽ chữ mẫu, dấu thanh và nối chữ cho kiểu Tiểu học
  engine/ink.js            // mực, lực nhấn S Pen, Gôm
  engine/audio.js          // âm thanh giấy
  engine/measure.js        // đo nét viết
  engine/pdf-export.js     // xuất vở PDF
  engine/pdf-writer.js     // ghi PDF vectơ, nhúng phông; nút "Tạo và tải file PDF"
  engine/export-pdf.js     // exportPdf(cfg): xuất vở PDF từ một gói cấu hình
  engine/cfg-link.js       // lưu và đọc cấu hình tập viết qua đường link
  ui/zoom-box.js           // hộp viết phóng to
  ui/split-view.js         // chia đôi màn hình máy tính bảng
  ui/name-lab.js           // luyện tên riêng, chữ ký
  ui/practice.js           // chế độ tập, phần đang tập
  ui/nav.js                // điều hướng trang
  ui/session.js            // buổi tập 15 phút, nhật ký, kiểm tra trên giấy, sao lưu
  ui/menu.js               // bảng chọn, cài đặt
  ui/slow-write.js         // sổ tay, Xem viết chậm, nhập môn
  ui/trace-quiz.js         // tự tô từng nét
  ui/pen.js                // viết S Pen, viết yêu thích, kiểm tra S Pen
  ui/float-bar.js          // bảng nổi
font/                      // font Sao Mai Tập Viết (.ttf nét liền, nét đứt), mau.html, README.md, OFL.txt
tools/build.js             // gộp src/ thành index.html (--check để kiểm)
tools/kiem-tieuhoc.js      // 13 phép kiểm dữ liệu, chữ hoa, bộ vẽ và độ mượt chỗ nối Sao Mai
tools/font/sinh-font.js    // sinh hai file font Sao Mai Tập Viết từ dữ liệu nét trong src/data/scripts-th.js
index.html                 // tệp phát hành, chạy được không cần mạng; không sửa tay
```

Sắp thêm: `release/bo-chuan.json` (bộ tập viết làm sẵn).

Người dùng vẫn nhận **một tệp HTML** như hiện nay.

## 8. Lộ trình

| Bản | Nội dung | Tiêu chí đạt |
|---|---|---|
| **0.11** | Tách mã thành nhiều tệp, có công cụ gộp | Tệp gộp chạy y như bản 0.10.3 |
| | `exportPdf(cfg)` không phụ thuộc biến chung | Xuất được PDF khi không mở giao diện |
| | Khổ trang tính theo mm, thêm Samsung Notes và tỷ lệ 9:16 | Thước 50 mm trong vở A4 in ra đo đúng ±0,5 mm |
| | Lưu và đọc cấu hình qua đường link | Mở link ra đúng cấu hình |
| | Màn Tạo vở mới, có ô tự gõ nội dung | Mọi mục của `cfg` đều chọn được |
| **0.12** *(đã xong)* | Ghép giáo trình Tiểu học vào ứng dụng, chọn ngang hàng Thanh đậm và Nét đều 10° | Tô theo nét đứt, xuất tập viết PDF 4 ô li đúng mm |
| | Xem viết chậm, Tự tô từng nét, cỡ Thường và cỡ Nhỏ, nối chữ cho Tiểu học | Chữ nối đúng mẫu; 1 ô li in ra đúng 2 mm |
| **0.13** *(đã xong)* | Chữ hoa Sao Mai Tập Viết (29 chữ hoa, 8 nét cơ bản, 16 bài mới, bước dòng 12 ô li) | Đủ bảng chữ hoa tiểu học, tô theo nét đứt, không cắt dấu |
| | Nối chữ mượt như viết tay, khoảng hở lia viết tùy cặp chữ, sửa dáng chữ thường và chữ hoa sát mẫu | 13/13 phép kiểm đạt, nét nối liền mạch |
| | Font Sao Mai Tập Viết (hai bản nét liền và nét đứt, giấy phép SIL OFL 1.1, Việt hóa đầy đủ) | Dùng được trong Word, LibreOffice, Canva; đủ 240 ký tự |
| | Thêm 13 khổ trang cho máy đọc sách (BOOX, Kindle Scribe, Supernote), máy tính bảng (iPad, Galaxy Tab) và giấy B5, Letter | Mở vừa màn hình giữ đúng 1 ô li = 2 mm |
| | Nút "Nhìn rồi tự viết" trong Xem viết chậm ở cả ba kiểu chữ | Ẩn chữ mẫu sau 2 giây để tự viết theo trí nhớ |
| **0.14** *(đã xong)* | Giao diện mới 4 khu (Luyện viết, Giáo trình, Tập viết PDF, Hồ sơ), thanh bên ẩn hiện được; bỏ hàng 3 thẻ cũ | Khu đang mở tô sáng; máy tính bảng/máy tính dùng thanh dọc, điện thoại dùng thanh dưới |
| | Không gian viết rộng tối đa: chế độ Toàn trang viết, gộp thanh công cụ viết vào thanh bên hoặc thanh nổi, bảng Xem dạng ngăn kéo (tự đóng khi đặt viết, ghim được) | Trang viết chiếm gần trọn bề ngang; chọn Tô/Chép tự ẩn bảng Xem |
| | Viết lại Gôm cho nhanh hơn, thêm kiểu Khoanh vùng, tùy chọn Gôm xong tự quay về viết và Xóa cả trang (dùng chung cả trong hộp viết phóng to) | Trang 400 nét, 240 điểm gôm giảm từ khoảng 24 giây xuống khoảng 30 mili giây |
| | Giáo trình, Hồ sơ, Tập viết PDF mở thành trang đầy đủ; xem trước trang PDF đầu tiên, nút tải PDF trên từng bài, danh sách khổ chia nhóm (BOOX 7" lên đầu nhóm Máy đọc sách) | Xem trước cập nhật theo mọi lựa chọn, xếp hàng không chạy chồng khi tạo PDF |
| | Bảo mật: kiểm đường link cấu hình, file sao lưu và dữ liệu trong máy; chuyển toàn bộ 148 thuộc tính `on…=` sang `data-action`/`HANH_DONG`; bật CSP bằng mã băm SHA-256 và kiểm tự động (`tools/kiem-hanh-dong.js`) | Trình duyệt chặn mã chèn qua link, sao lưu hay `onclick`; `kiem-hanh-dong.js` và `build.js --check` đạt |
| **0.15** | Vẽ thêm khuyết trên cho l, h, k ở chữ thanh đậm | Chữ mẫu đúng kiểu viết thanh đậm truyền thống |
| | Nạp font của người dùng (.ttf, .otf) | Font đủ dấu xuất tập viết PDF đúng; font thiếu dấu được báo |
| | Trang ghi chép (kẻ dòng, kẻ chấm, kiểu Cornell) | Đạt danh sách kiểm tra ở mục 10 trên các khổ chuẩn |
| | Trang kiểm tra; in 2 trang A5 trên 1 tờ A4; thử trên reMarkable, Boox, iPad | Đạt mục 10, cắt đôi đúng khổ A5 |
| **1.0** | GitHub tự tạo bộ vở làm sẵn, trang cuối có link và mã QR | Releases có đủ tệp, đúng tên |
| | Hướng dẫn dùng cho từng loại máy | |

## 9. Quy ước chung

1. **Không tự ý đổi cấu trúc dữ liệu** ở mục 5. Muốn đổi thì cập nhật tài liệu này trước.
2. **Chữ tiếng Việt:** có dấu đầy đủ; dùng từ thuần Việt, dễ hiểu; dấu thanh kiểu cũ (hòa, khỏe, thủy); viết tắt chuẩn.
3. **Số phiên bản** ghi ở `APP_VER`, `VERSION`, `README.md`, `CHANGELOG.md` và Releases; các chỗ này phải khớp nhau.
4. **Mỗi bản phát hành** đều ghi vào `CHANGELOG.md` bằng lời dễ hiểu với người dùng, không dùng thuật ngữ lập trình.
5. **Trước khi phát hành**, chạy lại các kiểm tra tự động: bút viết chậm tô đủ chữ, xuất vở PDF, mở ứng dụng không phát sinh lỗi.

## 10. Danh sách kiểm tra chất lượng vở PDF

| # | Hạng mục | Cách kiểm | Đạt khi |
|---|---|---|---|
| 1 | Khổ trang | Xem thuộc tính PDF | Đúng mm như bảng ở mục 5.2 |
| 2 | Kích thước thật | In A4 ở tỷ lệ 100%, đo thước 50 mm | 50 ± 0,5 mm |
| 3 | Dấu tiếng Việt | Xem các chữ ữ, ỷ, ặ, ộ, ờ ở mọi cỡ | Không mất dấu, dấu không chạm dòng kẻ phía trên |
| 4 | Chữ nối thanh đậm | So với màn hình ứng dụng | Giống nhau |
| 5 | Độ xám | Xem trang kiểm tra trên máy đọc sách | Thấy rõ ít nhất 4 trong 5 mức xám |
| 6 | Vùng thanh công cụ | Mở trên reMarkable, Boox | Thanh công cụ không che dòng viết |
| 7 | Mục lục | Chạm vào tên bài | Tới đúng trang (trừ khổ Samsung Notes) |
| 8 | Dung lượng | Xem kích thước tệp | Trọn bộ một kiểu chữ dưới 10 MB |
| 9 | Tên tệp | Xem tên | Đúng mẫu, có số phiên bản |
