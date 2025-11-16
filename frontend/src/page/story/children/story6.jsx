import React from "react";
import { useNavigate } from "react-router-dom";
import "./storyAll.css";
const pageId = 6;


const storyCategories = [
    {
        id: 1,
        title: "Hành trình học hỏi và nuôi chí lớn vì Tổ Quốc",
        shortDesc: "Những mẩu chuyện giản dị nhưng đầy triết lý từ cuộc đời Bác.",
        storyKey: "story1",
    },
    {
        id: 2,
        title: "Lý tưởng và khát vọng tìm đường cứu nước",
        shortDesc: "Trong thời gian học ở Sài Gòn, Hồ Chí Minh khi ấy còn là Nguyễn Tất Thành, quen với anh Lê – một người bạn cùng lứa tuổi. Cả hai ...",
        storyKey: "story2",
    },
    {
        id: 3,
        title: "Nghị lực và ý chí vượt khó của người thanh niên yêu nước",
        shortDesc: "Một buổi trưa oi ả, một chàng trai trẻ tên Ba bước lên con tàu lớn đang chuẩn bị rời bến. Anh ngập ngừng một lát rồi mạnh dạn hỏi ...",
        storyKey: "story3",
    },
    {
        id: 4,
        title: "Người thanh niên Nguyễn Ái Quốc trên chuyến tàu sang Pháp",
        shortDesc: "  Trong chuyến tàu sang Pháp, có ông Bùi Quang Chiêu, một kỹ sư canh nông giàu có, cùng gia đình đi hạng nhất. Khi nhìn thấy ...",
        storyKey: "story4",
    },
    {
        id: 5,
        title: "Người thanh niên Nguyễn Ái Quốc trên đất Anh",
        shortDesc: "Sau khi rời con tàu cũ, anh Ba đến nước Anh và xin vào làm tại tiệm ăn Các-lơ-tông, một nhà hàng nổi tiếng ở Luân Đôn do ông ...",
        storyKey: "story5",
    },
    {
        id: 6,
        title: "Những ngày đầu ở Pháp",
        shortDesc: "  Trên chuyến tàu sang Pháp, anh Ba lần đầu chứng kiến những điều khiến anh suy nghĩ về “văn minh phương Tây”. Thấy những cô gái điếm ...",
        storyKey: "story6",
    },
];

export default function StoryPage6() {
    const navigate = useNavigate();

    return (
        <div className="story-page">
            <h1 className="story-title" style={{ marginTop: "80px" }}>Những ngày đầu ra đi tìm đường cứu nước</h1>
            <p className="story-intro">
                Những câu chuyện này kể về hành trình ra đi tìm đường cứu nước đầy gian khổ nhưng cao cả của Chủ tịch Hồ Chí Minh. Từ những ngày đầu rời Tổ quốc với hai bàn tay trắng, Người đã vượt qua muôn vàn thử thách, lao động và học tập không ngừng nơi đất khách. Qua từng mẩu chuyện nhỏ, ta thấy rõ tinh thần yêu nước nồng nàn, lòng dũng cảm và đức hy sinh thầm lặng của Người. Mỗi chi tiết đời thường – từ lao động vất vả, học hỏi tiếng nước ngoài, đến những hành động giản dị nhưng sâu sắc – đều phản chiếu một tâm hồn lớn, luôn sống vì dân, vì nước. Dù ở bất kỳ hoàn cảnh nào, Bác Hồ vẫn giữ phẩm chất khiêm tốn, cần cù và lòng nhân hậu. Người không chỉ là một con người vĩ đại, mà còn là biểu tượng của ý chí Việt Nam bất khuất. Những câu chuyện này giúp mỗi thế hệ hiểu hơn về sự kiên cường, trí tuệ và tình yêu quê hương sâu sắc của Bác. Chúng cũng là nguồn cảm hứng để mỗi người noi theo, rèn luyện đức hạnh, lòng nhiệt huyết và ý chí vượt khó. Qua đó, hình ảnh Bác Hồ mãi sống trong trái tim nhân dân Việt Nam, trở thành tấm gương sáng cho mọi thế hệ.
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
