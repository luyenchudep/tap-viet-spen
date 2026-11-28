/* ================== VẼ CHỮ MẪU TIỂU HỌC TỪ ĐƯỜNG TÂM NÉT ==================
   Kiểu Tiểu học không dùng phông: chữ mẫu vẽ từ đường tâm nét trong SC.CHU (docs/KIEN_TRUC.md mục 5.1.1).
   Chữ có dấu thanh được ghép lúc vẽ: chữ gốc + một nét dấu trong SC.STROKES (dausac, dauhuyen, dauhoi, daunga, daunang).
   Bộ vẽ chỉ chạy khi SCRIPT === "th"; hai kiểu kia không đổi gì.

   Các chỗ nối vào app: text(), mw(), arrowsOnText(), drawBasic() trong draw.js và layout.js gọi các hàm ở đây
   khi phông là "TH". DUCTUS (mũi tên, chấm đặt viết, So sánh) được dựng từ CHU lúc khởi động. */

/* Phông giả "TH": đơn vị chữ = cỡ chữ (x = 1); phần trên đường chân 2,5 đơn vị, phần dưới 1,5 */
FONTS.TH = { x: 1, asc: 2.5, desc: 1.5, slant: 0, fam: "TH", wt: 500 };   // trùng đường kẻ 5 ô li trên, 3 ô li dưới (cỡ Thường)
const TH_LA = () => SCRIPT === "th";
const laPhongTH = fam => (fam || SC.font) === "TH";

const TH_KHOANG_CHU = 0.2;   // khoảng giữa hai chữ trong một tiếng khi lia viết (đơn vị chữ): hở nhẹ, khoảng 0,4 ô li ở cỡ Thường
const TH_KHOANG_TIENG = 0.8; // khoảng giữa hai tiếng: rộng bằng một chữ o
const TH_DY_NANG = -0.5;   // dời ô dấu nặng xuống nửa đơn vị: chấm nằm khoảng 0,25 dưới đường chân
const TH_DAU = { "́": "dausac", "̀": "dauhuyen", "̉": "dauhoi", "̃": "daunga", "̣": "daunang" };
/* Vị trí ngang của âm chính để đặt dấu thanh (đơn vị chữ, tính từ mép trái chữ) */
const TH_TAM_DAU = { a: .4, "ă": .4, "â": .4, e: .38, "ê": .36, i: .28, o: .4, "ô": .4, "ơ": .4, u: .57, "ư": .57, y: .57,
  A: 1.38, "Ă": 1.38, "Â": 1.38, E: 1, "Ê": 1, I: .55, O: 1, "Ô": 1, "Ơ": 1, U: 1.17, "Ư": 1.17, Y: 1.17 };

/* Dời một đường (danh sách lệnh M/L/C) đi (dx, dy) */
function thDoi(d, dx, dy) {
  return d.map(g => g[0] === "C" ? ["C", g[1] + dx, g[2] + dy, g[3] + dx, g[4] + dy, g[5] + dx, g[6] + dy] : [g[0], g[1] + dx, g[2] + dy]);
}
function thDinh(nets) { let t = 0; for (const n of nets) for (const g of n.d) for (let i = 2; i < g.length; i += 2) t = Math.max(t, g[i]); return t; }

/* Hình một chữ (đã ghép dấu thanh), tính theo đơn vị chữ, mép trái chữ ở x = 0. Không có hình thì trả null. */
const _thHinh = new Map();
function hinhChuTH(ch) {
  if (_thHinh.has(ch)) return _thHinh.get(ch);
  let kq = null;
  const tach = ch.normalize("NFD");
  let dau = null, goc = "", soDau = 0;
  for (const c of tach) { if (TH_DAU[c]) { dau = TH_DAU[c]; soDau++; } else goc += c; }
  goc = goc.normalize("NFC");
  /* Dấu thanh chỉ đặt trên nguyên âm, mỗi chữ một dấu */
  const mau = soDau > 1 || (dau && !/^[aăâeêioôơuưyAĂÂEÊIOÔƠUƯY]$/.test(goc)) ? null : SC.CHU && SC.CHU[goc];
  if (mau) {
    let nets = mau.cach[0].net.map(n => ({ d: n.d, dau: !!n.dau, lien: !!n.lien, loai: n.loai }));
    if (dau) {
      if (goc === "i" && dau !== "daunang") nets = nets.filter(n => n.loai !== "cham");   // ì, í, ỉ, ĩ: dấu thanh thay cho chấm; ị vẫn giữ chấm
      const nd = SC.STROKES[dau], tam = TH_TAM_DAU[goc] ?? mau.rong / 2;
      const dy = dau === "daunang" ? TH_DY_NANG : thDinh(nets) + 0.1;
      nets = nets.concat([{ d: thDoi(nd.d, tam - 0.25, dy), dau: true, lien: false, loai: dau }]);
    }
    kq = { rong: mau.rong, nets };
  }
  _thHinh.set(ch, kq);
  return kq;
}

