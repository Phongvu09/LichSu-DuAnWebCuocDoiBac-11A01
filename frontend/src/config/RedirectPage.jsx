import { useEffect } from "react";

export default function RedirectPage() {
    useEffect(() => {
        // Redirect sang Google, rồi từ Google người dùng có thể tìm trang web bạn
        window.location.href = "https://www.google.com/search?q=site:lich-su-du-an-web-cuoc-doi-bac-11-a.vercel.app";
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Đang chuyển hướng...</h2>
            <p>Nếu trình duyệt không tự chuyển, vui lòng bấm <a href="https://www.google.com/search?q=site:lich-su-du-an-web-cuoc-doi-bac-11-a.vercel.app">vào đây</a></p>
        </div>
    );
}
