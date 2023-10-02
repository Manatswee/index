// เชื่อมต่อกับบริการ Speech-to-Text API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition1 = new SpeechRecognition();
const recognition2 = new SpeechRecognition();
const recognition3 = new SpeechRecognition();
const recognition4 = new SpeechRecognition();
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
const output3 = document.getElementById('output3');
const output4 = document.getElementById('output4');
const recordButton1 = document.getElementById('recordButton1');
const recordButton2 = document.getElementById('recordButton2');
const recordButton3 = document.getElementById('recordButton3');
const recordButton4 = document.getElementById('recordButton4');

recognition1.lang = 'th-TH';
recognition2.lang = 'th-TH';
recognition3.lang = 'th-TH';
recognition4.lang = 'th-TH';

recognition1.interimResults = true;
recognition2.interimResults = true;
recognition3.interimResults = true;
recognition4.interimResults = true;

// ...

function setupRecognition(recognition, output, recordButton) {
    let isRecording = false;
    let countdown = 20; // เริ่มนับถอยหลังที่ 20

    function updateCountdown() {
        recordButton.innerText = `กำลังบันทึก (${countdown})`;
    }

    function startCountdown() {
        countdown = 20;
        updateCountdown();
        const countdownInterval = setInterval(() => {
            countdown--;
            updateCountdown();
            if (countdown === 0) {
                clearInterval(countdownInterval);
                recognition.stop();
                // นี่คือตำแหน่งที่คุณสามารถเรียกฟังก์ชันแปลงเสียงเป็นข้อความได้
                // ตัวอย่างเช่น convertSpeechToText(output);
                recordButton.disabled = false;
                recordButton.innerText = 'บันทึกเสียง';
            }
        }, 1000); // นับถอยหลังทุก 1 วินาที
    }

    recognition.onstart = function() {
        isRecording = true;
        recordButton.disabled = true;
        startCountdown();
    };

    recognition.onresult = function(event) {
        const result = event.results[event.results.length - 1];
        const transcript = result[0].transcript;
        output.innerHTML = transcript;
    };

    recognition.onend = function() {
        isRecording = false;
    };

    recordButton.addEventListener('click', () => {
        if (!isRecording) {
            recognition.start();
        }
    });
}

// ...


setupRecognition(recognition1, output1, recordButton1);
setupRecognition(recognition2, output2, recordButton2);
setupRecognition(recognition3, output3, recordButton3);
setupRecognition(recognition4, output4, recordButton4);




/// แปรและส่วนแสดงคะแนน
let score = 0;
const scoreDisplay = document.getElementById('scoreDisplay');
const maxScore = 4; // คะแนนเต็ม


// รหัสอื่น ๆ ที่มีอยู่

// เพิ่มฟังก์ชันเพื่อเช็คคีย์เวิร์ด
function checkKeywords(transcript) {
    const keywords = ["Airport", "A the airport", "คำหรือประโยคที่ต้องการตรวจสอบ3"];

    let foundKeywords = 0; // ตัวแปรเพื่อเก็บจำนวนคีย์เวิร์ดที่พบ

    for (const keyword of keywords) {
        if (transcript.includes(keyword)) {
            foundKeywords++;
        }
    }

    return foundKeywords; // คืนค่าจำนวนคำหรือประโยคที่ถูกตอบถูก
}


// ...

// เพิ่มการเช็คคีย์เวิร์ดเมื่อกดปุ่ม "Submit" และแสดงคะแนน
submitButton.addEventListener('click', () => {
    const foundKeywords1 = checkKeywords(output1.innerHTML); // ตรวจสอบคีย์เวิร์ดจากผลลัพธ์ของ recognition1 (output1)
    const foundKeywords2 = checkKeywords(output2.innerHTML); // ตรวจสอบคีย์เวิร์ดจากผลลัพธ์ของ recognition2 (output2)
    const foundKeywords3 = checkKeywords(output3.innerHTML); // ตรวจสอบคีย์เวิร์ดจากผลลัพธ์ของ recognition3 (output3)
    const foundKeywords4 = checkKeywords(output4.innerHTML); // ตรวจสอบคีย์เวิร์ดจากผลลัพธ์ของ recognition4 (output4)

    const totalScore = foundKeywords1 + foundKeywords2 + foundKeywords3 + foundKeywords4;

    if (totalScore > 0) {
        // แสดงคะแนนเมื่อพบคำหรือประโยคที่ต้องการตรวจสอบและตอบถูก
        scoreDisplay.innerText = `คะแนน: ${totalScore} คะแนน`;
        alert(`คะแนนที่คุณได้คือ: ${totalScore} คะแนน`);
    } else {
        // แสดงข้อความเมื่อไม่พบคำหรือประโยคที่ต้องการตรวจสอบหรือตอบถูก
        scoreDisplay.innerText = 'คะแนน: 0 คะแนน';
        alert('คุณไม่ได้รับคะแนน');
    }
});