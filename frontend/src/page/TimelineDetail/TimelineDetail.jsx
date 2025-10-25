import { useParams, Link } from "react-router-dom";
import timelineData from "../../data/timeline.json";
import "./TimelineDetail.css";

export default function TimelineDetail() {
    const { id } = useParams();
    const item = timelineData.find((t) => t.id === Number(id));

    if (!item) {
        return (
            <div className="timeline-detail">
                <h2>Không tìm thấy sự kiện</h2>
                <Link to="/timeline" className="back-link">← Quay lại Timeline</Link>
            </div>
        );
    }

    return (
        <div className="timeline-detail">
            <h1>{item.title}</h1>
            <p className="year">📅 Năm: {item.year}</p>
            <p className="location">📍 Địa điểm: {item.location}</p>
            <p className="desc">{item.description}</p>
            <Link to="/timeline" className="back-link">← Quay lại dòng thời gian</Link>
        </div>
    );
}
