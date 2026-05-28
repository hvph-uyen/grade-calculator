# 📚 Ứng dụng Tính Điểm Trung Bình | Grade Calculator

## Mô tả
Ứng dụng web đơn giản giúp học sinh tính điểm trung bình của ba môn học (Toán, Vật Lý, Hóa Học) và xếp loại kết quả một cách nhanh chóng.

Ứng dụng được xây dựng bằng HTML, CSS và JavaScript thuần (vanilla), không sử dụng bất kỳ framework hay thư viện bên ngoài nào. Hoàn toàn chạy được offline trong trình duyệt.

## Cách sử dụng

### 1. Mở ứng dụng
- **Online**: Mở file `index.html` trực tiếp trong trình duyệt web bằng cách:
  - Click chuột phải vào file → "Open with" → Chọn trình duyệt (Chrome, Firefox, Safari, Edge, v.v.)
  - Hoặc kéo-thả file `index.html` vào cửa sổ trình duyệt

- **Offline**: Ứng dụng hoạt động 100% offline, không cần kết nối internet

### 2. Sử dụng ứng dụng
1. Nhập điểm Toán (0-10)
2. Nhập điểm Vật Lý (0-10)
3. Nhập điểm Hóa Học (0-10)
4. Nhấn nút "Tính Điểm Trung Bình"
5. Xem kết quả và xếp loại

## Tính năng chính

✅ **Nhập điểm ba môn học**
- Toán, Vật Lý, Hóa Học
- Điểm từ 0 đến 10

✅ **Kiểm tra lỗi toàn diện**
- Input trống
- Input không phải số
- Điểm nhỏ hơn 0
- Điểm lớn hơn 10
- Hiển thị thông báo lỗi rõ ràng cho mỗi trường

✅ **Tính điểm trung bình**
- Công thức: (Toán + Vật Lý + Hóa Học) / 3
- Hiển thị 2 chữ số thập phân

✅ **Xếp loại kết quả**
- **🌟 Giỏi**: >= 8.0
- **👍 Khá**: >= 6.5 và < 8.0
- **📚 Trung bình**: >= 5.0 và < 6.5
- **💪 Yếu**: < 5.0

✅ **Giao diện thân thiện**
- Thiết kế hiện đại với gradient màu
- Responsive design (hoạt động tốt trên mobile)
- Animation mượt mà
- Emoji làm giao diện vui vẻ hơn

✅ **Chạy offline**
- Không cần Internet
- Không có dependency bên ngoài
- Hoạt động trên mọi trình duyệt

## Cấu trúc dự án

```
grade-calculator/
├── index.html        # File HTML chính
├── style.css         # Stylesheet
├── script.js         # JavaScript logic
├── README.md         # Hướng dẫn này
├── TEST_CASES.md     # Các test case
└── REPORT.md         # Báo cáo dự án
```

### Thành phần từng file:

**index.html**
- Cấu trúc HTML5
- Form nhập điểm cho 3 môn học
- Phần hiển thị kết quả
- Link tới CSS và JavaScript

**style.css**
- Thiết kế responsive
- Gradient background
- Animation slide-in
- Hover effects
- Mobile-friendly design

**script.js**
- Xử lý sự kiện form submit
- Kiểm tra validation input
- Tính toán điểm trung bình
- Xếp loại kết quả
- Hiển thị/ẩn lỗi

## Yêu cầu hệ thống

- ✅ Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge, v.v.)
- ✅ JavaScript được bật
- ✅ Không cần Node.js hay server

## Hỗ trợ trình duyệt

- Chrome/Chromium ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Opera ✅

## Ví dụ sử dụng

### Ví dụ 1: Học sinh giỏi
```
Toán: 9.0
Vật Lý: 8.5
Hóa Học: 8.0
→ Trung bình: 8.50
→ Xếp loại: Giỏi ✅
```

### Ví dụ 2: Học sinh trung bình
```
Toán: 6.0
Vật Lý: 5.5
Hóa Học: 5.0
→ Trung bình: 5.50
→ Xếp loại: Trung bình 📚
```

## Đặc điểm kỹ thuật

- **Ngôn ngữ**: HTML5, CSS3, JavaScript ES6+
- **Không sử dụng**: React, Vue, Angular, Bootstrap, jQuery
- **Kích thước**: < 50KB (tất cả file cộng lại)
- **Thời gian load**: < 1s
- **Tương thích**: 100% vanilla code

## Tác giả & Giấy phép

Dự án này được tạo cho mục đích giáo dục - Classroom Activity về Vibe Coding với GitHub Copilot.

---

**Chúc bạn học tập tốt!** 🎓