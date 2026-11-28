# Những thay đổi qua từng bản

## Bản 0.14.0 (28/11/2026): giao diện mới 4 khu, gôm nhanh và khoanh vùng, xem trước PDF, tăng cường bảo mật

Bản này làm mới toàn bộ giao diện thành 4 khu rõ ràng (**Luyện viết**, **Giáo trình**, **Tập viết PDF**, **Hồ sơ**) để dành tối đa chỗ cho trang viết, thêm chế độ **Toàn trang viết** và bảng **Xem** dạng ngăn kéo. Công cụ **Gôm** được viết lại cho nhanh hơn rõ rệt kèm kiểu xóa **Khoanh vùng**, màn **Tập viết PDF** có thêm khung xem trước trang và nút tải nhanh trên từng bài. Đồng thời, ứng dụng tăng cường nhiều lớp bảo mật cho đường link cấu hình, file sao lưu và dữ liệu lưu trên máy.

### Giao diện mới 4 khu và không gian viết rộng hơn

- **Thanh điều hướng 4 khu (Luyện viết, Giáo trình, Tập viết PDF, Hồ sơ):**
  - Trên máy tính bảng và máy tính, thanh nằm dọc bên trái (bên phải khi bật chế độ tay trái) và gộp chung 5 nút công cụ viết (**Trước**, **Viết**, **Gôm**, **Hoàn tác**, **Sau**) ở phía dưới thành một thanh duy nhất (màn hình thấp tự ẩn chữ, chỉ giữ biểu tượng). Nút `‹` ở đầu thanh giúp ẩn thanh bên cho trang viết rộng ra, kèm một nút nhỏ ở mép để hiện lại; ứng dụng nhớ trạng thái này cho lần mở sau. Khi thanh bên ẩn, 5 nút viết chuyển thành một thanh nhỏ nổi ở cạnh dưới trang.
  - Trên điện thoại dọc, thanh 4 khu nằm dưới cùng, hàng công cụ viết nằm ngay phía trên; các bảng mở ra nằm phía trên thanh 4 khu, không bị che.
  - Khu đang mở được tô sáng; đóng bảng thì tự quay về **Luyện viết**.
- **Chế độ Toàn trang viết** (nút bốn góc trên thanh đầu): ẩn thanh đầu, thanh bên và bảng Xem, chỉ giữ lại trang viết cùng thanh công cụ nổi ở cạnh dưới; có nút **Thoát** ở góc trên (bên phải, hoặc bên trái nếu bật chế độ tay trái).
- **Bảng Xem dạng ngăn kéo trên màn hình rộng:** mặc định ẩn để trang viết chiếm trọn bề ngang. Bấm **Xem** hoặc tiêu đề bài thì bảng trượt ra đè lên trang viết mà không làm trang hẹp lại; đặt viết xuống trang (kể cả trong hộp viết phóng to) là bảng tự đóng. Chọn **Tô** hoặc **Chép** thì bảng cũng tự ẩn. Có nút **Ghim** để giữ bảng nằm cố định cạnh trang mỗi khi mở (ứng dụng nhớ lựa chọn này). Thẻ Mục lục được bỏ khỏi bảng Xem vì danh sách bài nay nằm trong khu Giáo trình; trên điện thoại, bảng Xem vẫn mở như cũ.
- **Giáo trình và Hồ sơ mở thành trang đầy đủ** (không còn là bảng trượt từ dưới lên), canh giữa cho dễ đọc, cuối trang có nút **Về trang viết**:
  - **Giáo trình:** tập trung phần chọn kiểu chữ, tiến độ, **Buổi tập hôm nay**, hàng ô công cụ học (**Bài ôn**, **Luyện thêm**, **Bài tự do**, **Tên và chữ ký**, **Nhập môn**) và danh sách phần, bài học.
  - **Hồ sơ:** gồm tiến độ, **Nhật ký luyện chữ**, **Kiểm tra trên giấy** và các nhóm cài đặt (**Hiển thị**, **S Pen và thao tác**, **Dữ liệu**).
- *Lưu ý:* Hàng 3 thẻ cũ (Bài học, Công cụ, Cài đặt) được bỏ hẳn; bạn chuyển khu trực tiếp trên thanh 4 khu. Nút **☰** trên thanh đầu nay mở **Giáo trình**, còn các mục cài đặt, sao lưu và nhật ký nằm trong **Hồ sơ**.

### Gôm nhanh hơn và thêm kiểu Khoanh vùng

- **Gôm nhanh hơn rất nhiều:** thay vì dò lại toàn bộ nét và vẽ lại cả trang sau từng điểm chạm của S Pen (khoảng 240 điểm mỗi giây), ứng dụng gom các điểm gôm trong mỗi khung hình, bỏ qua nhanh các nét nằm ngoài vùng gôm rồi mới vẽ lại một lần; khi kéo nhanh cũng tự bù điểm giữa hai lần chạm để không sót đoạn. Đo trên trang 400 nét với 240 điểm gôm, thời gian giảm từ khoảng 24 giây xuống còn khoảng 30 mili giây.
- **Bảng Gôm** (chạm nút Gôm lần nữa khi đang dùng Gôm) có đủ **3 kiểu xóa**, kèm một dòng giải thích ngắn cho từng kiểu:
  - **Xóa từng đoạn:** đưa gôm tới đâu xóa tới đó.
  - **Xóa cả nét:** chạm vào nét nào là xóa trọn nét đó.
  - **Khoanh vùng** *(mới)*: vẽ một vòng nét đứt màu đỏ quanh chỗ cần xóa, nhấc viết là các nét nằm phần lớn trong vòng được xóa.
