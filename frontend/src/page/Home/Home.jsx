import { useState } from "react";
import "./Home.css";

import bia from "../../assets/home/bia-trang-chu.png";
import anh1 from "../../assets/home/anh1.jpg";
import anh2 from "../../assets/home/anh2.JPG";
import anh3 from "../../assets/home/anh3.JPG";
import anh4 from "../../assets/home/anh4.jpg";
import anh5 from "../../assets/home/anh5.jpg";
import anh6 from "../../assets/home/anh6.jpg";
import bgSlideshow from "../../assets/home/bia-trang-chu.png"; // ảnh nền chung cho vùng about
import aboutUs from "../../assets/home/nen.jpg";
import why from "../../assets/home/vs.jpg"
import thanks from "../../assets/home/lco.jpg"

export default function Home() {
    const slideshowImages = [anh1, anh2, anh3, anh5, anh6];
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

            <section className="hero">
                <img src={aboutUs} alt="Bìa trang chủ" className="hero-image" />
            </section>

            <section className="hero">
                <img src={why} alt="Bìa trang chủ" className="hero-image" />
            </section>

            <section className="hero">
                <img src={thanks} alt="Bìa trang chủ" className="hero-image" />
            </section>




            {/* ABOUT SECTION 2 - như cũ
            <section className="about section">
                <div
                    className="about-wrapper"
                    style={{ backgroundImage: `url(${bgSlideshow})` }}
                >
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
            </section> */}
        </div>
    );
}
