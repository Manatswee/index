<?php
// ข้อมูลการเชื่อมต่อกับ MySQL
$servername = "localhost"; // หรือ IP ของเซิร์ฟเวอร์ MySQL
$username = "ชื่อผู้ใช้ MySQL"; // ชื่อผู้ใช้ MySQL
$password = "รหัสผ่าน MySQL"; // รหัสผ่าน MySQL
$database = "ชื่อฐานข้อมูล"; // ชื่อฐานข้อมูลที่คุณต้องการเชื่อมต่อ

// สร้างการเชื่อมต่อ
$conn = new mysqli($servername, $username, $password, $database);

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    die("เชื่อมต่อกับ MySQL ล้มเหลว: " . $conn->connect_error);
}

// ตรวจสอบการส่งข้อมูลการล็อกอินจากแบบฟอร์ม
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"]; // เป็นตัวอย่าง แทน "email" ด้วยชื่อฟิลด์ของอีเมล์ในแบบฟอร์ม
    $password = $_POST["password"]; // เป็นตัวอย่าง แทน "password" ด้วยชื่อฟิลด์ของรหัสผ่านในแบบฟอร์ม

    // เพิ่มโค้ด SQL สำหรับตรวจสอบข้อมูลการล็อกอินในฐานข้อมูล
    $sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // พบผู้ใช้งานที่ตรงกับข้อมูลการล็อกอิน
        // คุณสามารถดำเนินการต่อไปได้ เช่น เก็บข้อมูลผู้ใช้ในเซสชัน
        // หรือเปลี่ยนเส้นทางไปยังหน้าหลักหลังจากล็อกอินสำเร็จ
    } else {
        // ไม่พบผู้ใช้งานหรือข้อมูลการล็อกอินไม่ถูกต้อง
        echo "การล็อกอินไม่สำเร็จ";
    }
}

// ปิดการเชื่อมต่อ MySQL เมื่อเสร็จสิ้น
$conn->close();
?>
