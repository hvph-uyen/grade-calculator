# 📋 Test Cases - Grade Calculator

## Hướng dẫn test
- Mở file `index.html` trong trình duyệt
- Thực hiện từng test case theo đúng thứ tự
- So sánh kết quả thực tế với kết quả mong đợi
- Ghi chú kết quả (✅ Pass / ❌ Fail)

---

## Test Case 1: Học sinh giỏi (Giỏi)

**Mục đích**: Kiểm tra xếp loại "Giỏi" khi điểm trung bình >= 8.0

| Tiêu chí | Giá trị |
|----------|--------|
| **Input** | Toán: 9.0, Vật Lý: 8.5, Hóa Học: 8.0 |
| **Bước thực hiện** | 1. Nhập 9.0 vào ô Toán<br>2. Nhập 8.5 vào ô Vật Lý<br>3. Nhập 8.0 vào ô Hóa Học<br>4. Nhấn "Tính Điểm Trung Bình" |
| **Kết quả mong đợi** | - Điểm trung bình: 8.50<br>- Xếp loại: 🌟 Giỏi<br>- Không có lỗi |
| **Kết quả thực tế** | ________________________ |
| **Pass/Fail** | [ ] Pass &nbsp;&nbsp; [ ] Fail |

---

## Test Case 2: Học sinh khá (Khá)

**Mục đích**: Kiểm tra xếp loại "Khá" khi 6.5 <= điểm trung bình < 8.0

| Tiêu chí | Giá trị |
|----------|--------|
| **Input** | Toán: 7.0, Vật Lý: 7.5, Hóa Học: 6.5 |
| **Bước thực hiện** | 1. Nhập 7.0 vào ô Toán<br>2. Nhập 7.5 vào ô Vật Lý<br>3. Nhập 6.5 vào ô Hóa Học<br>4. Nhấn "Tính Điểm Trung Bình" |
| **Kết quả mong đợi** | - Điểm trung bình: 7.00<br>- Xếp loại: 👍 Khá<br>- Không có lỗi |
| **Kết quả thực tế** | ________________________ |
| **Pass/Fail** | [ ] Pass &nbsp;&nbsp; [ ] Fail |

---

## Test Case 3: Học sinh trung bình (Trung bình)

**Mục đích**: Kiểm tra xếp loại "Trung bình" khi 5.0 <= điểm trung bình < 6.5

| Tiêu chí | Giá trị |
|----------|--------|
| **Input** | Toán: 5.5, Vật Lý: 5.5, Hóa Học: 5.5 |
| **Bước thực hiện** | 1. Nhập 5.5 vào ô Toán<br>2. Nhập 5.5 vào ô Vật Lý<br>3. Nhập 5.5 vào ô Hóa Học<br>4. Nhấn "Tính Điểm Trung Bình" |
| **Kết quả mong đợi** | - Điểm trung bình: 5.50<br>- Xếp loại: 📚 Trung bình<br>- Không có lỗi |
| **Kết quả thực tế** | ________________________ |
| **Pass/Fail** | [ ] Pass &nbsp;&nbsp; [ ] Fail |

---

## Test Case 4: Học sinh yếu (Yếu)

**Mục đích**: Kiểm tra xếp loại "Yếu" khi điểm trung bình < 5.0

| Tiêu chí | Giá trị |
|----------|--------|
| **Input** | Toán: 3.0, Vật Lý: 4.0, Hóa Học: 4.5 |
| **Bước thực hiện** | 1. Nhập 3.0 vào ô Toán<br>2. Nhập 4.0 vào ô Vật Lý<br>3. Nhập 4.5 vào ô Hóa Học<br>4. Nhấn "Tính Điểm Trung Bình" |
| **Kết quả mong đợi** | - Điểm trung bình: 3.83<br>- Xếp loại: 💪 Yếu<br>- Không có lỗi |
| **Kết quả thực tế** | ________________________ |
| **Pass/Fail** | [ ] Pass &nbsp;&nbsp; [ ] Fail |

---

## Test Case 5: Input trống (Empty Input)

**Mục đích**: Kiểm tra thông báo lỗi khi người dùng không nhập điểm

| Tiêu chí | Giá trị |
|----------|--------|
| **Input** | Toán: [trống], Vật Lý: 7.0, Hóa Học: 8.0 |
| **Bước thực hiện** | 1. Để trống ô Toán<br>2. Nhập 7.0 vào ô Vật Lý<br>3. Nhập 8.0 vào ô Hóa Học<br>4. Nhấn "Tính Điểm Trung Bình" |
| **Kết quả mong đợi** | - Không tính toán<br>- Ô Toán bị đánh dấu lỗi (màu đỏ)<br>- Hiển thị: "⚠️ Vui lòng nhập điểm" |
| **Kết quả thực tế** | ________________________ |
| **Pass/Fail** | [ ] Pass &nbsp;&nbsp; [ ] Fail |

---

## Test Case 6: Input không phải số (Non-numeric Input)

**Mục đích**: Kiểm tra thông báo lỗi khi người dùng nhập ký tự không phải số