- Thêm tùy chọn **Gôm xong tự quay về viết** (Bật/Tắt, mặc định Tắt) và nút **Xóa cả trang** (vẫn hỏi xác nhận trước khi xóa).
- Nhấn giữ nút trên thân S Pen để gôm tạm vẫn chạy như cũ và nhanh hơn nhờ cách gôm mới. **Hộp viết phóng to** cũng dùng chung cách gôm mới, hỗ trợ cả **Khoanh vùng** và tùy chọn **Gôm xong tự quay về viết**.

### Tập viết PDF dạng trang đầy đủ và có xem trước

- **Khu Tập viết PDF mở thành trang đầy đủ**, bổ sung **khung xem trước trang nội dung đầu tiên** vẽ bằng chính bộ tạo PDF, ghi rõ khổ trang, tổng số trang và chú thích khi có mục lục. Khung xem trước tự cập nhật mỗi khi đổi lựa chọn, chọn bài, gõ chữ hay nhập khổ; màn hình rộng đặt xem trước bên phải, màn hình hẹp đặt phía trên.
- **Nút tải xuống trên từng bài** trong khu **Giáo trình**: bấm vào là mở thẳng trang **Tập viết PDF** của đúng bài đó mà không đổi bài bạn đang luyện.
- **Chọn khổ trang bằng danh sách thả xuống chia nhóm** (Giấy in, Máy đọc sách, Máy tính bảng, Khác), đưa **BOOX 7" (Go 7, Go Color 7)** lên đầu nhóm Máy đọc sách.
- Mở đường link cấu hình tập viết nay vào thẳng trang **Tập viết PDF** đầy đủ.

### Bảo mật đường link, file sao lưu và dữ liệu trong máy

- **Chính sách bảo mật nội dung:** trình duyệt chỉ cho chạy đúng mã gốc của ứng dụng (nhận diện bằng mã kiểm riêng khi đóng gói); mọi mã lạ chèn vào qua đường link, file sao lưu bị sửa hay đoạn mã gắn trong trang đều bị chặn. Ứng dụng cũng bị khóa không cho tải gì qua mạng, không nhúng khung ngoài và không gửi biểu mẫu.
- **Đường link cấu hình tập viết:** chỉ nhận các mục hợp lệ (kích thước tự nhập phải là số, danh sách bài chỉ nhận mã hợp lệ và bỏ trùng tối đa 200 bài, nội dung tự gõ chỉ nhận khi đúng chế độ tự gõ), giới hạn dung lượng sau khi giải nén (64 KB) để link nén không làm treo máy, và tránh tải lại trang lặp mãi nếu trình duyệt không cho lưu.
- **File sao lưu:** giới hạn dung lượng tối đa 80 MB, chỉ nhận các mục dữ liệu của ứng dụng, bỏ qua mục lạ hoặc hình nhật ký không đúng dạng; kiểm xong toàn bộ file mới ghi vào máy.
- **Dữ liệu lưu trong máy:** kiểm và ép đúng kiểu trước khi dùng (màu viết, cỡ nét, bán kính gôm, danh sách chữ cần luyện, buổi tập, ngày kiểm tra trên giấy) và lọc ký tự đặc biệt ở tên viết yêu thích, nhãn buổi tập và chú thích nhật ký.

### Sửa lỗi khác

- **Viết, gôm và lật trang:** chốt hết thao tác viết hoặc gôm đang dở trước khi lật trang, đổi bài hay đổi Tô/Chép (tránh phần gôm còn sót rơi sang trang mới); đang gôm bằng ngón tay mà chạm thêm ngón thứ hai để phóng to không còn xóa nhầm hay hỏng hoàn tác; Xóa từng đoạn chỉ sượt mép nét hoặc gôm vào chỗ trống không còn bị ghi thừa; Khoanh vùng nhẹ hơn với S Pen 240 Hz.
- **Bảng Xem và Toàn trang viết:** sửa lỗi bật Toàn trang viết hoặc đóng bảng Xem đang ghim có thể làm hỏng vùng viết; khi bảng Xem mở chỉ nút Xem sáng, không còn hai nút cùng sáng; lúc bảng Xem mở thì ẩn thanh công cụ nổi và nút mở thanh bên để khỏi che bảng (khi đang ghim thì vẫn giữ các nút này); tắt Chia đôi màn hình lúc bảng Xem đang mở thì bảng đóng hẳn.
- **Xem trước và tạo PDF:** xếp hàng lần lượt giữa xem trước và tạo file PDF thật để không chạy chồng làm hỏng file hoặc lệch cài đặt; đang tạo PDF thì không chuyển khu hay mở chồng bảng mới; xem trước không còn kẹt ở dòng "Đang dựng trang xem trước…", khi chọn nhiều bài chỉ dựng bài đầu và không làm mất mức phóng to của trang viết.
- **Hộp viết phóng to và các bảng:** dời thanh công cụ nổi lên trên hộp viết phóng to cho khỏi che chỗ viết; đang mở bảng thì thanh công cụ nổi và nút Thoát không đè lên bảng; đang mở Giáo trình, Hồ sơ hay Tập viết PDF thì tạm ẩn 5 nút viết trong thanh bên để khỏi lỡ tay lật trang bên dưới; mở Nhật ký từ Hồ sơ giữ khu Hồ sơ sáng; mở bảng khác vào chỗ trang Tập viết PDF không còn lộ khung hai cột trống; bảng chọn nhanh viết yêu thích và các bảng mở ra nằm đúng cạnh thanh bên.
- **Điện thoại, máy đọc sách và cài đặt:** sửa bố cục điện thoại xoay ngang (không còn hai thanh dọc chồng nhau, 4 khu và 5 nút viết vừa một cột, ô đo điểm không bị thanh nổi che) và chừa vùng tai thỏ, chia ô công cụ thành 2 cột trên điện thoại; trên máy đọc sách, khu đang chọn đảo màu rõ hơn và bỏ vạch đen ở mép trên trang; giảm tải khi đang Xem viết chậm hoặc Tự tô từng nét; giữ đúng góc vát tay trái −38° và trạng thái chưa chọn viết yêu thích sau khi tải lại.

