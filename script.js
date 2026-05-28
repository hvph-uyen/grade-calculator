/**
 * Grade Calculator - Main JavaScript File
 * Ứng dụng tính điểm trung bình ba môn học
 * 
 * Chức năng chính:
 * 1. Kiểm tra tính hợp lệ của điểm nhập vào
 * 2. Tính toán điểm trung bình
 * 3. Xếp loại kết quả (Giỏi, Khá, Trung bình, Yếu)
 * 4. Hiển thị kết quả và lỗi cho người dùng
 */

// Lấy các phần tử DOM từ HTML
const gradeForm = document.getElementById('gradeForm');
const mathScoreInput = document.getElementById('mathScore');
const physicsScoreInput = document.getElementById('physicsScore');
const chemistryScoreInput = document.getElementById('chemistryScore');
const resultContainer = document.getElementById('resultContainer');
const averageScoreDisplay = document.getElementById('averageScore');
const classificationDisplay = document.getElementById('classification');

// Lắng nghe sự kiện submit form
gradeForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn chặn reload trang
    handleCalculate(); // Gọi hàm tính toán
});

/**
 * Hàm xóa lỗi của một trường input
 * @param {HTMLElement} inputElement - Phần tử input
 * @param {HTMLElement} errorElement - Phần tử hiển thị lỗi
 */
function clearError(inputElement, errorElement) {
    inputElement.classList.remove('error');
    errorElement.textContent = '';
}

/**
 * Hàm hiển thị lỗi cho một trường input
 * @param {HTMLElement} inputElement - Phần tử input
 * @param {HTMLElement} errorElement - Phần tử hiển thị lỗi
 * @param {string} message - Thông báo lỗi
 */
function showError(inputElement, errorElement, message) {
    inputElement.classList.add('error');
    errorElement.textContent = message;
}

/**
 * Hàm kiểm tra tính hợp lệ của một điểm
 * @param {string} value - Giá trị từ input
 * @returns {object} { isValid: boolean, error: string }
 */
function validateScore(value) {
    // Kiểm tra input có trống không
    if (value.trim() === '') {
        return {
            isValid: false,
            error: '⚠️ Vui lòng nhập điểm'
        };
    }

    // Kiểm tra input có phải số không
    const number = parseFloat(value);
    if (isNaN(number)) {
        return {
            isValid: false,
            error: '❌ Điểm phải là số'
        };
    }

    // Kiểm tra điểm có nhỏ hơn 0 không
    if (number < 0) {
        return {
            isValid: false,
            error: '❌ Điểm không thể nhỏ hơn 0'
        };
    }

    // Kiểm tra điểm có lớn hơn 10 không
    if (number > 10) {
        return {
            isValid: false,
            error: '❌ Điểm không thể lớn hơn 10'
        };
    }

    return { isValid: true, error: '' };
}

/**
 * Hàm tính toán và hiển thị kết quả
 */
function handleCalculate() {
    // Xóa tất cả lỗi trước
    clearError(mathScoreInput, document.getElementById('mathError'));
    clearError(physicsScoreInput, document.getElementById('physicsError'));
    clearError(chemistryScoreInput, document.getElementById('chemistryError'));

    // Kiểm tra hợp lệ từng input
    const mathValidation = validateScore(mathScoreInput.value);
    const physicsValidation = validateScore(physicsScoreInput.value);
    const chemistryValidation = validateScore(chemistryScoreInput.value);

    // Nếu có lỗi, hiển thị lỗi và không tính toán
    if (!mathValidation.isValid) {
        showError(mathScoreInput, document.getElementById('mathError'), mathValidation.error);
    }
    if (!physicsValidation.isValid) {
        showError(physicsScoreInput, document.getElementById('physicsError'), physicsValidation.error);
    }
    if (!chemistryValidation.isValid) {
        showError(chemistryScoreInput, document.getElementById('chemistryError'), chemistryValidation.error);
    }

    // Nếu tất cả input đều hợp lệ, tiến hành tính toán
    if (mathValidation.isValid && physicsValidation.isValid && chemistryValidation.isValid) {
        const mathScore = parseFloat(mathScoreInput.value);
        const physicsScore = parseFloat(physicsScoreInput.value);
        const chemistryScore = parseFloat(chemistryScoreInput.value);

        // Tính điểm trung bình
        const average = (mathScore + physicsScore + chemistryScore) / 3;

        // Xếp loại dựa trên điểm trung bình
        const classification = classifyScore(average);

        // Hiển thị kết quả
        displayResult(average, classification);
    }
}

/**
 * Hàm xếp loại điểm số
 * @param {number} average - Điểm trung bình
 * @returns {object} { name: string, cssClass: string }
 */
function classifyScore(average) {
    if (average >= 8.0) {
        return { name: '🌟 Giỏi', cssClass: 'excellent' };
    } else if (average >= 6.5 && average < 8.0) {
        return { name: '👍 Khá', cssClass: 'good' };
    } else if (average >= 5.0 && average < 6.5) {
        return { name: '📚 Trung bình', cssClass: 'average' };
    } else {
        return { name: '💪 Yếu', cssClass: 'poor' };
    }
}

/**
 * Hàm hiển thị kết quả tính toán
 * @param {number} average - Điểm trung bình
 * @param {object} classification - Thông tin xếp loại
 */
function displayResult(average, classification) {
    // Cập nhật giá trị điểm trung bình (làm tròn 2 chữ số thập phân)
    averageScoreDisplay.textContent = average.toFixed(2);

    // Cập nhật xếp loại
    classificationDisplay.textContent = classification.name;
    classificationDisplay.className = 'classification ' + classification.cssClass;

    // Hiển thị phần tử kết quả
    resultContainer.classList.remove('hidden');

    // Cuộn xuống để người dùng thấy kết quả
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Hàm xóa form và ẩn kết quả
 */
function resetForm() {
    // Xóa tất cả input
    mathScoreInput.value = '';
    physicsScoreInput.value = '';
    chemistryScoreInput.value = '';

    // Xóa tất cả lỗi
    clearError(mathScoreInput, document.getElementById('mathError'));
    clearError(physicsScoreInput, document.getElementById('physicsError'));
    clearError(chemistryScoreInput, document.getElementById('chemistryError'));

    // Ẩn phần tử kết quả
    resultContainer.classList.add('hidden');

    // Focus vào input đầu tiên
    mathScoreInput.focus();
}