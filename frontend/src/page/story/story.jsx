import React from "react";
import "./story.css";
import cover from "../../assets/MC.png";

export default function Story() {
    return (
        <div className="legacy">
            <header className="cover">
                <img src={cover} alt="Ảnh bìa Legacy thế giới" className="cover-image" />
            </header>

            <section className="content-section">
                <p>
                    Trang này tập trung giới thiệu về những mẫu chuyện về Bác
                </p>
            </section>
        </div>
    );
}