## Bản 0.13.0 (29/11/2026): chữ hoa và font Sao Mai Tập Viết, nối chữ mượt, thêm 13 khổ máy

Kiểu chữ tiểu học từ bản này mang tên **Sao Mai Tập Viết** (nút chọn trong ứng dụng ghi **Sao Mai**), bổ sung đủ **29 chữ hoa** cùng giáo trình 16 bài mới, nối chữ mượt như viết tay, thêm **13 khổ trang** cho máy đọc sách và máy tính bảng, đồng thời phát hành kèm bộ **font Sao Mai Tập Viết** miễn phí để dùng trong Word và các phần mềm soạn thảo.

### Chữ hoa Sao Mai Tập Viết và 16 bài học mới

- **Đủ 29 chữ hoa** theo mẫu chữ viết trong trường tiểu học (`A Ă Â B C D Đ E Ê G H I K L M N O Ô Ơ P Q R S T U Ư V X Y`), cao 5 ô li (riêng *G, Y* có nét khuyết dưới kéo xuống thêm 3 ô li), tách đúng thứ tự nét như sách mẫu; kèm **8 nét cơ bản của chữ hoa** (nét lượn ngang, nét lượn dọc, nét cong trên, nét cong dưới, nét móc ngược trái, nét móc ngược lên, nét móc xuôi phải, nét móc hai đầu của chữ hoa).
- **Giáo trình Sao Mai Tập Viết tăng lên 48 bài, 11 phần** (tổng cộng 130 bài trên cả ba kiểu chữ), thêm 2 phần mới trước Bài tự do:
  - **Phần 9 · Chữ hoa (13 bài):** 1 bài luyện 8 nét cơ bản của chữ hoa và 12 bài dạy 29 chữ hoa theo thứ tự bảng chữ cái A → Y (chữ có dấu phụ học chung với chữ gốc). Mỗi bài có dòng tập chữ hoa, dòng tên riêng (VD *Cà Mau, Hà Nội*) và một câu ứng dụng tục ngữ, ca dao quen thuộc.
  - **Phần 10 · Chữ hoa cỡ Nhỏ (3 bài):** ôn chữ hoa cỡ Nhỏ kèm câu ứng dụng.
  - Mỗi bài đều có **Sổ tay** ghi điểm đặt viết, thứ tự nét, chỗ viết liền, chỗ lia viết, điểm dừng viết và lỗi hay gặp.
- **Dòng tập và khung hiển thị chừa đủ chỗ cho chữ hoa:** bài có chữ hoa tự tăng bước dòng lên **12 ô li** ở cỡ Thường (8 ô li trên đường chân, 4 ô li dưới) và **8 ô li** ở cỡ Nhỏ — áp dụng cả trên màn hình lẫn tập viết PDF — nên chữ hoa có dấu mũ kèm dấu thanh (VD *Ẩ, Ổ*) và nét khuyết dưới của *G, Y* không chạm dòng kế hay bị cắt. Đường chân vẫn nằm trên đường kẻ đậm như vở; bài chỉ có chữ thường giữ nguyên dòng cũ.
- **Dấu thanh trên chữ hoa** đặt đúng giữa nguyên âm, có đủ mũi tên, số thứ tự nét, **Xem viết chậm** và **Tự tô từng nét**. Nét viết của dấu trên chữ hoa được gán đúng dòng khi đổi cỡ hay qua trang, chấm điểm hình dáng tính đúng dòng. **Hộp viết phóng to** canh giữa dải dòng, không còn cắt dấu; **bảng Xem** tăng chiều cao dòng và tự thu nhỏ tên riêng dài cho vừa khung.
- **Dòng tập một chữ hoa chỉ lặp 4 chữ** để viết kỹ, đỡ mỏi tay.
- **Sửa dáng các chữ hoa sát mẫu:** *A, Ă, Â* đặt viết ở đường kẻ 3; gạch ngang của *Đ* nằm đúng đường kẻ 3; vòng xoắn đầu chữ *T* nhỏ gọn gần giữa; chân chữ *Q* võng xuống chạm đường chân rồi mới hất lên; vòng xoắn giữa thân *B, R* chạm vào thân nét 1.
- *Lưu ý:* Phần **Tự do** dời từ vị trí thứ 9 xuống cuối (Phần 11). Nội dung đã gõ ở Bài tự do vẫn còn nguyên; nếu trước đó đang mở Bài tự do ở kiểu Sao Mai thì lần mở tới ứng dụng sẽ vào bài đầu của phần Chữ hoa.

### Nối chữ mượt, chỉnh dáng chữ thường và đổi tên thành Sao Mai Tập Viết

