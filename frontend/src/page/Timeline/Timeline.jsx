import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import timelineData from "../../data/timeline.json";
import "./Timeline.css";

export default function Timeline() {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 800, once: true, offset: 100 });
    }, []);

    const handleClick = (id) => {
        navigate(`/timeline/${id}`);
    };

    return (
        <div className="timeline-container">
            <h1 className="timeline-heading">Hành Trình Cuộc Đời Bác Hồ</h1>
            <p className="timeline-intro">
                Từng dấu mốc ghi lại hành trình vĩ đại của Chủ tịch Hồ Chí Minh —
                từ tuổi thơ tại Nghệ An đến khi trở thành vị lãnh tụ vĩ đại của dân tộc Việt Nam.
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
    );
}
