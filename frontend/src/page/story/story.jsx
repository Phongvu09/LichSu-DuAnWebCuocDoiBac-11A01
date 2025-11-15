import React from "react";
import "./story.css";
import cover from "../../assets/MC.png";

export default function Story() {
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

        </div>
    );
}
