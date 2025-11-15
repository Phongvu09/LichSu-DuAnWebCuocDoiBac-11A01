import React from "react";
import { useNavigate } from "react-router-dom";
import "./storyAll.css";

const storyCategories = [
    {
        id: 1,
        title: "Bài học về tinh thần đoàn kết",
        shortDesc: "Lần nào gặp Bác, câu đầu tiên Bác thường hỏi là: “Thế các cháu có đoàn kết không, có thương yêu nhau không?”, rồi Bác dặn: ...",
        link: "/story/bai-hoc",
    },
    {
        id: 2,
        title: "Ngọn lửa thanh xuân trên những con đường kháng chiến",
        shortDesc: "Năm 1950, cuộc kháng chiến chống thực dân Pháp chuyển sang giai đoạn mới, giai đoạn tiến công. Tháng 9-1950, Trung ương Ðảng quyết định ...",
        link: "/story/thieu-nhi",
    },
    {
        id: 3,
        title: "Tình yêu thương bao la và sự quan tâm ân cần của Bác Hồ dành cho thiếu niên, nhi đồng miền Nam",
        shortDesc: "Hồ Thị Thu – Dũng sĩ thiếu niên miền Nam kể: ...",
        link: "/story/thanh-nien",
    },
    {
        id: 4,
        title: "Tình yêu thương và niềm tin của Bác Hồ đối với thế hệ trẻ, khích lệ thanh niên hăng say lao động và xây dựng Tổ quốc",
        shortDesc: "Chủ nhật ngày 16/10/1958, 100 học sinh các trường Chu Văn An, Nguyễn Trãi, Trưng Vương và Nguyễn Huệ đang lao động xây dựng mở rộng ...",
        link: "/story/chien-si",
    },
];

export default function StoryPage3() {
    const navigate = useNavigate();

    return (
        <div className="story-page">
            <h1 className="story-title" style={{ marginTop: "80px" }}>Câu chuyện về Bác Hồ với thanh niên</h1>
            <p className="story-intro">
                Những câu chuyện về Chủ tịch Hồ Chí Minh và thế hệ trẻ, từ học sinh, thanh niên xung phong đến các đoàn viên, thể hiện tình cảm sâu sắc của Người đối với tuổi trẻ – lực lượng nòng cốt của dân tộc. Bác luôn quan tâm, dạy dỗ, động viên các cháu bằng sự ân cần, gần gũi nhưng thấm đẫm lý tưởng, nhắc nhở thanh niên phải gương mẫu trong lao động, học tập, đoàn kết và kỷ luật. Qua từng hành động nhỏ, từ thăm hỏi, trò chuyện, đến dự lao động, Bác gửi gắm niềm tin, tình yêu và trách nhiệm với đất nước. Những câu chuyện giản dị ấy cho thấy Bác vừa là người thầy, vừa là người cha, luôn sống vì hạnh phúc và sự trưởng thành của các thế hệ trẻ. Hình ảnh Bác hiện lên vừa vĩ đại trong lý tưởng, vừa gần gũi trong đời sống thường nhật, tạo cảm hứng và động lực cho thanh niên Việt Nam. Tinh thần yêu nước, ý chí kiên cường, lòng nhân hậu và sự quan tâm chu đáo của Bác là bài học quý giá về đạo đức, tinh thần trách nhiệm và tình yêu thương con người. Những câu chuyện về Bác và tuổi trẻ không chỉ ghi lại ký ức lịch sử, mà còn là nguồn cảm hứng để thế hệ trẻ hôm nay và mai sau tiếp tục rèn luyện, phấn đấu, góp phần xây dựng và bảo vệ Tổ quốc. Qua đó, hình ảnh Bác Hồ luôn sống mãi trong trái tim mọi người, trở thành biểu tượng của tinh thần Việt Nam anh hùng, của lý tưởng và đạo đức cao đẹp.
            </p>

            {storyCategories.map(({ id, title, shortDesc, link }) => (
                <div key={id} className="story-item">
                    <h2 className="story-item-title">{title}</h2>
                    <p className="story-item-short">{shortDesc}</p>
                    <button
                        className="btn-read-more"
                        onClick={() => navigate(link)}
                    >
                        Đọc thêm
                    </button>
                </div>
            ))}
        </div>
    );
}
