import React from "react";
import "./Learn.css";
import cover from "../../assets/TPCB.png";

export default function Learn() {
    return (
        <div className="legacy">
            <header className="cover">
                <img src={cover} alt="Ảnh bìa Legacy TTHCM" className="cover-image" />
            </header>

            <section className="content-section">
                <p>
                    Đây là trang giới thiệu các ấn phẩm quan trọng của Hồ Chí Minh trên đất nước Việt Nam.
                </p>
            </section>
        </div>
    );
}