- **Nối chữ mượt như viết tay:** khi hai chữ nối liền trong một tiếng, ứng dụng bỏ đoạn hất cuối của nét móc ở chữ trước và đoạn mở đầu thừa ở chữ sau (nét hất, đoạn đưa lên trước vòng khuyết, đầu nét móc xuôi), thay bằng một đường cong liền mạch, đúng hướng nét ở hai đầu và luôn đi tới. Các tiếng như *khế, tre, chim, tu, mẹ* viết liền một nhịp trên cả dòng mẫu, dòng Tô lẫn tập viết PDF.
- **Khoảng hở khi lia viết tùy cặp chữ:** đo giữa mép mực hai chữ theo tài liệu dạy tập viết — hai nét cong gặp nhau (*oa, oc, oo*) hở 0,25 thân chữ, các cặp còn lại (*on, no, ba, ca…*) hở 0,33 thân chữ, nhìn đều và thoáng hơn.
- **Sửa dáng nhiều chữ thường và chữ số sát mẫu tiểu học:** *t* bỏ chóp nhọn bên trái thân; *r, s* có vòng xoắn nhỏ ở đỉnh (*r* đặt viết ở đường kẻ 2); *e, ê* đặt viết gần đường chân tạo vòng khuyết kiểu viết tay; *k* có vòng xoắn nhỏ ở giữa thân; *b, h, k, l* đặt viết đúng đường kẻ 2; *u, ư, y* chạm thân rồi rê thẳng lên không còn chóp nhỏ; dấu râu của *ơ, ư* gắn vào lưng chữ, làm lớn và rõ hơn; gạch ngang của *đ* nằm đúng đường kẻ 4; chữ số *1, 4* đặt viết đúng đường kẻ.
- **Thêm `f, j, w, z` (thường và hoa), dấu câu và ký hiệu thường dùng** khi tự gõ ở kiểu Sao Mai.
- **Đổi tên kiểu chữ:** kiểu "Tiểu học" nay là **Sao Mai Tập Viết** (nút chọn trong Danh mục và khung chia đôi màn hình ghi **Sao Mai**). Bài đang học, tiến độ và đường link cấu hình đã chia sẻ trước đây không bị ảnh hưởng.

### Bộ font Sao Mai Tập Viết miễn phí (dùng trong Word, LibreOffice, Canva)

- Phát hành kèm **hai file font** trong thư mục `font/` và đính kèm ở mục **Releases**, lấy đúng hình chữ từ dữ liệu nét trong ứng dụng:
  - **Sao Mai Tap Viet** (`SaoMaiTapViet-Regular.ttf`, 86 KB): bản **nét liền**, dùng cho chữ mẫu, tiêu đề, dòng nhìn chép.
  - **Sao Mai Tap Viet Net Dut** (`SaoMaiTapVietNetDut-Regular.ttf`, 267 KB): bản **nét đứt**, dùng cho các dòng tô theo.
- **Việt hóa đầy đủ (240 ký tự mỗi bản):** đủ 29 chữ thường, 29 chữ hoa, 10 chữ số, toàn bộ nguyên âm có dấu thanh (thường và hoa), thêm `f, j, w, z` (thường và hoa), dấu câu và ký hiệu thường dùng. Khai báo hỗ trợ tiếng Việt với hệ điều hành (trang mã 1258) nên Word không tự đổi font ở chữ có dấu; hỗ trợ cả **Unicode dựng sẵn** lẫn **Unicode tổ hợp** (tự ghép 192 cụm chữ và dấu khi gõ bằng Unikey, EVKey hay bàn phím điện thoại).
- Kèm hướng dẫn cài đặt trên Windows, macOS, iPad, Android và cỡ chữ chuẩn để in ra 1 ô li = 2 mm trong Word (`35,4 pt` cỡ Thường, `17,7 pt` cỡ Nhỏ) tại `font/README.md`, trang xem mẫu và gõ thử trên nền 4 ô li `font/mau.html`, cùng toàn văn giấy phép mở **SIL Open Font License 1.1** (`font/OFL.txt` — dùng, chia sẻ, sửa và nhúng vào tài liệu miễn phí).

### Thêm 13 khổ máy đọc sách, máy tính bảng và cải tiến cách học

- **13 khổ trang mới cho tập viết PDF**, khớp kích thước thật của màn hình và khổ giấy phổ biến để khi mở vừa màn hình, 1 ô li vẫn là 2 mm:
  - *Máy đọc sách:* BOOX 10,3" (Go 10.3, Note Air), BOOX 13,3" (Note Max, Tab X C), BOOX 7" (Go 7, Go Color 7), Kindle Scribe 10,2" (2022, 2024), Kindle Scribe 11" (2025, Colorsoft), Supernote Manta, Supernote Nomad.
  - *Máy tính bảng:* iPad 11", iPad 13", Galaxy Tab 11" (Tab S9, S11), Galaxy Tab Ultra 14,6".
  - *Giấy in:* B5 (182×257 mm), Letter (215,9×279,4 mm).
- Màn **Tạo tập viết PDF** đổi phần chọn khổ thành **danh sách thả xuống chia theo nhóm** (Giấy in, Máy đọc sách, Máy tính bảng, Khác – Tự nhập) cho gọn và dễ dò. Các khổ cũ giữ nguyên mã nên đường link cấu hình đã chia sẻ trước đây vẫn mở đúng.
- **Nút "Nhìn rồi tự viết" trong Xem viết chậm** (có ở cả ba kiểu chữ): chữ mẫu chạy chậm như thường, giữ trên màn hình 2 giây kèm mũi tên rồi ẩn đi, chỉ còn lưới ô li để bạn tự viết theo trí nhớ ngay trên khung đó (có nút Xóa nét; bấm nút lần nữa để xem lại chữ mẫu).
- **Mục "Luyện thêm" khi chưa có chữ nào:** lời hướng dẫn hiện trong khung canh giữa trang cho dễ thấy.
- **Luyện tên riêng với kiểu Sao Mai:** dùng một dấu cách giữa các lần lặp tên thay vì ba dấu cách, tránh khoảng trống quá rộng.
- Hai kiểu **Thanh đậm** và **Nét đều 10°** giữ nguyên dòng tập và tập viết PDF; chỉ thêm nút "Nhìn rồi tự viết" và khung hướng dẫn Luyện thêm.

