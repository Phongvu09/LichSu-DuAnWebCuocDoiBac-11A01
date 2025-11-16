import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import learnData from "../../data/learn.json";
import "./Learn.css";

import cover from "../../assets/TPCB.png";

import anh1 from "../../assets/learn/anh1.png";
import anh2 from "../../assets/learn/anh2.png";
import anh3 from "../../assets/learn/anh3.png";
import anh4 from "../../assets/learn/anh4.png";
import anh5 from "../../assets/learn/anh5.png";
import anh6 from "../../assets/learn/anh6.png";
import anh7 from "../../assets/learn/anh7.png";
import anh8 from "../../assets/learn/anh8.png";
import anh9 from "../../assets/learn/anh9.png";

export default function Learn() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Gán id = index + 1
    const items = useMemo(
        () => learnData.map((item, index) => ({ ...item, id: String(index + 1) })),
        []
    );

    const [selected, setSelected] = useState(null);

    useEffect(() => {
        if (id) {
            const found = items.find((item) => item.id === id);
            setSelected(found || null);
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            setSelected(null);
        }
    }, [id, items]);

    const onSelect = (item) => {
        if (item.id !== selected?.id) {
            navigate(`/learn/${item.id}`);
        }
    };

    // Map ảnh JSON → ảnh thật
    const imageMap = {
        anh1, anh2, anh3, anh4, anh5, anh6, anh7, anh8, anh9,
    };

    // Lấy content theo prefix: context1, context2...
    const getParagraphsByPrefix = (obj, prefix) => {
        return Object.keys(obj)
            .filter((key) => key.startsWith(prefix))
            .sort()
            .map((key) => obj[key])
            .filter(Boolean);
    };

    return (
        <div className="learn-page">

            {/* Ảnh cover cố định */}
            <header className="cover">
                <img src={cover} alt="Ảnh bìa" className="cover-image" />
            </header>

            {/* H1 tách riêng */}
            <div className="cover-caption">
                <h1>Tư liệu & Ấn phẩm Hồ Chí Minh</h1>
            </div>

            <div className="legacy">
                {/* Sidebar */}
                <nav className="list">
                    {items.map((item) => (
                        <button
                            key={item.id}
                            className={`list-item ${selected?.id === item.id ? "active" : ""}`}
                            onClick={() => onSelect(item)}
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>

                {/* Nội dung */}
                {selected ? (
                    <article className="content-article">
                        {selected.image?.src && imageMap[selected.image.src] && (
                            <img
                                src={imageMap[selected.image.src]}
                                alt={selected.image.alt || selected.name}
                                className="content-image"
                            />
                        )}

                        <section>
                            <h2>Bối cảnh</h2>
                            {getParagraphsByPrefix(selected, "context").map((p, idx) => (
                                <p key={idx}>{p}</p>
                            ))}
                        </section>

                        <section>
                            <h2>Nội dung</h2>
                            {getParagraphsByPrefix(selected, "content").map((p, idx) => (
                                <p key={idx}>{p}</p>
                            ))}
                        </section>

                        <section>
                            <h2>Ý nghĩa</h2>
                            {getParagraphsByPrefix(selected, "meaning").map((p, idx) => (
                                <p key={idx}>{p}</p>
                            ))}
                        </section>
                    </article>
                ) : (
                    <p className="empty">Chọn một mục để xem chi tiết.</p>
                )}
            </div>
        </div>
    );
}