| Tiêu chí | Giá trị |
|----------|--------|
| **Input** | Toán: "abc", Vật Lý: 7.0, Hóa Học: 8.0 |
| **Bước thực hiện** | 1. Nhập "abc" vào ô Toán<br>2. Nhập 7.0 vào ô Vật Lý<br>3. Nhập 8.0 vào ô Hóa Học<br>4. Nhấn "Tính Điểm Trung Bình" |
| **Kết quả mong đợi** | - Không tính toán<br>- Ô Toán bị đánh dấu lỗi (màu đỏ)<br>- Hiển thị: "❌ Điểm phải là số" |
| **Kết quả thực tế** | ________________________ |
| **Pass/Fail** | [ ] Pass &nbsp;&nbsp; [ ] Fail |

---

## Test Case 7: Điểm nhỏ hơn 0 (Negative Score)

**Mục đích**: Kiểm tra thông báo lỗi khi người dùng nhập điểm âm

| Tiêu chí | Giá trị |
|----------|--------|
| **Input** | Toán: -5, Vật Lý: 7.0, Hóa Học: 8.0 |
| **Bước thực hiện** | 1. Nhập -5 vào ô Toán<br>2. Nhập 7.0 vào ô Vật Lý<br>3. Nhập 8.0 vào ô Hóa Học<br>4. Nhấn "Tính Điểm Trung Bình" |
| **Kết quả mong đợi** | - Không tính toán<br>- Ô Toán bị đánh dấu lỗi (màu đỏ)<br>- Hiển thị: "❌ Điểm không thể nhỏ hơn 0" |
| **Kết quả thực tế** | ________________________ |
| **Pass/Fail** | [ ] Pass &nbsp;&nbsp; [ ] Fail |

---

## Test Case 8: Điểm lớn hơn 10 (Score > 10)

**Mục đích**: Kiểm tra thông báo lỗi khi người dùng nhập điểm lớn hơn 10

| Tiêu chí | Giá trị |
|----------|--------|
| **Input** | Toán: 12, Vật Lý: 7.0, Hóa Học: 8.0 |
| **Bước thực hiện** | 1. Nhập 12 vào ô Toán<br>2. Nhập 7.0 vào ô Vật Lý<br>3. Nhập 8.0 vào ô Hóa Học<br>4. Nhấn "Tính Điểm Trung Bình" |
| **Kết quả mong đợi** | - Không tính toán<br>- Ô Toán bị đánh dấu lỗi (màu đỏ)<br>- Hiển thị: "❌ Điểm không thể lớn hơn 10" |
| **Kết quả thực tế** | ________________________ |
| **Pass/Fail** | [ ] Pass &nbsp;&nbsp; [ ] Fail |

---

## Test Case 9: Lỗi ở nhiều ô (Multiple Errors)

**Mục đích**: Kiểm tra khi nhiều ô có lỗi cùng lúc

| Tiêu chí | Giá trị |
|----------|--------|
| **Input** | Toán: [trống], Vật Lý: 15, Hóa Học: abc |
| **Bước thực hiện** | 1. Để trống ô Toán<br>2. Nhập 15 vào ô Vật Lý<br>3. Nhập "abc" vào ô Hóa Học<br>4. Nhấn "Tính Điểm Trung Bình" |
| **Kết quả mong đợi** | - Không tính toán<br>- Cả 3 ô bị đánh dấu lỗi<br>- Toán: "⚠️ Vui lòng nhập điểm"<br>- Vật Lý: "❌ Điểm không thể lớn hơn 10"<br>- Hóa Học: "❌ Điểm phải là số" |
| **Kết quả thực tế** | ________________________ |
| **Pass/Fail** | [ ] Pass &nbsp;&nbsp; [ ] Fail |

---

## Test Case 10: Nút "Tính Lại" (Reset Button)

**Mục đích**: Kiểm tra chức năng xóa form và tính toán lại

| Tiêu chí | Giá trị |
|----------|--------|
| **Input** | Toán: 8.0, Vật Lý: 7.0, Hóa Học: 9.0 (lần 1)<br>Toán: 6.0, Vật Lý: 5.5, Hóa Học: 5.0 (lần 2) |
| **Bước thực hiện** | 1. Nhập điểm lần 1 và tính<br>2. Xem kết quả (8.00 - Giỏi)<br>3. Nhấn "Tính Lại"<br>4. Xóa input và nhập điểm lần 2<br>5. Tính lại |
| **Kết quả mong đợi** | - Lần 1: 8.00 - Giỏi ✅<br>- Sau "Tính Lại": Form trống, kết quả ẩn<br>- Lần 2: 5.50 - Trung bình ✅ |
| **Kết quả thực tế** | ________________________ |
| **Pass/Fail** | [ ] Pass &nbsp;&nbsp; [ ] Fail |

---

## Tóm tắt kết quả

| Test Case | Tên | Pass/Fail |
|-----------|-----|----------|
| 1 | Học sinh giỏi | [ ] |
| 2 | Học sinh khá | [ ] |
| 3 | Học sinh trung bình | [ ] |
| 4 | Học sinh yếu | [ ] |
| 5 | Input trống | [ ] |
| 6 | Input không phải số | [ ] |
| 7 | Điểm nhỏ hơn 0 | [ ] |
| 8 | Điểm lớn hơn 10 | [ ] |
| 9 | Lỗi ở nhiều ô | [ ] |
| 10 | Nút "Tính Lại" | [ ] |

**Tổng cộng**: _____ / 10 ✅

---

**Ghi chú:**
- Nếu tất cả test case pass ✅: Ứng dụng hoạt động chính xác
- Nếu có test case fail ❌: Kiểm tra lại code và sửa bug