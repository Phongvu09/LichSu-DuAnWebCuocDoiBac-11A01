import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import timelineData from "../../data/timeline.json";
import "./Timeline.css";
import nen from "../../assets/timeline/nen.png";

export default function Timeline() {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 800, once: true, offset: 100 });
    }, []);

    const handleClick = (id) => {
        navigate(`/timeline/${id}`);
    };

    return (
        <div className="timeline-page">
            {/* Ảnh bìa - header */}
            <header className="timeline-header">
                <img src={nen} alt="Ảnh bìa timeline" className="timeline-cover-image" />
                <div className="timeline-header-text">
                </div>
            </header>

            {/* Nội dung timeline */}
            <div className="timeline-container">
                <p className="timeline-intro">
                    Quá trình hoạt động cách mạng của Hồ Chí Minh là hành trình dài đầy gian khổ
                    nhưng kiên định vì độc lập dân tộc và tự do cho nhân dân Việt Nam. Từ năm 1911,
                    Người ra đi tìm đường cứu nước, bôn ba qua nhiều châu lục để tìm con đường giải phóng
                    phù hợp cho dân tộc. Trong suốt quá trình đó, Hồ Chí Minh đã tiếp thu tinh hoa văn hoá,
                    tiếp cận các tư tưởng tiến bộ của thời đại và trưởng thành về chính trị.
                    Những hoạt động của Người đã đặt nền móng cho việc thành lập Đảng Cộng sản Việt Nam.
                    Đây là chặng đường quan trọng mở ra bước ngoặt cho cách mạng Việt Nam trong thế kỷ XX.
                </p>

                <div className="timeline-list">
                    {timelineData.map((item, index) => (
                        <div
                            key={item.id}
                            className="timeline-item"
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                            onClick={() => handleClick(item.id)}
                        >
                            <div className="timeline-year">{item.year}</div>
                            <div className="timeline-content">
                                <h2>{item.title}</h2>
                                <p className="timeline-location">📍 {item.location}</p>
                                <p className="timeline-desc">
                                    {item.description.length > 140
                                        ? item.description.slice(0, 140) + "..."
                                        : item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
