import React from "react";
import { useNavigate } from "react-router-dom";
import "./storyAll.css";

const pageId = 5;

const storyCategories = [
    {
        id: 1,
        title: "Ba bộ quần áo, cả một nhân cách",
        shortDesc: "Chủ tịch Hồ Chí Minh có hai bộ quần áo được anh em giúp việc đặt tên là “bộ kháng chiến”, ...",
        storyKey: "story1",
    },
    {
        id: 2,
        title: "Giản dị khiêm nhường - phẩm chất của người lãnh tụ",
        shortDesc: "Cuối năm 1961, Bác Hồ về quê hương Nghệ An thăm hỏi bà con xã Vĩnh Thành - nơi có phong trào điển hình về ...",
        storyKey: "story2",
    },
    {
        id: 3,
        title: "Không có việc gì khó - Ngọn lửa Bác thắp cho tuổi trẻ Việt Nam",
        shortDesc: "Năm 1950, cuộc kháng chiến chống thực dân Pháp chuyển sang giai đoạn mới, giai đoạn tiến công. Tháng 9-1950, Trung ương Ðảng quyết định ...",
        storyKey: "story3",
    },
    {
        id: 4,
        title: "Một tấm gương về sự khiêm nhường và chân thành",
        shortDesc: "Đầu năm 1967 Bác về Thái Bình. Ô tô đưa Bác đến bến Triều Dương thì phải sang phà. Mấy đồng chính uỷ đến đón, ...",
        storyKey: "story4",
    },
];

export default function StoryPage5() {
    const navigate = useNavigate();

    return (
        <div className="story-page">
            <h1 className="story-title" style={{ marginTop: "80px" }}>Một số câu chuyện ngắn khác</h1>
            <p className="story-intro">
                Bác Hồ là tấm gương sáng ngời về đạo đức, lối sống và tinh thần vì dân, vì nước. Cuộc đời và con người của Bác luôn giản dị, gần gũi nhưng chứa đựng tình yêu thương bao la dành cho đồng bào, chiến sĩ và thế hệ trẻ. Qua những câu chuyện về Bác, ta thấy được hình ảnh một vị lãnh tụ vĩ đại mà vô cùng khiêm tốn, luôn quan tâm đến từng người, từng việc nhỏ. Ở Bác, sự yêu thương đi liền với kỷ luật, sự nghiêm khắc gắn với lòng nhân hậu. Dù trong bất kỳ hoàn cảnh nào, Bác cũng luôn giữ vững phẩm chất cao đẹp của người cách mạng, lấy dân làm gốc, lấy gương sáng để dạy bảo mọi người. Tấm lòng, nhân cách và trí tuệ của Bác là nguồn cảm hứng bất tận, thôi thúc mỗi người chúng ta sống tốt hơn, làm việc tốt hơn. Chính vì thế, hình ảnh Bác Hồ mãi mãi sống trong trái tim của nhân dân Việt Nam và trở thành biểu tượng của lòng yêu nước, của con người Việt Nam mới.
            </p>

            {storyCategories.map(({ id, title, shortDesc, storyKey }) => (
                <div key={id} className="story-item">
                    <h2 className="story-item-title">{title}</h2>
                    <p className="story-item-short">{shortDesc}</p>
                    <button
                        className="btn-read-more"
                        onClick={() => navigate(`/story/${pageId}/${storyKey}`)}                    >
                        Đọc thêm
                    </button>
                </div>
            ))}
        </div>
    );
}
