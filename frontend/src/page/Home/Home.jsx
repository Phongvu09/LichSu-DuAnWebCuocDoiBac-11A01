import { useState } from "react";
import "./Home.css";

import bia from "../../assets/home/bia-trang-chu.png";
import anh1 from "../../assets/home/anh1.jpg";
import anh2 from "../../assets/home/anh2.jpg";
import anh3 from "../../assets/home/anh3.jpg";
import anh4 from "../../assets/home/anh4.jpg";
import anh5 from "../../assets/home/anh5.jpg";
import anh6 from "../../assets/home/anh6.jpg";
import bgSlideshow from "../../assets/home/bia-trang-chu.png"; // ảnh nền chung cho vùng about

export default function Home() {
    const slideshowImages = [anh1, anh2, anh3, anh4, anh5, anh6];

    const [current, setCurrent] = useState(0);

    const nextImage = () => {
        setCurrent((prev) => (prev + 1) % slideshowImages.length);
    };

    const prevImage = () => {
        setCurrent((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
    };

    return (
        <div className="home fade-in">
            {/* HERO */}
            <section className="hero">
                <img src={bia} alt="Bìa trang chủ" className="hero-image" />
            </section>

            {/* ABOUT SECTION */}
            <section className="about section">
                <div
                    className="about-wrapper"
                    style={{ backgroundImage: `url(${bgSlideshow})` }}
                >
                    {/* Ảnh bên trái */}
                    <div className="about-left">
                        <button
                            className="nav-btn left"
                            onClick={prevImage}
                            aria-label="Ảnh trước"
                        >
                            &lt;
                        </button>
                        <img
                            src={slideshowImages[current]}
                            alt={`Ảnh slideshow ${current + 1}`}
                            className="about-image"
                            draggable={false}
                        />
                        <button
                            className="nav-btn right"
                            onClick={nextImage}
                            aria-label="Ảnh tiếp"
                        >
                            &gt;
                        </button>

                        <div className="dots">
                            {slideshowImages.map((_, i) => (
                                <span
                                    key={i}
                                    className={`dot ${i === current ? "active" : ""}`}
                                    onClick={() => setCurrent(i)}
                                    aria-label={`Chuyển đến ảnh ${i + 1}`}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") setCurrent(i);
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Chữ bên phải */}
                    <div className="about-right">
                        <h2>Đôi lời về chúng tôi</h2>
                        <p>
                            Chào mừng mọi người đến với Hành Trình “Theo Dấu Chân Người” – nơi chúng em, bọc sinh lớp 11401 trường THPT Nguyễn Thượng Hiền, kế lại hành trình cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh theo một cách mới mẻ, gần gũi và đầy cảm xúc. Dự án của chúng em là một không gian trực tuyến kết hợp giữa việc sưu tầm tư liệu, bình ảnh, số liệu lịch sửvới những thước phim animation sinh động, nhằm tái hiện không chỉ những dấu mốc quan trọng, mà còn cả hơi thở, cảm xúc và tỉnh thần thời đại trong từng bước chân Người đã đi qua. Đó là hành trình của niềm tin, của khát vọng độc lập, của ý chí kiên cường và tình yêu thương vô bờ dành cho dân tộc Việt Nam.
                            Thông qua sự kết hợp giữa biện thực và cảm xúc, giữa câu chuyện được viết bằng trái tim và hình ảnh được dựng bằng lòng tôn kính, chúng em mong rằng người xem sẽ cảm nhận được một Bác Hồ vừa vì đại mà vẫn gần gũi – một con người giản dị, khiêm nhường nhưng mang trong mình ý chí và tầm vóc của cả dân tộc. "Theo Dấu Chân Người" không chỉ là bành trình tìm về quá khứ, mà còn là lời nhắc nhở để chúng ta sống đẹp hơn, cống biển nhiều hơn, và tiếp tục viết tiếp những trang sử rạng ngời mà Người đã khởi đầu.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about section">
                <div
                    className="about-wrapper"
                    style={{ backgroundImage: `url(${bgSlideshow})` }}
                >
                    {/* Ảnh bên trái */}
                    <div className="about-left">
                        <button
                            className="nav-btn left"
                            onClick={prevImage}
                            aria-label="Ảnh trước"
                        >
                            &lt;
                        </button>
                        <img
                            src={slideshowImages[current]}
                            alt={`Ảnh slideshow ${current + 1}`}
                            className="about-image"
                            draggable={false}
                        />
                        <button
                            className="nav-btn right"
                            onClick={nextImage}
                            aria-label="Ảnh tiếp"
                        >
                            &gt;
                        </button>

                        <div className="dots">
                            {slideshowImages.map((_, i) => (
                                <span
                                    key={i}
                                    className={`dot ${i === current ? "active" : ""}`}
                                    onClick={() => setCurrent(i)}
                                    aria-label={`Chuyển đến ảnh ${i + 1}`}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") setCurrent(i);
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Chữ bên phải */}
                    <div className="about-right">
                        <h2>Đôi lời về chúng tôi</h2>
                        <p>
                            Trang web này được tạo nên với mong muốn khắc họa lại cuộc đời,
                            sự nghiệp và tư tưởng của Chủ tịch Hồ Chí Minh – vị lãnh tụ vĩ
                            đại của dân tộc Việt Nam. Qua những hình ảnh, tư liệu và câu
                            chuyện, chúng tôi hy vọng có thể truyền cảm hứng và giúp mọi người
                            hiểu rõ hơn về con người và tấm gương của Bác.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
