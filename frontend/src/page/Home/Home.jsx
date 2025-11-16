import { useState } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

import bia from "../../assets/home/bia-trang-chu.png";

import bgSlideshow from "../../assets/home/bia-trang-chu.png"; // ảnh nền chung cho vùng about
import aboutUs from "../../assets/biography/nen.png";
import why from "../../assets/YTQD.png"
import thanks from "../../assets/home/lco.jpg"

export default function Home() {

    return (
        <div className="home fade-in">
            {/* HERO */}
            <section className="hero-img-section">
                <img src={bia} alt="hero" className="hero-img" />
            </section>

            <section className="hero-img-section">
                <img src={aboutUs} alt="hero" className="hero-img" />
            </section>

            <section className="hero-img-section">
                <img src={why} alt="hero" className="hero-img" />
            </section>

            <section className="hero-img-section">
                <img src={thanks} alt="hero" className="hero-img" />
            </section>


            {/* READ MORE SECTION */}
            <section className="read-more fade-up">
                <div className="read-card">
                    <img src={aboutUs} alt="Cuộc đời Bác" className="read-image" />
                    <h3>Tiểu sử</h3>
                    <p>Tìm hiểu tiểu sử cuộc đời bác</p>
                    <Link to="/biography" className="read-btn">Xem chi tiết</Link>                </div>

                <div className="read-card">
                    <img src={why} alt="Dòng thời gian" className="read-image" />
                    <h3>Yếu tố tác động đến quá trình hoạt động cách mạng</h3>
                    <p>Tìm hiêu yếu tố tác động đến quá trình hoạt động cách mạng</p>
                    <Link to="/factors" className="read-btn">Khám phá</Link>
                </div>
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
