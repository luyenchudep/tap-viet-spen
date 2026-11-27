/* ================== XUẤT VỞ PDF CHUẨN REMARKABLE & IN A4/A5 (100% OFFLINE) ================== */
/* Khổ trang lấy từ src/data/presets.js (tính bằng mm); đổi ra pt cho file PDF: 1 mm = 72/25,4 pt */
const MM_SANG_PT = 72 / 25.4;
function khoPdf(k) {
  return { name: k.ten, ptW: k.wMm * MM_SANG_PT, ptH: k.hMm * MM_SANG_PT, pxW: k.pxW, pxH: k.pxH, bar: k.barPx, mono: k.mono, links: k.links, desc: k.moTa, wMm: k.wMm, hMm: k.hMm };
}
/* Chia khổ trang thành nhóm cho màn Tạo tập viết PDF; khổ chưa xếp nhóm thì vào nhóm cuối */
const NHOM_KHO = [["Giấy in", ["a4", "a5", "b5", "letter"]], ["Máy đọc sách", ["rm2", "rmpp", "rmppm", "boox103", "boox133", "boox7", "scribe102", "scribe11", "manta", "nomad"]], ["Máy tính bảng", ["sn", "ipad11", "ipad13", "tab11", "tab146"]]];
function nhomKho() {
  const da = new Set(), kq = NHOM_KHO.map(([ten, ds]) => [ten, ds.filter(v => KHO_TRANG[v] && !da.has(v) && da.add(v))]);
  kq[kq.length - 1][1].push(...Object.keys(KHO_TRANG).filter(v => !da.has(v)));
  return kq.filter(([, ds]) => ds.length);
}
const PDF_PRESETS = Object.fromEntries(Object.entries(KHO_TRANG).map(([ma, k]) => [ma, khoPdf(k)]));
/* Khổ tự nhập: rộng × cao (mm), vẽ theo PX_MOI_MM */
function khoTuNhap(wMm, hMm) {
  const w = Number(wMm), h = Number(hMm);
  if (!(w >= 40 && w <= 500 && h >= 40 && h <= 500)) throw new Error("Khổ tự nhập phải từ 40 tới 500 mm mỗi chiều");
  return khoPdf({ ten: `Khổ ${w}×${h} mm`, wMm: w, hMm: h, pxW: Math.round(w * PX_MOI_MM), pxH: Math.round(h * PX_MOI_MM), barPx: 68, mono: false, links: true, moTa: `${w}×${h} mm · khổ tự nhập` });
}
const pdfOpt={preset:"rm2",wMm:null,hMm:null,scope:"cur",lessons:[],text:"",mode:"to",grid:null,barSide:"left",arrows:true,busy:false};
/* Khổ đang chọn ở màn Tạo tập viết PDF (kể cả khổ tự nhập) */
function khoDangChon(){return pdfOpt.preset==="tunhap"?khoTuNhap(pdfOpt.wMm,pdfOpt.hMm):PDF_PRESETS[pdfOpt.preset]}
const escHtml=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);

/* ================== MÀN TẠO TẬP VIẾT PDF ==================
   Chọn mọi mục của cấu hình vở (docs/KIEN_TRUC.md mục 5.3), rồi tạo PDF hoặc chép đường link.
   Mỗi lần đổi một lựa chọn, màn được vẽ lại từ pdfOpt; ô gõ chữ và ô nhập số ghi thẳng vào pdfOpt khi gõ. */
function nutChon(ds,dangChon,lenh){return ds.map(([v,t])=>`<button class="${dangChon===v?"on":""}" onclick="${lenh(v)};openPdfModal(true)">${t}</button>`).join("")}
function chonKhoTuNhap(){pdfOpt.preset="tunhap";if(!pdfOpt.wMm)pdfOpt.wMm=100;if(!pdfOpt.hMm)pdfOpt.hMm=150}
function datKhoTuNhap(truong,gt){pdfOpt[truong]=Number(gt);const o=document.getElementById("pdfKhoMoTa");if(o){try{const k=khoTuNhap(pdfOpt.wMm,pdfOpt.hMm);o.innerHTML=`<b>${k.name}:</b> ${k.desc}`}catch(e){o.textContent=e.message}}}
function chonBaiPdfUi(id,co){const s=new Set(pdfOpt.lessons);co?s.add(id):s.delete(id);pdfOpt.lessons=LESSONS.slice(0,NREAL).map(l=>l.id).filter(x=>s.has(x));const o=document.getElementById("pdfSoBai");if(o)o.textContent=`Đã chọn ${pdfOpt.lessons.length} bài`}
function datChuTuGo(gt){pdfOpt.text=gt.slice(0,TU_GO_TOI_DA);const o=document.getElementById("pdfSoChu");if(o)o.textContent=`${pdfOpt.text.length}/${TU_GO_TOI_DA} ký tự`}

