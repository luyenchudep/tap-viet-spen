/* Giáo trình Sao Mai Tập Viết (th, chữ tiểu học): mẫu chữ viết trong trường tiểu học, Quyết định 31/2002/QĐ-BGD&ĐT, chữ đứng nét đều.
   Cấu trúc: docs/KIEN_TRUC.md mục 5.1.1. Tọa độ nét theo đơn vị chữ (1 = chiều cao chữ o, y lên trên, y = 0 là đường chân).
   Bài ghép tiếng, từ ngữ và cỡ Nhỏ (th-g*, th-v*, th-nh*) hiện từ khi có nối chữ (bản 0.12): TH_DU_BAI = true. */
const TH_DU_BAI = true;
SCRIPTS.th = {
  "name": "Sao Mai Tập Viết",
  "font": "TH",
  "XH": {"thuong":26,"nho":13},
  "nmTitle": "Nhập môn · Sao Mai Tập Viết (chữ tiểu học)",
  "pen": {"pressure":false,"width":2.6,"contrast":"med","color":"k"},
  "chuan": "Mẫu chữ viết trong trường tiểu học (Quyết định 31/2002/QĐ-BGD&ĐT), kiểu chữ đứng, nét đều",
  "CO": {"thuong":2,"nho":1},
  "CAO": {
    "b": 2.5,
    "g": 2.5,
    "h": 2.5,
    "k": 2.5,
    "l": 2.5,
    "y": 2.5,
    "t": 1.5,
    "r": 1.25,
    "s": 1.25,
    "d": 2,
    "đ": 2,
    "p": 2,
    "q": 2,
    "so": 2,
    "khac": 1
  },
  "COURSE": [
    {
      "part": "Phần 1 · Làm quen",
      "lessons": [
        {
          "id": "th-lq1",
          "t": "Ngồi ngay ngắn, làm quen 4 ô li",
          "z": "thuong",
          "note": "Ngồi thẳng lưng, cầm viết bằng ba ngón tay. Đặt viết đúng chấm xanh, dừng ở chấm đỏ.",
          "rows": [["stroke","ngang"],["stroke","so"],["blank",12]]
        }
      ]
    },
    {
      "part": "Phần 2 · Nét cơ bản",
      "lessons": [
        {
          "id": "th-n1",
          "t": "Nét ngang, nét sổ thẳng",
          "z": "thuong",
          "note": "Nét ngang kéo từ trái qua phải. Nét sổ kéo thẳng từ trên xuống, chạm đường chân.",
          "rows": [["stroke","ngang"],["stroke","so"],["stroke","ngang"],["blank",12]]
        },
        {
          "id": "th-n2",
          "t": "Nét xiên trái, nét xiên phải, nét hất",
          "z": "thuong",
          "note": "Hai nét xiên kéo từ trên xuống. Nét hất đưa nhẹ từ dưới lên, hơi chếch qua phải.",
          "rows": [["stroke","xientrai"],["stroke","xienphai"],["stroke","hat"],["blank",12]]
        },
        {
          "id": "th-n3",
          "t": "Nét móc xuôi, móc ngược, móc hai đầu",
          "z": "thuong",
          "note": "Đầu móc uốn tròn, thân nét kéo thẳng theo đường kẻ dọc.",
          "rows": [["stroke","mocxuoi"],["stroke","mocnguoc"],["stroke","mochaidau"],["blank",12]]
        },
        {
          "id": "th-n4",
          "t": "Nét cong hở phải, cong hở trái, cong kín",
          "z": "thuong",
          "note": "Cong hở phải và cong kín đi ngược chiều kim đồng hồ. Cong hở trái đi theo chiều kim đồng hồ.",
          "rows": [["stroke","conghophai"],["stroke","conghotrai"],["stroke","congkin"],["blank",12]]
        },
        {
          "id": "th-n5",
          "t": "Nét khuyết trên, khuyết dưới, nét thắt",
          "z": "thuong",
          "note": "Nét khuyết cao 5 ô li. Hai nét giao nhau đúng đường kẻ. Nét thắt là một vòng nhỏ, gọn.",
          "rows": [["stroke","khuyettren"],["stroke","khuyetduoi"],["stroke","that"],["blank",12]]
        }
      ]
    },
    {
      "part": "Phần 3 · Chữ số",
      "lessons": [
        {
          "id": "th-s1",
          "t": "Chữ số 1, 4, 7",
          "z": "thuong",
          "note": "Chữ số cao 4 ô li. Kéo nét thẳng, nét xiên thật rõ.",
          "rows": [["rep","1"],["rep","4"],["rep","7"],["pair","14 47 71"],["blank",12]]
        },
        {
          "id": "th-s2",
          "t": "Chữ số 2, 3, 5",
          "z": "thuong",
          "note": "Uốn phần cong cho tròn, không kéo rộng ra ngoài 2 ô li.",
          "rows": [["rep","2"],["rep","3"],["rep","5"],["pair","23 35 52"],["blank",12]]
        },
        {
          "id": "th-s3",
          "t": "Chữ số 0, 6, 8, 9",
          "z": "thuong",
          "note": "Số 0 tròn như chữ o nhưng cao gấp đôi. Vòng cong của 6, 8, 9 khép kín, gọn.",
          "rows": [["rep","0"],["rep","6"],["rep","8"],["rep","9"],["pair","06 68 89 90"]]
        }
      ]
    },
    {
      "part": "Phần 4 · Chữ thường",
      "lessons": [
        {
          "id": "th-c1",
          "t": "Nhóm nét móc: i, t",
          "z": "thuong",
          "note": "Chữ i cao 2 ô li, chữ t cao 3 ô li. Viết xong thân chữ mới chấm i, gạch ngang t.",
          "rows": [["rep","i"],["rep","t"],["pair","ti it"],["blank",12]]
        },
        {
          "id": "th-c2",
          "t": "Nhóm nét móc: u, ư",
          "z": "thuong",
          "note": "Chữ u có hai nét móc ngược. Chữ ư thêm dấu râu, viết từ trên xuống.",
          "rows": [["rep","u"],["rep","ư"],["pair","tu tư ui"],["blank",12]]
        },
        {
          "id": "th-c3",
          "t": "Nhóm nét móc: n, m, p",
          "z": "thuong",
          "note": "Ba chữ cùng kết thúc bằng nét móc hai đầu. Nét sổ của p kéo xuống dưới đường chân 2 ô li.",
          "rows": [["rep","n"],["rep","m"],["rep","p"],["pair","in im pin mi"],["blank",12]]
        },
        {
          "id": "th-c4",
          "t": "Nhóm nét cong kín: o, ô, ơ",
          "z": "thuong",
          "note": "Nét cong kín tròn đều như quả trứng. Dấu mũ cân giữa, dấu râu viết từ trên xuống.",
          "rows": [["rep","o"],["rep","ô"],["rep","ơ"],["pair","to tô tơ no"],["blank",12]]
        },
        {
          "id": "th-c5",
          "t": "Nhóm nét cong kín: a, ă, â",
          "z": "thuong",
          "note": "Viết nét cong kín, rồi lia viết lên viết nét móc ngược sát bên phải.",
          "rows": [["rep","a"],["rep","ă"],["rep","â"],["pair","ma na ăn ân"],["blank",12]]
        },
        {
          "id": "th-c6",
          "t": "Nhóm nét cong kín: d, đ, q",
          "z": "thuong",
          "note": "Ba chữ cao 4 ô li: d, đ vươn lên trên, q kéo xuống dưới đường chân.",
          "rows": [["rep","d"],["rep","đ"],["rep","q"],["pair","da đa đi qua"],["blank",12]]
        },
        {
          "id": "th-c7",
          "t": "Nhóm nét cong hở: c, x",
          "z": "thuong",
          "note": "Chữ c cong mở qua phải. Chữ x gồm hai nét cong tựa lưng vào nhau.",
          "rows": [["rep","c"],["rep","x"],["pair","ca co xa xu"],["blank",12]]
        },
        {
          "id": "th-c8",
          "t": "Nhóm nét cong hở: e, ê",
          "z": "thuong",
          "note": "Đặt viết dưới đường kẻ 2 một chút, đưa lên tạo vòng nhỏ rồi uốn cong xuống. Chữ ê thêm dấu mũ.",
          "rows": [["rep","e"],["rep","ê"],["pair","me em đê xe"],["blank",12]]
        },
        {
          "id": "th-c9",
          "t": "Nhóm nét khuyết: l, b",
          "z": "thuong",
          "note": "Nét khuyết trên cao 5 ô li. Chữ b kết thúc bằng một nét thắt nhỏ.",
          "rows": [["rep","l"],["rep","b"],["pair","la lê ba bê"],["blank",12]]
        },
        {
          "id": "th-c10",
          "t": "Nhóm nét khuyết: h, k",
          "z": "thuong",
          "note": "Viết nét khuyết trên tới đường chân, rê viết ngược lên rồi mới viết tiếp: h có nét móc hai đầu, k có nét thắt giữa.",
          "rows": [["rep","h"],["rep","k"],["pair","ha hô ke ki"],["blank",12]]
        },
        {
          "id": "th-c11",
          "t": "Nhóm nét khuyết: y, g",
          "z": "thuong",
          "note": "Nét khuyết dưới kéo xuống 3 ô li dưới đường chân rồi vòng lên. Giữ vòng khuyết thon, gọn.",
          "rows": [["rep","y"],["rep","g"],["pair","ly my ga go"],["blank",12]]
        },
        {
          "id": "th-c12",
          "t": "Nhóm nét thắt: v, r, s",
          "z": "thuong",
          "note": "Chữ v cao 2 ô li. Chữ r, s cao hơn một chút, 2 ô li rưỡi. Vòng thắt nhỏ, gọn.",
          "rows": [["rep","v"],["rep","r"],["rep","s"],["pair","ve ra sa su"],["blank",12]]
        }
      ]
    },
    {
      "part": "Phần 5 · Dấu thanh",
      "lessons": [
        {
          "id": "th-d1",
          "t": "Dấu sắc, dấu huyền",
          "z": "thuong",
          "note": "Viết xong cả tiếng rồi mới đặt dấu, ngay trên âm chính. Dấu nằm gọn trong 1 ô li.",
          "rows": [["stroke","dausac"],["stroke","dauhuyen"],["rep","á à ó ò"],["pair","cá cà lá là ba bà"],["blank",12]]
        },
        {
          "id": "th-d2",
          "t": "Dấu hỏi, dấu ngã, dấu nặng",
          "z": "thuong",
          "note": "Dấu hỏi, dấu ngã đặt trên âm chính. Dấu nặng là một chấm nhỏ ngay dưới âm chính.",
          "rows": [["stroke","dauhoi"],["stroke","daunga"],["stroke","daunang"],["rep","ỏ õ ọ"],["pair","cỏ cọ vẽ võ mẹ bé"],["blank",12]]
        }
      ]
    },
    {
      "part": "Phần 6 · Ghép tiếng",
      "lessons": [
        {
          "id": "th-g1",
          "t": "Nối chữ liền mạch",
          "z": "thuong",
          "note": "Từ điểm dừng của chữ trước, đưa viết liền qua chữ sau, không nhấc viết.",
          "rows": [["pair","ba be bi bê"],["pair","ma me mi mơ"],["pair","la le li na"],["blank",12]]
        },
        {
          "id": "th-g2",
          "t": "Nối với chữ có nét cong",
          "z": "thuong",
          "note": "Gặp chữ bắt đầu bằng nét cong kín như o, a, d, q thì lia viết qua phải một chút rồi mới vòng nét cong.",
          "rows": [["pair","ca co cô cơ"],["pair","bo bó cò đỏ"],["pair","hòa khỏe thủy"],["blank",12]]
        },
        {
          "id": "th-g3",
          "t": "Chữ ghép và vần đơn giản",
          "z": "thuong",
          "note": "Các chữ trong một tiếng viết liền, gọn. Giữa hai tiếng chừa một khoảng rộng bằng một chữ o.",
          "rows": [["pair","cha nhà thỏ phở"],["pair","khế tre ngà ghế"],["pair","bàn mận chim vịt"],["blank",12]]
        }
      ]
    },
    {
      "part": "Phần 7 · Từ ngữ",
      "lessons": [
        {
          "id": "th-v1",
          "t": "Từ hai tiếng",
          "z": "thuong",
          "note": "Sau mỗi tiếng, chừa một khoảng rộng bằng một chữ o.",
          "rows": [["pair","ông bà ba mẹ"],["pair","con cá con mèo"],["pair","hoa hồng đèn bàn"],["blank",12]]
        },
        {
          "id": "th-v2",
          "t": "Cụm từ ba tiếng",
          "z": "thuong",
          "note": "Viết đều tay từ đầu tới cuối dòng. Viết xong từng tiếng rồi mới đặt dấu thanh.",
          "rows": [["pair","bé đi học"],["pair","mẹ nấu cơm"],["pair","bà kể chuyện"],["blank",12]]
        }
      ]
    },
    {
      "part": "Phần 8 · Chuyển sang cỡ Nhỏ",
      "lessons": [
        {
          "id": "th-nh1",
          "t": "Cỡ Nhỏ: chữ cao 1 tới 2 ô li",
          "z": "nho",
          "note": "Từ bài này, thân chữ cao 1 ô li. Chữ t cao 1 ô li rưỡi; d, đ, p, q cao 2 ô li. Viết chậm lại một chút.",
          "rows": [["pair","i u ư t n m p"],["pair","o ô ơ a ă â"],["pair","d đ q c x e ê"],["blank",12]]
        },
        {
          "id": "th-nh2",
          "t": "Cỡ Nhỏ: nét khuyết, nét thắt, chữ số",
          "z": "nho",
          "note": "Chữ l, b, h, k, y, g cao 2 ô li rưỡi. Chữ số cao 2 ô li. Giữ vòng khuyết thon, gọn.",
          "rows": [["pair","l b h k y g"],["pair","v r s"],["pair","0 1 2 3 4 5 6 7 8 9"],["blank",12]]
        },
        {
          "id": "th-nh3",
          "t": "Cỡ Nhỏ: tập chép từ ngữ",
          "z": "nho",
          "note": "Giữ chữ thẳng hàng, khoảng cách giữa hai tiếng đều nhau. Viết cỡ Nhỏ giỏi lắm rồi đó nha!",
          "rows": [["pair","con rùa quyển vở"],["pair","xe đạp cái bàn"],["pair","bé đi học"],["blank",12]]
        }
      ]
    },
    {
      "part": "Phần 9 · Chữ hoa",
      "lessons": [
        {
          "id": "th-h0",
          "t": "Nét cơ bản chữ hoa",
          "z": "thuong",
          "note": "Thân chữ hoa cỡ Thường cao 5 ô li. Tập 8 nét mềm trong khung 5 ô li trước khi ghép chữ, đưa viết nhẹ và đều tay.",
          "rows": [["stroke","luonngang"],["stroke","luondoc"],["stroke","congtren"],["stroke","congduoi"],["stroke","mocnguoctrai"],["stroke","mocnguoclen"],["stroke","mocxuoiphai"],["stroke","mochaidauhoa"],["blank",12]]
        },
        {
          "id": "th-h1",
          "t": "Chữ hoa: A, Ă, Â",
          "z": "thuong",
          "note": "Chữ A cao 5 ô li, viết nét móc ngược lên trước rồi đổi chiều kéo xuống. Xong thân chữ mới viết dấu của Ă, Â.",
          "rows": [["rep","A"],["rep","Ă"],["rep","Â"],["pair","An Ăn Ân Âu Cơ"],["pair","Ăn quả nhớ kẻ trồng cây."],["blank",12]]
        },
        {
          "id": "th-h2",
          "t": "Chữ hoa: B, C",
          "z": "thuong",
          "note": "Chữ B gồm 2 nét, có vòng xoắn nhỏ giữa thân. Chữ C viết liền 1 nét, uốn tròn vòng xoắn lớn trên đầu.",
          "rows": [["rep","B"],["rep","C"],["pair","Ba Bình Cà Mau"],["pair","Có công mài sắt, có ngày nên kim."],["blank",12]]
        },
        {
          "id": "th-h3",
          "t": "Chữ hoa: D, Đ",
          "z": "thuong",
          "note": "Chữ D viết liền 1 nét với vòng xoắn nhỏ ở chân chữ. Chữ Đ thêm nét ngang ngắn trên đường kẻ 3 cắt qua thân dọc.",
          "rows": [["rep","D"],["rep","Đ"],["pair","Duy Dung Đà Lạt"],["pair","Đi một ngày đàng, học một sàng khôn."],["blank",12]]
        },
        {
          "id": "th-h4",
          "t": "Chữ hoa: E, Ê",
          "z": "thuong",
          "note": "Chữ E viết liền 1 nét, có vòng xoắn lớn trên đầu và vòng xoắn nhỏ giữa thân. Chữ Ê thêm dấu mũ canh giữa.",
          "rows": [["rep","E"],["rep","Ê"],["pair","Em bé Ê Đê"],["pair","Em chăm chỉ tập viết mỗi ngày."],["blank",12]]
        },
        {
          "id": "th-h5",
          "t": "Chữ hoa: G, H",
          "z": "thuong",
          "note": "Chữ G cao 8 ô li, kéo khuyết dưới 3 ô li dưới đường chân. Chữ H cao 5 ô li, giữ hai nét khuyết thon gọn.",
          "rows": [["rep","G"],["rep","H"],["pair","Gia Lai Hà Nội"],["pair","Gần mực thì đen, gần đèn thì rạng."],["blank",12]]
        },
        {
          "id": "th-h6",
          "t": "Chữ hoa: I, K, L",
          "z": "thuong",
          "note": "Chữ I và K dùng chung hai nét đầu. Chữ L viết liền 1 nét, uốn mềm vòng xoắn trên đầu và ở chân chữ.",
          "rows": [["rep","I"],["rep","K"],["rep","L"],["pair","Ích Kiên Lan"],["pair","Lá lành đùm lá rách."],["blank",12]]
        },
        {
          "id": "th-h7",
          "t": "Chữ hoa: M, N",
          "z": "thuong",
          "note": "Chữ M và N cùng bắt đầu ở đường kẻ 2, viết liền tay qua các điểm đổi chiều gập góc.",
          "rows": [["rep","M"],["rep","N"],["pair","Mai Nam Nghệ An"],["pair","Một cây làm chẳng nên non."],["blank",12]]
        },
        {
          "id": "th-h8",
          "t": "Chữ hoa: O, Ô, Ơ",
          "z": "thuong",
          "note": "Ba chữ dùng chung nét cong kín cao 5 ô li, cuối nét lượn sâu vào trong bụng chữ. Dấu mũ Ô và dấu râu Ơ thật gọn.",
          "rows": [["rep","O"],["rep","Ô"],["rep","Ơ"],["pair","Oanh Ông Ơn"],["pair","Ở hiền gặp lành."],["blank",12]]
        },
        {
          "id": "th-h9",
          "t": "Chữ hoa: P, Q, R",
          "z": "thuong",
          "note": "Chữ P và R chung nét móc ngược trái và nét cong trên. Chữ Q giống chữ O thêm nét lượn ngang mềm ở chân chữ.",
          "rows": [["rep","P"],["rep","Q"],["rep","R"],["pair","Phú Quý Rạch Giá"],["pair","Quê em có dòng sông xanh mát."],["blank",12]]
        },
        {
          "id": "th-h10",
          "t": "Chữ hoa: S, T",
          "z": "thuong",
          "note": "Chữ S và T đều viết liền 1 nét, có vòng xoắn ở đầu chữ và phần cuối uốn cong vào trong.",
          "rows": [["rep","S"],["rep","T"],["pair","Sa Pa Tây Ninh"],["pair","Thương người như thể thương thân."],["blank",12]]
        },
        {
          "id": "th-h11",
          "t": "Chữ hoa: U, Ư",
          "z": "thuong",
          "note": "Viết nét móc hai đầu rồi rê viết thẳng lên đường kẻ 6 mới kéo xuống. Chữ Ư thêm dấu râu nhỏ từ trên xuống.",
          "rows": [["rep","U"],["rep","Ư"],["pair","Uyên Ứng Hòa"],["pair","Uống nước nhớ nguồn."],["blank",12]]
        },
        {
          "id": "th-h12",
          "t": "Chữ hoa: V, X, Y",
          "z": "thuong",
          "note": "Chữ V và X cao 5 ô li, viết liền mạch. Chữ Y cao 8 ô li, kéo khuyết dưới 3 ô li dưới đường chân. Sắp xong hết bảng chữ hoa rồi đó nha!",
          "rows": [["rep","V"],["rep","X"],["rep","Y"],["pair","Vân Xuân Yên Bái"],["pair","Xuân về, trăm hoa đua nở."],["blank",12]]
        }
      ]
    },
    {
      "part": "Phần 10 · Chữ hoa cỡ Nhỏ",
      "lessons": [
        {
          "id": "th-hnh1",
          "t": "Cỡ Nhỏ: Chữ hoa A tới H và câu ứng dụng",
          "z": "nho",
          "note": "Chữ hoa cỡ Nhỏ cao 2 ô li rưỡi, riêng chữ G cao 4 ô li. Thân chữ thường đứng sau cao 1 ô li, viết chậm và đều tay.",
          "rows": [["pair","A Ă Â B C D Đ E Ê G H"],["pair","Bầu ơi thương lấy bí cùng."],["pair","Học ăn, học nói, học gói, học mở."],["blank",12]]
        },
        {
          "id": "th-hnh2",
          "t": "Cỡ Nhỏ: Chữ hoa I tới R và câu ứng dụng",
          "z": "nho",
          "note": "Giữ các chữ hoa cao đúng 2 ô li rưỡi, thẳng hàng trên đường chân. Xong cả tiếng mới đặt dấu phụ và dấu thanh.",
          "rows": [["pair","I K L M N O Ô Ơ P Q R"],["pair","Kiến tha lâu cũng đầy tổ."],["pair","Nước chảy đá mòn."],["blank",12]]
        },
        {
          "id": "th-hnh3",
          "t": "Cỡ Nhỏ: Chữ hoa S tới Y và câu ứng dụng",
          "z": "nho",
          "note": "Chữ Y cao 4 ô li, kéo khuyết dưới 1 ô li rưỡi dưới đường chân. Viết trọn câu đều nét là giỏi lắm rồi đó nha!",
          "rows": [["pair","S T U Ư V X Y"],["pair","Tiên học lễ, hậu học văn."],["pair","Vườn nhà bà có nhiều hoa thơm, trái ngọt."],["blank",12]]
        }
      ]
    },
    {
      "part": "Phần 11 · Tự do",
      "lessons": [
        {
          "id": "free",
          "t": "Bài tự do",
          "z": "thuong",
          "note": "Mở Danh mục, chọn thẻ Công cụ rồi Bài tự do để gõ nội dung muốn tập.",
          "rows": null
        }
      ]
    }
  ],
  "STROKES": {
    "ngang": {"ten":"Nét ngang","w":0.8,"d":[["M",0,0.5],["L",0.8,0.5]]},
    "so": {"ten":"Nét sổ thẳng","w":0.3,"d":[["M",0.15,1],["L",0.15,0]]},
    "xientrai": {"ten":"Nét xiên trái","w":0.6,"d":[["M",0.05,1],["L",0.55,0]]},
    "xienphai": {"ten":"Nét xiên phải","w":0.6,"d":[["M",0.55,1],["L",0.05,0]]},
    "hat": {"ten":"Nét hất","w":0.4,"d":[["M",0,0.5],["C",0.1,0.62,0.2,0.8,0.3,1]]},
    "mocxuoi": {
      "ten": "Nét móc xuôi",
      "w": 0.6,
      "d": [["M",0,0.7],["C",0.08,0.9,0.2,1,0.33,1],["C",0.46,1,0.52,0.9,0.52,0.72],["L",0.52,0]]
    },
    "mocnguoc": {
      "ten": "Nét móc ngược",
      "w": 0.6,
      "d": [["M",0.08,1],["L",0.08,0.28],["C",0.08,0.08,0.18,0,0.3,0],["C",0.44,0,0.5,0.2,0.54,0.5]]
    },
    "mochaidau": {
      "ten": "Nét móc hai đầu",
      "w": 1,
      "d": [
        ["M",0,0.7],
        ["C",0.08,0.9,0.2,1,0.33,1],
        ["C",0.46,1,0.52,0.9,0.52,0.72],
        ["L",0.52,0.28],
        ["C",0.52,0.08,0.62,0,0.74,0],
        ["C",0.88,0,0.94,0.2,0.98,0.5]
      ]
    },
    "conghophai": {
      "ten": "Nét cong hở phải",
      "w": 0.7,
      "d": [
        ["M",0.586,0.854],
        ["C",0.461,1.049,0.259,1.049,0.134,0.854],
        ["C",0.009,0.658,0.009,0.342,0.134,0.146],
        ["C",0.259,-0.049,0.461,-0.049,0.586,0.146]
      ]
    },
    "conghotrai": {
      "ten": "Nét cong hở trái",
      "w": 0.7,
      "d": [
        ["M",0.094,0.854],
        ["C",0.219,1.049,0.421,1.049,0.546,0.854],
        ["C",0.671,0.658,0.671,0.342,0.546,0.146],
        ["C",0.421,-0.049,0.219,-0.049,0.094,0.146]
      ]
    },
    "congkin": {
      "ten": "Nét cong kín",
      "w": 0.8,
      "d": [
        ["M",0.611,0.883],
        ["C",0.459,1.061,0.232,1.033,0.104,0.821],
        ["C",-0.024,0.61,-0.004,0.294,0.149,0.117],
        ["C",0.301,-0.061,0.528,-0.033,0.656,0.179],
        ["C",0.784,0.39,0.764,0.706,0.611,0.883]
      ]
    },
    "khuyettren": {
      "ten": "Nét khuyết trên",
      "w": 0.6,
      "d": [
        ["M",0,0.5],
        ["C",0.2,1.291,0.44,1.8,0.44,2.2],
        ["C",0.44,2.42,0.36,2.5,0.27,2.5],
        ["C",0.17,2.5,0.14,2.38,0.14,2.15],
        ["L",0.14,0]
      ]
    },
    "khuyetduoi": {
      "ten": "Nét khuyết dưới",
      "w": 0.8,
      "d": [
        ["M",0.42,1],
        ["L",0.42,-1.15],
        ["C",0.42,-1.4,0.34,-1.5,0.24,-1.5],
        ["C",0.12,-1.5,0.06,-1.4,0.08,-1.2],
        ["C",0.12,-0.75,0.36,0.057,0.72,0.5]
      ]
    },
    "that": {
      "ten": "Nét thắt",
      "w": 0.6,
      "d": [
        ["M",0,0.6],
        ["C",0.06,0.85,0.2,1,0.32,1],
        ["C",0.42,1,0.44,0.88,0.36,0.8],
        ["C",0.3,0.74,0.24,0.8,0.3,0.86],
        ["C",0.38,0.92,0.5,0.9,0.6,0.86]
      ]
    },
    "luonngang": {
      "ten": "Nét lượn ngang",
      "w": 1.8,
      "d": [["M",0.1,1.2],["C",0.36,1.48,0.64,1.46,0.9,1.25],["C",1.16,1.04,1.44,1.02,1.7,1.3]]
    },
    "luondoc": {
      "ten": "Nét lượn dọc",
      "w": 0.8,
      "d": [["M",0.46,2.5],["C",0.24,2.18,0.24,1.66,0.4,1.25],["C",0.56,0.84,0.56,0.32,0.34,0]]
    },
    "congtren": {
      "ten": "Nét cong trên",
      "w": 1.7,
      "d": [
        ["M",0.1,2],
        ["C",0.2,2.38,0.54,2.5,0.9,2.5],
        ["C",1.34,2.5,1.62,2.26,1.62,1.88],
        ["C",1.62,1.48,1.24,1.28,0.7,1.35]
      ]
    },
    "congduoi": {
      "ten": "Nét cong dưới",
      "w": 1.2,
      "d": [
        ["M",0.14,2.5],
        ["C",0.14,2.16,0.34,1.9,0.58,1.9],
        ["C",0.84,1.9,1.02,2.04,1.02,2.22],
        ["C",1.02,2.4,0.88,2.5,0.66,2.5]
      ]
    },
    "mocnguoctrai": {
      "ten": "Nét móc ngược trái (đi xuống)",
      "w": 1,
      "d": [
        ["M",0.86,2.5],
        ["C",0.76,2.15,0.74,1.15,0.68,0.48],
        ["C",0.651,0.158,0.56,0,0.38,0],
        ["C",0.2,0,0.08,0.1,0.08,0.28],
        ["C",0.08,0.42,0.16,0.5,0.28,0.5]
      ]
    },
    "mocnguoclen": {
      "ten": "Nét móc ngược trái đi lên",
      "w": 1.2,
      "d": [
        ["M",0.06,0.5],
        ["C",0.04,0.18,0.14,0,0.32,0],
        ["C",0.54,0,0.7,0.65,0.84,1.45],
        ["C",0.931,1.97,0.99,2.32,1.02,2.5]
      ]
    },
    "mocxuoiphai": {
      "ten": "Nét móc xuôi phải",
      "w": 1.1,
      "d": [
        ["M",0.1,0],
        ["C",0.24,0.58,0.48,1.48,0.62,2.1],
        ["C",0.688,2.401,0.74,2.5,0.84,2.5],
        ["C",0.96,2.5,1.06,2.32,1.04,2]
      ]
    },
    "mochaidauhoa": {
      "ten": "Nét móc hai đầu cuộn trong",
      "w": 1.8,
      "d": [
        ["M",0.24,2],
        ["C",0.1,2.04,0.06,2.14,0.06,2.26],
        ["C",0.06,2.42,0.2,2.5,0.38,2.5],
        ["C",0.58,2.5,0.68,2.36,0.68,2.14],
        ["L",0.68,0.48],
        ["C",0.68,0.16,0.86,0,1.16,0],
        ["C",1.48,0,1.66,0.28,1.66,0.75]
      ]
    },
    "dausac": {"ten":"Dấu sắc","w":0.5,"dau":1,"d":[["M",0.36,0.44],["L",0.14,0.1]]},
    "dauhuyen": {"ten":"Dấu huyền","w":0.5,"dau":1,"d":[["M",0.14,0.44],["L",0.36,0.1]]},
    "dauhoi": {
      "ten": "Dấu hỏi",
      "w": 0.5,
      "dau": 1,
      "d": [["M",0.1,0.36],["C",0.14,0.48,0.38,0.48,0.38,0.34],["C",0.38,0.24,0.25,0.22,0.25,0.1]]
    },
    "daunga": {
      "ten": "Dấu ngã",
      "w": 0.5,
      "dau": 1,
      "d": [["M",0.04,0.2],["C",0.1,0.36,0.2,0.34,0.25,0.26],["C",0.3,0.18,0.4,0.16,0.46,0.32]]
    },
    "daunang": {"ten":"Dấu nặng","w":0.5,"dau":1,"d":[["M",0.25,0.27],["L",0.26,0.25]]}
  },
  "CHU": {
    "0": {
      "rong": 1,
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congkin","d":[["M",0.654,1.94],["C",0.42,2.129,0.162,1.861,0.077,1.342],["C",-0.008,0.823,0.113,0.249,0.346,0.06],["C",0.58,-0.129,0.838,0.139,0.923,0.658],["C",1.008,1.177,0.887,1.751,0.654,1.94]]}]
        }
      ]
    },
    "1": {
      "rong": 0.8,
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"xienphai","d":[["M",0.2,1.5],["L",0.6,2]]},{"loai":"so","lien":1,"d":[["M",0.6,2],["L",0.6,0]]}]
        }
      ]
    },
    "2": {
      "rong": 1,
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"conghotrai","d":[["M",0.08,1.5],["C",0.12,1.9,0.4,2.02,0.56,2],["C",0.82,1.96,0.92,1.7,0.84,1.48]]},{"loai":"xienphai","lien":1,"d":[["M",0.84,1.48],["C",0.72,1.2,0.4,0.8,0.06,0]]},{"loai":"ngang","lien":1,"d":[["M",0.06,0],["L",0.96,0]]}]
        }
      ]
    },
    "3": {
      "rong": 1,
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"conghotrai","d":[["M",0.1,1.7],["C",0.2,1.98,0.5,2.02,0.68,1.96],["C",0.9,1.88,0.92,1.5,0.7,1.22],["C",0.62,1.12,0.52,1.08,0.42,1.06]]},{"loai":"conghotrai","lien":1,"d":[["M",0.42,1.06],["C",0.95,1,1,0.3,0.7,0.08],["C",0.46,-0.08,0.14,0,0.06,0.3]]}]
        }
      ]
    },
    "4": {
      "rong": 1,
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"xienphai","d":[["M",0.66,2],["L",0,0.5]]},{"loai":"ngang","lien":1,"d":[["M",0,0.5],["L",0.98,0.5]]},{"loai":"so","d":[["M",0.72,1.5],["L",0.72,0]]}]
        }
      ]
    },
    "5": {
      "rong": 1,
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"so","d":[["M",0.16,2],["L",0.16,1.08]]},{"loai":"conghotrai","lien":1,"d":[["M",0.16,1.08],["C",0.4,1.319,0.86,1.297,0.9,0.668],["C",0.94,0.038,0.4,-0.201,0.06,0.19]]},{"loai":"ngang","d":[["M",0.16,2],["L",0.9,2]]}]
        }
      ]
    },
    "6": {
      "rong": 1,
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congkin","d":[["M",0.86,1.875],["C",0.72,2.063,0.4,2.063,0.24,1.708],["C",0.04,1.292,0.02,0.563,0.16,0.25],["C",0.3,-0.062,0.7,-0.104,0.86,0.25],["C",1,0.583,0.84,1,0.48,1],["C",0.24,1,0.08,0.833,0.08,0.563]]}]
        }
      ]
    },
    "7": {
      "rong": 1,
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"ngang","d":[["M",0.06,2],["L",0.94,2]]},{"loai":"xienphai","lien":1,"d":[["M",0.94,2],["L",0.34,0]]},{"loai":"ngang","d":[["M",0.4,1],["L",0.84,1]]}]
        }
      ]
    },
    "8": {
      "rong": 1,
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congkin","d":[["M",0.8,1.75],["C",0.74,2.079,0.22,2.101,0.16,1.706],["C",0.1,1.289,0.9,1.179,0.92,0.476],["C",0.94,-0.094,0.12,-0.204,0.08,0.432],["C",0.06,0.959,0.86,1.267,0.8,1.75]]}]
        }
      ]
    },
    "9": {
      "rong": 1,
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congkin","d":[["M",0.806,1.75],["C",0.696,1.989,0.451,2.071,0.26,1.933],["C",0.069,1.795,0.003,1.489,0.114,1.25],["C",0.224,1.011,0.469,0.929,0.66,1.067],["C",0.851,1.205,0.917,1.511,0.806,1.75]]},{"loai":"conghotrai","d":[["M",0.86,1.5],["C",0.9,0.9,0.84,0.1,0.5,0],["C",0.3,-0.04,0.14,0.08,0.08,0.24]]}]
        }
      ]
    },
    "a": {
      "rong": 1.06,
      "vao": [0.62,0.86],
      "ra": [1.06,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congkin","d":[["M",0.631,0.883],["C",0.479,1.061,0.252,1.033,0.124,0.821],["C",-0.004,0.61,0.016,0.294,0.169,0.117],["C",0.321,-0.061,0.548,-0.033,0.676,0.179],["C",0.804,0.39,0.784,0.706,0.631,0.883]]},{"loai":"mocnguoc","d":[["M",0.76,1],["L",0.76,0.28],["C",0.76,0.08,0.86,0,0.98,0],["C",1.02,0,1.06,0.2,1.06,0.5]]}]
        }
      ]
    },
    "ă": {
      "rong": 1.06,
      "vao": [0.62,0.86],
      "ra": [1.06,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congkin","d":[["M",0.631,0.883],["C",0.479,1.061,0.252,1.033,0.124,0.821],["C",-0.004,0.61,0.016,0.294,0.169,0.117],["C",0.321,-0.061,0.548,-0.033,0.676,0.179],["C",0.804,0.39,0.784,0.706,0.631,0.883]]},{"loai":"mocnguoc","d":[["M",0.76,1],["L",0.76,0.28],["C",0.76,0.08,0.86,0,0.98,0],["C",1.02,0,1.06,0.2,1.06,0.5]]},{"loai":"trang","dau":1,"d":[["M",0.24,1.4],["C",0.27,1.18,0.53,1.18,0.56,1.4]]}]
        }
      ]
    },
    "â": {
      "rong": 1.06,
      "vao": [0.62,0.86],
      "ra": [1.06,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congkin","d":[["M",0.631,0.883],["C",0.479,1.061,0.252,1.033,0.124,0.821],["C",-0.004,0.61,0.016,0.294,0.169,0.117],["C",0.321,-0.061,0.548,-0.033,0.676,0.179],["C",0.804,0.39,0.784,0.706,0.631,0.883]]},{"loai":"mocnguoc","d":[["M",0.76,1],["L",0.76,0.28],["C",0.76,0.08,0.86,0,0.98,0],["C",1.02,0,1.06,0.2,1.06,0.5]]},{"loai":"mu","dau":1,"d":[["M",0.23,1.2],["L",0.4,1.42],["L",0.57,1.2]]}]
        }
      ]
    },
    "b": {
      "rong": 0.9,
      "vao": [0,0.5],
      "ra": [0.9,0.86],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"khuyettren","d":[["M",0,0.5],["C",0.2,1.291,0.44,1.8,0.44,2.2],["C",0.44,2.42,0.36,2.5,0.27,2.5],["C",0.17,2.5,0.14,2.38,0.14,2.15],["L",0.14,0.28]]},{"loai":"mocnguoc","lien":1,"d":[["M",0.14,0.28],["C",0.16,0.05,0.34,-0.02,0.48,0.04],["C",0.66,0.12,0.7,0.6,0.62,0.88]]},{"loai":"that","lien":1,"d":[["M",0.62,0.88],["C",0.58,0.98,0.48,0.94,0.54,0.86],["C",0.6,0.8,0.76,0.84,0.9,0.86]]}]
        }
      ]
    },
    "c": {
      "rong": 0.74,
      "vao": [0.66,0.86],
      "ra": [0.66,0.16],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"conghophai","d":[["M",0.64,0.821],["C",0.55,0.979,0.403,1.04,0.271,0.973],["C",0.138,0.907,0.046,0.728,0.04,0.522],["C",0.034,0.316,0.115,0.125,0.243,0.042],["C",0.371,-0.041,0.521,0.001,0.62,0.146]]}]
        }
      ]
    },
    "d": {
      "rong": 1.06,
      "vao": [0.62,0.86],
      "ra": [1.06,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congkin","d":[["M",0.631,0.883],["C",0.479,1.061,0.252,1.033,0.124,0.821],["C",-0.004,0.61,0.016,0.294,0.169,0.117],["C",0.321,-0.061,0.548,-0.033,0.676,0.179],["C",0.804,0.39,0.784,0.706,0.631,0.883]]},{"loai":"mocnguoc","d":[["M",0.76,2],["L",0.76,0.28],["C",0.76,0.08,0.86,0,0.98,0],["C",1.02,0,1.06,0.2,1.06,0.5]]}]
        }
      ]
    },
    "đ": {
      "rong": 1.06,
      "vao": [0.62,0.86],
      "ra": [1.06,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congkin","d":[["M",0.631,0.883],["C",0.479,1.061,0.252,1.033,0.124,0.821],["C",-0.004,0.61,0.016,0.294,0.169,0.117],["C",0.321,-0.061,0.548,-0.033,0.676,0.179],["C",0.804,0.39,0.784,0.706,0.631,0.883]]},{"loai":"mocnguoc","d":[["M",0.76,2],["L",0.76,0.28],["C",0.76,0.08,0.86,0,0.98,0],["C",1.02,0,1.06,0.2,1.06,0.5]]},{"loai":"ngang","dau":1,"d":[["M",0.54,1.5],["L",0.98,1.5]]}]
        }
      ]
    },
    "e": {
      "rong": 0.74,
      "vao": [0,0.21],
      "ra": [0.74,0.25],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"conghophai","d":[["M",0,0.21],["C",0.18,0.4,0.54,0.62,0.54,0.82],["C",0.54,0.94,0.46,1,0.36,1],["C",0.22,1,0.14,0.86,0.1,0.62],["C",0.06,0.38,0.14,0,0.38,0],["C",0.56,0,0.68,0.1,0.74,0.25]]}]
        }
      ]
    },
    "ê": {
      "rong": 0.74,
      "vao": [0,0.21],
      "ra": [0.74,0.25],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"conghophai","d":[["M",0,0.21],["C",0.18,0.4,0.54,0.62,0.54,0.82],["C",0.54,0.94,0.46,1,0.36,1],["C",0.22,1,0.14,0.86,0.1,0.62],["C",0.06,0.38,0.14,0,0.38,0],["C",0.56,0,0.68,0.1,0.74,0.25]]},{"loai":"mu","dau":1,"d":[["M",0.19,1.2],["L",0.36,1.42],["L",0.53,1.2]]}]
        }
      ]
    },
    "g": {
      "rong": 1.06,
      "vao": [0.62,0.86],
      "ra": [1.06,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congkin","d":[["M",0.631,0.883],["C",0.479,1.061,0.252,1.033,0.124,0.821],["C",-0.004,0.61,0.016,0.294,0.169,0.117],["C",0.321,-0.061,0.548,-0.033,0.676,0.179],["C",0.804,0.39,0.784,0.706,0.631,0.883]]},{"loai":"khuyetduoi","d":[["M",0.76,1],["L",0.76,-1.15],["C",0.76,-1.4,0.68,-1.5,0.58,-1.5],["C",0.46,-1.5,0.4,-1.4,0.42,-1.2],["C",0.46,-0.75,0.7,0.057,1.06,0.5]]}]
        }
      ]
    },
    "h": {
      "rong": 0.96,
      "vao": [0,0.5],
      "ra": [0.96,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"khuyettren","d":[["M",0,0.5],["C",0.2,1.291,0.44,1.8,0.44,2.2],["C",0.44,2.42,0.36,2.5,0.27,2.5],["C",0.17,2.5,0.14,2.38,0.14,2.15],["L",0.14,0]]},{"loai":"mochaidau","lien":1,"d":[["M",0.14,0],["L",0.14,0.55],["C",0.16,0.85,0.29,1,0.42,1],["C",0.58,1,0.62,0.9,0.62,0.75],["L",0.62,0.28],["C",0.62,0.08,0.72,0,0.82,0],["C",0.9,0,0.96,0.2,0.96,0.5]]}]
        }
      ]
    },
    "i": {
      "rong": 0.62,
      "vao": [0,0.5],
      "ra": [0.62,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"hat","d":[["M",0,0.5],["C",0.1,0.62,0.2,0.8,0.28,1]]},{"loai":"mocnguoc","lien":1,"d":[["M",0.28,1],["L",0.28,0.28],["C",0.28,0.08,0.38,0,0.5,0],["C",0.58,0,0.62,0.2,0.62,0.5]]},{"loai":"cham","dau":1,"d":[["M",0.28,1.4],["L",0.29,1.38]]}]
        }
      ]
    },
    "k": {
      "rong": 0.98,
      "vao": [0,0.5],
      "ra": [0.98,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"khuyettren","d":[["M",0,0.5],["C",0.2,1.291,0.44,1.8,0.44,2.2],["C",0.44,2.42,0.36,2.5,0.27,2.5],["C",0.17,2.5,0.14,2.38,0.14,2.15],["L",0.14,0]]},{"loai":"that","lien":1,"d":[["M",0.14,0],["L",0.14,0.52],["C",0.14,0.82,0.28,1,0.42,1],["C",0.56,1,0.62,0.88,0.56,0.72],["C",0.5,0.56,0.34,0.48,0.22,0.48],["C",0.16,0.48,0.14,0.51,0.14,0.56],["C",0.14,0.62,0.2,0.65,0.26,0.61],["C",0.41,0.51,0.62,0.44,0.62,0.22]]},{"loai":"mocnguoc","lien":1,"d":[["M",0.62,0.22],["C",0.62,0.04,0.72,0,0.8,0],["C",0.9,0,0.96,0.2,0.98,0.5]]}]
        }
      ]
    },
    "l": {
      "rong": 0.56,
      "vao": [0,0.5],
      "ra": [0.56,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"khuyettren","d":[["M",0,0.5],["C",0.2,1.291,0.44,1.8,0.44,2.2],["C",0.44,2.42,0.36,2.5,0.27,2.5],["C",0.17,2.5,0.14,2.38,0.14,2.15],["L",0.14,0.28]]},{"loai":"mocnguoc","lien":1,"d":[["M",0.14,0.28],["C",0.14,0.08,0.24,0,0.34,0],["C",0.44,0,0.56,0.2,0.56,0.5]]}]
        }
      ]
    },
    "m": {
      "rong": 1.5,
      "vao": [0,0.72],
      "ra": [1.5,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"mocxuoi","d":[["M",0,0.72],["C",0.05,0.92,0.13,1,0.21,1],["C",0.26,1,0.28,0.94,0.28,0.8],["L",0.28,0]]},{"loai":"mocxuoi","lien":1,"d":[["M",0.28,0],["L",0.28,0.55],["C",0.3,0.85,0.43,1,0.56,1],["C",0.68,1,0.72,0.9,0.72,0.75],["L",0.72,0]]},{"loai":"mochaidau","lien":1,"d":[["M",0.72,0],["L",0.72,0.55],["C",0.74,0.85,0.87,1,1,1],["C",1.12,1,1.16,0.9,1.16,0.75],["L",1.16,0.28],["C",1.16,0.08,1.26,0,1.36,0],["C",1.44,0,1.5,0.2,1.5,0.5]]}]
        }
      ]
    },
    "n": {
      "rong": 1.08,
      "vao": [0,0.72],
      "ra": [1.08,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"mocxuoi","d":[["M",0,0.72],["C",0.05,0.92,0.13,1,0.21,1],["C",0.26,1,0.28,0.94,0.28,0.8],["L",0.28,0]]},{"loai":"mochaidau","lien":1,"d":[["M",0.28,0],["L",0.28,0.55],["C",0.3,0.85,0.43,1,0.56,1],["C",0.7,1,0.74,0.9,0.74,0.75],["L",0.74,0.28],["C",0.74,0.08,0.84,0,0.94,0],["C",1.02,0,1.08,0.2,1.08,0.5]]}]
        }
      ]
    },
    "o": {
      "rong": 0.8,
      "vao": [0.62,0.86],
      "ra": [0.62,0.82],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congkin","d":[["M",0.58,0.933],["C",0.441,1.045,0.265,1.015,0.15,0.86],["C",0.034,0.705,0.007,0.462,0.082,0.265],["C",0.158,0.068,0.318,-0.035,0.475,0.011],["C",0.632,0.057,0.748,0.243,0.759,0.465],["C",0.77,0.688,0.674,0.894,0.523,0.97],["C",0.6,0.95,0.66,0.86,0.58,0.8]]}]
        }
      ]
    },
    "ô": {
      "rong": 0.8,
      "vao": [0.62,0.86],
      "ra": [0.62,0.82],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congkin","d":[["M",0.58,0.933],["C",0.441,1.045,0.265,1.015,0.15,0.86],["C",0.034,0.705,0.007,0.462,0.082,0.265],["C",0.158,0.068,0.318,-0.035,0.475,0.011],["C",0.632,0.057,0.748,0.243,0.759,0.465],["C",0.77,0.688,0.674,0.894,0.523,0.97],["C",0.6,0.95,0.66,0.86,0.58,0.8]]},{"loai":"mu","dau":1,"d":[["M",0.23,1.2],["L",0.4,1.42],["L",0.57,1.2]]}]
        }
      ]
    },
    "ơ": {
      "rong": 1,
      "vao": [0.62,0.86],
      "ra": [0.62,0.82],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congkin","d":[["M",0.58,0.933],["C",0.441,1.045,0.265,1.015,0.15,0.86],["C",0.034,0.705,0.007,0.462,0.082,0.265],["C",0.158,0.068,0.318,-0.035,0.475,0.011],["C",0.632,0.057,0.748,0.243,0.759,0.465],["C",0.77,0.688,0.674,0.894,0.523,0.97],["C",0.6,0.95,0.66,0.86,0.58,0.8]]},{"loai":"rau","dau":1,"d":[["M",0.765,1.194],["C",0.955,1.154,0.955,0.904,0.655,0.854]]}]
        }
      ]
    },
    "p": {
      "rong": 1.08,
      "vao": [0,0.5],
      "ra": [1.08,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"hat","d":[["M",0,0.5],["C",0.1,0.62,0.2,0.8,0.28,1]]},{"loai":"so","lien":1,"d":[["M",0.28,1],["L",0.28,-1]]},{"loai":"mochaidau","lien":1,"d":[["M",0.28,-1],["L",0.28,0.55],["C",0.3,0.85,0.43,1,0.56,1],["C",0.7,1,0.74,0.9,0.74,0.75],["L",0.74,0.28],["C",0.74,0.08,0.84,0,0.94,0],["C",1.02,0,1.08,0.2,1.08,0.5]]}]
        }
      ]
    },
    "q": {
      "rong": 0.86,
      "vao": [0.62,0.86],
      "ra": [0.76,-1],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congkin","d":[["M",0.631,0.883],["C",0.479,1.061,0.252,1.033,0.124,0.821],["C",-0.004,0.61,0.016,0.294,0.169,0.117],["C",0.321,-0.061,0.548,-0.033,0.676,0.179],["C",0.804,0.39,0.784,0.706,0.631,0.883]]},{"loai":"so","d":[["M",0.76,1],["L",0.76,-1]]}]
        }
      ]
    },
    "r": {
      "rong": 0.96,
      "vao": [0,0.5],
      "ra": [0.96,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"hat","d":[["M",0,0.5],["C",0.1,0.72,0.26,0.95,0.26,1.16]]},{"loai":"that","lien":1,"d":[["M",0.26,1.16],["C",0.26,1.22,0.22,1.25,0.175,1.25],["C",0.13,1.25,0.09,1.2,0.09,1.13],["C",0.09,1.04,0.18,1,0.34,1.02],["C",0.5,1.04,0.62,1.02,0.62,0.88]]},{"loai":"mocnguoc","lien":1,"d":[["M",0.62,0.88],["L",0.62,0.28],["C",0.62,0.08,0.72,0,0.82,0],["C",0.9,0,0.96,0.2,0.96,0.5]]}]
        }
      ]
    },
    "s": {
      "rong": 0.74,
      "vao": [0,0],
      "ra": [0.24,0.26],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"xienphai","d":[["M",0,0],["C",0.08,0.34,0.26,0.9,0.26,1.16]]},{"loai":"that","lien":1,"d":[["M",0.26,1.16],["C",0.26,1.22,0.22,1.25,0.175,1.25],["C",0.13,1.25,0.09,1.2,0.09,1.13],["C",0.09,1.03,0.22,1.01,0.36,0.96]]},{"loai":"conghotrai","lien":1,"d":[["M",0.36,0.96],["C",0.64,0.86,0.72,0.5,0.64,0.22],["C",0.58,0.01,0.44,0,0.34,0],["C",0.2,0,0.12,0.08,0.14,0.18],["C",0.15,0.23,0.19,0.27,0.24,0.26]]}]
        }
      ]
    },
    "t": {
      "rong": 0.66,
      "vao": [0,0.5],
      "ra": [0.66,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"hat","d":[["M",0,0.5],["C",0.1,0.62,0.2,0.8,0.3,1]]},{"loai":"mocnguoc","lien":1,"d":[["M",0.3,1],["L",0.3,1.5],["L",0.3,0.28],["C",0.3,0.08,0.4,0,0.52,0],["C",0.6,0,0.66,0.2,0.66,0.5]]},{"loai":"ngang","d":[["M",0.04,1],["L",0.58,1]]}]
        }
      ]
    },
    "u": {
      "rong": 1.2,
      "vao": [0,0.5],
      "ra": [1.2,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"hat","d":[["M",0,0.5],["C",0.1,0.62,0.2,0.8,0.28,1]]},{"loai":"mocnguoc","lien":1,"d":[["M",0.28,1],["L",0.28,0.28],["C",0.28,0.08,0.38,0,0.5,0],["C",0.64,0,0.86,0.18,0.86,0.5]]},{"loai":"mocnguoc","lien":1,"d":[["M",0.86,0.5],["L",0.86,1],["L",0.86,0.28],["C",0.86,0.08,0.96,0,1.08,0],["C",1.16,0,1.2,0.2,1.2,0.5]]}]
        }
      ]
    },
    "ư": {
      "rong": 1.2,
      "vao": [0,0.5],
      "ra": [1.2,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"hat","d":[["M",0,0.5],["C",0.1,0.62,0.2,0.8,0.28,1]]},{"loai":"mocnguoc","lien":1,"d":[["M",0.28,1],["L",0.28,0.28],["C",0.28,0.08,0.38,0,0.5,0],["C",0.64,0,0.86,0.18,0.86,0.5]]},{"loai":"mocnguoc","lien":1,"d":[["M",0.86,0.5],["L",0.86,1],["L",0.86,0.28],["C",0.86,0.08,0.96,0,1.08,0],["C",1.16,0,1.2,0.2,1.2,0.5]]},{"loai":"rau","dau":1,"d":[["M",0.97,1.26],["C",1.16,1.22,1.16,0.97,0.86,0.92]]}]
        }
      ]
    },
    "v": {
      "rong": 0.92,
      "vao": [0,0.72],
      "ra": [0.92,0.88],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"mochaidau","d":[["M",0,0.72],["C",0.05,0.92,0.13,1,0.21,1],["C",0.26,1,0.28,0.94,0.28,0.8],["L",0.28,0.3],["C",0.28,0.08,0.4,0,0.5,0],["C",0.66,0,0.72,0.5,0.68,0.94]]},{"loai":"that","lien":1,"d":[["M",0.68,0.94],["C",0.64,1.04,0.54,0.98,0.6,0.9],["C",0.66,0.84,0.8,0.86,0.92,0.88]]}]
        }
      ]
    },
    "x": {
      "rong": 0.86,
      "vao": [0.04,0.84],
      "ra": [0.84,0.16],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"conghotrai","d":[["M",0.047,0.821],["C",0.101,0.982,0.189,1.042,0.268,0.97],["C",0.347,0.898,0.4,0.71,0.4,0.5],["C",0.4,0.29,0.347,0.102,0.268,0.03],["C",0.189,-0.042,0.101,0.018,0.047,0.179]]},{"loai":"conghophai","d":[["M",0.789,0.821],["C",0.729,0.982,0.632,1.042,0.545,0.97],["C",0.458,0.898,0.4,0.71,0.4,0.5],["C",0.4,0.29,0.458,0.102,0.545,0.03],["C",0.632,-0.042,0.729,0.018,0.789,0.179]]}]
        }
      ]
    },
    "y": {
      "rong": 1.16,
      "vao": [0,0.5],
      "ra": [1.16,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"hat","d":[["M",0,0.5],["C",0.1,0.62,0.2,0.8,0.28,1]]},{"loai":"mocnguoc","lien":1,"d":[["M",0.28,1],["L",0.28,0.28],["C",0.28,0.08,0.38,0,0.5,0],["C",0.64,0,0.86,0.18,0.86,0.5]]},{"loai":"khuyetduoi","lien":1,"d":[["M",0.86,0.5],["L",0.86,1],["L",0.86,-1.15],["C",0.86,-1.4,0.78,-1.5,0.68,-1.5],["C",0.56,-1.5,0.5,-1.4,0.52,-1.2],["C",0.56,-0.75,0.8,0.057,1.16,0.5]]}]
        }
      ]
    },
    "A": {
      "rong": 2.3,
      "vao": [0.14,1],
      "ra": [2.26,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"mocnguoclen","d":[["M",0.14,1],["C",0,0.72,0.02,0,0.36,0],["C",0.62,0,0.84,0.55,1.06,1.35],["C",1.203,1.87,1.32,2.3,1.38,2.5]]},{"loai":"mocnguoc","lien":1,"d":[["M",1.38,2.5],["L",1.64,0.45],["C",1.679,0.143,1.76,0,1.92,0],["C",2.1,0,2.22,0.18,2.26,0.5]]},{"loai":"luonngang","d":[["M",0.56,0.98],["C",0.76,1.14,1.02,1.12,1.27,1],["C",1.52,0.88,1.78,0.88,1.98,1.04]]}]
        }
      ]
    },
    "Ă": {
      "rong": 2.3,
      "vao": [0.14,1],
      "ra": [2.26,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"mocnguoclen","d":[["M",0.14,1],["C",0,0.72,0.02,0,0.36,0],["C",0.62,0,0.84,0.55,1.06,1.35],["C",1.203,1.87,1.32,2.3,1.38,2.5]]},{"loai":"mocnguoc","lien":1,"d":[["M",1.38,2.5],["L",1.64,0.45],["C",1.679,0.143,1.76,0,1.92,0],["C",2.1,0,2.22,0.18,2.26,0.5]]},{"loai":"luonngang","d":[["M",0.56,0.98],["C",0.76,1.14,1.02,1.12,1.27,1],["C",1.52,0.88,1.78,0.88,1.98,1.04]]},{"loai":"trang","dau":1,"d":[["M",1.06,3],["C",1.13,2.52,1.63,2.52,1.7,3]]}]
        }
      ]
    },
    "Â": {
      "rong": 2.3,
      "vao": [0.14,1],
      "ra": [2.26,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"mocnguoclen","d":[["M",0.14,1],["C",0,0.72,0.02,0,0.36,0],["C",0.62,0,0.84,0.55,1.06,1.35],["C",1.203,1.87,1.32,2.3,1.38,2.5]]},{"loai":"mocnguoc","lien":1,"d":[["M",1.38,2.5],["L",1.64,0.45],["C",1.679,0.143,1.76,0,1.92,0],["C",2.1,0,2.22,0.18,2.26,0.5]]},{"loai":"luonngang","d":[["M",0.56,0.98],["C",0.76,1.14,1.02,1.12,1.27,1],["C",1.52,0.88,1.78,0.88,1.98,1.04]]},{"loai":"mu","dau":1,"d":[["M",1.06,2.65],["L",1.38,3.02],["L",1.7,2.65]]}]
        }
      ]
    },
    "B": {
      "rong": 2,
      "vao": [0.86,2.5],
      "ra": [0.92,0.52],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"mocnguoctrai","d":[["M",0.86,2.5],["C",0.76,2.15,0.74,1.15,0.68,0.48],["C",0.651,0.158,0.56,0,0.38,0],["C",0.2,0,0.08,0.1,0.08,0.28],["C",0.08,0.42,0.16,0.5,0.28,0.5]]},{"loai":"congtren","d":[["M",0.32,2],["C",0.42,2.38,0.74,2.5,1.08,2.5],["C",1.48,2.5,1.74,2.26,1.74,1.92],["C",1.74,1.52,1.36,1.24,0.94,1.31],["C",0.82,1.33,0.71,1.36,0.71,1.42],["C",0.71,1.52,0.92,1.54,1.12,1.42],["C",1.52,1.18,1.94,1.06,1.94,0.72],["C",1.94,0.28,1.66,0,1.26,0],["C",0.98,0,0.86,0.22,0.92,0.52]]}]
        }
      ]
    },
    "C": {
      "rong": 2,
      "vao": [1.06,2.5],
      "ra": [1.6,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congduoi","d":[["M",1.06,2.5],["C",1.06,2.16,1.18,1.9,1.36,1.9],["C",1.58,1.9,1.74,2.02,1.74,2.2],["C",1.74,2.38,1.58,2.5,1.36,2.5],["C",0.72,2.5,0.08,2.02,0.08,1.18],["C",0.08,0.44,0.46,0,1,0],["C",1.5,0,1.86,0.16,1.86,0.44],["C",1.86,0.68,1.7,0.72,1.6,0.5]]}]
        }
      ]
    },
    "D": {
      "rong": 2,
      "vao": [0.64,2.5],
      "ra": [0.74,2],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"luondoc","d":[["M",0.64,2.5],["C",0.56,2.05,0.56,1,0.44,0.3],["C",0.398,0.055,0.34,0,0.22,0],["C",0.12,0,0.06,0.06,0.06,0.16],["C",0.06,0.28,0.16,0.36,0.32,0.32],["C",0.576,0.256,0.68,0,1,0],["C",1.56,0,1.94,0.54,1.94,1.25],["C",1.94,1.96,1.56,2.5,1.04,2.5],["C",0.64,2.5,0.32,2.42,0.32,2.22],["C",0.32,2.04,0.5,1.96,0.74,2]]}]
        }
      ]
    },
    "Đ": {
      "rong": 2,
      "vao": [0.64,2.5],
      "ra": [0.74,2],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"luondoc","d":[["M",0.64,2.5],["C",0.56,2.05,0.56,1,0.44,0.3],["C",0.398,0.055,0.34,0,0.22,0],["C",0.12,0,0.06,0.06,0.06,0.16],["C",0.06,0.28,0.16,0.36,0.32,0.32],["C",0.576,0.256,0.68,0,1,0],["C",1.56,0,1.94,0.54,1.94,1.25],["C",1.94,1.96,1.56,2.5,1.04,2.5],["C",0.64,2.5,0.32,2.42,0.32,2.22],["C",0.32,2.04,0.5,1.96,0.74,2]]},{"loai":"ngang","dau":1,"d":[["M",0.12,1],["L",0.92,1]]}]
        }
      ]
    },
    "E": {
      "rong": 1.9,
      "vao": [0.94,2.5],
      "ra": [1.54,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congduoi","d":[["M",0.94,2.5],["C",0.94,2.22,1.08,2,1.28,2],["C",1.48,2,1.58,2.1,1.58,2.25],["C",1.58,2.4,1.44,2.5,1.26,2.5],["C",0.72,2.5,0.3,2.28,0.3,1.92],["C",0.3,1.56,0.52,1.24,0.88,1.24],["C",1,1.24,1.06,1.28,1.06,1.34],["C",1.06,1.4,1,1.44,0.9,1.44],["C",0.56,1.44,0.08,1.12,0.08,0.72],["C",0.08,0.24,0.42,0,0.92,0],["C",1.44,0,1.8,0.2,1.8,0.54],["C",1.8,0.8,1.62,0.82,1.54,0.5]]}]
        }
      ]
    },
    "Ê": {
      "rong": 1.9,
      "vao": [0.94,2.5],
      "ra": [1.54,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congduoi","d":[["M",0.94,2.5],["C",0.94,2.22,1.08,2,1.28,2],["C",1.48,2,1.58,2.1,1.58,2.25],["C",1.58,2.4,1.44,2.5,1.26,2.5],["C",0.72,2.5,0.3,2.28,0.3,1.92],["C",0.3,1.56,0.52,1.24,0.88,1.24],["C",1,1.24,1.06,1.28,1.06,1.34],["C",1.06,1.4,1,1.44,0.9,1.44],["C",0.56,1.44,0.08,1.12,0.08,0.72],["C",0.08,0.24,0.42,0,0.92,0],["C",1.44,0,1.8,0.2,1.8,0.54],["C",1.8,0.8,1.62,0.82,1.54,0.5]]},{"loai":"mu","dau":1,"d":[["M",0.68,2.65],["L",1,3.02],["L",1.32,2.65]]}]
        }
      ]
    },
    "G": {
      "rong": 2,
      "vao": [0.98,2.5],
      "ra": [1.96,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congduoi","d":[["M",0.98,2.5],["C",0.98,2.16,1.12,1.9,1.32,1.9],["C",1.54,1.9,1.66,2.04,1.66,2.2],["C",1.66,2.38,1.52,2.5,1.3,2.5],["C",0.6,2.5,0.08,2.02,0.08,1.18],["C",0.08,0.44,0.42,0,0.9,0],["C",1.32,0,1.54,0.36,1.54,1]]},{"loai":"khuyetduoi","lien":1,"d":[["M",1.54,1],["L",1.54,-1.1],["C",1.54,-1.38,1.44,-1.5,1.3,-1.5],["C",1.14,-1.5,1.06,-1.36,1.08,-1.14],["C",1.12,-0.7,1.551,0.178,1.96,0.5]]}]
        }
      ]
    },
    "H": {
      "rong": 2.35,
      "vao": [0.18,2],
      "ra": [2.26,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"luonngang","d":[["M",0.18,2],["C",0.06,2.16,0.14,2.46,0.36,2.46],["C",0.56,2.46,0.72,2.3,0.94,2.5]]},{"loai":"khuyetduoi","lien":1,"d":[["M",0.94,2.5],["C",0.84,2.08,0.72,1.12,0.62,0.46],["C",0.57,0.13,0.48,0,0.34,0],["C",0.18,0,0.08,0.08,0.08,0.22],["C",0.08,0.34,0.2,0.4,0.38,0.54],["C",0.65,0.75,0.9,0.9,1.14,1.08],["C",1.5,1.35,1.9,1.72,1.9,2.2],["C",1.9,2.4,1.82,2.5,1.72,2.5],["C",1.6,2.5,1.56,2.38,1.56,2.16],["L",1.56,0.44],["C",1.56,0.14,1.68,0,1.88,0],["C",2.1,0,2.22,0.18,2.26,0.5]]},{"loai":"so","d":[["M",1.14,1.48],["L",1.14,0.55]]}]
        }
      ]
    },
    "I": {
      "rong": 1.1,
      "vao": [0.18,2],
      "ra": [0.36,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"luonngang","d":[["M",0.18,2],["C",0.06,2.16,0.14,2.46,0.36,2.46],["C",0.56,2.46,0.72,2.3,0.94,2.5]]},{"loai":"mocnguoctrai","lien":1,"d":[["M",0.94,2.5],["C",0.84,2.15,0.82,1.15,0.76,0.48],["C",0.731,0.158,0.64,0,0.46,0],["C",0.28,0,0.16,0.1,0.16,0.28],["C",0.16,0.42,0.24,0.5,0.36,0.5]]}]
        }
      ]
    },
    "K": {
      "rong": 2.15,
      "vao": [0.18,2],
      "ra": [2.1,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"luonngang","d":[["M",0.18,2],["C",0.06,2.16,0.14,2.46,0.36,2.46],["C",0.56,2.46,0.72,2.3,0.94,2.5]]},{"loai":"mocnguoctrai","lien":1,"d":[["M",0.94,2.5],["C",0.84,2.15,0.82,1.15,0.76,0.48],["C",0.731,0.158,0.64,0,0.46,0],["C",0.28,0,0.16,0.1,0.16,0.28],["C",0.16,0.42,0.24,0.5,0.36,0.5]]},{"loai":"mocxuoi","d":[["M",1.98,2],["C",2.02,2.32,1.9,2.5,1.72,2.5],["C",1.5,2.5,1.38,1.16,1.02,1.22],["C",0.9,1.24,0.76,1.26,0.76,1.32],["C",0.76,1.4,0.92,1.44,1.12,1.34],["C",1.4,1.2,1.5,0.88,1.5,0.44],["C",1.5,0.14,1.62,0,1.78,0],["C",1.96,0,2.06,0.18,2.1,0.5]]}]
        }
      ]
    },
    "L": {
      "rong": 2.15,
      "vao": [0.9,2.5],
      "ra": [2.1,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congduoi","d":[["M",0.9,2.5],["C",0.9,2.18,1.04,1.92,1.24,1.92],["C",1.46,1.92,1.62,2.04,1.62,2.22],["C",1.62,2.4,1.46,2.5,1.22,2.5],["C",0.84,2.5,0.66,2.2,0.66,1.72],["C",0.66,1.24,0.54,0.72,0.44,0.34],["C",0.37,0.074,0.34,0,0.22,0],["C",0.12,0,0.06,0.06,0.06,0.16],["C",0.06,0.28,0.18,0.38,0.34,0.34],["C",0.692,0.252,0.86,0,1.18,0],["C",1.56,0,1.84,0.18,2.1,0.5]]}]
        }
      ]
    },
    "M": {
      "rong": 2.8,
      "vao": [0.04,0.5],
      "ra": [2.76,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"mocnguoclen","d":[["M",0.04,0.5],["C",0.02,0.18,0.12,0,0.3,0],["C",0.52,0,0.67,0.65,0.8,1.45],["C",0.885,1.97,0.94,2.3,0.98,2.5]]},{"loai":"luondoc","lien":1,"d":[["M",0.98,2.5],["C",1.06,1.8,1.08,0.8,1,0]]},{"loai":"xienphai","lien":1,"d":[["M",1,0],["C",1.26,0.55,1.76,1.95,2.02,2.5]]},{"loai":"mocnguoc","lien":1,"d":[["M",2.02,2.5],["L",2.04,0.44],["C",2.043,0.131,2.16,0,2.36,0],["C",2.58,0,2.7,0.18,2.76,0.5]]}]
        }
      ]
    },
    "N": {
      "rong": 2.35,
      "vao": [0.04,0.5],
      "ra": [2.34,2],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"mocnguoclen","d":[["M",0.04,0.5],["C",0.02,0.18,0.12,0,0.3,0],["C",0.52,0,0.68,0.65,0.82,1.45],["C",0.911,1.97,0.97,2.32,1,2.5]]},{"loai":"xientrai","lien":1,"d":[["M",1,2.5],["L",1.62,0]]},{"loai":"mocxuoiphai","lien":1,"d":[["M",1.62,0],["C",1.7,0.65,1.84,1.55,1.92,2.1],["C",1.964,2.403,2.04,2.5,2.14,2.5],["C",2.26,2.5,2.36,2.32,2.34,2]]}]
        }
      ]
    },
    "O": {
      "rong": 2,
      "vao": [1,2.5],
      "ra": [1.18,1.62],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congkin","d":[["M",1,2.5],["C",0.481,2.5,0.06,1.94,0.06,1.25],["C",0.06,0.56,0.481,0,1,0],["C",1.519,0,1.94,0.56,1.94,1.25],["C",1.94,1.94,1.54,2.46,1.04,2.46],["C",0.74,2.46,0.62,2.18,0.68,1.82],["C",0.728,1.532,0.94,1.44,1.18,1.62]]}]
        }
      ]
    },
    "Ô": {
      "rong": 2,
      "vao": [1,2.5],
      "ra": [1.18,1.62],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congkin","d":[["M",1,2.5],["C",0.481,2.5,0.06,1.94,0.06,1.25],["C",0.06,0.56,0.481,0,1,0],["C",1.519,0,1.94,0.56,1.94,1.25],["C",1.94,1.94,1.54,2.46,1.04,2.46],["C",0.74,2.46,0.62,2.18,0.68,1.82],["C",0.728,1.532,0.94,1.44,1.18,1.62]]},{"loai":"mu","dau":1,"d":[["M",0.68,2.65],["L",1,3.02],["L",1.32,2.65]]}]
        }
      ]
    },
    "Ơ": {
      "rong": 2.2,
      "vao": [1,2.5],
      "ra": [1.18,1.62],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congkin","d":[["M",1,2.5],["C",0.481,2.5,0.06,1.94,0.06,1.25],["C",0.06,0.56,0.481,0,1,0],["C",1.519,0,1.94,0.56,1.94,1.25],["C",1.94,1.94,1.54,2.46,1.04,2.46],["C",0.74,2.46,0.62,2.18,0.68,1.82],["C",0.728,1.532,0.94,1.44,1.18,1.62]]},{"loai":"rau","dau":1,"d":[["M",1.92,2.54],["C",2.14,2.48,2.12,2.18,1.66,2.14]]}]
        }
      ]
    },
    "P": {
      "rong": 1.9,
      "vao": [0.86,2.5],
      "ra": [0.88,1.35],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"mocnguoctrai","d":[["M",0.86,2.5],["C",0.76,2.15,0.74,1.15,0.68,0.48],["C",0.651,0.158,0.56,0,0.38,0],["C",0.2,0,0.08,0.1,0.08,0.28],["C",0.08,0.42,0.16,0.5,0.28,0.5]]},{"loai":"congtren","d":[["M",0.32,2],["C",0.42,2.38,0.76,2.5,1.12,2.5],["C",1.56,2.5,1.84,2.26,1.84,1.88],["C",1.84,1.48,1.46,1.28,0.88,1.35]]}]
        }
      ]
    },
    "Q": {
      "rong": 2.25,
      "vao": [1,2.5],
      "ra": [2.2,0.54],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congkin","d":[["M",1,2.5],["C",0.481,2.5,0.06,1.94,0.06,1.25],["C",0.06,0.56,0.481,0,1,0],["C",1.519,0,1.94,0.56,1.94,1.25],["C",1.94,1.94,1.54,2.46,1.04,2.46],["C",0.74,2.46,0.62,2.18,0.68,1.82],["C",0.728,1.532,0.94,1.44,1.18,1.62]]},{"loai":"luonngang","d":[["M",0.62,0.36],["C",0.78,0.6,1.04,0.56,1.28,0.32],["C",1.43,0.17,1.54,0,1.68,0],["C",1.86,0,2.03,0.25,2.2,0.54]]}]
        }
      ]
    },
    "R": {
      "rong": 2.2,
      "vao": [0.86,2.5],
      "ra": [2.16,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"mocnguoctrai","d":[["M",0.86,2.5],["C",0.76,2.15,0.74,1.15,0.68,0.48],["C",0.651,0.158,0.56,0,0.38,0],["C",0.2,0,0.08,0.1,0.08,0.28],["C",0.08,0.42,0.16,0.5,0.28,0.5]]},{"loai":"congtren","d":[["M",0.32,2],["C",0.42,2.38,0.74,2.5,1.08,2.5],["C",1.48,2.5,1.74,2.26,1.74,1.92],["C",1.74,1.52,1.36,1.24,0.94,1.31],["C",0.82,1.33,0.71,1.36,0.71,1.42],["C",0.71,1.52,0.92,1.54,1.12,1.42],["C",1.47,1.21,1.6,0.92,1.6,0.44],["C",1.6,0.14,1.7,0,1.86,0],["C",2.04,0,2.14,0.18,2.16,0.5]]}]
        }
      ]
    },
    "S": {
      "rong": 1.7,
      "vao": [0.82,2.5],
      "ra": [0.5,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congduoi","d":[["M",0.82,2.5],["C",0.82,2.2,0.92,1.96,1.08,1.96],["C",1.26,1.96,1.38,2.08,1.38,2.24],["C",1.38,2.4,1.26,2.5,1.08,2.5],["C",0.68,2.5,0.44,2.26,0.44,1.92],["C",0.44,1.54,0.76,1.42,1.06,1.28],["C",1.39,1.126,1.58,0.96,1.58,0.68],["C",1.58,0.22,1.26,0,0.82,0],["C",0.36,0,0.1,0.14,0.1,0.36],["C",0.1,0.56,0.3,0.62,0.5,0.5]]}]
        }
      ]
    },
    "T": {
      "rong": 2,
      "vao": [0.28,1.94],
      "ra": [1.58,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"luonngang","d":[["M",0.28,1.94],["C",0.08,2.08,0.12,2.42,0.44,2.46],["C",0.68,2.49,0.92,2.3,1.2,2.3],["C",1.3,2.3,1.36,2.34,1.36,2.4],["C",1.36,2.46,1.3,2.5,1.2,2.5],["C",0.76,2.5,0.16,1.72,0.16,0.92],["C",0.16,0.34,0.48,0,0.98,0],["C",1.48,0,1.84,0.16,1.84,0.44],["C",1.84,0.68,1.68,0.72,1.58,0.5]]}]
        }
      ]
    },
    "U": {
      "rong": 2.25,
      "vao": [0.24,2],
      "ra": [2.2,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"mochaidauhoa","d":[["M",0.24,2],["C",0.1,2.04,0.06,2.14,0.06,2.26],["C",0.06,2.42,0.2,2.5,0.38,2.5],["C",0.58,2.5,0.68,2.36,0.68,2.14],["L",0.68,0.48],["C",0.68,0.16,0.86,0,1.16,0],["C",1.48,0,1.66,0.28,1.66,0.75]]},{"loai":"mocnguoc","lien":1,"d":[["M",1.66,0.75],["L",1.66,2.5],["L",1.66,0.44],["C",1.66,0.14,1.76,0,1.92,0],["C",2.1,0,2.18,0.18,2.2,0.5]]}]
        }
      ]
    },
    "Ư": {
      "rong": 2.25,
      "vao": [0.24,2],
      "ra": [2.2,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"mochaidauhoa","d":[["M",0.24,2],["C",0.1,2.04,0.06,2.14,0.06,2.26],["C",0.06,2.42,0.2,2.5,0.38,2.5],["C",0.58,2.5,0.68,2.36,0.68,2.14],["L",0.68,0.48],["C",0.68,0.16,0.86,0,1.16,0],["C",1.48,0,1.66,0.28,1.66,0.75]]},{"loai":"mocnguoc","lien":1,"d":[["M",1.66,0.75],["L",1.66,2.5],["L",1.66,0.44],["C",1.66,0.14,1.76,0,1.92,0],["C",2.1,0,2.18,0.18,2.2,0.5]]},{"loai":"rau","dau":1,"d":[["M",1.98,2.54],["C",2.16,2.5,2.12,2.28,1.66,2.32]]}]
        }
      ]
    },
    "V": {
      "rong": 2.1,
      "vao": [0.18,2],
      "ra": [2.06,2],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"luonngang","d":[["M",0.18,2],["C",0.06,2.16,0.14,2.46,0.36,2.46],["C",0.56,2.46,0.72,2.3,0.94,2.5]]},{"loai":"luondoc","lien":1,"d":[["M",0.94,2.5],["C",0.84,1.95,1.06,0.7,1.02,0]]},{"loai":"mocxuoiphai","lien":1,"d":[["M",1.02,0],["C",1.26,0.35,1.5,1.35,1.66,2.1],["C",1.724,2.4,1.78,2.5,1.88,2.5],["C",2,2.5,2.08,2.32,2.06,2]]}]
        }
      ]
    },
    "X": {
      "rong": 2.15,
      "vao": [0.16,2],
      "ra": [1.98,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"mochaidauhoa","d":[["M",0.16,2],["C",0.18,2.34,0.34,2.5,0.56,2.5],["C",0.84,2.5,0.96,1.98,0.94,1.3],["C",0.924,0.756,0.76,0,0.44,0],["C",0.28,0,0.18,0.06,0.24,0.14],["C",0.48,0.46,0.78,0.87,1.06,1.25],["C",1.34,1.63,1.64,2.04,1.88,2.36],["C",1.94,2.44,1.84,2.5,1.68,2.5],["C",1.36,2.5,1.16,1.9,1.18,1.2],["C",1.196,0.64,1.32,0,1.58,0],["C",1.82,0,1.98,0.2,1.98,0.5]]}]
        }
      ]
    },
    "Y": {
      "rong": 2.15,
      "vao": [0.24,2],
      "ra": [2.08,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"mochaidauhoa","d":[["M",0.24,2],["C",0.1,2.04,0.06,2.14,0.06,2.26],["C",0.06,2.42,0.2,2.5,0.38,2.5],["C",0.58,2.5,0.68,2.36,0.68,2.14],["L",0.68,0.48],["C",0.68,0.16,0.86,0,1.16,0],["C",1.48,0,1.66,0.28,1.66,0.75]]},{"loai":"khuyetduoi","lien":1,"d":[["M",1.66,0.75],["L",1.66,2.5],["L",1.66,-1.1],["C",1.66,-1.38,1.56,-1.5,1.42,-1.5],["C",1.26,-1.5,1.18,-1.36,1.2,-1.14],["C",1.24,-0.7,1.671,0.178,2.08,0.5]]}]
        }
      ]
    },
    "f": {
      "rong": 0.64,
      "vao": [0,0.5],
      "ra": [0.64,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"khuyettren","d":[["M",0,0.5],["C",0.2,1.291,0.44,1.8,0.44,2.2],["C",0.44,2.42,0.36,2.5,0.27,2.5],["C",0.17,2.5,0.14,2.38,0.14,2.15],["L",0.14,0]]},{"loai":"khuyetduoi","lien":1,"d":[["M",0.14,0],["L",0.14,-1.15],["C",0.14,-1.38,0.17,-1.5,0.27,-1.5],["C",0.36,-1.5,0.44,-1.42,0.44,-1.2],["C",0.44,-0.8,0.34,-0.3,0.14,0]]},{"loai":"mocnguoc","lien":1,"d":[["M",0.14,0],["C",0.26,0,0.48,0.18,0.64,0.5]]}]
        }
      ]
    },
    "j": {
      "rong": 0.66,
      "vao": [0.08,0.5],
      "ra": [0.66,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"hat","d":[["M",0.08,0.5],["C",0.18,0.62,0.28,0.8,0.36,1]]},{"loai":"khuyetduoi","lien":1,"d":[["M",0.36,1],["L",0.36,-1.15],["C",0.36,-1.4,0.28,-1.5,0.18,-1.5],["C",0.06,-1.5,0,-1.4,0.02,-1.2],["C",0.06,-0.75,0.3,0.057,0.66,0.5]]},{"loai":"cham","dau":1,"d":[["M",0.36,1.4],["L",0.37,1.38]]}]
        }
      ]
    },
    "w": {
      "rong": 1.5,
      "vao": [0,0.5],
      "ra": [1.5,0.88],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"hat","d":[["M",0,0.5],["C",0.1,0.62,0.2,0.8,0.28,1]]},{"loai":"mocnguoc","lien":1,"d":[["M",0.28,1],["L",0.28,0.28],["C",0.28,0.08,0.37,0,0.49,0],["C",0.62,0,0.8,0.18,0.8,0.5]]},{"loai":"mocnguoc","lien":1,"d":[["M",0.8,0.5],["L",0.8,1],["L",0.8,0.3],["C",0.8,0.08,0.92,0,1.03,0],["C",1.22,0,1.3,0.5,1.26,0.94]]},{"loai":"that","lien":1,"d":[["M",1.26,0.94],["C",1.22,1.04,1.12,0.98,1.18,0.9],["C",1.24,0.84,1.38,0.86,1.5,0.88]]}]
        }
      ]
    },
    "z": {
      "rong": 0.84,
      "vao": [0.02,0.8],
      "ra": [0.84,0.42],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"luonngang","d":[["M",0.02,0.8],["C",0.05,0.94,0.13,1,0.24,1],["C",0.4,1,0.56,0.98,0.68,1]]},{"loai":"xienphai","lien":1,"d":[["M",0.68,1],["L",0.08,0]]},{"loai":"mocnguoc","lien":1,"d":[["M",0.08,0],["L",0.62,0],["C",0.72,0,0.8,0.14,0.84,0.42]]}]
        }
      ]
    },
    "F": {
      "rong": 1.9,
      "vao": [0.22,2],
      "ra": [1.54,1.28],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"luonngang","d":[["M",0.22,2],["C",0.08,2.18,0.16,2.48,0.42,2.48],["C",0.62,2.48,0.72,2.4,0.86,2.4],["C",1.16,2.4,1.48,2.5,1.84,2.5]]},{"loai":"mocnguoctrai","d":[["M",0.86,2.4],["C",0.77,2.08,0.74,1.15,0.68,0.48],["C",0.651,0.158,0.56,0,0.38,0],["C",0.2,0,0.08,0.1,0.08,0.28],["C",0.08,0.42,0.16,0.5,0.28,0.5]]},{"loai":"luonngang","d":[["M",0.48,1.22],["C",0.68,1.32,0.88,1.3,1.04,1.25],["C",1.2,1.2,1.38,1.2,1.54,1.28]]}]
        }
      ]
    },
    "J": {
      "rong": 1.4,
      "vao": [0.18,2],
      "ra": [1.36,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"luonngang","d":[["M",0.18,2],["C",0.06,2.16,0.14,2.46,0.36,2.46],["C",0.56,2.46,0.72,2.3,0.94,2.5]]},{"loai":"khuyetduoi","lien":1,"d":[["M",0.94,2.5],["L",0.94,-1.1],["C",0.94,-1.38,0.84,-1.5,0.7,-1.5],["C",0.54,-1.5,0.46,-1.36,0.48,-1.14],["C",0.52,-0.7,0.951,0.178,1.36,0.5]]}]
        }
      ]
    },
    "W": {
      "rong": 2.8,
      "vao": [0.16,2],
      "ra": [2.74,2],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"luonngang","d":[["M",0.16,2],["C",0.05,2.16,0.12,2.46,0.32,2.46],["C",0.5,2.46,0.64,2.3,0.84,2.5]]},{"loai":"luondoc","lien":1,"d":[["M",0.84,2.5],["C",0.76,1.95,0.98,0.7,0.96,0]]},{"loai":"xienphai","lien":1,"d":[["M",0.96,0],["C",1.16,0.45,1.44,1.75,1.62,2.5]]},{"loai":"luondoc","lien":1,"d":[["M",1.62,2.5],["C",1.56,1.95,1.8,0.7,1.78,0]]},{"loai":"mocxuoiphai","lien":1,"d":[["M",1.78,0],["C",2,0.35,2.22,1.35,2.36,2.1],["C",2.416,2.4,2.46,2.5,2.56,2.5],["C",2.68,2.5,2.76,2.32,2.74,2]]}]
        }
      ]
    },
    "Z": {
      "rong": 2,
      "vao": [0.24,2],
      "ra": [1.94,0.5],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"luonngang","d":[["M",0.24,2],["C",0.1,2.16,0.16,2.48,0.46,2.48],["C",0.78,2.48,1.06,2.34,1.38,2.38],["C",1.54,2.4,1.66,2.45,1.74,2.5]]},{"loai":"xienphai","lien":1,"d":[["M",1.74,2.5],["C",1.26,1.72,0.66,0.78,0.18,0]]},{"loai":"luonngang","lien":1,"d":[["M",0.18,0],["C",0.42,0.18,0.72,0.18,1.02,0.08],["C",1.2,0.02,1.3,0,1.42,0],["C",1.66,0,1.82,0.2,1.94,0.5]]}]
        }
      ]
    },
    ".": {
      "rong": 0.16,
      "vao": [0.08,0.05],
      "ra": [0.09,0.03],
      "cach": [{"ten":"Cách 1","net":[{"loai":"cham","d":[["M",0.08,0.05],["L",0.09,0.03]]}]}]
    },
    ",": {
      "rong": 0.2,
      "vao": [0.14,0.06],
      "ra": [0.04,-0.3],
      "cach": [{"ten":"Cách 1","net":[{"loai":"conghotrai","d":[["M",0.14,0.06],["C",0.15,-0.06,0.11,-0.2,0.04,-0.3]]}]}]
    },
    ";": {
      "rong": 0.2,
      "vao": [0.13,0.75],
      "ra": [0.04,-0.3],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"cham","d":[["M",0.13,0.75],["L",0.14,0.73]]},{"loai":"conghotrai","d":[["M",0.14,0.06],["C",0.15,-0.06,0.11,-0.2,0.04,-0.3]]}]
        }
      ]
    },
    ":": {
      "rong": 0.16,
      "vao": [0.08,0.75],
      "ra": [0.09,0.03],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"cham","d":[["M",0.08,0.75],["L",0.09,0.73]]},{"loai":"cham","d":[["M",0.08,0.05],["L",0.09,0.03]]}]
        }
      ]
    },
    "!": {
      "rong": 0.18,
      "vao": [0.09,2],
      "ra": [0.1,0.03],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"so","d":[["M",0.09,2],["L",0.09,0.44]]},{"loai":"cham","d":[["M",0.09,0.05],["L",0.1,0.03]]}]
        }
      ]
    },
    "?": {
      "rong": 0.96,
      "vao": [0.08,1.56],
      "ra": [0.47,0.03],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"conghotrai","d":[["M",0.08,1.56],["C",0.08,1.84,0.24,2,0.48,2],["C",0.72,2,0.88,1.82,0.88,1.54],["C",0.88,1.18,0.46,1.1,0.46,0.76],["L",0.46,0.44]]},{"loai":"cham","d":[["M",0.46,0.05],["L",0.47,0.03]]}]
        }
      ]
    },
    "-": {
      "rong": 0.64,
      "vao": [0.04,0.5],
      "ra": [0.6,0.5],
      "cach": [{"ten":"Cách 1","net":[{"loai":"ngang","d":[["M",0.04,0.5],["L",0.6,0.5]]}]}]
    },
    "–": {
      "rong": 1.08,
      "vao": [0.04,0.5],
      "ra": [1.04,0.5],
      "cach": [{"ten":"Cách 1","net":[{"loai":"ngang","d":[["M",0.04,0.5],["L",1.04,0.5]]}]}]
    },
    "—": {
      "rong": 1.76,
      "vao": [0.04,0.5],
      "ra": [1.72,0.5],
      "cach": [{"ten":"Cách 1","net":[{"loai":"ngang","d":[["M",0.04,0.5],["L",1.72,0.5]]}]}]
    },
    "(": {
      "rong": 0.54,
      "vao": [0.48,2.2],
      "ra": [0.48,-0.4],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"conghophai","d":[["M",0.48,2.2],["C",0.2,1.84,0.08,1.38,0.08,0.9],["C",0.08,0.42,0.2,-0.04,0.48,-0.4]]}]
        }
      ]
    },
    ")": {
      "rong": 0.54,
      "vao": [0.06,2.2],
      "ra": [0.06,-0.4],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"conghotrai","d":[["M",0.06,2.2],["C",0.34,1.84,0.46,1.38,0.46,0.9],["C",0.46,0.42,0.34,-0.04,0.06,-0.4]]}]
        }
      ]
    },
    "[": {
      "rong": 0.56,
      "vao": [0.5,2.2],
      "ra": [0.5,-0.4],
      "cach": [{"ten":"Cách 1","net":[{"loai":"so","d":[["M",0.5,2.2],["L",0.1,2.2],["L",0.1,-0.4],["L",0.5,-0.4]]}]}]
    },
    "]": {
      "rong": 0.56,
      "vao": [0.06,2.2],
      "ra": [0.06,-0.4],
      "cach": [{"ten":"Cách 1","net":[{"loai":"so","d":[["M",0.06,2.2],["L",0.46,2.2],["L",0.46,-0.4],["L",0.06,-0.4]]}]}]
    },
    "\"": {
      "rong": 0.48,
      "vao": [0.1,2.48],
      "ra": [0.38,2.02],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"so","d":[["M",0.1,2.48],["L",0.1,2.02]]},{"loai":"so","d":[["M",0.38,2.48],["L",0.38,2.02]]}]
        }
      ]
    },
    "'": {
      "rong": 0.2,
      "vao": [0.1,2.48],
      "ra": [0.1,2.02],
      "cach": [{"ten":"Cách 1","net":[{"loai":"so","d":[["M",0.1,2.48],["L",0.1,2.02]]}]}]
    },
    "“": {
      "rong": 0.56,
      "vao": [0.22,2.5],
      "ra": [0.4,2.02],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"conghophai","d":[["M",0.22,2.5],["C",0.08,2.38,0.04,2.16,0.12,2.02]]},{"loai":"conghophai","d":[["M",0.5,2.5],["C",0.36,2.38,0.32,2.16,0.4,2.02]]}]
        }
      ]
    },
    "”": {
      "rong": 0.56,
      "vao": [0.14,2.48],
      "ra": [0.32,2],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"conghotrai","d":[["M",0.14,2.48],["C",0.22,2.34,0.18,2.12,0.04,2]]},{"loai":"conghotrai","d":[["M",0.42,2.48],["C",0.5,2.34,0.46,2.12,0.32,2]]}]
        }
      ]
    },
    "‘": {
      "rong": 0.28,
      "vao": [0.22,2.5],
      "ra": [0.12,2.02],
      "cach": [{"ten":"Cách 1","net":[{"loai":"conghophai","d":[["M",0.22,2.5],["C",0.08,2.38,0.04,2.16,0.12,2.02]]}]}]
    },
    "’": {
      "rong": 0.28,
      "vao": [0.14,2.48],
      "ra": [0.04,2],
      "cach": [{"ten":"Cách 1","net":[{"loai":"conghotrai","d":[["M",0.14,2.48],["C",0.22,2.34,0.18,2.12,0.04,2]]}]}]
    },
    "…": {
      "rong": 0.9,
      "vao": [0.08,0.05],
      "ra": [0.81,0.03],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"cham","d":[["M",0.08,0.05],["L",0.09,0.03]]},{"loai":"cham","d":[["M",0.44,0.05],["L",0.45,0.03]]},{"loai":"cham","d":[["M",0.8,0.05],["L",0.81,0.03]]}]
        }
      ]
    },
    "/": {
      "rong": 0.9,
      "vao": [0.84,2.2],
      "ra": [0.06,-0.3],
      "cach": [{"ten":"Cách 1","net":[{"loai":"xienphai","d":[["M",0.84,2.2],["L",0.06,-0.3]]}]}]
    },
    "\\": {
      "rong": 0.9,
      "vao": [0.06,2.2],
      "ra": [0.84,-0.3],
      "cach": [{"ten":"Cách 1","net":[{"loai":"xientrai","d":[["M",0.06,2.2],["L",0.84,-0.3]]}]}]
    },
    "&": {
      "rong": 1.5,
      "vao": [1.38,0],
      "ra": [1.42,1.04],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congkin","d":[["M",1.38,0],["C",1.06,0.42,0.36,1.24,0.36,1.64],["C",0.36,1.88,0.48,2,0.66,2],["C",0.84,2,0.96,1.88,0.96,1.66],["C",0.96,1.32,0.08,1.06,0.08,0.54],["C",0.08,0.18,0.3,0,0.6,0],["C",0.94,0,1.18,0.52,1.42,1.04]]}]
        }
      ]
    },
    "@": {
      "rong": 1.76,
      "vao": [0.94,1.176],
      "ra": [1.5,0.18],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congkin","d":[["M",0.94,1.176],["C",0.822,1.304,0.645,1.284,0.546,1.131],["C",0.446,0.979,0.462,0.752,0.58,0.624],["C",0.698,0.496,0.875,0.516,0.974,0.669],["C",1.074,0.821,1.058,1.048,0.94,1.176]]},{"loai":"conghophai","d":[["M",1.04,1.26],["L",1.04,0.74],["C",1.04,0.56,1.16,0.5,1.32,0.5],["C",1.56,0.5,1.7,0.72,1.7,0.98],["C",1.7,1.48,1.36,1.8,0.88,1.8],["C",0.4,1.8,0.06,1.42,0.06,0.9],["C",0.06,0.38,0.42,0,0.9,0],["C",1.16,0,1.36,0.06,1.5,0.18]]}]
        }
      ]
    },
    "#": {
      "rong": 1.32,
      "vao": [0.52,2],
      "ra": [1.2,0.66],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"xienphai","d":[["M",0.52,2],["L",0.28,0]]},{"loai":"xienphai","d":[["M",1.04,2],["L",0.8,0]]},{"loai":"ngang","d":[["M",0.12,1.34],["L",1.26,1.34]]},{"loai":"ngang","d":[["M",0.06,0.66],["L",1.2,0.66]]}]
        }
      ]
    },
    "%": {
      "rong": 1.48,
      "vao": [0.44,1.952],
      "ra": [1.28,0.672],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"congkin","d":[["M",0.44,1.952],["C",0.325,2.051,0.178,1.992,0.112,1.82],["C",0.046,1.648,0.085,1.428,0.2,1.328],["C",0.315,1.229,0.462,1.288,0.528,1.46],["C",0.594,1.632,0.555,1.852,0.44,1.952]]},{"loai":"xienphai","d":[["M",1.24,2],["L",0.24,0]]},{"loai":"congkin","d":[["M",1.28,0.672],["C",1.165,0.771,1.018,0.712,0.952,0.54],["C",0.886,0.368,0.925,0.148,1.04,0.048],["C",1.155,-0.051,1.302,0.008,1.368,0.18],["C",1.434,0.352,1.395,0.572,1.28,0.672]]}]
        }
      ]
    },
    "+": {
      "rong": 1.08,
      "vao": [0.06,0.9],
      "ra": [0.54,0.42],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"ngang","d":[["M",0.06,0.9],["L",1.02,0.9]]},{"loai":"so","d":[["M",0.54,1.38],["L",0.54,0.42]]}]
        }
      ]
    },
    "=": {
      "rong": 1.08,
      "vao": [0.06,1.12],
      "ra": [1.02,0.68],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"ngang","d":[["M",0.06,1.12],["L",1.02,1.12]]},{"loai":"ngang","d":[["M",0.06,0.68],["L",1.02,0.68]]}]
        }
      ]
    },
    "*": {
      "rong": 0.88,
      "vao": [0.44,2.1],
      "ra": [0.111,1.53],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"so","d":[["M",0.44,2.1],["L",0.44,1.34]]},{"loai":"xientrai","d":[["M",0.111,1.91],["L",0.769,1.53]]},{"loai":"xienphai","d":[["M",0.769,1.91],["L",0.111,1.53]]}]
        }
      ]
    },
    "<": {
      "rong": 1.04,
      "vao": [0.96,1.38],
      "ra": [0.96,0.42],
      "cach": [{"ten":"Cách 1","net":[{"loai":"xienphai","d":[["M",0.96,1.38],["L",0.08,0.9],["L",0.96,0.42]]}]}]
    },
    ">": {
      "rong": 1.04,
      "vao": [0.08,1.38],
      "ra": [0.08,0.42],
      "cach": [{"ten":"Cách 1","net":[{"loai":"xientrai","d":[["M",0.08,1.38],["L",0.96,0.9],["L",0.08,0.42]]}]}]
    },
    "_": {
      "rong": 1.08,
      "vao": [0.02,-0.25],
      "ra": [1.06,-0.25],
      "cach": [{"ten":"Cách 1","net":[{"loai":"ngang","d":[["M",0.02,-0.25],["L",1.06,-0.25]]}]}]
    },
    "~": {
      "rong": 1.08,
      "vao": [0.06,0.84],
      "ra": [1.02,0.96],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"luonngang","d":[["M",0.06,0.84],["C",0.18,1.08,0.38,1.08,0.54,0.9],["C",0.7,0.72,0.9,0.72,1.02,0.96]]}]
        }
      ]
    },
    "^": {
      "rong": 0.92,
      "vao": [0.08,1.48],
      "ra": [0.84,1.48],
      "cach": [{"ten":"Cách 1","net":[{"loai":"mu","d":[["M",0.08,1.48],["L",0.46,2],["L",0.84,1.48]]}]}]
    },
    "|": {
      "rong": 0.2,
      "vao": [0.1,2.2],
      "ra": [0.1,-0.4],
      "cach": [{"ten":"Cách 1","net":[{"loai":"so","d":[["M",0.1,2.2],["L",0.1,-0.4]]}]}]
    },
    "$": {
      "rong": 1.04,
      "vao": [0.88,1.66],
      "ra": [0.52,-0.3],
      "cach": [
        {
          "ten": "Cách 1",
          "net": [{"loai":"conghotrai","d":[["M",0.88,1.66],["C",0.84,1.9,0.7,2,0.52,2],["C",0.28,2,0.12,1.82,0.12,1.54],["C",0.12,1.18,0.42,1.1,0.54,1.04],["C",0.74,0.94,0.94,0.82,0.94,0.5],["C",0.94,0.18,0.74,0,0.5,0],["C",0.28,0,0.14,0.14,0.1,0.36]]},{"loai":"so","d":[["M",0.52,2.3],["L",0.52,-0.3]]}]
        }
      ]
    }
  },
  "DUCTUS": {},
  "SOTAY": {
    "th-lq1": [
      "Ngồi thẳng lưng, cầm viết nhẹ tay và quen mắt với lưới 4 ô li. Ở cỡ Thường, thân chữ đứng trên đường chân và cao 2 ô li.",
      [
        "Ngồi thẳng lưng, không tì ngực vào bàn, mắt cách màn hình hay trang giấy chừng một gang tay lớn. Cầm viết bằng ba ngón tay: ngón cái và ngón trỏ giữ hai bên, ngón giữa đỡ bên dưới.",
        "Xem viết chậm để biết chấm xanh là chỗ đặt viết, chấm đỏ là chỗ dừng viết. Tập kéo nét ngang trên đường kẻ 2 từ trái qua phải.",
        "Tập kéo nét sổ thẳng từ đường kẻ 3 xuống chạm đường chân, rồi tự viết thêm ở dòng trống."
      ],
      [
        "Cúi sát mặt xuống bàn hoặc tì ngực vào mép bàn.",
        "Bóp viết quá chặt, cầm sát đầu ngòi làm tay nhanh mỏi.",
        "Kéo quá chấm đỏ hoặc dừng lơ lửng chưa chạm đường chân."
      ]
    ],
    "th-n1": [
      "Nét ngang và nét sổ thẳng giúp tay kéo thẳng, đều nét. Hai nét này có mặt trong nhiều chữ như t, đ, p, q và các chữ số.",
      [
        "Xem viết chậm để thấy hướng kéo và độ dài của từng nét trên lưới 4 ô li.",
        "Nét ngang: đặt viết trên đường kẻ 2, kéo thẳng từ trái qua phải, giữ nét nằm gọn trên đường kẻ rồi dừng viết.",
        "Nét sổ thẳng: đặt viết trên đường kẻ 3, kéo thẳng từ trên xuống theo đường kẻ dọc, dừng đúng đường chân."
      ],
      [
        "Kéo nét ngang từ phải qua trái hoặc bị xiên lên, xiên xuống.",
        "Kéo nét sổ thẳng từ dưới lên hoặc thân nét bị nghiêng, cong.",
        "Kéo vượt xuống dưới đường chân hay dừng quá sớm."
      ]
    ],
    "th-n2": [
      "Hai nét xiên đều kéo từ trên xuống, còn nét hất đưa nhẹ từ dưới lên. Nét hất là nét mở đầu của các chữ i, t, u, ư, p, y.",
      [
        "Nét xiên trái: đặt viết trên đường kẻ 3, kéo thẳng xiên xuống qua phải, dừng ở đường chân.",
        "Nét xiên phải: đặt viết trên đường kẻ 3, kéo thẳng xiên xuống qua trái, dừng ở đường chân.",
        "Nét hất: đặt viết trên đường kẻ 2, đưa nhẹ từ dưới lên hơi cong qua phải, dừng ở đường kẻ 3."
      ],
      [
        "Kéo nét xiên từ dưới lên thay vì kéo từ đường kẻ 3 xuống.",
        "Kéo nét xiên quá nghiêng hoặc gần như thẳng đứng giống nét sổ.",
        "Nét hất đặt sát đường chân hoặc kéo cao vượt đường kẻ 3."
      ]
    ],
    "th-n3": [
      "Ba nét móc là gốc của các chữ i, t, u, ư, n, m, p. Đầu móc cong tròn, thân nét thẳng theo đường kẻ dọc.",
      [
        "Xem viết chậm để thấy chiều đưa viết của từng nét móc.",
        "Nét móc xuôi: uốn lên chạm đường kẻ 3 rồi kéo thẳng xuống đường chân. Nét móc ngược: kéo thẳng xuống gần đường chân, uốn cong qua phải, dừng ở đường kẻ 2.",
        "Nét móc hai đầu: ghép đầu móc xuôi với chân móc ngược, thân giữa thẳng đứng."
      ],
      [
        "Đầu móc nhọn hoặc dẹt vì không uốn tròn.",
        "Thân nét nghiêng qua trái hay qua phải.",
        "Bụng móc hai đầu quá rộng làm chữ bè ra."
      ]
    ],
    "th-n4": [
      "Ba nét cong đều cao 2 ô li và cần uốn tròn đều. Cong hở phải và cong kín đi ngược chiều kim đồng hồ, còn cong hở trái đi theo chiều kim đồng hồ.",
      [
        "Nét cong hở phải: đặt viết dưới đường kẻ 3 một chút, phía bên phải. Vòng lên chạm đường kẻ 3, uốn cong qua trái xuống chạm đường chân rồi lượn nhẹ lên, dừng dưới đường kẻ 2.",
        "Nét cong hở trái: đặt viết dưới đường kẻ 3 một chút, phía bên trái. Vòng lên chạm đường kẻ 3, uốn cong qua phải xuống chạm đường chân rồi lượn nhẹ lên, dừng dưới đường kẻ 2.",
        "Nét cong kín: đặt viết dưới đường kẻ 3 một chút, phía bên phải, đưa vòng lên chạm đường kẻ 3 rồi vòng qua trái xuống chạm đường chân, vòng lên khép kín đúng chỗ đặt viết."
      ],
      [
        "Vòng nét cong hở phải hay cong kín theo chiều kim đồng hồ.",
        "Nét cong bị méo, dẹt hoặc kéo quá rộng ra hai bên.",
        "Nét cong kín chưa chạm đường chân hoặc không khép kín, hở miệng."
      ]
    ],
    "th-n5": [
      "Nét khuyết trên và khuyết dưới đều cao 5 ô li, có vòng khuyết thon gọn. Nét thắt là một vòng xoắn nhỏ dùng cho các chữ b, k, v, r, s.",
      [
        "Nét khuyết trên: đặt viết trên đường kẻ 2 một chút, đưa cong lên chạm đường kẻ 6, uốn tròn đầu rồi kéo thẳng xuống đường chân. Hai nét giao nhau ở đường kẻ 3.",
        "Nét khuyết dưới: đặt viết ở đường kẻ 3, kéo thẳng xuống 3 ô li dưới đường chân, uốn tròn đáy rồi đưa xiên lên, giao nhau ở đường chân và dừng ở đường kẻ 2.",
        "Nét thắt: đặt viết trên đường kẻ 2 một chút, đưa cong lên chạm đường kẻ 3, xoắn một vòng nhỏ rồi đưa nhẹ qua phải, dừng dưới đường kẻ 3."
      ],
      [
        "Chỗ giao nhau của nét khuyết bị lệch lên trên hay tụt xuống dưới đường kẻ.",
        "Đầu nét khuyết bị nhọn hoặc phình quá lớn.",
        "Vòng thắt quá lớn làm nét bị rối, mất gọn."
      ]
    ],
    "th-s1": [
      "Chữ số ở cỡ Thường cao 4 ô li, từ đường chân tới đường kẻ 5. Ba số 1, 4, 7 gồm các nét thẳng và nét xiên rõ góc.",
      [
        "Số 1: đặt viết gần đường kẻ 4, đưa xiên ngắn lên qua phải chạm đường kẻ 5, rồi giữ liền tay kéo thẳng xuống đường chân.",
        "Số 4: đặt viết ở đường kẻ 5, kéo xiên qua trái tới trên đường kẻ 2 một chút rồi kéo ngang liền qua phải. Lia viết lên gần đường kẻ 4, kéo nét sổ thẳng cắt ngang xuống đường chân.",
        "Số 7: đặt viết ở đường kẻ 5, kéo nét ngang qua phải rồi kéo liền nét xiên xuống đường chân. Lia viết tới đường kẻ 3, gạch một nét ngang ngắn cắt giữa nét xiên."
      ],
      [
        "Viết chữ số thấp chỉ cao 2 ô li như chữ o.",
        "Nét xiên đầu của số 1 quá dài hoặc kéo cong.",
        "Quên gạch ngang giữa số 7, hoặc nét sổ của số 4 không kéo thẳng xuống đường chân."
      ]
    ],
    "th-s2": [
      "Số 2, 3, 5 đều cao 4 ô li, rộng khoảng 2 ô li và có nét cong hở trái. Uốn phần cong tròn đều để chữ số gọn và cân đối.",
      [
        "Số 2: đặt viết ở đường kẻ 4, vòng cong lên chạm đường kẻ 5 rồi lượn xuống, kéo xiên qua trái tới đường chân và kéo liền nét ngang qua phải.",
        "Số 3: đặt viết trên đường kẻ 4 một chút, uốn nét cong hở trái chạm đường kẻ 5 vào gần đường kẻ 3, rồi uốn liền nét cong thứ hai chạm đường chân, dừng dưới đường kẻ 2.",
        "Số 5: đặt viết ở đường kẻ 5, kéo thẳng xuống gần đường kẻ 3 rồi uốn liền nét cong hở trái chạm đường chân. Lia viết trở lại đường kẻ 5, kéo nét ngang qua phải."
      ],
      [
        "Phần cong của số 2, 3, 5 kéo bè rộng quá 2 ô li.",
        "Nét ngang đáy của số 2 bị cong hoặc không nằm sát đường chân.",
        "Quên viết nét ngang trên cùng của số 5 hoặc kéo lệch khỏi đầu nét sổ."
      ]
    ],
    "th-s3": [
      "Bốn số 0, 6, 8, 9 đều cao 4 ô li và dùng nhiều nét cong khép kín. Giữ các vòng cong tròn đều, không bè ngang.",
      [
        "Số 0: đặt viết dưới đường kẻ 5 một chút, vòng ngược chiều kim đồng hồ xuống chạm đường chân rồi khép kín lại. Số 6: đặt viết gần đường kẻ 5, vòng qua trái xuống chạm đường chân rồi uốn lên khép bụng tròn ở nửa dưới.",
        "Số 8: đặt viết giữa đường kẻ 4 và đường kẻ 5, vòng lên chạm đường kẻ 5 qua trái rồi lượn chéo xuống qua phải chạm đường chân, vòng qua trái đưa chéo lên khép kín chỗ đặt viết.",
        "Số 9: viết nét cong kín ở nửa trên, từ đường kẻ 5 xuống chạm đường kẻ 3. Sau đó đặt viết ở mép phải trên đường kẻ 4, kéo cong xuống chạm đường chân rồi lượn nhẹ lên qua trái."
      ],
      [
        "Vòng cong của số 0, 6, 9 bị hở miệng, không khép kín.",
        "Vòng trên của số 8 lớn hơn vòng dưới làm số mất cân đối.",
        "Nhầm chiều giữa số 6 và số 9, hoặc bụng tròn số 6 quá lớn vượt đường kẻ 3."
      ]
    ],
    "th-c1": [
      "Chữ i cao 2 ô li, chữ t cao 3 ô li, cả hai đều bắt đầu bằng nét hất nối liền nét móc ngược. Viết xong thân chữ rồi mới đặt dấu chấm hay nét ngang.",
      [
        "Chữ i: đặt viết ở đường kẻ 2, viết nét hất lên đường kẻ 3, rồi kéo liền nét móc ngược xuống chạm đường chân, dừng ở đường kẻ 2. Lia viết lên trên đường kẻ 3, chấm một chấm nhỏ thẳng đầu nét móc.",
        "Chữ t: đặt viết ở đường kẻ 2, đưa nét hất lên chạm đường kẻ 4, rồi kéo liền nét móc ngược xuống đường chân, dừng ở đường kẻ 2. Lia viết lên đường kẻ 3, gạch nét ngang ngắn cắt qua thân chữ.",
        "Tập viết ti, it: nối liền từ điểm dừng ở đường kẻ 2 của chữ trước qua chữ sau, viết xong cả tiếng mới chấm i và gạch ngang t."
      ],
      [
        "Viết chữ t thấp chỉ cao 2 ô li giống chữ i, hoặc cao quá tới đường kẻ 5.",
        "Chấm đầu chữ i quá lớn như hình tròn, hoặc chấm lệch qua một bên.",
        "Gạch ngang chữ t đặt quá cao, quá thấp hay kéo quá dài."
      ]
    ],
    "th-c2": [
      "Chữ u và ư đều cao 2 ô li, gồm nét hất nối liền hai nét móc ngược. Chữ ư thêm một dấu râu nhỏ ở góc trên bên phải.",
      [
        "Chữ u: đặt viết ở đường kẻ 2, viết nét hất lên đường kẻ 3, rồi kéo liền nét móc ngược thứ nhất chạm đường chân và đưa lên tới đường kẻ 3.",
        "Giữ liền tay kéo thẳng xuống đường chân viết nét móc ngược thứ hai, dừng ở đường kẻ 2. Hai thân móc kéo thẳng, song song nhau.",
        "Chữ ư: viết giống chữ u, rồi lia viết lên trên đường kẻ 3 phía bên phải, kéo dấu râu cong nhỏ từ trên xuống chạm nhẹ đầu nét móc thứ hai."
      ],
      [
        "Hai nét móc ngược không song song, bị nghiêng hoặc chụm đáy vào nhau.",
        "Khoảng giữa hai nét móc quá hẹp hay quá rộng làm chữ bị bè.",
        "Viết dấu râu của chữ ư từ dưới lên, hoặc vẽ dấu râu quá lớn."
      ]
    ],
    "th-c3": [
      "Ba chữ n, m, p đều kết thúc bằng nét móc hai đầu. Chữ n và m cao 2 ô li; chữ p cao 4 ô li, kéo xuống dưới đường chân 2 ô li.",
      [
        "Chữ n: đặt viết giữa đường kẻ 2 và 3, viết nét móc xuôi xuống đường chân. Giữ viết rê ngược lên trên đường kẻ 2, rồi viết tiếp nét móc hai đầu dừng ở đường kẻ 2.",
        "Chữ m: viết nét móc xuôi thứ nhất xuống đường chân, rê ngược lên viết nét móc xuôi thứ hai, rồi lại rê ngược lên viết nét móc hai đầu dừng ở đường kẻ 2.",
        "Chữ p: đặt viết ở đường kẻ 2, viết nét hất lên đường kẻ 3 rồi kéo liền nét sổ thẳng xuống dưới đường chân 2 ô li. Rê viết ngược lên trên nét cũ tới đường kẻ 2, rồi viết nét móc hai đầu."
      ],
      [
        "Không rê viết trên nét cũ mà tách ra sớm làm thân chữ bị hở.",
        "Các chân nét của chữ m, n không đều nhau, đầu móc bị nhọn.",
        "Kéo nét sổ chữ p quá ngắn hoặc tụt quá sâu dưới 2 ô li."
      ]
    ],
    "th-c4": [
      "Chữ o, ô, ơ dùng chung nét cong kín cao 2 ô li, rộng 1 ô li rưỡi. Viết tròn chữ o thì các chữ a, d, đ, q, g cũng dễ.",
      [
        "Đặt viết dưới đường kẻ 3 một chút, phía bên phải. Đưa vòng qua trái, xuống chạm đường chân, rồi vòng lên khép lại.",
        "Chữ ô: lia viết lên trên, viết dấu mũ gồm hai nét xiên ngắn chạm nhau ở giữa.",
        "Chữ ơ: lia viết lên góc trên bên phải, viết dấu râu từ trên xuống, chạm nhẹ lưng chữ o."
      ],
      [
        "Vòng chữ o theo chiều kim đồng hồ.",
        "Nét cong không khép kín, hở miệng.",
        "Dấu mũ quá lớn hoặc lệch một bên; dấu râu viết từ dưới lên."
      ]
    ],
    "th-c5": [
      "Ba chữ a, ă, â đều cao 2 ô li, gồm nét cong kín ghép với nét móc ngược sát bên phải. Chữ ă và â thêm dấu phụ nhỏ gọn trên đầu.",
      [
        "Chữ a: viết nét cong kín tròn đều như chữ o. Lia viết lên đường kẻ 3 sát bên phải nét cong, kéo thẳng xuống viết nét móc ngược chạm đường chân, dừng ở đường kẻ 2.",
        "Chữ ă: viết xong chữ a, lia viết lên trên đầu chữ, viết dấu cong nhỏ từ trái qua phải, canh giữa và không chạm đường kẻ 3.",
        "Chữ â: viết xong chữ a, lia viết lên trên đầu chữ, viết dấu mũ gồm hai nét xiên ngắn chạm nhau ở giữa."
      ],
      [
        "Nét móc ngược đặt tách rời khỏi nét cong kín, để hở khe ở giữa.",
        "Nét móc ngược đè sâu vào bụng chữ a làm thân chữ bị hẹp.",
        "Dấu của ă, â quá lớn, nằm lệch một bên hoặc dính sát vào thân chữ."
      ]
    ],
    "th-c6": [
      "Chữ d, đ, q đều cao 4 ô li và bắt đầu bằng nét cong kín cao 2 ô li. Chữ d, đ có nét móc ngược vươn lên đường kẻ 5, còn chữ q có nét sổ thẳng kéo xuống dưới đường chân 2 ô li.",
      [
        "Chữ d: viết nét cong kín tròn đều. Lia viết lên đường kẻ 5 sát bên phải, kéo thẳng xuống chạm đường chân rồi uốn nét móc ngược dừng ở đường kẻ 2.",
        "Chữ đ: viết giống chữ d, rồi lia viết lên ngay trên đường kẻ 4, gạch một nét ngang ngắn cắt đều qua thân nét móc.",
        "Chữ q: viết nét cong kín, rồi lia viết lên đường kẻ 3 sát bên phải, kéo nét sổ thẳng xuống dưới đường chân 2 ô li và dừng viết."
      ],
      [
        "Nét móc của d, đ vươn quá cao lên đường kẻ 6 hoặc thấp chưa tới đường kẻ 5.",
        "Nét móc của d, đ hay nét sổ của q tách rời khỏi nét cong kín.",
        "Gạch ngang chữ đ kéo quá dài, đặt quá cao hoặc quên gạch ngang."
      ]
    ],
    "th-c7": [
      "Chữ c và x đều cao 2 ô li, dùng các nét cong hở đã học. Chữ x gồm hai nét cong ngược chiều nhau, tựa lưng nhẹ vào nhau ở giữa.",
      [
        "Chữ c: đặt viết dưới đường kẻ 3 một chút, phía bên phải. Vòng lên chạm đường kẻ 3, uốn cong qua trái xuống chạm đường chân rồi lượn nhẹ lên, dừng dưới đường kẻ 2.",
        "Chữ x: nét một là nét cong hở trái, đặt viết dưới đường kẻ 3 phía bên trái, vòng qua phải xuống chạm đường chân rồi dừng dưới đường kẻ 2.",
        "Lia viết qua phải dưới đường kẻ 3, viết nét cong hở phải chạm nhẹ vào lưng nét một ở đường kẻ 2, xuống chạm đường chân rồi dừng dưới đường kẻ 2."
      ],
      [
        "Viết chữ c quá hẹp hoặc kéo đầu nét cong khép lại gần thành chữ o.",
        "Hai nét cong của chữ x tách rời nhau hoặc đè chồng chéo lên nhau.",
        "Chữ x viết thành hai nét xiên thẳng thay vì hai nét cong mềm."
      ]
    ],
    "th-c8": [
      "Chữ e và ê cao 2 ô li, viết liền một nét cong có vòng thắt nhỏ ở nửa trên. Chữ ê thêm dấu mũ canh giữa ngay trên đầu.",
      [
        "Chữ e: đặt viết dưới đường kẻ 2 một chút, đưa cong lên qua phải tới gần đường kẻ 3, vòng tròn lên chạm đường kẻ 3 rồi lượn qua trái xuống chạm đường chân, dừng dưới đường kẻ 2.",
        "Chữ ê: viết xong chữ e, lia viết lên trên đầu chữ, viết dấu mũ gồm hai nét xiên ngắn chạm nhau ở giữa, không chạm đường kẻ 3.",
        "Tập viết me, em, đê, xe: đưa viết liền mạch qua chữ e, ê; viết xong cả tiếng mới đặt dấu mũ cho chữ ê."
      ],
      [
        "Vòng nhỏ phía trên của chữ e bị dẹt kín hoặc mở quá rộng.",
        "Lưng chữ e bị gãy góc, không cong tròn đều xuống đường chân.",
        "Dấu mũ chữ ê quá lớn, đặt lệch một bên hoặc dính vào đầu chữ e."
      ]
    ],
    "th-c9": [
      "Chữ l và b đều mở đầu bằng nét khuyết trên cao 5 ô li và viết liền mạch không nhấc viết. Chữ l kết thúc bằng nét móc ngược, còn chữ b uốn bụng tròn lên gần đường kẻ 3 rồi thắt một vòng nhỏ.",
      [
        "Chữ l: đặt viết trên đường kẻ 2 một chút, đưa lên tạo nét khuyết chạm đường kẻ 6 rồi kéo thẳng xuống gần đường chân (giao nhau ở đường kẻ 3). Liền tay uốn nét móc ngược chạm đường chân, dừng ở đường kẻ 2.",
        "Chữ b: viết nét khuyết trên giống chữ l xuống gần đường chân, rồi uốn liền nét móc ngược chạm đường chân và đưa lên gần đường kẻ 3.",
        "Từ gần đường kẻ 3, xoắn một vòng thắt nhỏ rồi đưa nhẹ qua phải, dừng dưới đường kẻ 3 một chút."
      ],
      [
        "Đầu nét khuyết trên không chạm tới đường kẻ 6 hoặc chỗ giao nét lệch khỏi đường kẻ 3.",
        "Chân chữ l không uốn tròn mà kéo thẳng, hoặc bụng chữ b mở quá rộng.",
        "Vòng thắt của chữ b quá lớn hoặc tụt thấp xuống gần đường kẻ 2."
      ]
    ],
    "th-c10": [
      "Chữ h và k bắt đầu bằng nét khuyết trên cao 5 ô li. Kéo tới đường chân rồi rê viết ngược lên trên nét cũ mới viết tiếp.",
      [
        "Đặt viết trên đường kẻ 2 một chút, đưa lên tạo nét khuyết chạm đường kẻ 6, rồi kéo thẳng xuống đường chân. Hai nét giao nhau ở đường kẻ 3.",
        "Giữ viết chạm giấy, rê ngược lên tới đường kẻ 2 rồi rẽ cong viết tiếp. Nét số 2 bắt đầu ngay từ đường chân, lúc rê ngược lên.",
        "Chữ h: viết tiếp nét móc hai đầu. Chữ k: viết nét thắt nhỏ ở giữa rồi móc ngược."
      ],
      [
        "Chỗ giao nét khuyết quá cao hoặc quá thấp.",
        "Không rê viết trên nét cũ mà tách ra sớm.",
        "Vòng thắt của k quá lớn hoặc tụt xuống sát đường chân."
      ]
    ],
    "th-c11": [
      "Chữ y và g đều có nét khuyết dưới cao 5 ô li, kéo xuống 3 ô li dưới đường chân. Nét khuyết dưới giao nhau đúng đường chân và dừng ở đường kẻ 2.",
      [
        "Chữ y: đặt viết ở đường kẻ 2, viết nét hất lên đường kẻ 3, kéo liền nét móc ngược chạm đường chân rồi đưa lên tới đường kẻ 3.",
        "Giữ liền tay kéo thẳng xuống 3 ô li dưới đường chân, uốn tròn đáy qua trái rồi đưa xiên lên, giao nhau ở đường chân và dừng ở đường kẻ 2.",
        "Chữ g: viết nét cong kín như chữ o. Lia viết lên đường kẻ 3 sát bên phải, viết nét khuyết dưới kéo xuống 3 ô li dưới đường chân rồi vòng lên dừng ở đường kẻ 2."
      ],
      [
        "Nét khuyết dưới kéo chưa đủ 3 ô li dưới đường chân hoặc vòng đáy bị nhọn, bè rộng.",
        "Hai nét của vòng khuyết dưới không giao nhau đúng đường chân.",
        "Nét khuyết dưới của chữ g tách hở khỏi nét cong kín."
      ]
    ],
    "th-c12": [
      "Chữ v, r, s có nét thắt nhỏ ở phía trên. Chữ r, s cao 2 ô li rưỡi, cao hơn chữ o nửa ô li.",
      [
        "Chữ v: viết nét móc hai đầu, đưa lên tới đường kẻ 3, uốn vòng thắt nhỏ rồi đưa nhẹ qua phải.",
        "Chữ r: đưa xiên lên cao hơn đường kẻ 3 một chút, uốn vòng thắt nhỏ, rồi viết nét móc ngược xuống đường chân.",
        "Chữ s: đưa xiên lên cao hơn đường kẻ 3 một chút, uốn vòng thắt nhỏ, rồi lượn cong xuống đường chân."
      ],
      [
        "Viết r, s thấp bằng chữ o, hoặc cao quá tới đường kẻ 4.",
        "Vòng thắt quá lớn.",
        "Lưng chữ s thẳng đơ, thiếu độ cong."
      ]
    ],
    "th-d1": [
      "Dấu sắc và dấu huyền đều là nét xiên ngắn nằm gọn trong 1 ô li ngay trên âm chính. Luôn viết xong cả tiếng rồi mới lia viết đặt dấu.",
      [
        "Dấu sắc: đặt viết phía trên bên phải âm chính, cách đầu chữ một chút, kéo nét xiên ngắn xuống qua trái.",
        "Dấu huyền: đặt viết phía trên bên trái âm chính, kéo nét xiên ngắn xuống qua phải.",
        "Khi viết các tiếng cá, cà, lá, là, ba, bà: viết trọn cả tiếng trước, rồi mới lia viết lên giữa đầu chữ a để đặt dấu."
      ],
      [
        "Nhầm hướng giữa dấu sắc và dấu huyền, hoặc kéo ngược từ dưới lên.",
        "Viết dấu quá dài chạm dòng trên hoặc dính sát vào đầu chữ.",
        "Đặt dấu lệch sang chữ đứng trước thay vì ngay trên âm chính."
      ]
    ],
    "th-d2": [
      "Dấu thanh nằm gọn trong 1 ô li. Viết xong cả tiếng rồi mới đặt dấu, ngay trên hoặc dưới âm chính.",
      [
        "Viết hết các chữ trong tiếng trước, không dừng giữa chừng để đặt dấu.",
        "Lia viết lên trên âm chính để viết dấu hỏi hoặc dấu ngã. Chữ có dấu mũ thì đặt dấu thanh cao hơn dấu mũ một chút.",
        "Lia viết xuống dưới âm chính để chấm dấu nặng thật gọn. Tiếng có vần oa, oe, uy thì đặt dấu ở chữ đầu của vần: hòa, khỏe, thủy."
      ],
      [
        "Đặt dấu lệch sang chữ đứng trước hoặc đứng sau.",
        "Dấu hỏi, dấu ngã quá lớn, chạm dòng trên hoặc dính vào dấu mũ.",
        "Chấm dấu nặng quá to hoặc quá xa chữ."
      ]
    ],
    "th-g1": [
      "Khi ghép chữ thành tiếng, đưa viết liền mạch từ điểm dừng chữ trước qua chữ sau để nét chữ mượt và đều. Giữa hai tiếng chừa một khoảng rộng bằng một chữ o.",
      [
        "Nối với i, e, ê: từ điểm dừng của b, m, l, giữ viết đi liền qua nét mở đầu của chữ sau, không nhấc viết giữa chừng.",
        "Viết xong cả tiếng rồi mới lia viết đặt dấu chấm i, dấu mũ ê hay dấu râu ơ.",
        "Sau mỗi tiếng, canh một khoảng trống rộng bằng một chữ o rồi mới viết tiếng kế tiếp."
      ],
      [
        "Nhấc viết giữa các chữ trong một tiếng làm nét nối bị rời, gãy khúc.",
        "Các chữ trong tiếng viết quá thưa hoặc đè dính sát vào nhau.",
        "Quên chừa khoảng trống bằng một chữ o giữa hai tiếng."
      ]
    ],
    "th-g2": [
      "Khi nối với chữ mở đầu bằng nét cong kín như o, ô, ơ, a, không kéo ngang qua bụng chữ mà lia viết qua phải một chút rồi vòng nét cong chạm điểm dừng chữ trước.",
      [
        "Viết xong chữ trước (như c, b, đ), lia viết qua phải, lên dưới đường kẻ 3 một chút, rồi vòng nét cong kín ngược chiều kim đồng hồ cho lưng nét cong chạm nhẹ điểm dừng chữ trước.",
        "Viết trọn cả tiếng rồi mới đặt dấu mũ, dấu râu và dấu thanh. Với các tiếng hòa, khỏe, thủy, đặt dấu thanh ngay trên chữ đầu của vần.",
        "Giữ các tiếng cách nhau một khoảng rộng bằng một chữ o, thẳng hàng trên đường chân."
      ],
      [
        "Kéo nét nối xuyên vào bụng chữ o, a hoặc vòng nét cong theo chiều kim đồng hồ.",
        "Đặt chữ o, a quá xa chữ đứng trước làm tiếng bị tách đôi.",
        "Đặt dấu thanh sai chỗ ở các tiếng hòa, khỏe, thủy hoặc đặt dấu trước khi viết xong tiếng."
      ]
    ],
    "th-g3": [
      "Tiếng có chữ ghép (ch, nh, th, ph, kh, tr, ng, gh) hoặc âm cuối cần viết liền gọn và giữ đúng độ cao từng chữ. Xong cả tiếng mới quay lại đặt dấu phụ và dấu thanh.",
      [
        "Nối liền các chữ trong cùng một tiếng từ trái qua phải, gặp chữ cong kín như a, o, ơ, â, g thì lia viết qua phải rồi vòng chạm nhẹ điểm dừng trước.",
        "Giữ đúng độ cao các chữ trong tiếng: h, k, g, b cao 5 ô li; p cao 4 ô li; t cao 3 ô li; r cao 2 ô li rưỡi; các chữ còn lại cao 2 ô li.",
        "Viết trọn cả tiếng mới lia viết gạch ngang t, chấm i, viết dấu mũ, dấu râu rồi đặt dấu thanh. Giữa hai tiếng chừa khoảng rộng bằng một chữ o."
      ],
      [
        "Tách chữ ghép ra quá xa giống như hai tiếng rời nhau.",
        "Dừng giữa chừng để gạch ngang t, chấm i hay đặt dấu thanh làm đứt mạch chữ.",
        "Chữ cao thấp không đều khi ghép chung chữ 5 ô li với chữ 2 ô li."
      ]
    ],
    "th-v1": [
      "Khi viết từ có hai tiếng, điều quan trọng nhất là giữ khoảng cách giữa hai tiếng đều nhau, rộng bằng một chữ o. Các chữ trong từng tiếng vẫn nối liền, đứng thẳng trên đường chân.",
      [
        "Đọc nhẩm trọn từ trước khi viết, rồi viết liền mạch tiếng thứ nhất. Viết xong cả tiếng mới đặt dấu phụ và dấu thanh.",
        "Từ điểm dừng của tiếng thứ nhất, canh một khoảng trống rộng bằng một chữ o rồi mới viết tiếng thứ hai.",
        "Giữ nhịp tay đều giữa hai tiếng, kiểm tra lại dấu thanh và độ cao các chữ b, h, g, đ, d."
      ],
      [
        "Viết hai tiếng dính sát vào nhau hoặc cách quá xa nhau.",
        "Tiếng trước và tiếng sau không đều cỡ, chữ lớn chữ nhỏ.",
        "Bỏ sót dấu phụ hay dấu thanh khi chuyển nhanh sang tiếng thứ hai."
      ]
    ],
    "th-v2": [
      "Viết cụm từ ba tiếng giúp rèn sức bền cổ tay và giữ nét đều từ đầu tới cuối dòng. Mỗi tiếng viết liền mạch, cách nhau một khoảng rộng bằng một chữ o.",
      [
        "Đọc trọn cụm từ trước khi đặt viết để nhớ đủ chữ và đủ dấu.",
        "Viết liền mạch từng tiếng, xong hết thân chữ của tiếng đó mới lia viết đặt dấu phụ và dấu thanh.",
        "Chừa khoảng rộng bằng một chữ o sau mỗi tiếng và giữ tất cả các chữ đứng thẳng hàng trên đường chân tới cuối dòng."
      ],
      [
        "Càng về cuối dòng chữ càng nhỏ dần, nghiêng hoặc chạy lệch khỏi đường chân.",
        "Khoảng cách giữa các tiếng lúc rộng lúc hẹp, không đều nhau.",
        "Viết vội nên thiếu nét, sót dấu ở tiếng cuối hoặc đặt dấu thanh lệch vị trí."
      ]
    ],
    "th-nh1": [
      "Ở cỡ Nhỏ, chiều cao mọi chữ giảm còn một nửa so với cỡ Thường: thân chữ cao đúng 1 ô li, đứng gọn giữa đường chân và đường kẻ 2. Viết chậm lại để tay quen với ô li nhỏ.",
      [
        "Chữ cao 1 ô li (i, u, ư, n, m, o, ô, ơ, a, ă, â, c, x, e, ê): giữ thân chữ gọn từ đường chân tới đường kẻ 2, nét hất và điểm dừng móc nằm giữa hai đường kẻ này.",
        "Chữ t cao 1 ô li rưỡi: đưa nét hất lên giữa đường kẻ 2 và 3 rồi kéo thẳng xuống đường chân, gạch ngang ngắn đúng đường kẻ 2.",
        "Chữ cao 2 ô li: d và đ có nét móc ngược vươn lên đường kẻ 3; p và q kéo nét sổ thẳng xuống 1 ô li dưới đường chân."
      ],
      [
        "Quen tay viết lớn lên tới đường kẻ 3 giống cỡ Thường.",
        "Bóp viết quá chặt khi thu nhỏ chữ làm nét run và nhanh mỏi tay.",
        "Dấu phụ của ă, â, ô, ê, ơ, ư viết quá lớn so với thân chữ 1 ô li."
      ]
    ],
    "th-nh2": [
      "Ở cỡ Nhỏ, nhóm chữ có nét khuyết cao 2 ô li rưỡi và chữ số cao 2 ô li. Giữ vòng khuyết và vòng thắt thật thon, gọn để chữ rõ nét, không chạm dòng trên hay dòng dưới.",
      [
        "Chữ l, b, h, k: viết nét khuyết trên cao 2 ô li rưỡi (giữa đường kẻ 3 và 4), hai nét giao nhau ở đường kẻ 2. Chữ y, g: kéo nét khuyết dưới xuống 1 ô li rưỡi dưới đường chân, giao nhau ở đường chân.",
        "Chữ v, r, s: chữ v cao 1 ô li chạm đường kẻ 2; chữ r và s nhô cao hơn đường kẻ 2 một chút, uốn vòng thắt thật nhỏ gọn.",
        "Chữ số 0 tới 9: giữ chiều cao đều 2 ô li từ đường chân tới đường kẻ 3, bề rộng gọn trong 1 ô li."
      ],
      [
        "Vòng khuyết kéo quá cao tới đường kẻ 4 hoặc phình lớn chạm vào nhau.",
        "Vòng thắt của b, k, v, r, s quá lớn làm bít kín nét khi viết cỡ Nhỏ.",
        "Chữ số viết cao lệch nhau hoặc kéo bè quá 1 ô li."
      ]
    ],
    "th-nh3": [
      "Ghép các chữ cỡ Nhỏ thành từ và cụm từ ngắn trên cùng một dòng. Giữ chữ đứng thẳng hàng trên đường chân, các tiếng cách nhau một khoảng rộng bằng một chữ o.",
      [
        "Đọc nhẩm từng từ, cụm từ trước khi viết. Nối liền các chữ trong mỗi tiếng, lia viết nhẹ khi gặp chữ cong kín như o, a, đ, q.",
        "Viết xong cả tiếng mới đặt dấu phụ và dấu thanh thật nhỏ gọn trên hoặc dưới âm chính, tránh chạm vào dòng kẻ phía trên.",
        "Chừa khoảng trống rộng bằng một chữ o sau mỗi tiếng, giữ đều độ cao cỡ Nhỏ (1 ô li, chữ r nhô hơn 1 ô li một chút, 2 ô li, 2 ô li rưỡi) tới hết dòng."
      ],
      [
        "Viết cỡ Nhỏ nhưng các tiếng đứng quá sát nhau hoặc khoảng cách không đều.",
        "Dấu thanh viết quá lớn giống cỡ Thường, đè vào chữ hay chạm dòng trên.",
        "Viết nhanh ở cuối dòng làm chữ lớn dần lên hoặc trượt khỏi đường chân."
      ]
    ],
    "th-h0": [
      "Tám nét cơ bản của chữ hoa cỡ Thường nằm trong khung cao 5 ô li (từ đường chân tới đường kẻ 6), có độ uốn lượn mềm hơn nét chữ thường. Tập quen tay trước khi ghép thành 29 chữ hoa.",
      [
        "Xem viết chậm để phân biệt rõ hướng đưa viết của từng nét. Nét lượn ngang đặt bên trái ở khoảng giữa đường kẻ 3 và 4, lượn gợn sóng mềm từ trái qua phải rồi dừng giữa đường kẻ 3 và 4. Nét lượn dọc đặt ở đường kẻ 6, nửa trên lượn nhẹ qua trái, nửa dưới lượn nhẹ qua phải rồi dừng trên đường chân.",
        "Nét cong trên đặt ở đường kẻ 5, uốn vòm lên chạm đường kẻ 6, lượn rộng qua phải rồi vòng vào dừng khoảng giữa đường kẻ 3 và 4. Nét cong dưới đặt trên đường kẻ 6, lượn võng xuống gần đường kẻ 5 rồi vòng ngược lên dừng ở đường kẻ 6 để mở đầu vòng xoắn lớn.",
        "Nét móc ngược trái (đi xuống) đặt trên đường kẻ 6, kéo lượn xuống chạm đường chân rồi cuộn qua trái vào trong dừng ở đường kẻ 2. Nét móc ngược trái đi lên đặt ở đường kẻ 2, lượn xuống chạm đường chân rồi kéo nghiêng qua phải lên dừng ở đường kẻ 6.",
        "Nét móc xuôi phải đặt ở đường chân, đưa hơi nghiêng lên chạm đường kẻ 6 rồi uốn móc qua phải dừng ở đường kẻ 5. Nét móc hai đầu cuộn trong đặt ở đường kẻ 5, cuộn tròn đầu trên chạm đường kẻ 6, kéo xuống chạm đường chân rồi hất lên giữa đường kẻ 2 và 3."
      ],
      [
        "Kéo nét lượn ngang và nét lượn dọc thẳng cứng như nét ngang, nét sổ của chữ thường.",
        "Nhầm chiều đi xuống của nét móc ngược trái với chiều đi lên của nét móc ngược trái đi lên.",
        "Đầu nét cong hoặc đầu móc bị nhọn, gãy góc hay kéo chưa chạm đủ đường kẻ 6 và đường chân."
      ]
    ],
    "th-h1": [
      "Thân ba chữ hoa A, Ă, Â đều cao 5 ô li, rộng khoảng 4 ô li rưỡi. Thân chữ viết liền hai nét móc qua điểm đổi chiều ở đỉnh đường kẻ 6, rồi lia viết kéo nét lượn ngang ở khoảng đường kẻ 3.",
      [
        "Chữ A: đặt viết ở đường kẻ 3, viết nét 1 là nét móc ngược trái đi lên, lượn xuống chạm đường chân rồi kéo nghiêng qua phải dừng ở đường kẻ 6. Không nhấc viết, đổi chiều kéo liền nét 2 là nét móc ngược phải xuống chạm đường chân, uốn lên dừng ở đường kẻ 2. Lia viết lên khoảng đường kẻ 3 (không chạm đầu nét 1), kéo nét 3 lượn ngang từ trái qua phải cắt qua hai thân nét, dừng khoảng đường kẻ 3.",
        "Chữ Ă: viết xong 3 nét chữ A, lia viết lên đường kẻ 7, viết nét 4 là dấu cong dưới nhỏ võng xuống giữa đường kẻ 6 và 7 rồi vòng lên lại đường kẻ 7, canh giữa đỉnh chữ. Chữ Â: viết xong 3 nét chữ A, lia viết lên trên đường kẻ 6 một chút, viết liền nét 4 là dấu mũ gồm hai đoạn xiên ngắn chụm đỉnh chạm đường kẻ 7, canh giữa đỉnh chữ.",
        "Khi viết An, Ăn, Ân, Âu Cơ và câu ứng dụng: viết gọn chữ hoa rồi lia viết qua chữ thường đứng sau sát điểm dừng đường kẻ 2 của nét 2; viết xong cả tiếng mới đặt dấu thanh."
      ],
      [
        "Hai chân chữ A choãi quá rộng hoặc chụm lại quá hẹp làm chữ mất cân đối.",
        "Nét lượn ngang kéo thẳng cứng hoặc đặt quá cao, quá thấp so với đường kẻ 3.",
        "Dấu của Ă và Â viết quá lớn, đặt lệch một bên hay dính sát vào đỉnh chữ A."
      ]
    ],
    "th-h2": [
      "Chữ B và chữ C đều cao 5 ô li, rộng khoảng 3 ô li rưỡi tới 4 ô li. Chữ B gồm 2 nét có vòng xoắn nhỏ giữa thân, còn chữ C viết liền 1 mạch với vòng xoắn lớn trên đầu.",
      [
        "Chữ B: nét 1 đặt viết trên đường kẻ 6, hơi lượn qua trái kéo nét móc ngược trái xuống chạm đường chân, uốn cong qua trái vào trong dừng ở đường kẻ 2. Lia viết lên đường kẻ 5 (bên trái nét 1), viết liền nét 2 gồm nét cong trên vòng qua đường kẻ 6 xuống khoảng giữa đường kẻ 3 và 4, thắt vòng xoắn nhỏ vắt nhẹ qua thân nét 1 rồi uốn liền nét cong phải lớn hơn chạm đường chân, lượn vào trong dừng khoảng đường kẻ 2.",
        "Chữ C: viết liền 1 nét, đặt viết trên đường kẻ 6, viết nét cong dưới lượn lên chạm đường kẻ 6 rồi chuyển hướng viết liền nét cong trái lớn xuống chạm đường chân (tạo vòng xoắn lớn trên đầu), cuối nét uốn vòng vào trong dừng ở đường kẻ 2.",
        "Khi viết Ba, Bình, Cà Mau và câu ứng dụng: sau điểm dừng của B và C, lia viết đặt nét mở đầu chữ thường đứng sau sát gọn, tránh để khe hở lớn giữa chữ hoa và chữ thường."
      ],
      [
        "Bụng trên của chữ B lớn hơn bụng dưới hoặc vòng xoắn giữa thân bị quá lớn.",
        "Vòng xoắn trên đầu chữ C bị dẹt kín hoặc lưng chữ C gãy khúc, không cong đều.",
        "Đặt chữ thường đứng sau chữ B, C quá xa làm tiếng bị tách đôi."
      ]
    ],
    "th-h3": [
      "Chữ D và chữ Đ cao 5 ô li, rộng khoảng 4 ô li. Thân chữ viết liền 1 nét kết hợp nét lượn dọc, vòng xoắn nhỏ ở chân chữ và nét cong phải lượn sâu vào trong.",
      [
        "Chữ D: đặt viết trên đường kẻ 6, viết nét lượn dọc xuống sát đường chân, đổi hướng uốn tạo vòng xoắn nhỏ nằm gọn ngay trên đường chân, rồi viết liền nét cong phải lớn vòng lên chạm đường kẻ 6, phần cuối lượn sâu vào trong thân chữ dừng ở đường kẻ 5.",
        "Chữ Đ: viết nét 1 giống hệt chữ D hoa. Sau đó lia viết xuống đường kẻ 3 (bên trái thân dọc), kéo nét 2 thẳng ngang ngắn nằm trên đường kẻ 3 từ trái qua phải cắt cân đối qua thân nét lượn dọc.",
        "Khi viết Duy, Dung, Đà Lạt và câu ứng dụng: viết trọn chữ hoa D hoặc Đ trước, rồi lia viết xuống viết chữ thường đứng sau sát gọn; chừa khoảng bằng một chữ o giữa hai tiếng."
      ],
      [
        "Vòng xoắn ở chân chữ D, Đ quá lớn hoặc tụt xuống dưới đường chân.",
        "Nét cong phải bị hẹp hoặc phần cuối dừng sớm ở ngoài, không lượn vào trong thân chữ.",
        "Nét ngang của chữ Đ kéo quá dài, đặt lệch khỏi đường kẻ 3 hoặc quên gạch ngang."
      ]
    ],
    "th-h4": [
      "Chữ E và chữ Ê cao 5 ô li, rộng khoảng 3 ô li rưỡi tới 4 ô li. Thân chữ viết liền 1 nét có vòng xoắn lớn trên đầu và vòng xoắn nhỏ giữa thân.",
      [
        "Chữ E: viết liền 1 nét, đặt viết trên đường kẻ 6, viết nét cong dưới rồi chuyển hướng viết nét cong trái thứ nhất tạo vòng xoắn lớn trên đầu (gọn hơn chữ C). Tới khoảng giữa đường kẻ 3 và 4, uốn tạo vòng xoắn nhỏ giữa thân rồi viết liền nét cong trái thứ hai chạm đường chân, cuối nét uốn vòng vào trong dừng ở đường kẻ 2.",
        "Chữ Ê: viết nét 1 giống chữ E hoa. Lia viết lên trên đường kẻ 6 một chút, viết liền nét 2 là dấu mũ gồm hai đoạn xiên ngắn chụm đỉnh chạm đường kẻ 7, canh giữa ngay trên đỉnh chữ.",
        "Khi viết Em bé, Ê Đê và câu ứng dụng: sau chữ E, Ê thì lia viết gọn qua chữ thường đứng sau; giữ dấu mũ của Ê nhỏ gọn để không chạm dòng trên."
      ],
      [
        "Vòng xoắn giữa thân của E, Ê bị bít kín hoặc tụt thấp xuống gần đường chân.",
        "Phần cong dưới hẹp hơn phần cong trên làm dáng chữ bị chông chênh.",
        "Dấu mũ của chữ Ê quá lớn, đặt lệch một bên hoặc chạm dính vào đỉnh chữ."
      ]
    ],
    "th-h5": [
      "Chữ G cao 8 ô li (5 ô li trên đường chân và 3 ô li dưới đường chân, rộng 4 ô li), còn chữ H cao 5 ô li (rộng khoảng 4 ô li rưỡi). Cả hai chữ đều có nét khuyết nên cần giữ vòng khuyết thon gọn, riêng khuyết dưới của G giao đúng đường chân.",
      [
        "Chữ G: nét 1 đặt trên đường kẻ 6, viết nét cong dưới và nét cong trái tạo vòng xoắn lớn trên đầu giống phần trên chữ C, kéo xuống chạm đường chân rồi uốn lên dừng ở đường kẻ 3. Không nhấc viết, đổi chiều kéo liền nét 2 là nét khuyết dưới xuống sâu tới đường kẻ 4 dưới đường chân (3 ô li dưới), vòng qua trái đi lên cắt nét thẳng đúng đường chân, dừng ở đường kẻ 2.",
        "Chữ H: nét 1 đặt trên đường kẻ 5, viết nét cong trái nhỏ rồi lượn ngang qua phải dừng trên đường kẻ 6. Đổi chiều viết liền nét 2 gồm nét khuyết ngược xuống chạm đường chân, vòng lên viết liền nét khuyết xuôi tới đường kẻ 6, kéo xuống chạm đường chân rồi uốn nét móc ngược phải dừng ở đường kẻ 2. Lia viết lên dưới đường kẻ 4, kéo nét 3 thẳng đứng ngắn cắt giữa đoạn nối hai nét khuyết, dừng khoảng đường kẻ 2.",
        "Khi viết Gia Lai, Hà Nội và câu ứng dụng: từ điểm dừng đường kẻ 2 của chữ G đưa viết nối mượt qua chữ thường đứng sau; viết xong chữ H (đủ cả nét sổ giữa) thì lia viết đặt chữ thường sát điểm dừng đường kẻ 2 của nét 2, giữ thẳng hàng trên đường chân."
      ],
      [
        "Nét khuyết dưới của chữ G kéo chưa đủ 3 ô li dưới đường chân hoặc chỗ giao nét lệch khỏi đường chân.",
        "Hai vòng khuyết của chữ H phình quá lớn, chạm dính vào nhau.",
        "Quên nét thẳng đứng ngắn giữa chữ H hoặc kéo nét đó quá dài chạm đường kẻ 6 hay đường chân."
      ]
    ],
    "th-h6": [
      "Ba chữ hoa I, K, L đều cao 5 ô li. Chữ I và K dùng chung hoàn toàn hai nét đầu; chữ L viết liền 1 mạch có vòng xoắn lớn trên đỉnh và vòng xoắn nhỏ ở chân chữ.",
      [
        "Chữ I: nét 1 đặt trên đường kẻ 5, viết nét cong trái nhỏ rồi lượn ngang qua phải dừng trên đường kẻ 6. Đổi chiều viết liền nét 2 là nét móc ngược trái kéo xuống chạm đường chân, uốn cong qua trái vào trong dừng ở đường kẻ 2.",
        "Chữ K: viết nét 1 và nét 2 giống hệt chữ I hoa. Lia viết lên đường kẻ 5 (bên phải nét 2), viết liền nét 3: uốn cong đầu móc lên chạm đường kẻ 6 rồi kéo xiên xuống khoảng giữa đường kẻ 3 và 4, lồng vào thân nét 2 tạo vòng xoắn nhỏ, rồi nối liền nét móc ngược phải xuống chạm đường chân, dừng ở đường kẻ 2.",
        "Chữ L: viết liền 1 nét, đặt trên đường kẻ 6 viết nét cong dưới tạo vòng xoắn lớn trên đầu, đổi hướng viết nét lượn dọc xuống sát đường chân, rồi uốn tạo vòng xoắn nhỏ ngay trên đường chân và kéo nét lượn ngang qua phải dừng ở đường kẻ 2."
      ],
      [
        "Chữ I viết quá rộng (hơn 2 ô li rưỡi) hoặc chân móc không cuộn tròn vào trong.",
        "Vòng xoắn giữa thân chữ K đặt tách rời khỏi nét 2 làm chữ bị hở.",
        "Nét lượn ngang ở chân chữ L kéo thẳng cứng hoặc vòng xoắn chân chữ tụt dưới đường chân."
      ]
    ],
    "th-h7": [
      "Chữ M và chữ N đều cao 5 ô li, cùng bắt đầu ở đường kẻ 2 bằng nét móc ngược trái đi lên đường kẻ 6 và đổi chiều viết liền tay, không nhấc viết.",
      [
        "Chữ M: nét 1 đặt trên đường kẻ 2, viết nét móc ngược trái đi lên, lượn xuống chạm đường chân rồi kéo nghiêng qua phải dừng ở đường kẻ 6. Đổi chiều kéo liền nét 2 lượn dọc (gần như thẳng đứng, cuối hơi lượn nhẹ qua trái) xuống chạm đường chân. Đổi chiều đưa liền nét 3 thẳng xiên hơi lượn hai đầu từ đường chân lên qua phải tới đường kẻ 6. Đổi chiều kéo liền nét 4 móc ngược phải xuống chạm đường chân, uốn lên dừng ở đường kẻ 2.",
        "Chữ N: nét 1 đặt trên đường kẻ 2, viết nét móc ngược trái đi lên chạm đường kẻ 6 giống chữ M. Đổi chiều kéo nét 2 thẳng xiên xuống qua phải chạm đường chân. Đổi chiều đưa nét 3 móc xuôi phải từ dưới lên hơi nghiêng qua phải chạm đường kẻ 6, uốn cong nhẹ đầu móc dừng ở đường kẻ 5.",
        "Khi viết Mai, Nam, Nghệ An và câu ứng dụng: từ điểm dừng đường kẻ 2 của M nối mượt qua chữ thường; với N dừng trên đường kẻ 5 thì lia viết xuống đặt chữ thường đứng sau sát gọn."
      ],
      [
        "Nhấc viết rời từng nét tại đường kẻ 6 hoặc đường chân thay vì đổi chiều liền tay.",
        "Các chân của chữ M đứng không đều trên đường chân hoặc thân chữ kéo bè rộng quá 6 ô li.",
        "Hai thân nét của chữ N quá sát nhau làm chữ hẹp hoặc nét 3 kéo thẳng không có đầu móc."
      ]
    ],
    "th-h8": [
      "Thân ba chữ hoa O, Ô, Ơ cao 5 ô li, rộng khoảng 4 ô li (chữ Ơ rộng hơn một chút do có dấu râu), cùng dùng nét cong kín hình bầu dục đứng có phần cuối lượn sâu vào trong bụng chữ.",
      [
        "Chữ O: viết liền 1 nét, đặt viết trên đường kẻ 6, đưa vòng ngược chiều kim đồng hồ qua trái xuống chạm đường chân, vòng qua phải lên gần điểm đặt viết rồi lượn sâu vào trong bụng chữ; tới khoảng đường kẻ 4 lượn nhẹ lên một chút rồi dừng.",
        "Chữ Ô: viết nét 1 giống chữ O hoa, rồi lia viết lên trên đường kẻ 6 một chút, viết liền nét 2 là dấu mũ gồm hai đoạn xiên ngắn canh giữa đỉnh chữ, đỉnh mũ chạm đường kẻ 7.",
        "Chữ Ơ: viết nét 1 giống chữ O hoa, rồi lia viết lên góc trên bên phải (ngay trên đường kẻ 6 một chút), kéo nét 2 là dấu râu cong nhỏ từ trên xuống chạm nhẹ vào lưng phải chữ O ở khoảng giữa đường kẻ 5 và 6."
      ],
      [
        "Vòng nét cong theo chiều kim đồng hồ hoặc viết tròn bè ngang thay vì dáng bầu dục đứng.",
        "Dừng viết sớm ở mép ngoài mà không lượn sâu vào trong bụng chữ tới khoảng đường kẻ 4.",
        "Viết dấu râu của chữ Ơ từ dưới lên hoặc viết dấu mũ chữ Ô quá lớn, lệch một bên."
      ]
    ],
    "th-h9": [
      "Ba chữ hoa P, Q, R đều cao 5 ô li. Chữ P và R dùng chung nét 1 móc ngược trái đi xuống và phần đầu cong trên; chữ Q kết hợp thân chữ O với nét lượn ngang mềm ở chân chữ.",
      [
        "Chữ P: nét 1 đặt trên đường kẻ 6, kéo nét móc ngược trái xuống chạm đường chân, uốn vào trong dừng ở đường kẻ 2. Lia viết lên đường kẻ 5 (bên trái nét 1), viết nét 2 cong trên vòng qua đường kẻ 6 lượn rộng qua phải rồi uốn cong vào gần thân nét 1, dừng khoảng giữa đường kẻ 3 và 4.",
        "Chữ Q: nét 1 viết giống chữ O hoa (đặt trên đường kẻ 6, lượn vào trong bụng chữ dừng khoảng đường kẻ 4). Lia viết xuống gần đường kẻ 2 trong lòng chữ, viết nét 2 lượn ngang mềm như dấu ngã lớn từ trái qua phải cắt qua phần dưới nét cong kín, phần võng chạm đường chân rồi hất nhẹ lên dừng trên đường kẻ 2 một chút.",
        "Chữ R: viết nét 1 giống nét 1 của chữ P. Lia viết lên đường kẻ 5 (bên trái nét 1), viết liền nét 2 vòng cong trên qua đường kẻ 6 xuống khoảng giữa đường kẻ 3 và 4, thắt vòng xoắn nhỏ vắt nhẹ qua thân nét 1 rồi viết liền nét móc ngược phải xuống chạm đường chân, dừng ở đường kẻ 2."
      ],
      [
        "Nét cong trên của chữ P và R bị hẹp hoặc lệch thấp dưới đường kẻ 6.",
        "Nét lượn ngang của chữ Q kéo thẳng đơ hoặc tụt xuống dưới đường chân.",
        "Vòng xoắn giữa thân chữ R quá lớn làm bụng trên và chân chữ thiếu gọn gàng."
      ]
    ],
    "th-h10": [
      "Chữ S và chữ T đều cao 5 ô li và viết liền 1 mạch không nhấc viết. Cả hai có vòng xoắn đặc trưng ở đầu chữ và phần cuối uốn cong vào trong dừng ở đường kẻ 2.",
      [
        "Chữ S: viết liền 1 nét, đặt viết trên đường kẻ 6, viết nét cong dưới lượn lên chạm đường kẻ 6, chuyển hướng uốn qua trái tạo vòng xoắn lớn ở đầu chữ rồi lượn mềm qua bụng phải xuống chạm đường chân, cuối nét uốn vòng qua trái vào trong dừng ở đường kẻ 2.",
        "Chữ T: viết liền 1 nét, đặt viết gần đường kẻ 5, viết nét cong trái nhỏ đưa lên nối liền nét lượn ngang ngắn từ trái qua phải trên đỉnh (sát đường kẻ 6); vòng lên chạm đường kẻ 6 rồi quay ngược lại cắt qua nét lượn ngang tạo vòng xoắn nhỏ gần giữa đầu chữ, kéo nét cong trái lớn xuống chạm đường chân rồi uốn vào trong dừng ở đường kẻ 2.",
        "Khi viết Sa Pa, Tây Ninh và câu ứng dụng: sau khi dừng ở đường kẻ 2 trong lòng chữ S, T, lia viết đặt nét mở đầu chữ thường đứng sau sát gọn và giữ đều khoảng cách giữa các tiếng."
      ],
      [
        "Thân chữ S kéo thẳng đơ, thiếu độ lượn mềm hoặc bị nghiêng đổ qua một bên.",
        "Nét lượn ngang trên đầu chữ T kéo quá dài làm đầu chữ bè rộng.",
        "Vòng xoắn đầu chữ S hay chữ T bị bít kín, mất rõ nét."
      ]
    ],
    "th-h11": [
      "Chữ U và chữ Ư đều cao 5 ô li, rộng khoảng 4 tới 4 ô li rưỡi. Điểm quan trọng nhất là thao tác rê viết thẳng từ giữa đường kẻ 2 và 3 lên đường kẻ 6 trước khi kéo nét móc ngược phải xuống đường chân.",
      [
        "Chữ U: nét 1 đặt trên đường kẻ 5, viết nét móc hai đầu (đầu trái cuộn tròn lên chạm đường kẻ 6, thân kéo xuống chạm đường chân rồi hất lên dừng ở giữa đường kẻ 2 và 3). Giữ đầu viết chạm giấy rê thẳng lên đường kẻ 6, rồi đổi chiều kéo thẳng xuống chạm đường chân viết nét 2 móc ngược phải, dừng ở đường kẻ 2.",
        "Chữ Ư: viết nét 1 và nét 2 giống hệt chữ U hoa. Lia viết lên ngay trên đường kẻ 6 một chút (phía trên bên phải đầu nét 2), kéo nét 3 là dấu râu cong nhỏ từ trên xuống chạm nhẹ vào gần đầu nét 2.",
        "Khi viết Uyên, Ứng Hòa và câu ứng dụng: từ điểm dừng đường kẻ 2 của U, Ư, đưa viết nối mượt qua chữ thường đứng sau; viết xong cả tiếng mới đặt dấu râu (nếu chưa đặt) và dấu thanh."
      ],
      [
        "Không rê viết thẳng lên đường kẻ 6 mà tách sớm làm hở khe giữa hai nét.",
        "Thân nét 1 và nét 2 không song song, bị choãi rộng hoặc chụm đáy vào nhau.",
        "Viết dấu râu của chữ Ư từ dưới lên hoặc đặt rời xa đầu nét 2."
      ]
    ],
    "th-h12": [
      "Chữ V và X cao 5 ô li, còn chữ Y cao 8 ô li (5 ô li trên đường chân và 3 ô li dưới đường chân). Cả ba chữ đều viết liền mạch, không nhấc viết giữa chừng.",
      [
        "Chữ V: nét 1 đặt trên đường kẻ 5, viết nét cong trái nhỏ rồi lượn ngang qua phải dừng trên đường kẻ 6. Đổi chiều kéo nét 2 thẳng đứng hơi lượn hai đầu xuống chạm đường chân. Đổi chiều lượn lên viết nét 3 móc xuôi phải chạm đường kẻ 6, uốn nhẹ qua phải dừng ở đường kẻ 5.",
        "Chữ X: viết liền 1 nét, đặt trên đường kẻ 5 viết nét móc hai đầu trái vòng qua đường kẻ 6 xuống chạm đường chân, lượn vòng lên viết liền nét thẳng xiên cắt chéo qua phải lên chạm đường kẻ 6; đổi hướng viết tiếp nét móc hai đầu phải xuống chạm đường chân rồi uốn lên qua phải dừng ở đường kẻ 2.",
        "Chữ Y: nét 1 đặt trên đường kẻ 5, viết nét móc hai đầu giống chữ U dừng giữa đường kẻ 2 và 3. Rê viết thẳng lên đường kẻ 6 rồi đổi chiều kéo nét khuyết dưới xuống sâu tới đường kẻ 4 dưới đường chân (3 ô li dưới), vòng qua trái đi lên cắt nét thẳng đúng đường chân, dừng ở đường kẻ 2."
      ],
      [
        "Hai bên của chữ V hoặc chữ X mở quá rộng, thiếu cân đối hai nửa trái phải.",
        "Nhấc viết tách chữ X thành hai nét chéo rời nhau thay vì viết liền mạch.",
        "Nét khuyết dưới của chữ Y kéo chưa đủ 3 ô li dưới đường chân hoặc hai nét không giao nhau đúng đường chân."
      ]
    ],
    "th-hnh1": [
      "Ở cỡ Nhỏ, chiều cao mọi chữ giảm còn một nửa so với cỡ Thường: chữ hoa cao 2 ô li rưỡi (chạm giữa đường kẻ 3 và 4), riêng chữ G cao 4 ô li (2 ô li rưỡi trên và 1 ô li rưỡi dưới đường chân), còn thân chữ thường cao 1 ô li.",
      [
        "Viết chậm lại để tay quen khung nhỏ khi tập nhóm A, Ă, Â, B, C, D, Đ, E, Ê, G, H. Giữ các vòng xoắn của B, C, D, Đ, E, Ê và nét khuyết của G, H thon gọn, rõ khe sáng.",
        "Khi chép hai câu ứng dụng: đọc nhẩm trọn câu trước khi đặt viết. Viết chữ hoa đầu câu cao đúng 2 ô li rưỡi, thân chữ thường đứng sau cao 1 ô li (chữ b, h, l, g, y cao 2 ô li rưỡi; d, đ cao 2 ô li; t cao 1 ô li rưỡi).",
        "Viết trọn từng tiếng rồi mới lia viết đặt dấu phụ và dấu thanh nhỏ gọn, chừa khoảng trống rộng bằng một chữ o cỡ Nhỏ giữa hai tiếng và ghi rõ dấu phẩy, dấu chấm."
      ],
      [
        "Quen tay viết chữ hoa cỡ Nhỏ quá lớn lên tới đường kẻ 5 hay đường kẻ 6.",
        "Bóp viết chặt làm vòng xoắn của B, D, Đ, E, Ê bị bít kín, nét bị run.",
        "Khoảng cách giữa các tiếng không đều hoặc quên dấu phẩy, dấu chấm cuối câu."
      ]
    ],
    "th-hnh2": [
      "Luyện thu gọn 11 chữ hoa từ I tới R ở cỡ Nhỏ (cao 2 ô li rưỡi) và giữ đều nhịp tay khi chép trọn câu tục ngữ trên một dòng.",
      [
        "Viết đều các chữ I, K, L, M, N, O, Ô, Ơ, P, Q, R chạm đúng giữa đường kẻ 3 và 4. Giữ bề rộng gọn khoảng 2 ô li (riêng chữ I gọn khoảng 1 ô li và chữ M rộng hơn một chút khoảng 2 ô li rưỡi tới 3 ô li).",
        "Chú ý dấu mũ của Ô, dấu râu của Ơ, vòng xoắn giữa thân K, R, vòng xoắn chân L và nét lượn chân Q viết thật gọn, không chạm dòng trên hay tụt xuống dưới đường chân.",
        "Khi chép câu ứng dụng: giữ thẳng hàng mọi chữ trên đường chân từ đầu tới cuối câu, viết xong từng tiếng mới lia viết đặt dấu phụ và dấu thanh."
      ],
      [
        "Viết chữ M, N kéo bè ngang làm dòng chữ chật chội, mất cân đối.",
        "Dấu mũ của Ô hoặc dấu thanh cỡ Nhỏ viết quá lớn, đè vào chữ hay chạm dòng trên.",
        "Càng về cuối câu chữ càng nghiêng, nhỏ dần hoặc trượt khỏi đường chân."
      ]
    ],
    "th-hnh3": [
      "Hoàn thiện 7 chữ hoa cuối bảng S, T, U, Ư, V, X, Y ở cỡ Nhỏ (cao 2 ô li rưỡi, riêng Y cao 4 ô li) và chép trọn vẹn câu ứng dụng dài có dấu phẩy, dấu chấm.",
      [
        "Viết liền mạch S, T, V, X trong khung cao 2 ô li rưỡi; với U, Ư, Y, giữ thao tác rê viết thẳng lên giữa đường kẻ 3 và 4 rồi kéo xuống thẳng đứng. Riêng nét khuyết dưới của Y kéo xuống 1 ô li rưỡi dưới đường chân, giao nhau đúng đường chân.",
        "Khi chép câu ứng dụng: canh đều chữ hoa đầu câu với hàng chữ thường 1 ô li đứng sau, chừa khoảng trống bằng một chữ o cỡ Nhỏ giữa các tiếng và đặt dấu phẩy, dấu chấm gọn rõ.",
        "Viết xong cả câu thì đọc dò lại một lượt: kiểm tra độ cao chữ hoa, nét khuyết, dấu phụ, dấu thanh và dấu câu."
      ],
      [
        "Nét khuyết dưới của chữ Y kéo quá sâu chạm dòng dưới hoặc giao nhau lệch khỏi đường chân.",
        "Thu nhỏ chữ S, T, X bị gãy nét, mất độ cong lượn mềm.",
        "Viết vội ở cuối câu dài làm sót dấu thanh, thiếu nét hoặc quên dấu chấm."
      ]
    ]
  },
  "NHAPMON": [
    {
      "t": "Ngồi đúng tư thế",
      "p": [
        "Lưng thẳng, ngực không tì vào mép bàn, hai chân đặt vững trên sàn.",
        "Mắt cách màn hình hoặc trang giấy khoảng 25 tới 30 cm, chừng một gang tay lớn của người lớn.",
        "Tay trái giữ nhẹ máy tính bảng hoặc góc giấy. Giấy đặt hơi nghiêng qua trái cho thuận tay."
      ]
    },
    {
      "t": "Cầm viết bằng ba ngón tay",
      "p": [
        "Ngón cái và ngón trỏ giữ hai bên thân viết (hoặc S Pen), ngón giữa đỡ bên dưới. Cổ tay thả lỏng, không bóp chặt.",
        "Đầu ngón tay cách ngòi khoảng 2 cm để nhìn rõ ngòi và đường kẻ.",
        "Trước khi viết, ba mẹ và bé có thể cùng xòe rồi nắm bàn tay năm lần cho ngón tay dẻo."
      ]
    },
    {
      "t": "Lưới 4 ô li",
      "p": [
        "<b>Đường chân</b> là đường kẻ đậm, nơi các chữ đứng thẳng hàng. Mỗi dòng chia 4 ô li.",
        "<b>Cỡ Thường</b>: thân chữ cao 2 ô li, dùng khi mới tập. <b>Cỡ Nhỏ</b>: thân chữ cao 1 ô li, dùng khi tay đã vững.",
        "Giữa hai tiếng chừa một khoảng rộng bằng một chữ o."
      ],
      "demo": ["~so","~congkin","~khuyettren"]
    },
    {
      "t": "Bốn bước học mỗi bài",
      "p": [
        "<b>Xem</b>: Xem viết chậm để biết điểm đặt viết, chiều đưa viết và thứ tự từng nét.",
        "<b>Tô</b>: tô chậm theo nét đứt, hết một nét mới nhấc viết. Lỡ lệch thì dùng Gôm sửa lại.",
        "<b>Chép</b> và <b>Bài ôn</b>: nhìn chữ mẫu tự viết, rồi ôn lại cả bài để tay nhớ nét."
      ]
    },
    {
      "t": "Dành cho ba mẹ",
      "p": [
        "Trẻ 6, 7 tuổi chỉ tập trung tốt khoảng 15 tới 20 phút mỗi lần. Mỗi ngày một bài ngắn tốt hơn ngồi viết liền một giờ.",
        "Khen cụ thể điều bé làm tốt hôm nay: ngồi thẳng, chữ o tròn, nhớ đặt dấu. Không so sánh bé với bạn khác.",
        "Có thể xuất tập viết PDF, in trắng đen khổ A4 hoặc A5 để bé tập thêm trên giấy bằng viết chì."
      ]
    }
  ],
  "WORDS": {
    "a": ["ba","con cá"],
    "ă": ["mặt trăng","cái khăn"],
    "â": ["con gấu","trái mận"],
    "b": ["bà","con bò"],
    "c": ["cái ca","con cò"],
    "d": ["con dê","trái dừa"],
    "đ": ["đôi dép","đèn bàn"],
    "e": ["em bé","cái xe"],
    "ê": ["con ếch","cái ghế"],
    "g": ["con gà","cái gối"],
    "h": ["hoa hồng","cái hộp"],
    "i": ["cái ví","chim sẻ"],
    "k": ["cái kéo","con kiến"],
    "l": ["trái lê","cái ly"],
    "m": ["mẹ","con mèo"],
    "n": ["cái nón","con nai"],
    "o": ["con ong","trái nho"],
    "ô": ["ông","cái tô"],
    "ơ": ["trái bơ","cái nơ"],
    "p": ["đèn pin","cái cặp"],
    "q": ["cái quạt","cái quần"],
    "r": ["con rùa","cái rổ"],
    "s": ["con sóc","cuốn sách"],
    "t": ["con tôm","cái tủ"],
    "u": ["con cua","cái muỗng"],
    "ư": ["sư tử","trái dưa"],
    "v": ["con vịt","cái võng"],
    "x": ["xe đạp","cái xô"],
    "y": ["y tá","cái yếm"]
  }
};
