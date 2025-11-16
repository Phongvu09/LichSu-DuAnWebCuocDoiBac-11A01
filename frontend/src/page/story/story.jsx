import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./story.css";
import cover from "../../assets/MT.png";

export default function Story() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true, offset: 100 });
    }, []);

    return (
        <div className="story-page">

            {/* HERO FULL WIDTH */}
            <header className="cover">
                <img src={cover} alt="Ảnh bìa" className="cover-image" />
            </header>

            {/* CONTENT (900px) */}
            <div className="legacy">
                <section className="content-section">
                    <p>Trang này tập trung giới thiệu về những mẫu chuyện về Bác</p>
                </section>
            </div>

            <section className="story-vertical-list">

                <div className="story-vertical-item" data-aos="fade-right">
                    <div className="story-dot"></div>
                    <div className="story-box">
                        <h3>Câu chuyện & bài học rút ra</h3>
                        <p>Những câu chuyện giản dị chứa đựng những bài học đạo đức sâu sắc.</p>
                        <Link to="/story1" className="story-more">Xem chi tiết →</Link>
                    </div>
                </div>

                <div className="story-vertical-item" data-aos="fade-left">
                    <div className="story-dot"></div>
                    <div className="story-box">
                        <h3>Bác Hồ & thiếu nhi</h3>
                        <p>Tình yêu thương của Bác dành cho trẻ em Việt Nam.</p>
                        <Link to="/story2" className="story-more">Xem chi tiết →</Link>
                    </div>
                </div>

                <div className="story-vertical-item" data-aos="fade-right">
                    <div className="story-dot"></div>
                    <div className="story-box">
                        <h3>Bác Hồ với thanh niên</h3>
                        <p>Các câu chuyện truyền cảm hứng về học tập và rèn luyện.</p>
                        <Link to="/story3" className="story-more">Xem chi tiết →</Link>
                    </div>
                </div>

                <div className="story-vertical-item" data-aos="fade-left">
                    <div className="story-dot"></div>
                    <div className="story-box">
                        <h3>Bác Hồ & chiến sĩ</h3>
                        <p>Những câu chuyện cảm động về Bác và lực lượng vũ trang.</p>
                        <Link to="/story4" className="story-more">Xem chi tiết →</Link>
                    </div>
                </div>

                <div className="story-vertical-item" data-aos="fade-right">
                    <div className="story-dot"></div>
                    <div className="story-box">
                        <h3>Một số câu chuyện khác</h3>
                        <p>Tập hợp các câu chuyện đặc biệt, ít người biết.</p>
                        <Link to="/story5" className="story-more">Xem chi tiết →</Link>
                    </div>
                </div>

                <div className="story-vertical-item" data-aos="fade-left">
                    <div className="story-dot"></div>
                    <div className="story-box">
                        <h3>Những ngày đầu ra đi tìm đường cứu nước</h3>
                        <p>Hành trình mở đầu chí hướng vì độc lập dân tộc.</p>
                        <Link to="/story6" className="story-more">Xem chi tiết →</Link>
                    </div>
                </div>

            </section>

        </div>
    );
}