/* Dàn một chuỗi: vị trí mép trái từng chữ (đơn vị chữ) và tổng bề rộng. Chữ chưa có hình được ghi vào TH_THIEU. */
const TH_THIEU = new Set();
const TH_DAU_CAU = ".,;:!?-–()\"'…";   // dấu câu: vẽ bằng phông giao diện, không có đường tâm nét
const TH_RONG_DAU_CAU = 0.35;
let _thBaoThieu = 0;
function baoThieuTH(ch) {
  if (TH_THIEU.has(ch)) return;
  TH_THIEU.add(ch);
  /* Báo một lần sau khi vẽ xong (không báo lúc đang xuất PDF chạy ngầm) */
  if (typeof toast === "function" && typeof document !== "undefined" && !(typeof exporting !== "undefined" && exporting)) {
    clearTimeout(_thBaoThieu);
    _thBaoThieu = setTimeout(() => toast(`Kiểu Sao Mai chưa có hình cho: ${[...TH_THIEU].join(" ")}. Các chữ này được bỏ qua.`), 400);
  }
}
/* ================== NỐI CHỮ TRONG MỘT TIẾNG ==================
   Dựa vào điểm dừng viết của chữ trước và điểm đặt viết của chữ sau:
   - Nối liền: chữ trước dừng ở bên phải, khoảng giữa thân chữ (sau nét móc ngược, nét thắt…), chữ sau bắt đầu ở bên trái
     (nét hất, nét móc xuôi, nét khuyết trên, chữ e, r, s…). Chữ sau được đặt sát lại; nếu hai điểm không trùng thì vẽ
     một nét nối cong mềm, tiếp tuyến với cuối nét trước và đầu nét sau.
   - Lia viết (hở nhẹ): chữ trước dừng trong lòng chữ hay dưới đường chân (o, ô, ơ, s, q…), hoặc chữ sau bắt đầu ở bên
     phải (nét cong kín như o, a, d, g, q; chữ c), hoặc có chữ số. Hai chữ cách nhau TH_KHOANG_CHU.
   Quy tắc đối chiếu với tài liệu dạy tập viết: phiếu nghiên cứu G-11 (ngoài repo). */
