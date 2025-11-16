import React from "react";
import { useNavigate } from "react-router-dom";
import "./storyAll.css";

const pageId = 2;

const storyCategories = [
    {
        id: 1,
        title: "Bác Hồ - Người bạn lớn của thiếu nhi thế giới",
        shortDesc: "Ngày 7 – 2 - 1958 hơn 3.000 em thiếu nhi Ấn Độ đồng diễn chào mừng Bác Hồ ...",
        storyKey: "story1",
    },
    {
        id: 2,
        title: "Sự quan tâm và giáo dục của Bác dành cho thế hệ tương lai",
        shortDesc: "Đầu năm 1967, Bác Hồ về thăm tỉnh Thái Bình. Các em thiếu nhi xóm Dân Chủ hát vang bài “Giải phóng miền Nam” đón Bác. Bác hỏi: ...",
        storyKey: "story2",
    },
    {
        id: 3,
        title: "Tấm lòng ân cần , chu đáo của Bác với thiếu nhi",
        shortDesc: "Trước khi thiết kế ngôi nhà sàn gỗ của Bác tại Phủ Chủ tịch (tầng trên có hai phòng, một phòng Bác dùng vào việc, một phòng nghỉ. Còn ...",
        storyKey: "story3",
    },
    {
        id: 4,
        title: "Tình cảm của thiếu nhi quốc tế dành cho Bác Hồ",
        shortDesc: "Trong một lần đến thăm nước Tiệp Khắc, Bác Hồ được tiếp một đoàn thiếu nhi Tiệp Khắc đến thăm Bác. Cháu nào cũng muốn ...",
        storyKey: "story4",
    },
    {
        id: 5,
        title: "Tình yêu thương giản dị mà sâu sắc của Bác dành cho trẻ nhỏ",
        shortDesc: "Tháng 4/1946, với danh nghĩa là Chủ tịch nước Việt Nam Dân chủ Cộng hòa, Bác Hồ sang Pháp để đàm phán với Chính phủ Pháp về ...",
        storyKey: "story5",
    },
    {
        id: 6,
        title: "Tình yêu thương và sự quan tâm của Bác dành cho thiếu nhi",
        shortDesc: "Nghe tin Bác đến thăm trường thiếu nhi miền Nam, các cô chú phụ trách trường tíu tít chuẩn bị, trang hoàng hội trường đón Bác...",
        storyKey: "story6",
    },
];

export default function StoryPage2() {
    const navigate = useNavigate();

    return (
        <div className="story-page">
            <h1 className="story-title" style={{ marginTop: "80px" }}>Câu chuyện ngắn về Bác và Thiếu nhi</h1>
            <p className="story-intro">
                Trong suốt cuộc đời hoạt động cách mạng, Chủ tịch Hồ Chí Minh luôn dành tình yêu thương đặc biệt, sâu sắc và chan hòa cho thiếu nhi – những mầm non tương lai của đất nước. Dù bận trăm công nghìn việc, Bác vẫn luôn quan tâm, chăm sóc và gửi gắm tình cảm trìu mến đến các em ở khắp mọi miền Tổ quốc. Với Bác, thiếu nhi là “niềm vui của đất nước”, là “người chủ tương lai của nước nhà”, nên Bác luôn để tâm đến từng chi tiết nhỏ: từ miếng kẹo, cái bánh, lời dặn dò đến những bức thư gửi nhân dịp Tết Trung thu hay ngày Quốc tế Thiếu nhi.            </p>
            <p className="story-intro">
                Qua nhiều câu chuyện, hình ảnh Bác hiện lên gần gũi, giản dị nhưng ấm áp. Người không chỉ yêu thương mà còn dạy dỗ các em những bài học quý giá về đạo đức, lối sống và tinh thần học tập, nhắc nhở các em phải chăm ngoan, học giỏi, đoàn kết, yêu thương bạn bè, kính trọng thầy cô, vâng lời cha mẹ, biết yêu lao động, giúp đỡ mọi người và sống trung thực, khiêm tốn.            </p><p className="story-intro">
            </p>
            <p className="story-intro">Bác Hồ còn dành tình cảm nồng hậu cho thiếu nhi quốc tế, mong trẻ em khắp năm châu được sống trong hòa bình, hạnh phúc, không còn cảnh chiến tranh, đói nghèo và bất công. Tình yêu thương và những lời dạy giản dị nhưng sâu sắc của Bác trở thành nguồn cảm hứng lớn lao, soi sáng cho nhiều thế hệ trẻ Việt Nam và thế giới. Mỗi câu nói, cử chỉ của Bác là bài học quý giá về tình yêu con người và trách nhiệm của thế hệ trẻ đối với tương lai dân tộc và nhân loại, góp phần xây dựng một thế giới hòa bình, tươi đẹp và hạnh phúc.
            </p>
            {storyCategories.map(({ id, title, shortDesc, storyKey }) => (
                <div key={id} className="story-item">
                    <h2 className="story-item-title">{title}</h2>
                    <p className="story-item-short">{shortDesc}</p>
                    <button
                        className="btn-read-more"
                        onClick={() => navigate(`/story/${pageId}/${storyKey}`)}
                    >
                        Đọc thêm
                    </button>
                </div>
            ))}
        </div>
    );
}
