/*
  Sinh font Sao Mai Tập Viết từ dữ liệu đường tâm nét của kiểu chữ tiểu học (src/data/scripts-th.js).

  Cách chạy (từ thư mục gốc của repo):
    npm install --prefix tools/font
    node tools/font/sinh-font.js

  Kết quả: font/SaoMaiTapViet-Regular.ttf (nét liền) và font/SaoMaiTapVietNetDut-Regular.ttf (nét đứt để tô).
  Mỗi nét đường tâm được làm dày thành đường viền bo tròn hai đầu và chỗ gấp (thư viện Clipper), rồi gộp mọi nét của một chữ
  thành các đường viền không chồng nhau, để chữ hiện đều ở mọi cỡ, trên mọi máy.
  Chữ rời, chưa nối; dấu thanh ghép sẵn bằng chính hàm hinhChuTH của app.
*/
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const opentype = require('opentype.js');
const ClipperLib = require('clipper-lib');

const GOC = path.resolve(__dirname, '..', '..');
const doc = f => fs.readFileSync(path.join(GOC, f), 'utf8').replace(/\r\n/g, '\n');

/* ---------- Nạp dữ liệu và bộ ghép chữ của app ---------- */
const ctx = vm.createContext({ SCRIPTS: {}, FONTS: {}, SCRIPT: 'th', DUCTUS: {}, SC: null, drawGuide() {}, themeName() {}, traceColor() {}, samplePath() { return []; } });
vm.runInContext(doc('src/data/scripts-th.js'), ctx);
ctx.SC = ctx.SCRIPTS.th;
vm.runInContext(doc('src/engine/th-render.js').replace(/^dungDuctusTH\(\);?$/m, ''), ctx);
const hinh = ch => ctx.hinhChuTH(ch);

/* ---------- Thông số ---------- */
const EM = 1000, U = 320;                  // 1 đơn vị chữ (thân chữ thường) = 320 trên 1000
const BEN = 0.14;                          // lề trái, phải mỗi chữ (đơn vị chữ)
const PHIEN_BAN = '0.13';
const KIEU = {
  lien: { ten: 'Sao Mai Tap Viet', ps: 'SaoMaiTapViet', file: 'SaoMaiTapViet-Regular.ttf', day: 0.11 },
  dut:  { ten: 'Sao Mai Tap Viet Net Dut', ps: 'SaoMaiTapVietNetDut', file: 'SaoMaiTapVietNetDut-Regular.ttf', day: 0.085, net: 0.17, ho: 0.11 },
};

/* ---------- Làm phẳng đường tâm nét thành dãy điểm ---------- */
function lamPhang(d, buoc = 0.02) {
  const o = []; let p = null;
  for (const g of d) {
    if (g[0] === 'M') { p = [g[1], g[2]]; o.push(p); }
    else if (g[0] === 'L') { const q = [g[1], g[2]], n = Math.max(1, Math.ceil(Math.hypot(q[0] - p[0], q[1] - p[1]) / buoc)); for (let i = 1; i <= n; i++) o.push([p[0] + (q[0] - p[0]) * i / n, p[1] + (q[1] - p[1]) * i / n]); p = q; }
    else {
      const P = [p, [g[1], g[2]], [g[3], g[4]], [g[5], g[6]]];
      const dai = Math.hypot(P[1][0] - P[0][0], P[1][1] - P[0][1]) + Math.hypot(P[2][0] - P[1][0], P[2][1] - P[1][1]) + Math.hypot(P[3][0] - P[2][0], P[3][1] - P[2][1]);
      const n = Math.max(2, Math.ceil(dai / buoc));
      for (let i = 1; i <= n; i++) { const t = i / n, s = 1 - t; o.push([s * s * s * P[0][0] + 3 * s * s * t * P[1][0] + 3 * s * t * t * P[2][0] + t * t * t * P[3][0], s * s * s * P[0][1] + 3 * s * s * t * P[1][1] + 3 * s * t * t * P[2][1] + t * t * t * P[3][1]]); }
      p = P[3];
    }
  }
  /* bỏ điểm trùng */
  return o.filter((q, i) => i === 0 || Math.hypot(q[0] - o[i - 1][0], q[1] - o[i - 1][1]) > 1e-6);
}



/* Chia đoạn thành các nét đứt */
function catNetDut(pts, net, ho) {
  const o = []; let acc = 0, ve = true, cur = [pts[0]];
  for (let i = 1; i < pts.length; i++) {
    const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
    acc += l;
    if (ve) cur.push(pts[i]);
    if (acc >= (ve ? net : ho)) { if (ve) o.push(cur); ve = !ve; acc = 0; cur = [pts[i]]; }
  }
  if (ve && cur.length > 1) o.push(cur);
  return o;
}