const TH_NOI_SAT = 0.02;     // hai điểm gần hơn mức này thì coi như liền, không vẽ nét nối
const TH_NOI_KHOANG = 0.14;  // khoảng ngang tối thiểu cho nét nối khi hai điểm chênh nhau
const thSo = ch => /^[0-9]$/.test(ch);
function thDonVi(v) { const l = Math.hypot(v[0], v[1]) || 1; return [v[0] / l, v[1] / l]; }
/* Điểm đặt viết, điểm dừng viết và hướng nét tại hai điểm đó (bỏ qua dấu phụ, dấu thanh) */
const _thDC = new Map();
function thDauCuoi(h) {
  if (_thDC.has(h)) return _thDC.get(h);
  /* Bỏ dấu phụ, dấu thanh và nét gạch ngang viết sau cùng (t, đ): điểm dừng viết của thân chữ ở cuối nét móc */
  let ns = h.nets.filter(n => !n.dau);
  if (ns.length > 1 && ns[ns.length - 1].loai === "ngang" && !ns[ns.length - 1].lien) ns = ns.slice(0, -1);
  const d0 = ns[0].d, dn = ns[ns.length - 1].d;
  const dat = [d0[0][1], d0[0][2]], g1 = d0[1];
  const tiep = g1 ? [g1[1], g1[2]] : [dat[0] + 1, dat[1]];
  const gl = dn[dn.length - 1], dung = [gl[gl.length - 2], gl[gl.length - 1]];
  let truoc;
  if (gl[0] === "C") truoc = [gl[3], gl[4]];
  else { const gp = dn[dn.length - 2]; truoc = gp ? [gp[gp.length - 2], gp[gp.length - 1]] : [dung[0] - 1, dung[1]]; }
  const kq = { dat, huongDat: thDonVi([tiep[0] - dat[0], tiep[1] - dat[1]]), dung, huongDung: thDonVi([dung[0] - truoc[0], dung[1] - truoc[1]]) };
  _thDC.set(h, kq);
  return kq;
}
/* Hai chữ có nối liền được không */
function thNoiDuoc(a, b) {
  if (thSo(a.ch) || thSo(b.ch)) return false;
  const A = thDauCuoi(a.h), B = thDauCuoi(b.h);
  const aRaPhai = A.dung[0] >= a.h.rong - 0.2 && A.dung[1] > 0.1 && A.dung[1] < 1.05;   // chữ trước dừng ở bên phải, quanh thân chữ (e, c, x dừng thấp vẫn nối được)
  const bVaoTrai = B.dat[0] <= 0.2 && B.dat[1] > 0.2 && B.dat[1] < 1.05;                // chữ sau bắt đầu ở bên trái, quanh thân chữ
  return aRaPhai && bVaoTrai;
}
/* Bản chữ bỏ nét hất mở đầu (dùng sau b, v dừng cao gần đường kẻ 3): nét kế tiếp thành nét đầu */
const _thBoHat = new Map();
function thBoHat(h) {
  if (_thBoHat.has(h)) return _thBoHat.get(h);
  let kq = h;
  if (h.nets.length > 1 && h.nets[0].loai === "hat" && h.nets[1].lien) kq = { rong: h.rong, nets: [{ ...h.nets[1], lien: false }].concat(h.nets.slice(2)) };
  _thBoHat.set(h, kq);
  return kq;
}
/* Nối mượt: cắt bỏ đoạn đầu (dài khoảng `dai`) của nét mở đầu chữ sau; nét nối sẽ thay đoạn này, nên chỗ nối liền một mạch.
   Đoạn đầu là phần đưa viết vào chữ: nét hất (i, u, t, r…), đoạn đưa lên trước vòng khuyết (b, h, k, l), đầu nét móc xuôi (m, n, v). */
const TH_CAT_DAU = { hat: 0.18, khuyettren: 0.3, mocxuoi: 0.2, mochaidau: 0.2 };
const thLerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
const _thCat = new Map();
function thCatDau(h) {
  if (_thCat.has(h)) return _thCat.get(h);
  let kq = h;
  const n0 = h.nets[0], d = n0.d, g = d[1], dai = TH_CAT_DAU[n0.loai] ?? 0.1;
  if (g && (g[0] === "C" || g[0] === "L")) {
    const P0 = [d[0][1], d[0][2]], P = g[0] === "C" ? [P0, [g[1], g[2]], [g[3], g[4]], [g[5], g[6]]] : null;
    const P3 = g[0] === "C" ? P[3] : [g[1], g[2]];
    const diem = u => P ? thLerp(thLerp(thLerp(P[0], P[1], u), thLerp(P[1], P[2], u), u), thLerp(thLerp(P[1], P[2], u), thLerp(P[2], P[3], u), u), u) : thLerp(P0, P3, u);
    let acc = 0, truoc = P0, u0 = null;
    for (let i = 1; i <= 60; i++) { const u = i / 60, q = diem(u); acc += Math.hypot(q[0] - truoc[0], q[1] - truoc[1]); truoc = q; if (acc >= dai) { u0 = u; break; } }
    if (u0 && u0 < 0.85) {
      let dau;
      if (P) {   /* chia đường cong bậc ba tại u0 (de Casteljau), lấy nửa sau */
        const p12 = thLerp(P[1], P[2], u0), p23 = thLerp(P[2], P[3], u0), p123 = thLerp(p12, p23, u0), q = diem(u0);
        dau = [["M", q[0], q[1]], ["C", p123[0], p123[1], p23[0], p23[1], P3[0], P3[1]]];
      } else { const q = diem(u0); dau = [["M", q[0], q[1]], ["L", P3[0], P3[1]]]; }
      kq = { rong: h.rong, nets: [{ ...n0, d: dau.concat(d.slice(2)) }].concat(h.nets.slice(1)) };
    }
  }
  _thCat.set(h, kq);
  return kq;
}
/* Nối mượt, phía chữ trước: cắt đoạn hất cuối của nét kết thúc (móc ngược hất thẳng lên nửa thân chữ) để nét nối
   bắt đầu từ đáy móc, vươn chéo một đường sang chữ sau như viết tay. Chữ dừng cao (b, v) và nét cong (c, e, x) giữ nguyên. */