### Giới hạn hiện có

- **Font Sao Mai Tập Viết** hiện là **chữ rời**, chưa tự nối nét giữa các chữ cái trong cùng một tiếng. Khi cần chữ nối liền tự động và sẵn lưới 4 ô li, bạn dùng mục **Tạo tập viết PDF → Tự gõ** trong ứng dụng.
- **Chữ có dấu của ngôn ngữ khác** ngoài tiếng Việt và tiếng Anh (VD tiếng Pháp, tiếng Đức) chưa có trong font và kiểu Sao Mai; máy sẽ tự mượn font khác cho những ký tự này.
- **Xem viết chậm** và **mũi tên thứ tự nét** của kiểu Sao Mai hiện vẫn chạy theo từng chữ, chưa nối liền cả tiếng.

### Dành cho người góp mã

- Dữ liệu 29 chữ hoa, 8 nét cơ bản chữ hoa, ký tự `f, j, w, z`, dấu câu và 16 bài chữ hoa nằm ở `src/data/scripts-th.js`; phần nối chữ mượt, khoảng hở lia viết tùy cặp chữ và bước dòng cho chữ hoa nằm ở `src/engine/th-render.js` và bộ dàn trang.
- Thêm **công cụ sinh font** `tools/font/sinh-font.js` dựng hai file `.ttf` (nét liền và nét đứt) từ đường tâm nét trong `src/data/scripts-th.js` (dùng opentype.js và Clipper, cài riêng khi sinh font bằng `npm install --prefix tools/font` rồi chạy `node tools/font/sinh-font.js`; không thuộc ứng dụng).
- Bộ phép thử `node tools/kiem-tieuhoc.js` mở rộng từ 10 lên **13 phép kiểm** (thêm kiểm chữ hoa và dấu thanh trên chữ hoa, kiểm 16 bài chữ hoa cùng sổ tay, và kiểm độ mượt chỗ nối chữ).

## Bản 0.12.0 (27/11/2026): thêm kiểu chữ Tiểu học, lưới 4 ô li và nối chữ theo mẫu

Bản này bổ sung kiểu chữ thứ ba là **Tiểu học** — chữ viết thường đứng, nét đều theo mẫu chữ dạy ở trường tiểu học — đứng ngang hàng với **Thanh đậm** và **Nét đều 10°** ngay ở mục đổi kiểu chữ. Từ bản này, mọi người dùng đều mở được trực tiếp mà không cần đường link thử nghiệm.

### Giáo trình Tiểu học 32 bài, 9 phần

- Đủ **29 chữ thường**, **10 chữ số**, **5 dấu thanh** và **14 nét cơ bản**, chia làm 9 phần theo đúng trình tự học: Làm quen (1 bài), Nét cơ bản (5 bài), Chữ số (3 bài), Chữ thường (12 bài), Dấu thanh (2 bài), Ghép tiếng (3 bài), Từ ngữ (2 bài), Chuyển sang cỡ Nhỏ (3 bài) và Bài tự do (1 bài).
- Kèm phần **Nhập môn** (tư thế ngồi, cách cầm viết ba ngón tay, cách nhìn lưới 4 ô li, gợi ý đồng hành cho ba mẹ) và **Sổ tay** hướng dẫn điểm đặt viết, chiều đưa viết và lỗi hay gặp cho từng bài.
- **Bài ôn** của kiểu Tiểu học chỉ dùng chữ tiếng Việt.

### Lưới 4 ô li, cỡ Thường, cỡ Nhỏ và tập viết PDF đúng 2 mm mỗi ô li

- **Lưới 4 ô li riêng** cho Tiểu học: các dòng nối liền nhau như vở thật, đường chân luôn là đường kẻ đậm.
- Hỗ trợ cả **cỡ Thường** (thân chữ 2 ô li) và **cỡ Nhỏ** (thân chữ 1 ô li). Ô li của hai cỡ bằng nhau, chữ cỡ Nhỏ bằng nửa cỡ Thường để bé chuyển cỡ dễ dàng.
- Chữ mẫu vẽ trực tiếp từ đường tâm nét: dòng mẫu là nét liền, dòng **Tô** là nét đứt mờ dần đúng kiểu vở tiểu học.
- **Tập viết PDF** của Tiểu học là nét vectơ sắc nét (cả nét liền lẫn nét đứt), giữ đúng **1 ô li = 2 mm** ở mọi khổ giấy (A4, A5, Samsung Notes…).

### Nối chữ trong tiếng, Xem viết chậm và tiện ích dùng chung

- **Nối chữ trong một tiếng** theo mẫu chữ tiểu học: nối liền mạch từ điểm dừng của chữ trước qua chữ sau (VD: *in, mi, tu, đi, nhà, chim, mẹ*); nối gọn sau chữ *b, v* (*bi, bé, vịt, vẽ*); hoặc **lia viết** hở nhẹ khi gặp chữ bắt đầu bằng nét cong kín hay dừng trong lòng chữ (*ba, ca, on, su, ra*). Viết xong thân chữ cả tiếng mới đặt dấu phụ và dấu thanh; giữa hai tiếng chừa khoảng rộng bằng một chữ *o*.
- **Xem viết chậm**, **Tự tô từng nét**, **mũi tên thứ tự nét**, chấm đặt viết và sơ đồ thứ tự nét trong bảng Xem đều hoạt động với kiểu Tiểu học. **Hộp viết phóng to** tự chỉnh mức phóng để luôn chứa trọn chữ cao 5 ô li và đuôi chữ xuống 3 ô li.
- **Đường link cấu hình** mở đúng kiểu Tiểu học khi chia sẻ tập viết.
- **Tiến độ, nhật ký luyện chữ và file sao lưu** được lưu riêng cho từng kiểu chữ, không lẫn giữa Thanh đậm, Nét đều 10° và Tiểu học.
- Hai kiểu **Thanh đậm** và **Nét đều 10°** giữ nguyên không đổi; tập viết PDF của hai kiểu này ra giống hệt bản 0.11.0.