/* ---------- Dựng một chữ ---------- */
const TL = 16;   // nhân tọa độ (đơn vị font) cho Clipper làm việc với số nguyên
function dungChu(ch, kieu) {
  const h = hinh(ch); if (!h) return null;
  return new opentype.Glyph({ name: 'u' + ch.codePointAt(0).toString(16).toUpperCase().padStart(4, '0'), unicode: ch.codePointAt(0), advanceWidth: Math.round((h.rong + 2 * BEN) * U), path: dungTuHinh(h, kieu) });
}
function dungTuHinh(h, kieu) {
  const X = v => Math.round((v + BEN) * U * TL), Y = v => Math.round(v * U * TL);
  const co = new ClipperLib.ClipperOffset(2, 0.25 * TL), sol = new ClipperLib.Paths();
  const them = (pts, day) => {
    const duong = pts.map(q => ({ X: X(q[0]), Y: Y(q[1]) }));
    co.AddPath(duong, ClipperLib.JoinType.jtRound, ClipperLib.EndType.etOpenRound);
    return day;
  };
  let banKinh = null;
  /* Nét liền và nét chấm (ngắn) dùng bề dày bản liền; bản nét đứt cắt từng nét thành đoạn ngắn */
  const ngan = pts => pts.length < 2 || (Math.hypot(pts[pts.length - 1][0] - pts[0][0], pts[pts.length - 1][1] - pts[0][1]) < 0.06 && pts.length < 8);
  const nhom = { [kieu.day]: [], [KIEU.lien.day]: [] };
  for (const n of h.nets) {
    const pts = lamPhang(n.d);
    if (kieu.net && !ngan(pts)) for (const d of catNetDut(pts, kieu.net, kieu.ho)) nhom[kieu.day].push(d);
    else nhom[kieu.net ? KIEU.lien.day : kieu.day].push(pts);
  }
  const ketQua = new ClipperLib.Paths(), c = new ClipperLib.Clipper();
  for (const [day, ds] of Object.entries(nhom)) {
    if (!ds.length) continue;
    co.Clear();
    for (const pts of ds) them(pts.length > 1 ? pts : [pts[0], [pts[0][0] + 1e-3, pts[0][1]]]);
    const o = new ClipperLib.Paths(); co.Execute(o, (+day / 2) * U * TL);
    c.AddPaths(o, ClipperLib.PolyType.ptSubject, true);
  }
  c.Execute(ClipperLib.ClipType.ctUnion, ketQua, ClipperLib.PolyFillType.pftNonZero, ClipperLib.PolyFillType.pftNonZero);
  const gon = ClipperLib.Clipper.CleanPolygons(ketQua, 0.6 * TL);
  const p = new opentype.Path();
  for (const vong of gon) {
    if (vong.length < 3) continue;
    /* TrueType: đường viền ngoài theo chiều kim đồng hồ (Clipper cho ngược lại), nên đảo mọi vòng */
    const v = vong.slice().reverse();
    v.forEach((q, i) => i ? p.lineTo(Math.round(q.X / TL), Math.round(q.Y / TL)) : p.moveTo(Math.round(q.X / TL), Math.round(q.Y / TL)));
    p.close();
  }
  return p;
}

/* ---------- Bảng chữ ---------- */
const THUONG = [...'aăâbcdđeêghiklmnoôơpqrstuưvxy'], HOA = [...'AĂÂBCDĐEÊGHIKLMNOÔƠPQRSTUƯVXY'], SO = [...'0123456789'];
const DAU = ['́', '̀', '̉', '̃', '̣'];
const NGUYEN_AM = [...'aăâeêioôơuưyAĂÂEÊIOÔƠUƯY'];
const DS = [...new Set([...THUONG, ...HOA, ...SO, ...Object.keys(ctx.SC.CHU), ...NGUYEN_AM.flatMap(v => DAU.map(d => (v + d).normalize('NFC')))])];
/* Dấu tổ hợp (gõ kiểu "Unicode tổ hợp": chữ và dấu là hai ký tự). Hình dấu dùng khi không ghép được; bình thường bảng ghép (ccmp) thay cả cụm bằng chữ dựng sẵn. */
const DAU_TO_HOP = { '\u0300': 'dauhuyen', '\u0301': 'dausac', '\u0303': 'daunga', '\u0309': 'dauhoi', '\u0323': 'daunang', '\u0302': 'mu', '\u0306': 'trang', '\u031B': 'rau' };
const MU = { '\u0302': { a: 'â', e: 'ê', o: 'ô', A: 'Â', E: 'Ê', O: 'Ô' }, '\u0306': { a: 'ă', A: 'Ă' }, '\u031B': { o: 'ơ', u: 'ư', O: 'Ơ', U: 'Ư' } };