const TH_CAT_CUOI = { mocnguoc: 0.26, mochaidau: 0.26, khuyetduoi: 0.16 };
const _thCatC = new Map();
function thCatCuoi(h) {
  if (_thCatC.has(h)) return _thCatC.get(h);
  let kq = h;
  let ns = h.nets.filter(n => !n.dau);
  if (ns.length > 1 && ns[ns.length - 1].loai === "ngang" && !ns[ns.length - 1].lien) ns = ns.slice(0, -1);
  const net = ns[ns.length - 1], dai = TH_CAT_CUOI[net.loai] || 0, d = net.d, g = d[d.length - 1], gt = d[d.length - 2];
  if (dai && g[0] === "C" && gt) {
    const P = [[gt[gt.length - 2], gt[gt.length - 1]], [g[1], g[2]], [g[3], g[4]], [g[5], g[6]]];
    const diem = u => thLerp(thLerp(thLerp(P[0], P[1], u), thLerp(P[1], P[2], u), u), thLerp(thLerp(P[1], P[2], u), thLerp(P[2], P[3], u), u), u);
    let acc = 0, sau = P[3], u0 = null;
    for (let i = 59; i >= 0; i--) { const u = i / 60, q = diem(u); acc += Math.hypot(q[0] - sau[0], q[1] - sau[1]); sau = q; if (acc >= dai) { u0 = u; break; } }
    if (u0 && u0 > 0.15) {   /* chia tại u0, giữ nửa đầu */
      const p01 = thLerp(P[0], P[1], u0), p12 = thLerp(P[1], P[2], u0), p012 = thLerp(p01, p12, u0), q = diem(u0);
      const moi = { ...net, d: d.slice(0, -1).concat([["C", p01[0], p01[1], p012[0], p012[1], q[0], q[1]]]) };
      kq = { rong: h.rong, nets: h.nets.map(n => n === net ? moi : n) };
    }
  }
  _thCatC.set(h, kq);
  return kq;
}
function danChuoiTH(s) {
  const o = [], noi = []; let x = 0, truoc = null;
  for (const ch of String(s ?? "").normalize("NFC")) {
    if (ch === "\r") continue;
    if (ch === " " || ch === "\u00A0" || ch === "\t" || ch === "\n") { x += TH_KHOANG_TIENG; truoc = null; continue; }
    if (TH_DAU_CAU.includes(ch)) { o.push({ ch, x, h: null, dauCau: true }); x += TH_RONG_DAU_CAU; truoc = null; continue; }
    const h = hinhChuTH(ch);
    if (!h) { baoThieuTH(ch); if (truoc) x += TH_KHOANG_CHU; truoc = null; continue; }
    const c = { ch, x, h };
    if (truoc) {
      if (thNoiDuoc(truoc, c)) {
        /* Chữ trước dừng cao (b, v) mà chữ sau mở đầu bằng nét hất (i, u, t…): bỏ nét hất, nối thẳng vào đỉnh nét kế tiếp */
        if (thDauCuoi(truoc.h).dung[1] > 0.75 && h.nets[0].loai === "hat") c.h = thBoHat(h);
        else c.h = thCatDau(h);
        if (thDauCuoi(truoc.h).dung[1] <= 0.75) truoc.h = thCatCuoi(truoc.h);
        const A = thDauCuoi(truoc.h), B = thDauCuoi(c.h);
        const pA = [truoc.x + A.dung[0], A.dung[1]], dy = B.dat[1] - A.dung[1];
        /* Khoảng ngang của nét nối: đủ để nét đi tới thoai thoải; nối xuống (b, v sang e, ê) rộng hơn */
        const khoang = Math.max(TH_NOI_KHOANG, Math.abs(dy) * (dy < 0 ? 0.7 : 0.6));
        c.x = pA[0] + khoang - B.dat[0];
        const pB = [c.x + B.dat[0], B.dat[1]], dai = Math.hypot(pB[0] - pA[0], pB[1] - pA[1]);
        if (dai > TH_NOI_SAT) {
          /* Nét nối: đường cong bậc ba, tiếp tuyến trùng hướng cuối nét trước và hướng đầu nét sau (không gãy góc).
             Tay đòn giới hạn theo khoảng ngang để nét nối luôn đi tới, không gập ngược */
          const k = Math.min(0.32, dai * 0.45, khoang / (Math.max(A.huongDung[0], 0) + Math.max(B.huongDat[0], 0) + 1e-6));
          noi.push({ d: [["M", pA[0], pA[1]], ["C", pA[0] + A.huongDung[0] * k, pA[1] + A.huongDung[1] * k, pB[0] - B.huongDat[0] * k, pB[1] - B.huongDat[1] * k, pB[0], pB[1]]] });
        }
      } else c.x = truoc.x + truoc.h.rong + TH_KHOANG_CHU;
    }
    o.push(c); x = c.x + c.h.rong; truoc = c;
  }
  return { chu: o, noi, rong: x };
}
function doRongTH(s) { return danChuoiTH(s).rong; }
/* Chữ ở vị trí xu (đơn vị chữ) trong chuỗi: hai chữ kề nhau trong một tiếng chia ranh ở giữa; ngoài chữ chừa 0,15 */
function chuTaiTH(s, xu) {
  const cs = danChuoiTH(s).chu.filter(c => !c.dauCau);
  for (let i = 0; i < cs.length; i++) {
    const c = cs[i], p = c.x + c.h.rong, t = cs[i - 1], n = cs[i + 1];
    const cungTieng = (a, b2) => b2.x - (a.x + a.h.rong) < TH_KHOANG_TIENG / 2;
    const trai = t && cungTieng(t, c) ? (t.x + t.h.rong + c.x) / 2 : c.x - 0.15;
    const phai = n && cungTieng(c, n) ? (p + n.x) / 2 : p + 0.15;
    if (xu >= trai && xu < phai) return c;
  }
  return null;
}

