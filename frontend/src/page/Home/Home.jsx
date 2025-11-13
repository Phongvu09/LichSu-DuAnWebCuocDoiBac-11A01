import { useState } from "react";
import "./Home.css";

import bia from "../../assets/bia-trang-chu.png";
import anh1 from "../../assets/anh1.png";
import anh2 from "../../assets/anh2.png";
import anh3 from "../../assets/anh3.png";
import bgSlideshow from "../../assets/anh1.png"; // ảnh nền chung cho vùng about

export default function Home() {
    const slideshowImages = [anh1, anh2, anh3];

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
                            Trang web này được tạo nên với mong muốn khắc họa lại cuộc đời,
                            sự nghiệp và tư tưởng của Chủ tịch Hồ Chí Minh – vị lãnh tụ vĩ
                            đại của dân tộc Việt Nam. Qua những hình ảnh, tư liệu và câu
                            chuyện, chúng tôi hy vọng có thể truyền cảm hứng và giúp mọi người
                            hiểu rõ hơn về con người và tấm gương của Bác.
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
