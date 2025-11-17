import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import songData from "../../data/song.json";  // Đường dẫn file JSON đúng của bạn
import "./song.css";

import cover from "../../assets/song/coversong.png"; // Ảnh bìa cố định

// Import ảnh cụ thể theo tên trong JSON
import song1_tg from "../../assets/song/song1-tg.png";
import song1_hcm from "../../assets/song/song1-hcm.png";
import song2_tg from "../../assets/song/song2-tg.png";
import song2_hcm from "../../assets/song/song2-hcm.png";
import song3_tg from "../../assets/song/song3-tg.png";
import song3_hcm from "../../assets/song/song3-hcm.png";
import song4_tg from "../../assets/song/song4-tg.png";
import song4_hcm from "../../assets/song/song4-hcm.png";
import song5_tg from "../../assets/song/song5-tg.png";
import song5_hcm from "../../assets/song/song5-hcm.png";
import song6_tg from "../../assets/song/song6-tg.png";
import song6_hcm from "../../assets/song/song6-hcm.png";
import song7_tg from "../../assets/song/song7-tg.png";
import song7_hcm from "../../assets/song/song7-hcm.png";

// Map tên ảnh JSON với import thực tế
const imageMap = {
    "song1-tg.png": song1_tg,
    "song1-hcm.png": song1_hcm,
    "song2-tg.png": song2_tg,
    "song2-hcm.png": song2_hcm,
    "song3-tg.png": song3_tg,
    "song3-hcm.png": song3_hcm,
    "song4-tg.png": song4_tg,
    "song4-hcm.png": song4_hcm,
    "song5-tg.png": song5_tg,
    "song5-hcm.png": song5_hcm,
    "song6-tg.png": song6_tg,
    "song6-hcm.png": song6_hcm,
    "song7-tg.png": song7_tg,
    "song7-hcm.png": song7_hcm,
};

export default function Song() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Tạo ID kiểu string tự động cho mỗi bài trong JSON
    const items = useMemo(
        () => songData.map((item, index) => ({ ...item, id: String(index + 1) })),
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
            navigate(`/song/${item.id}`);
        }
    };

    return (
        <div className="song-page">
            {/* Ảnh cover */}
            <header className="cover">
                <img src={cover} alt="cover" className="cover-image" />
            </header>

            {/* Title */}
            <div className="cover-caption">
                <h1>Nhạc về Chủ tịch Hồ Chí Minh</h1>
            </div>

            <div className="song-layout">
                {/* Sidebar danh sách bài hát */}
                <nav className="song-list">
                    {items.map((item) => (
                        <button
                            key={item.id}
                            className={`song-item ${selected?.id === item.id ? "active" : ""}`}
                            onClick={() => onSelect(item)}
                        >
                            {item.title}
                        </button>
                    ))}
                </nav>

                {/* Nội dung chi tiết */}
                {selected ? (
                    <article className="song-content">
                        {/* YouTube Player */}
                        {selected.youtubeId ? (
                            <div className="youtube-wrapper">
                                <iframe
                                    src={`https://www.youtube.com/embed/${selected.youtubeId}`}
                                    title={selected.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ) : (
                            <p className="no-video">🎧 Bài hát này chưa có video YouTube.</p>
                        )}

                        <h2>{selected.title}</h2>
                        <p><strong>Tác giả:</strong> {selected.author}</p>
                        <p className="description">{selected.description}</p>

                        {/* Hiển thị 2 ảnh: Ảnh tác giả và ảnh Bác Hồ */}
                        {selected.images && selected.images.length === 2 && (
                            <div className="song-images">
                                {selected.images.map((imgName, idx) => {
                                    const imgSrc = imageMap[imgName];
                                    if (!imgSrc) return null;
                                    return (
                                        <img
                                            key={idx}
                                            src={imgSrc}
                                            alt={`${selected.title} image ${idx + 1}`}
                                            className="song-image"
                                        />
                                    );
                                })}
                            </div>
                        )}

                        {/* Link YouTube */}
                        {selected.url && (
                            <a
                                href={selected.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="youtube-link"
                            >
                                Mở video trên YouTube
                            </a>
                        )}
                    </article>
                ) : (
                    <p className="empty">Chọn một bài hát để nghe.</p>
                )}
            </div>
        </div>
    );
}