/* Vẽ một đường tâm nét lên ctx: gốc chữ ở (x0, b), mỗi đơn vị chữ = xh điểm ảnh, y hướng lên */
function veDuongTH(ctx, d, x0, b, xh) {
  ctx.beginPath();
  for (const g of d) {
    if (g[0] === "M") ctx.moveTo(x0 + g[1] * xh, b - g[2] * xh);
    else if (g[0] === "L") ctx.lineTo(x0 + g[1] * xh, b - g[2] * xh);
    else ctx.bezierCurveTo(x0 + g[1] * xh, b - g[2] * xh, x0 + g[3] * xh, b - g[4] * xh, x0 + g[5] * xh, b - g[6] * xh);
  }
  ctx.stroke();
}
const thNgan = d => d.length === 2 && d[1][0] === "L" && Math.hypot(d[1][1] - d[0][1], d[1][2] - d[0][2]) < .06;   // chấm (VD chấm chữ i)
/* Kiểu vẽ: nét liền cho chữ mẫu; nét đứt cho dòng Tô */
function datNetTH(ctx, xh, color, dut) {
  ctx.strokeStyle = color; ctx.lineCap = "round"; ctx.lineJoin = "round";
  ctx.lineWidth = dut ? Math.max(1.6, xh * .07) : Math.max(2, xh * .085);
  ctx.setLineDash(dut ? [Math.max(3, xh * .16), Math.max(3, xh * .12)] : []);
}
function veChuoiTH(ctx, s, x, b, xh, color, dut) {
  ctx.save(); datNetTH(ctx, xh, color, dut);
  const dan = danChuoiTH(s);
  for (const c of dan.chu) if (c.dauCau) {
    ctx.save(); ctx.setLineDash([]); ctx.fillStyle = color; ctx.font = `600 ${xh * .9}px 'QS',sans-serif`; ctx.textBaseline = "alphabetic"; ctx.fillText(c.ch, x + c.x * xh, b); ctx.restore();
  } else for (const n of c.h.nets) {
    if (dut && thNgan(n.d)) { ctx.setLineDash([]); veDuongTH(ctx, n.d, x + c.x * xh, b, xh); ctx.setLineDash([Math.max(3, xh * .16), Math.max(3, xh * .12)]); }
    else veDuongTH(ctx, n.d, x + c.x * xh, b, xh);
  }
  for (const n of dan.noi) veDuongTH(ctx, n.d, x, b, xh);
  ctx.restore();
}
/* Nét cơ bản; riêng dấu thanh khi tập riêng thì đặt ở chỗ dấu nằm trên chữ (cao hơn thân chữ), dấu nặng dưới đường chân */
function duongNetCoBanTH(kind) {
  const st = SC.STROKES[kind]; if (!st) return null;
  return st.dau ? thDoi(st.d, 0, kind === "daunang" ? TH_DY_NANG : 1.1) : st.d;
}
function veNetCoBanTH(ctx, kind, x, b, xh, color, dut) {
  const d = duongNetCoBanTH(kind); if (!d) return;
  ctx.save(); datNetTH(ctx, xh, color, dut); veDuongTH(ctx, d, x, b, xh); ctx.restore();
}
function muiTenChuoiTH(ctx, s, x, b, xh) {
  for (const c of danChuoiTH(s).chu) if (!c.dauCau && DUCTUS[c.ch]) drawGuide(ctx, c.ch, x + c.x * xh, b, xh, themeName() === "dark");
}

