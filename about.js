document.addEventListener('DOMContentLoaded', () => {
    // เรียกใช้งาน API หรือ Ajax เพื่อรอดึงข้อมูลจากเซิร์ฟเวอร์
    fetch('fetch_profile_data.php')
        .then(response => response.json())
        .then(data => {
            const profileData = document.getElementById('profile-data');

            // แสดงข้อมูลที่ถูกดึงมาจากเซิร์ฟเวอร์
            profileData.innerHTML = `
                <p>ชื่อ: ${data.name}</p>
                <p>อีเมล: ${data.email}</p>
                <p>เบอร์โทร: ${data.phone}</p>
                <p>ที่อยู่: ${data.address}</p>
            `;
        })
        .catch(error => {
            console.error('เกิดข้อผิดพลาดในการดึงข้อมูล: ', error);
        });
});


// ไม่ได้ใช้งาน