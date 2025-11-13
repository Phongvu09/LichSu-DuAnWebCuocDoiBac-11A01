import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import timelineData from "../../data/timeline.json";
import "./TimelineDetail.css";

// Import ảnh tĩnh
import BHTPB from "../../assets/GD4/BHTPB.jpg";
import CMT8 from "../../assets/GD4/CMT8.jpg";
import DHL6 from "../../assets/GD4/DHL6.jpg";
import HNTULT8 from "../../assets/GD4/HNTULT8.jpg";
import LKN from "../../assets/GD4/LKN.jpg";
import TVS from "../../assets/GD4/TVS.jpg";
import vov4 from "../../assets/GD4/vov4.webp";
import BLBB from "../../assets/GD1/BLBB.png";
import HTL from "../../assets/GD1/HTL.png";
import NBTSG from "../../assets/GD1/NBTSG.png";
import NNSS from "../../assets/GD1/NNSS.jpg";
import NOGDB from "../../assets/GD1/NOGDB.png";
import NSS from "../../assets/GD1/NSS.jpg";
import NTHNVC from "../../assets/GD1/NTHNVC.jpg";
import TDD from "../../assets/GD1/TDD.png";
import TDTPT from "../../assets/GD1/TDTPT.png";
import TKSTK from "../../assets/GD1/TKSTK.png";
import TQHH from "../../assets/GD1/TQHH.png";
import TTHP from "../../assets/GD1/TTHP.JPG";
import TTHPV from "../../assets/GD1/TTHPV.png";




const imagesMap = {
    BHTPB,
    CMT8,
    DHL6,
    HNTULT8,
    LKN,
    TVS,
    vov4,
    BLBB,
    HTL,
    NBTSG,
    NNSS,
    NOGDB,
    NSS,
    NTHNVC,
    TDD,
    TDTPT,
    TKSTK,
    TQHH,
    TTHP,
    TTHPV
};

export default function TimelineDetail() {
    const { id } = useParams();
    const [modalImage, setModalImage] = useState(null); // lưu ảnh đang mở modal
    const [modalAlt, setModalAlt] = useState("");

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out-cubic",
            offset: 120,
        });
    }, []);

    const item = timelineData.find((t) => t.id === Number(id));

    if (!item) {
        return (
            <div className="timeline-detail container">
                <h2>Không tìm thấy sự kiện</h2>
                <Link to="/timeline" className="back-link">
                    ← Quay lại Timeline
                </Link>
            </div>
        );
    }

    const stages = Object.entries(item)
        .filter(([key]) => key.startsWith("stage"))
        .map(([key, value]) => ({ ...value, stageKey: key }));

    // Hàm mở modal ảnh
    const openModal = (src, alt) => {
        setModalImage(src);
        setModalAlt(alt);
        document.body.style.overflow = "hidden"; // khóa scroll khi mở modal
    };

    // Hàm đóng modal
    const closeModal = () => {
        setModalImage(null);
        setModalAlt("");
        document.body.style.overflow = "auto"; // mở lại scroll
    };

    // Đóng modal khi click ngoài ảnh
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("modal-overlay")) {
            closeModal();
        }
    };

    return (
        <div className="timeline-detail container">
            <header className="timeline-header" data-aos="fade-down">
                <h1 className="timeline-year">{item.year}</h1>
                <h2 className="timeline-main-title">{item.title}</h2>
            </header>

            {stages.length === 0 && (
                <p className="no-stage" data-aos="fade-up">
                    Không có dữ liệu giai đoạn nào để hiển thị.
                </p>
            )}

            {stages.map(({ stageKey, title, location, detail }) => (
                <section
                    key={stageKey}
                    className="timeline-stage"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <h3 className="stage-title">{title}</h3>
                    <p className="stage-location">📍 {location}</p>

                    <div className="detail-content">
                        {Array.isArray(detail) && detail.length > 0 ? (
                            detail.map((entry, idx) => {
                                switch (entry.type) {
                                    case "text":
                                        return (
                                            <p key={idx} className="detail-text">
                                                {entry.content}
                                            </p>
                                        );

                                    case "quote":
                                        return (
                                            <blockquote key={idx} className="detail-quote">
                                                {entry.content}
                                            </blockquote>
                                        );

                                    case "poem":
                                        const lines = entry.content.split("|").filter(Boolean);
                                        return (
                                            <div key={idx} className="detail-poem">
                                                {lines.map((line, i) => (
                                                    <p key={i} className="poem-line">
                                                        {line.trim()}
                                                    </p>
                                                ))}
                                            </div>
                                        );

                                    case "image":
                                        const imgSrc = imagesMap[entry.src];
                                        if (!imgSrc) return null;

                                        return (
                                            <div
                                                key={idx}
                                                className="detail-image-wrapper"
                                                data-aos="zoom-in"
                                                data-aos-delay={idx * 150}
                                                onClick={() => openModal(imgSrc, entry.alt || "Ảnh minh họa")}
                                                style={{ cursor: "zoom-in" }}
                                                title="Click để phóng to ảnh"
                                            >
                                                <img
                                                    src={imgSrc}
                                                    alt={entry.alt || "Ảnh minh họa"}
                                                    className="detail-image"
                                                    loading="lazy"
                                                />
                                                {entry.alt && (
                                                    <p className="image-caption">{entry.alt}</p>
                                                )}
                                            </div>
                                        );

                                    default:
                                        return null;
                                }
                            })
                        ) : (
                            <p className="no-detail">Không có nội dung chi tiết</p>
                        )}
                    </div>
                </section>
            ))}

            <footer className="timeline-footer" data-aos="fade-up" data-aos-delay="200">
                <Link to="/timeline" className="back-link">
                    ← Quay lại dòng thời gian
                </Link>
            </footer>

            {/* Modal phóng to ảnh */}
            {modalImage && (
                <div className="modal-overlay" onClick={handleOverlayClick}>
                    <div className="modal-content">
                        <button className="modal-close-btn" onClick={closeModal} aria-label="Đóng ảnh">
                            &times;
                        </button>
                        <img src={modalImage} alt={modalAlt} className="modal-image" />
                        {modalAlt && <p className="image-caption">{modalAlt}</p>}
                    </div>
                </div>
            )}
        </div>
    );
}
