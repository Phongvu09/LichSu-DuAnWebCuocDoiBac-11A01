import "./Quotes.css";

export default function Quotes() {
    const quotes = [
        "Không có gì quý hơn độc lập, tự do.",
        "Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong.",
        "Học để làm việc, làm người, làm cán bộ.",
        "Một dân tộc dốt là một dân tộc yếu."
    ];

    return (
        <div className="quotes-page">
            <h2>Những câu nói nổi tiếng của Bác Hồ</h2>
            <ul>
                {quotes.map((q, i) => (
                    <li key={i}>{q}</li>
                ))}
            </ul>
        </div>
    );
}
