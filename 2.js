// เรียกใช้งานอิเลเมนต์แบบ Audio
const audioA = document.getElementById('audioA');
const buttonA = document.getElementById('positionA');
const audioB = document.getElementById('audioB');
const buttonB = document.getElementById('positionB');
const audioAC = document.getElementById('audioC');
const buttonC = document.getElementById('positionC');
const audioD = document.getElementById('audioD');
const buttonD = document.getElementById('positionD');

let isPlaying = false;

// กำหนดการฟังก์ชันเมื่อคลิกที่ตำแหน่ง A
buttonA.addEventListener('click', () => {
    if (!isPlaying) {
        // เล่นเสียง
        audioA.play();
        isPlaying = true;
    } else {
        // หยุดเสียงถ้ากำลังเล่นอยู่
        audioA.pause();
        audioA.currentTime = 0;
        isPlaying = false;
    }
});

// กำหนดการฟังก์ชันเมื่อคลิกที่ตำแหน่ง B
buttonB.addEventListener('click', () => {
    if (!isPlaying) {
        // เล่นเสียง
        audioB.play();
        isPlaying = true;
    } else {
        // หยุดเสียงถ้ากำลังเล่นอยู่
        audioB.pause();
        audioB.currentTime = 0;
        isPlaying = false;
    }
});

// กำหนดการฟังก์ชันเมื่อคลิกที่ตำแหน่ง C
buttonC.addEventListener('click', () => {
    if (!isPlaying) {
        // เล่นเสียง
        audioC.play();
        isPlaying = true;
    } else {
        // หยุดเสียงถ้ากำลังเล่นอยู่
        audioC.pause();
        audioC.currentTime = 0;
        isPlaying = false;
    }
});

// กำหนดการฟังก์ชันเมื่อคลิกที่ตำแหน่ง D
buttonD.addEventListener('click', () => {
    if (!isPlaying) {
        // เล่นเสียง
        audioD.play();
        isPlaying = true;
    } else {
        // หยุดเสียงถ้ากำลังเล่นอยู่
        audioD.pause();
        audioD.currentTime = 0;
        isPlaying = false;
    }
});