### Chưa có ở bản này

- Chưa có **chữ hoa** và các chữ **f, j, w, z**. Khi gõ hoặc dán gặp những chữ này, ứng dụng báo rõ và bỏ qua (chữ hoa Tiểu học dự kiến có ở bản 0.13).
- **Xem viết chậm** và **mũi tên thứ tự nét** hiện còn chạy theo từng chữ, chưa nối liền cả tiếng.

### Dành cho người góp mã

- Dữ liệu giáo trình và đường tâm nét của kiểu Tiểu học nằm ở `src/data/scripts-th.js`; bộ vẽ chữ mẫu, ghép dấu thanh và nối chữ nằm ở `src/engine/th-render.js`.
- Thêm bộ phép thử tự động `node tools/kiem-tieuhoc.js` (10 phép kiểm dữ liệu, bộ vẽ và nối chữ), chạy tự động trên GitHub Actions.

## Bản 0.11.0 (26/11/2026): tạo tập viết PDF linh hoạt hơn, chia sẻ cấu hình qua đường link

### Màn Tạo tập viết PDF mới và thêm khổ giấy

- Màn "Xuất tập viết PDF" được làm lại thành **Tạo tập viết PDF** (thẻ trong Danh mục cũng đổi tên theo). Mọi lựa chọn nay nằm gọn trên một màn, dễ xem và chỉnh hơn.
- Chọn nội dung tập viết theo 7 cách: Bài này, **Chọn bài** (mới: đánh dấu nhiều bài từ danh sách chia theo phần), Cả phần, **Cả giáo trình** (mới: gom cả bộ bài vào một file có mục lục; VD chữ thanh đậm ra 173 trang), Luyện thêm, Bài tự do, và **Tự gõ** (mới: gõ hoặc dán tối đa 2.000 ký tự, mỗi dòng thành một dòng tập, không ghi đè lên Bài tự do).
- Thêm ba khổ giấy mới: **Samsung Notes** (70×140 mm, mở file bằng Samsung Notes để viết bằng S Pen; trang mục lục vẫn có nhưng không chạm để chuyển trang được, vì Samsung Notes không mở liên kết khi đang viết), **reMarkable Paper Pro Move** (91,8×163,2 mm), và **Tự nhập** kích thước rộng × cao từ 40 tới 500 mm.
- Khổ giấy reMarkable 2 và reMarkable Paper Pro nay khớp đúng kích thước màn hình tính bằng mm (trước lệch vài phần mười mm). Với trang khổ nhỏ, ứng dụng tự thu nhỏ chữ tiêu đề và lề cho vừa.

### Chia sẻ cấu hình tập viết qua đường link

- Nút mới **Chép đường link cấu hình này** tạo một đường link mang theo toàn bộ lựa chọn của bạn: khổ giấy, bài tập, Tô hay Chép, dòng kẻ, mũi tên, lề, kể cả danh sách bài đã chọn hay nội dung **Tự gõ**.
- Người nhận chỉ cần mở đường link là có sẵn đúng bài, đúng lựa chọn (ứng dụng tự đổi sang chữ thanh đậm hay nét đều nếu cần), chỉ việc bấm tạo file là xong.
- Toàn bộ cấu hình nằm ngay trong đường link, không gửi lên máy chủ nào. Nếu máy không cho chép tự động, đường link sẽ hiện trong một ô để bạn tự chép.
- Khi đường link bị hỏng hoặc chép thiếu, ứng dụng báo rõ để bạn biết và vẫn mở bình thường.

### Dành cho người góp mã

- Mã nguồn được chia thành nhiều file nhỏ trong thư mục `src/`, kèm công cụ gộp lại thành một file `index.html` như cũ (xem mục "Sửa mã nguồn" trong `README.md`). Ứng dụng vẫn chạy y như trước; tập viết PDF từ các lựa chọn cũ ra giống hệt bản 0.10.4.

## Bản 0.10.4 (26/11/2026): nhấn vừa tay là ra nét đậm, học liền mạch hơn

### Viết nhẹ tay hơn, đỡ mòn ngòi S Pen

- Trước đây muốn có nét đậm phải đè S Pen gần hết lực, khác hẳn Samsung Notes. Viết lâu dễ mỏi tay, và Samsung cũng khuyên không nên ấn mạnh vì ngòi bút có thể bị biến dạng. Nay chỉ cần nhấn vừa tay là nét đã đậm đủ, còn nét đưa lên nhẹ tay vẫn mảnh như sợi chỉ.
- Phần chỉnh viết có thêm **Độ nhạy lực nhấn**: Nhẹ tay, Vừa (mặc định) và Mạnh tay.
- Nút mới **Đo lực tay của tôi**: bạn viết vài chữ bằng lực tay thoải mái, ứng dụng tự canh để lực đó ra vừa đủ nét đậm.
- Trang đã viết từ các bản trước vẫn giữ nguyên dáng nét.
- Sửa thêm vài lỗi nhỏ về lực nhấn: điểm S Pen báo lực bằng 0 không còn thành chấm mực đậm; rê viết chậm không còn làm mất chỗ chuyển từ nét mảnh sang nét đậm; nét vẽ trước khi bút tới (để đỡ trễ) nay đúng dáng ngòi vát; ô viết thử nhận lực giống hệt trang tập; góc nghiêng viết được tính đúng hơn khi cầm viết chéo.
- Bảng phân tích nét chỉ báo "gồng tay" khi bạn nhấn mạnh hơn mức cần để ra nét đậm.

