// เลือกฟอร์มแบบทดสอบ
const quizForm = document.getElementById('quiz-form');

// กำหนดคำตอบที่ถูกต้อง
const correctAnswers = ['3', '2', '2', '2'];

// จัดการการส่งฟอร์มแบบทดสอบ
quizForm.addEventListener('submit', function(e) {
    e.preventDefault(); // ป้องกันการรีโหลดหน้า

    let score = 0;
    const userAnswers = [
        quizForm.q1.value,
        quizForm.q2.value,
        quizForm.q3.value,
        quizForm.q4.value,

    ];

    // ตรวจสอบคำตอบและคำนวณคะแนน
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 1;
        }
    });

    // แสดงผลลัพธ์
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<p>คะแนนของคุณ: ${score} / ${correctAnswers.length}</p>`;
});