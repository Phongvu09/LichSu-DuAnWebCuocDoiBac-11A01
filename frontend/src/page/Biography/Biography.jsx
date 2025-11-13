import { Link } from "react-router-dom";
import "./Biography.css";

export default function Biography() {
    return (
        <div className="biography fade-in">
            {/* HERO */}
            <section className="bio-hero">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Ho_Chi_Minh_1946_cropped.jpg"
                    alt="Chủ tịch Hồ Chí Minh"
                    className="bio-hero-img"
                />
                <div className="bio-hero-text">
                    <h1>Tiểu sử & Cuộc đời</h1>
                    <p>
                        “Hồ Chí Minh – Người đã hiến trọn cuộc đời cho độc lập, tự do, hạnh phúc của dân tộc Việt Nam và nhân loại tiến bộ.”
                    </p>
                </div>
            </section>

            {/* INTRO */}
            <section className="bio-intro">
                <h2>Vài nét về cuộc đời</h2>
                <p>
                    Hồ Chí Minh (1890–1969), tên khai sinh là Nguyễn Sinh Cung, sinh tại làng Kim Liên, Nghệ An.
                    Từ nhỏ, Người đã nuôi chí cứu nước, ra đi tìm đường giải phóng dân tộc năm 1911.
                    Sau ba mươi năm bôn ba, Người đã tìm thấy con đường cách mạng vô sản, góp phần sáng lập Đảng Cộng sản Việt Nam năm 1930
                    và lãnh đạo nhân dân giành độc lập năm 1945.
                </p>
                <p>
                    Trong suốt cuộc đời, Bác luôn sống giản dị, khiêm tốn, dành trọn tâm huyết cho đất nước và con người.
                    Tư tưởng, đạo đức, phong cách Hồ Chí Minh đến nay vẫn là ngọn đuốc soi đường cho các thế hệ Việt Nam.
                </p>
            </section>

            {/* IMAGE GALLERY */}
            <section className="bio-gallery">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Ho_Chi_Minh_and_Vo_Nguyen_Giap_1950.jpg"
                    alt="Hồ Chí Minh và Võ Nguyên Giáp"
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Ho_Chi_Minh_1957.jpg"
                    alt="Hồ Chí Minh năm 1957"
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Ho_Chi_Minh_meeting_1955.jpg"
                    alt="Bác Hồ gặp gỡ nhân dân"
                />
            </section>

            {/* TIMELINE LINK */}
            <section className="bio-timeline-link">
                <h2>Hành trình cách mạng</h2>
                <p>
                    Cuộc đời Bác là bản anh hùng ca bất tận. Mỗi năm, mỗi chặng đường đều gắn liền với những cột mốc lịch sử của dân tộc.
                </p>
                <Link to="/timeline" className="bio-btn">Xem dòng thời gian</Link>
            </section>

            {/* QUOTE */}
            <section className="bio-quote">
                <blockquote>
                    “Tôi chỉ có một ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập,
                    dân ta được hoàn toàn tự do, ai cũng có cơm ăn áo mặc, ai cũng được học hành.”
                </blockquote>
                <footer>— Hồ Chí Minh</footer>
            </section>
        </div>
    );
}