function dungDauToHop(ma, kieu) {
  /* Lấy nét dấu từ chữ mẫu: dấu thanh trên chữ a (dấu nặng dưới), dấu mũ của â, dấu trăng của ă, dấu râu của ơ; dời về giữa chữ, độ rộng 0 */
  const mau = { dauhuyen: 'à', dausac: 'á', daunga: 'ã', dauhoi: 'ả', daunang: 'ạ', mu: 'â', trang: 'ă', rau: 'ơ' }[DAU_TO_HOP[ma]];
  const h = hinh(mau); if (!h) return null;
  const nets = h.nets.filter(n => n.dau);
  const tam = h.rong / 2;
  const tam2 = { rong: 0, nets: nets.map(n => ({ ...n, d: n.d.map(g => g.map((v, i) => i && i % 2 === 1 ? v - tam - BEN - 0.4 : v)) })) };
  const g = dungTuHinh(tam2, kieu);
  return new opentype.Glyph({ name: 'uni' + ma.codePointAt(0).toString(16).toUpperCase().padStart(4, '0'), unicode: ma.codePointAt(0), advanceWidth: 0, path: g });
}
function taoFont(kieu) {
  const glyphs = [
    new opentype.Glyph({ name: '.notdef', unicode: 0, advanceWidth: Math.round(0.8 * U), path: new opentype.Path() }),
    new opentype.Glyph({ name: 'space', unicode: 32, advanceWidth: Math.round(0.8 * U), path: new opentype.Path() }),
    new opentype.Glyph({ name: 'uni00A0', unicode: 0xA0, advanceWidth: Math.round(0.8 * U), path: new opentype.Path() }),
  ];
  const thieu = [];
  for (const ch of DS) { const g = dungChu(ch, kieu); if (g) glyphs.push(g); else thieu.push(ch); }
  for (const ma of Object.keys(DAU_TO_HOP)) { const g = dungDauToHop(ma, kieu); if (g) glyphs.push(g); }
  const font = new opentype.Font({
    familyName: kieu.ten, styleName: 'Regular', unitsPerEm: EM,
    ascender: Math.round(3.75 * U), descender: -Math.round(1.6 * U),
    designer: 'The Sao Mai Tap Viet Project Authors', designerURL: 'https://luyenchudep.github.io',
    manufacturer: 'The Sao Mai Tap Viet Project Authors', manufacturerURL: 'https://luyenchudep.github.io',
    license: 'This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://openfontlicense.org',
    licenseURL: 'https://openfontlicense.org',
    version: PHIEN_BAN,
    description: 'Chữ viết tiểu học theo mẫu Quyết định 31/2002/QĐ-BGD&ĐT, dựng từ dữ liệu nét của ứng dụng Tập viết (luyenchudep.github.io).',
    copyright: 'Copyright 2026 The Sao Mai Tap Viet Project Authors (https://luyenchudep.github.io)',
    glyphs,
  });
  font.names.windows = font.names.windows || {};
  font.tables.os2 = Object.assign(font.tables.os2 || {}, { sxHeight: U, sCapHeight: Math.round(2.5 * U), ulCodePageRange1: (1 << 0) | (1 << 8), ulCodePageRange2: 0 });
  /* Bảng ghép (ccmp): chữ + dấu tổ hợp → chữ dựng sẵn, để văn bản gõ kiểu tổ hợp vẫn hiện đúng */
  const so = ch => glyphs.findIndex(g => g.unicode === ch.codePointAt(0));
  let soGhep = 0;
  const ghep = (thanhPhan, kq) => { const ds = thanhPhan.map(so), d = so(kq); if (ds.every(i => i > 0) && d > 0) { font.substitution.add('ccmp', { sub: ds, by: d }); soGhep++; } };
  for (const [maMu, bang] of Object.entries(MU)) for (const [goc, co] of Object.entries(bang)) {
    ghep([goc, maMu], co);
    for (const dt of DAU) ghep([goc, maMu, dt], (co + dt).normalize('NFC'));
  }
  for (const v of NGUYEN_AM) for (const dt of DAU) ghep([v, dt], (v + dt).normalize('NFC'));
  glyphs.soGhep = soGhep;
  const ra = path.join(GOC, 'font', kieu.file);
  fs.mkdirSync(path.dirname(ra), { recursive: true });
  fs.writeFileSync(ra, Buffer.from(font.toArrayBuffer()));
  return { file: kieu.file, soChu: glyphs.length - 3, soGhep: glyphs.soGhep, thieu, kb: Math.round(fs.statSync(ra).size / 1024) };
}

for (const k of Object.values(KIEU)) {
  const kq = taoFont(k);
  console.log(`Đã tạo font/${kq.file}: ${kq.soChu} ký tự, ${kq.soGhep} cụm ghép dấu, ${kq.kb} KB${kq.thieu.length ? ', thiếu: ' + kq.thieu.join(' ') : ''}`);
}
