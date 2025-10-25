import { Link } from "react-router-dom";
import "./TimelineItem.css";

export default function TimelineItem({ id, year, title }) {
    return (
        <Link to={`/timeline/${id}`} className="timeline-item">
            <div className="timeline-year">{year}</div>
            <div className="timeline-title">{title}</div>
        </Link>
    );
}