### Học liền mạch hơn

- Xem mẫu một phần rồi bấm Tô hoặc Chép, ứng dụng đưa bạn tới đúng trang của phần vừa xem. Trước đây ứng dụng vẫn để bạn ở trang cũ, phải bấm Sau nhiều lần mới tới.
- Mở Xem khi đang tập giữa bài, bảng tự chạy đúng nét hoặc chữ của trang đang tập.
- Đổi qua lại giữa Tô và Chép vẫn ở đúng phần đang tập.
- Nút **Tô phần này** và **Chép** nằm ngay dưới khung chạy chữ mẫu.
- Mở lại một bài chưa xong từ Danh mục thì vào đúng chỗ đang tập dở.

### Từ ngữ gần gũi hơn

- Cách gọi được thống nhất trong toàn ứng dụng, ví dụ các loại viết nay là viết máy, viết gel, viết lông, viết chì; công cụ xóa là **Gôm**; file xuất ra là **tập viết PDF**.
- Lời trong bài và trong các thông báo được viết lại cho tự nhiên, dễ đọc hơn.
- Tên các bước học thống nhất là **Xem, Tô, Chép, Bài ôn**; phần chạy chữ mẫu gọi là **Xem viết chậm**.
- Truyện Kiều, tục ngữ và các câu tiếng Pháp giữ nguyên.

## Bản 0.10.3 (25/11/2026): viết êm tay hơn, bút viết chậm tô đủ nét

Bản này gộp luôn hai bản 0.10.1 và 0.10.2, vốn chưa đưa lên GitHub.

### Sửa các lỗi quan trọng

- Đang viết bằng S Pen mà lòng bàn tay tì xuống màn hình thì trước đây có thể xuất hiện một vạch lạ kéo vào nét, hoặc nét bị đứt khi nhấc tay. Lỗi này xảy ra cả khi đã bật **Chỉ nhận S Pen**. Giờ ứng dụng chỉ theo đúng cây bút đang viết, ở trang tập, hộp viết phóng to lẫn ô Tự tô từng nét.
- Hộp viết phóng to trước đây chỉ dùng được một góc nhỏ của khung. Nay hộp giãn hết khung và tự chỉnh lại khi xoay máy hay chia đôi màn hình.
- Tập cùng một bài trong cùng một ngày ở cả chữ thanh đậm lẫn chữ nét đều thì trang nhật ký của bên này đè lên bên kia. Nay mỗi kiểu chữ có trang nhật ký riêng.
- Đặt bút viết ngay lúc trang vừa mở có thể làm mất nét đã viết ở các trang khác của cùng bài. Nay nét viết trong lúc đó được giữ lại và gộp vào.
- Khôi phục từ tệp sao lưu xong, bài đang mở trên máy không còn ghi đè ngược lên dữ liệu vừa khôi phục.

### Bút viết chậm và thứ tự nét

- Bút viết chậm nay tô đủ cả chữ, phần nào hiện ra đúng lúc bút đi qua. Trước đây các nét mảnh của b, f, C, G, J, N, Q, S, Y… chỉ hiện ra khi đã viết xong.
- Nét móc được tách thành nét riêng, có số riêng: h, n, m, r, u ở chữ nét đều; m, n ở chữ thanh đậm. Ví dụ chữ h nét đều nay có 2 nét: nét sổ và nét móc.
- Chữ nét đều k, K, R có thêm nét riêng ở chỗ phải nhấc bút.
- Chữ nét đều E, F: viết nét sổ trước, rồi các nét ngang từ trái sang phải.
- Chữ thanh đậm I, J: vòng phía trên viết liền một nét, trước thân chữ. Chữ N hoa viết nét lượn trước tiên.
- Dấu râu của ơ, ư, Ơ, Ư (kể cả khi có thêm dấu thanh) nay viết từ trên xuống.
- Chấm i, chấm j, gạch t, gạch f, mũ và dấu sắc của ấ nay được nhận đúng là dấu phụ, nên không còn hiện chấm dừng bút thừa.

### Bài học

- Bài 10 của chữ thanh đậm đổi tên thành **Thân cao l h k, khuyết trên b f**. Lý do: chữ mẫu viết l, h, k bằng thân thẳng, chỉ b và f mới có khuyết. Tiến độ đã tập của bài này vẫn giữ nguyên.
- Lời trong giáo trình được sửa cho tự nhiên hơn, ví dụ: "Vị trí dấu" thành **Chỗ đặt dấu**, "Địa danh" thành **Tên đất**, "Chữ giản lược nét" thành **Chữ bớt nét**, "Câu ngắn song ngữ" thành **Câu ngắn Việt – Anh**, "giao nhau" thành **cắt nhau**.
- Sổ tay của ba bài ghi chép (Chia mục và nhấn ý, Viết tắt và ngày tháng, Biên bản và việc cần làm) được viết riêng cho từng bài, không còn chép lại sổ tay của bài trước.
- "200k" trong bài Số liệu đổi thành "200.000đ".

### Các sửa lỗi khác