function openPdfModal(keepScroll=false){
  if(pdfOpt.busy){toast("Đang tạo PDF — chờ xong rồi đổi tùy chọn");return}
  if(pdfOpt.grid===null)pdfOpt.grid=S.gridStyle||"french";
  const curL=LESSONS[cur.li];
  if(!pdfOpt.lessons.length&&cur.li<NREAL)pdfOpt.lessons=[curL.id];
  let pr=null,loiKho="";try{pr=khoDangChon()}catch(e){loiKho=e.message}
  const nd=pdfOpt.scope;
  const moTaNd=nd==="cur"?`Bài đang mở: <b>${escHtml(curL.t)}</b>`
    :nd==="pick"?`<span id="pdfSoBai">Đã chọn ${pdfOpt.lessons.length} bài</span>. Nhiều bài thì có trang mục lục.`
    :nd==="part"?`Cả <b>${escHtml(curL.part)}</b>, kèm trang mục lục.`
    :nd==="all"?`Cả giáo trình <b>${escHtml(SC.name)}</b>, kèm trang mục lục (nhiều trang, chờ lâu hơn).`
    :nd==="weak"?`Các chữ trong Luyện thêm (${WEAK.length||"chưa có, sẽ lấy Bài ôn"}).`
    :nd==="free"?"Nội dung Bài tự do hoặc Tên riêng đã lưu."
    :"Gõ hoặc dán nội dung cần tập, mỗi dòng một dòng tập.";
  const dsBai=nd!=="pick"?"":`<div class="pdfDsBai">${COURSE.map(p=>`<details${p.lessons.some(l=>pdfOpt.lessons.includes(l.id))?" open":""}><summary>${escHtml(p.part)}</summary>${p.lessons.map(l=>`<label class="pdfBai"><input type="checkbox" ${pdfOpt.lessons.includes(l.id)?"checked":""} onchange="chonBaiPdfUi('${l.id}',this.checked)"> ${escHtml(l.t)}</label>`).join("")}</details>`).join("")}</div>`;
  const oTuGo=nd!=="type"?"":`<textarea id="pdfText" class="pdfText" maxlength="${TU_GO_TOI_DA}" placeholder="VD: Học ăn, học nói, học gói, học mở." oninput="datChuTuGo(this.value)">${escHtml(pdfOpt.text)}</textarea><div class="prog" id="pdfSoChu" style="text-align:right">${pdfOpt.text.length}/${TU_GO_TOI_DA} ký tự</div>`;
  const oKho=pdfOpt.preset!=="tunhap"?"":`<div class="row"><span>Khổ tự nhập (mm)</span><div class="pdfKhoNhap"><input type="number" min="40" max="500" step="0.1" value="${pdfOpt.wMm}" oninput="datKhoTuNhap('wMm',this.value)" aria-label="Rộng (mm)"> × <input type="number" min="40" max="500" step="0.1" value="${pdfOpt.hMm}" oninput="datKhoTuNhap('hMm',this.value)" aria-label="Cao (mm)"></div></div>`;
  document.getElementById("genBox").innerHTML=`<h3>${ic("download")} Tạo tập viết PDF</h3>
  <div class="prog">Tạo tập viết PDF ngay trên máy, không cần mạng. Chọn nội dung và khổ giấy, rồi tạo file hoặc chép đường link để gửi cho người khác.</div>
  <div class="row"><span>Nội dung</span><div class="seg">${nutChon([["cur","Bài này"],["pick","Chọn bài"],["part","Cả phần"],["all","Cả giáo trình"],["weak","Luyện thêm"],["free","Bài tự do"],["type","Tự gõ"]],nd,v=>`pdfOpt.scope='${v}'`)}</div></div>
  <div class="prog" style="margin:4px 0 8px">${moTaNd}</div>${dsBai}${oTuGo}
  <div class="row"><span>Khổ giấy hoặc máy</span><select aria-label="Khổ giấy hoặc máy" style="flex:1;min-width:0;max-width:100%;padding:10px 12px;border-radius:12px;border:1px solid currentColor;background:transparent;color:inherit;font:inherit" onchange="if(this.value==='tunhap')chonKhoTuNhap();else pdfOpt.preset=this.value;openPdfModal(true)">${nhomKho().map(([ten,ds])=>`<optgroup label="${ten}">${ds.map(v=>`<option value="${v}"${pdfOpt.preset===v?" selected":""}>${escHtml(KHO_TRANG[v].ten)}</option>`).join("")}</optgroup>`).join("")}<optgroup label="Khác"><option value="tunhap"${pdfOpt.preset==="tunhap"?" selected":""}>Tự nhập kích thước (mm)</option></optgroup></select></div>
  ${oKho}<div class="prog" id="pdfKhoMoTa" style="margin:4px 0 8px">${pr?`<b>${escHtml(pr.name)}:</b> ${escHtml(pr.desc)}`:escHtml(loiKho)}</div>
  <div class="row"><span>Cách tập trên dòng</span><div class="seg">${nutChon([["to","② Tô"],["nho","③ Chép"]],pdfOpt.mode,v=>`pdfOpt.mode='${v}'`)}</div></div>
  ${SCRIPT==="th"?"":`<div class="row"><span>Kiểu dòng kẻ</span><div class="seg">${nutChon([["french","Lưới xiên Pháp"],["oly4","4 ô li Việt Nam"]],pdfOpt.grid,v=>`pdfOpt.grid='${v}'`)}</div></div>`}
  <div class="row"><span>Chừa lề thanh công cụ</span><div class="seg">${nutChon([["left","Lề trái (tay phải)"],["right","Lề phải (tay trái)"]],pdfOpt.barSide,v=>`pdfOpt.barSide='${v}'`)}</div></div>
  <div class="row"><span>Mũi tên thứ tự nét ở chữ mẫu</span><div class="seg">${nutChon([[true,"Bật"],[false,"Tắt"]],pdfOpt.arrows,v=>`pdfOpt.arrows=${v}`)}</div></div>
  <div id="pdfProg" class="prog" style="display:none;color:var(--accent);font-weight:700;margin-top:8px"></div>
  <button class="btn primary" id="pdfGoBtn" onclick="generateWorkbookPdf()">${ic("download")}Tạo và tải file PDF</button>
  <button class="btn ghost" onclick="chepLinkCfg()">Chép đường link cấu hình này</button>
  <button class="btn ghost" onclick="closeSheets()">Đóng</button>`;
  openSheet("gen",keepScroll);
}
