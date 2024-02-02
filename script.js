function rollGacha() {
    const gachaElements = document.querySelectorAll('.gacha');
    const resultElement = document.getElementById('result');

    // Số lần quay
    const numRotations = 5;

    // Hiển thị dãy số của 5 ô
    const numbers = Array.from({ length: gachaElements.length }, () => getRandomNumber());

    // Thực hiện hiệu ứng quay số cho mỗi ô
    gachaElements.forEach((gacha, index) => {
        TweenMax.fromTo(gacha, 5, {
            rotation: 0,
            ease: Linear.easeNone,
        }, {
            rotation: 360 * numRotations,
            onUpdate: () => {
                // Hiển thị số ngẫu nhiên trong khi quay
                gacha.textContent = getRandomNumber();
            },
            onComplete: () => {
                // Hiển thị số cuối cùng khi quay xong
                gacha.textContent = numbers[index];

                // Nếu là ô cuối cùng, hiển thị kết quả tổng hợp
                if (index === gachaElements.length - 1) {
                    displayFinalResult(numbers);
                }
            },
        });
    });
}

function displayFinalResult(numbers) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = numbers.join(" - ");
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10); // Số ngẫu nhiên từ 0 đến 9
}
//////
function capNhatDongHo() {
    const phanTuDongHo = document.getElementById('live-clock');
    
    const bayGio = new Date();
    const tuyChonNgay = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const tuyChonGio = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };

    const chuoiNgay = bayGio.toLocaleDateString('vi-VN', tuyChonNgay);
    const chuoiGio = bayGio.toLocaleTimeString('vi-VN', tuyChonGio);

    phanTuDongHo.textContent = `${chuoiNgay} - ${chuoiGio}`;
}

// Cập nhật ngày và giờ mỗi giây
setInterval(capNhatDongHo, 1000);

// Cập nhật lần đầu tiên khi trang được tải
capNhatDongHo();




