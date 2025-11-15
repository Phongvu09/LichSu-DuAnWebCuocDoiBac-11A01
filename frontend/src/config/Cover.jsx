import React from "react";
import "./Cover.css";

export default function Cover({ imgSrc, title }) {
    return (
        <header className="cover">
            <img src={imgSrc} alt="Ảnh bìa" className="cover-image" />
            <h1 className="cover-title">{title}</h1>
        </header>
    );
}