/* ================== LƯỚI 4 Ô LI CỦA TIỂU HỌC ==================
   1 ô li = thân chữ / CO (cỡ Thường: CO = 2, nửa thân chữ; cỡ Nhỏ: CO = 1, bằng thân chữ). Nhờ vậy ô li của hai cỡ
   bằng nhau, chữ cỡ Nhỏ bằng nửa chữ cỡ Thường, giống vở thật.
   Mỗi dòng tập chiếm: cỡ Thường 8 ô li (5 trên đường chân, 3 dưới), cỡ Nhỏ 4 ô li (2,5 trên, 1,5 dưới), các dòng nối liền nhau.
   Đường kẻ ngang đậm cách nhau 4 ô li (một dòng vở), đường chân chữ luôn là đường đậm. */
const TH_O_LI_MM = 2;   // 1 ô li in ra = 2 mm
function thCo(z) { return (SC.CO && SC.CO[z]) || 2; }
/* Cỡ của bài đang mở (dùng cho bảng Xem, Xem viết chậm, Tự tô); hai kiểu chữ kia trả undefined */
function thCoBaiDangMo() { return SCRIPT === "th" && typeof cur !== "undefined" && LESSONS[cur.li] ? thCo(LESSONS[cur.li].z) : undefined; }
/* Bài có chữ hoa: chữ hoa cao 5 ô li, dấu mũ và dấu thanh trên chữ hoa lên tới khoảng 7 ô li, G, Y xuống 3 ô li,
   nên mỗi dòng chừa 8 ô li trên đường chân (cỡ Nhỏ: 4) và 4 ô li dưới; bước dòng vẫn là bội của 4 ô li để đường chân luôn ở đường kẻ đậm */