- Bấm **Đạt** nhiều lần liền trên cùng một trang không còn đẩy lịch ôn lên tận 14–30 ngày.
- Chạm vào ô điểm hoặc tẩy vào chỗ trống không còn làm mất nút Làm lại.
- Xuất vở PDF: trong lúc đang tạo vở, các nút tùy chọn bị khóa, nên vở không còn bị lẫn hai kiểu. Mục Luyện thêm không còn bị lặp lại nhiều vòng trong vở.
- Lưu ảnh Kiểm tra trên giấy: nếu không lưu được thì ứng dụng báo rõ, thay vì vẫn báo đã lưu.
- Xoay máy khi bút còn đang chạm màn hình: nét được chốt lại, không còn bị lệch dòng.
- Bấm Xem hai lần liền không còn làm chồng hai hoạt hình lên nhau. Xoay máy khi đang Tự tô từng nét thì ô tô được vẽ lại cho khớp.
- Khi đang Tự tô từng nét mà để yên, ứng dụng không còn vẽ lại liên tục nữa, đỡ tốn pin. Nhật ký chỉ tải ảnh khi bạn cuộn tới.
- Màu giấy Đen trắng (dùng cho máy đọc sách): mũi tên, chấm đặt bút, đầu bút, khung hộp phóng to và phần chú giải đều chuyển sang màu đen cho dễ nhìn.
- Trên màu giấy Sáng, viền quanh số thứ tự nét không còn bị màu vàng kem.
- Ở các bài viết nhanh, chấm xanh đặt bút không còn lệch khỏi chữ mẫu, và Bài ôn không còn lẫn chữ của các bài này.
- Ở trang đầu của Bài ôn và Luyện thêm, nút Trước được làm mờ đúng như các bài khác.
- Buổi tập bỏ dở từ hôm trước tự kết thúc, không còn hiện kiểu "1440/15 phút".
- Tiếng giấy không còn kêu mãi sau khi chụm hai ngón để phóng to.
- Ô thử bút ở mục Kiểm tra cảm biến S Pen không còn hiện vạch nối lạ khi kéo bút ra ngoài ô.
- Sửa chữ trong giao diện: "đường cơ sở" thành **đường chân**, "Độ mượt vận động" thành **Độ mượt nét viết**, "Tách đôi màn hình" thành **Chia đôi màn hình**, và lời nhắc kiểm tra chữ trên giấy nay chỉ đúng đường vào **☰ → Công cụ → Kiểm tra trên giấy**.

### Còn hạn chế

- Bản này mới được kiểm tra tự động trên Chrome. Rất cần người thử trên máy thật, nhất là việc tì tay khi viết trên Galaxy S23, S24 Ultra và máy tính bảng.
- Vở PDF chưa có khổ cho Samsung Notes và reMarkable Paper Pro Move. Phần này dự kiến có ở bản 0.11.

## Bản 0.10.0 (24/11/2026): vở PDF sắc nét

### Có gì mới

- Vở PDF không còn là ảnh chụp từng trang. Đường kẻ, chữ mẫu, chấm đặt bút và mũi tên giờ đều là nét vẽ thật, phông chữ được nhúng kèm trong tệp.
- In ra giấy hay phóng to trên máy, nét vẫn sắc, không còn nhòe quanh các nét mảnh.
- Tệp nhẹ hơn hẳn: một phần vở 37 trang trước đây nặng khoảng 16 MB, nay chỉ còn khoảng 0,4 MB.
- Chọn, sao chép và tìm được chữ trong vở.
- Đổi tiêu đề trang thành "Tập viết chữ đẹp tiếng Việt bằng S Pen và bút cảm ứng" và thêm phần mô tả, để dễ tìm thấy trên Google. Khi gửi đường dẫn qua Zalo hay Facebook, tin nhắn sẽ hiện kèm ảnh giới thiệu.

### Sửa lỗi

- Trước đây, nếu đang để giao diện Tối mà xuất vở, các chấm số thứ tự nét trong vở bị dính nền tối. Giờ vở luôn in màu sáng.
- Hai phần của phông Quicksand trong ứng dụng vẫn còn mang tên gốc. Nay cả hai đã đổi thành TV Sans cho đúng giấy phép phông.

## Bản 0.9.0 (24/11/2026): bản thử nghiệm đầu tiên

Lần đầu đưa ứng dụng lên GitHub.

### Có gì trong bản này

- Hai bộ bài tập: chữ thanh đậm 45 bài, chữ nét đều 37 bài. Chữ cái tiếng Việt nào cũng có hướng dẫn thứ tự nét, kể cả chữ mang hai dấu chồng lên nhau.
- Các bước tập: xem mẫu, tự tô từng nét, tô theo chữ mờ dần, chép lại, rồi ôn theo lịch sau 1, 3, 7, 14 và 30 ngày.
- Bút viết chậm chạy đều tay, phía sau có bóng chữ mờ.
- Tự tô từng nét: ứng dụng xem chỗ đặt bút, hướng kéo và đường đi của từng nét.
- 6 loại bút, lưu được 4 cây bút hay dùng, chế độ Chỉ nhận S Pen, hộp viết phóng to tự dịch sang phải, chia đôi màn hình, chế độ tay trái và 4 màu giấy.
- Xuất vở PDF cho reMarkable, giấy A4 và sổ A5. Sao lưu và khôi phục bài viết.
- Ảnh chụp màn hình trong thư mục `anh/`.

### Còn hạn chế

- Mới kiểm tra tự động trên Chrome, chưa được nhiều người thử trên máy thật.
- Cách chấm điểm hình chữ và độ nhạy khi tự tô từng nét có thể còn phải chỉnh theo góp ý.
- Ở chữ nét đều, các nét ngắn như thân chữ "i" đang bị chấm hơi khắt khe.
