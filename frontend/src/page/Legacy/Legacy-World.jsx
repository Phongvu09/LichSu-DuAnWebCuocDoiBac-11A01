import React from "react";
import "./Legacy.css";

import cover from "../../assets/home/bia-trang-chu.png";
import img1 from "../../assets/home/bia-trang-chu.png";
import img2 from "../../assets/home/bia-trang-chu.png";
import img3 from "../../assets/home/bia-trang-chu.png";
import img4 from "../../assets/home/bia-trang-chu.png";

function Divider() {
    return <div className="divider" />;
}

export default function LegacyWorld() {
    return (
        <div className="legacy">
            {/* Ảnh bìa */}
            <header className="cover">
                <img src={cover} alt="Ảnh bìa Legacy" className="cover-image" />
                <h1 className="cover-title">Legacy</h1>
            </header>

            {/* Section 1: ảnh trái, chữ phải */}
            <section className="section">
                <div className="section-content image-left">
                    <div className="image-wrapper">
                        <img src={img1} alt="Ảnh trái 1" />
                    </div>
                    <div className="text-wrapper">
                        <h2>Tiêu đề 1</h2>
                        <p>
                            Nội dung
                        </p>
                    </div>
                </div>
            </section>

            <Divider />

            {/* Section 2: ảnh phải, chữ trái */}
            <section className="section">
                <div className="section-content image-right">
                    <div className="text-wrapper">
                        <h2>Tiêu đề 2</h2>
                        <p>                            Nội dung
                        </p>
                    </div>
                    <div className="image-wrapper">
                        <img src={img2} alt="Ảnh phải 2" />
                    </div>
                </div>
            </section>

            <Divider />

            {/* Section 3: ảnh trái, chữ phải */}
            <section className="section">
                <div className="section-content image-left">
                    <div className="image-wrapper">
                        <img src={img3} alt="Ảnh trái 3" />
                    </div>
                    <div className="text-wrapper">
                        <h2>Tiêu đề 3</h2>
                        <p>                            Nội dung
                        </p>
                    </div>
                </div>
            </section>

            <Divider />

            {/* Section 4: ảnh phải, chữ trái */}
            <section className="section">
                <div className="section-content image-right">
                    <div className="text-wrapper">
                        <h2>Tiêu đề 4</h2>
                        <p>                            Nội dung
                        </p>
                    </div>
                    <div className="image-wrapper">
                        <img src={img4} alt="Ảnh phải 4" />
                    </div>
                </div>
            </section>
        </div>
    );
}