function thDongOLi(co, hoa) { return hoa ? (co === 1 ? { tren: 4, cao: 8 } : { tren: 8, cao: 12 }) : co === 1 ? { tren: 2.5, cao: 4 } : { tren: 5, cao: 8 }; }
/* Bài (hay nội dung tự gõ) có chữ hoa không */
const thCoHoa = l => SCRIPT === "th" && !!l && (l.id === "free" ? [["pair", store.get("custom", "")]] : l.rows || []).some(r => typeof r[1] === "string" && /\p{Lu}/u.test(r[1]));
/* Tâm dải dòng tính từ đường chân lên (điểm ảnh): dùng để gán nét viết, chọn dòng; dòng thường của Tiểu học là 0,5 thân chữ */
const thTamDong = (up, unit, fs) => (2 * up * fs - unit) / 2;
/* Khoảng cách hai dòng tập và vị trí đường chân trong dòng, tính theo thân chữ (đơn vị chữ) */
function thBuocDong(co, hoa) { const d = thDongOLi(co, hoa); return { unit: d.cao / co, up: d.tren / co }; }
/* vien: { dau, cuoi } cho biết dòng này là dòng đầu hay dòng cuối của trang (khung đơn lẻ: cả hai). */
function guidesTH(ctx, b, m, gx0, gx1, vien) {
  const co = m.co || 2, ly = m.xh / co, d = thDongOLi(co, m.hoa), dau = !vien || vien.dau, cuoi = !vien || vien.cuoi;
  /* Cỡ Nhỏ: mép dòng rơi giữa ô li, nên ở mép trang thêm nửa ô li cho lưới đóng khung tròn ô */
  const them = co === 1 && !m.hoa ? 0.5 : 0;
  const top = b - (d.tren + (dau ? them : 0)) * ly, bot = b + (d.cao - d.tren + (cuoi ? them : 0)) * ly;
  const kMin = Math.ceil((b - bot) / ly - 1e-9), kMax = Math.floor((b - top) / ly + 1e-9) - (dau ? 0 : (Math.abs((b - top) / ly % 1) < 1e-9 ? 1 : 0));
  if (S.xBand && T.xBand) { ctx.fillStyle = T.xBand; ctx.fillRect(gx0, b - m.xh, gx1 - gx0, m.xh); }
  ctx.save(); ctx.setLineDash([]);
  ctx.strokeStyle = T.slant; ctx.lineWidth = 0.85; ctx.beginPath();
  for (let x = gx0; x <= gx1 + .01; x += ly) { ctx.moveTo(x, top); ctx.lineTo(x, bot); }
  for (let k = kMin; k <= kMax; k++) { if (k % 4 === 0) continue; const y = b - k * ly; ctx.moveTo(gx0, y); ctx.lineTo(gx1, y); }
  ctx.stroke();
  ctx.strokeStyle = T.asc; ctx.lineWidth = 1.05; ctx.beginPath();
  for (let x = gx0; x <= gx1 + .01; x += ly * 4) { ctx.moveTo(x, top); ctx.lineTo(x, bot); }
  ctx.stroke();
  ctx.strokeStyle = T.base; ctx.lineWidth = 1.6; ctx.beginPath();
  for (let k = kMin; k <= kMax; k++) { if (k % 4 !== 0) continue; const y = b - k * ly; ctx.moveTo(gx0, y); ctx.lineTo(gx1, y); }
  ctx.stroke(); ctx.restore();
}
/* Số đo chữ cho tập viết PDF: thân chữ tính từ mm thật (1 ô li = 2 mm), không theo cỡ màn hình */
function sizeForTHPdf(l, pxMoiMm) {
  const co = thCo(l.z), xh = TH_O_LI_MM * co * pxMoiMm, F = FONTS.TH;
  return { xh, fs: xh, asc: xh * F.asc, desc: xh * F.desc, tan: 0, fam: "TH", F, co, hoa: thCoHoa(l) };
}

/* DUCTUS cho Tiểu học: mỗi nét một lượt, lấy điểm cách đều dọc đường tâm nét (samplePath ở draw.js) */
function thLayDiem(d) {
  const p = samplePath(d), o = [p[0]]; let acc = 0;
  for (let i = 1; i < p.length; i++) { acc += Math.hypot(p[i][0] - p[i - 1][0], p[i][1] - p[i - 1][1]); if (acc >= .12 || i === p.length - 1) { o.push(p[i]); acc = 0; } }
  return o.map(([a, c]) => [Math.round(a * 1000) / 1000, Math.round(c * 1000) / 1000]);
}
function dungDuctusTH() {
  if (!TH_LA()) return;
  const them = (ch, nets) => { DUCTUS[ch] = nets.map(n => ({ r: [thLayDiem(n.d)], s: -1, ...(n.dau ? { mark: 1 } : {}) })); };
  const goc = Object.keys(SC.CHU);
  for (const c of goc) {
    them(c, hinhChuTH(c).nets);
    if (/^[aăâeêioôơuưyAĂÂEÊIOÔƠUƯY]$/.test(c)) for (const dau of Object.keys(TH_DAU)) { const ch = (c + dau).normalize("NFC"); const h = hinhChuTH(ch); if (h) them(ch, h.nets); }
  }
  for (const k of Object.keys(SC.STROKES)) DUCTUS["~" + k] = [{ r: [thLayDiem(duongNetCoBanTH(k))], s: -1 }];
}
dungDuctusTH();
