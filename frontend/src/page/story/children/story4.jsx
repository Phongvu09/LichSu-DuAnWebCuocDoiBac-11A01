import React from "react";
import { useNavigate } from "react-router-dom";
import "./storyAll.css";

const pageId = 4;

const storyCategories = [
    {
        id: 1,
        title: "Tấm lòng bao dung và đức hy sinh của Bác Hồ trong chiến tranh",
        shortDesc: "Một ngày tháng 7 năm 1967 ở Hà Nội, đồng chí Mai Văn Bộ được Bác Hồ gọi đến mời cơm tiễn chân trước khi đồng chí lên đường đi ...",
        storyKey: "story1",
    },
    {
        id: 2,
        title: "Tấm lòng yêu thường sâu sắc, sự quan tâm chu đáo của Bác Hồ đối với các chiến sĩ vào đồng bào các dân tộc",
        shortDesc: "Đối với chiến sĩ là những người hy sinh nhiều nhất cho dân tộc, Bác Hồ thường dành cho anh em sự chăm lo, săn sóc ân tình, chu đáo nhất ...",
        storyKey: "story2",
    },
    {
        id: 3,
        title: "Tình cảm gần gũi, giản dị và tấm lòng quan tâm của Bác Hồ đối với cán bộ, chiến sĩ",
        shortDesc: "Vào các dịp lễ Tết, vẫn có một số anh chị em “ăn cơm tập thể, nằm giường cá nhân” ở lại trực cơ quan ...",
        storyKey: "story3",

    },
    {
        id: 4,
        title: "Tình yêu thương sâu sắc và sự quan tâm chân thành của Bác Hồ với cán bộ, chiến sĩ",
        shortDesc: "Vào đầu năm 1954, tiết trời đã sang Xuân, nhưng ở Việt Bắc vẫn còn rét. Gió bấc thổi mạnh, mưa phùn lâm râm gây nên cái lạnh ...",
        storyKey: "story4",
    },
    {
        id: 5,
        title: "Tình yêu thương sâu nặng của Bác Hồ đối với đồng bào, chiến sĩ miền Nam",
        shortDesc: "Trong những ngày ra thăm miền Bắc, đoàn anh hùng, dũng sĩ miền Nam được Bác chăm lo, ân cần như cha đối với con. Bác bảo tôi ...",
        storyKey: "story5",
    },
];

export default function StoryPage4() {
    const navigate = useNavigate();

    return (
        <div className="story-page">
            <h1 className="story-title" style={{ marginTop: "80px" }}>Câu chuyện về Bác và chiến sĩ</h1>
            <p className="story-intro">
                Trong suốt cuộc đời hoạt động cách mạng, Chủ tịch Hồ Chí Minh luôn dành một tình cảm đặc biệt, sâu nặng và chân thành cho các chiến sĩ bộ đội – những người con ưu tú của nhân dân, đã hy sinh thầm lặng vì độc lập, tự do của Tổ quốc. Hình ảnh Bác hiện lên giản dị nhưng cao quý, một con người hết lòng yêu thương, chăm lo cho bộ đội như người cha hiền đối với con ra trận.

            </p>
            <p className="story-intro" >Từ những việc làm nhỏ bé như hỏi han chiến sĩ bị ngã, nhường phần ăn, phần nghỉ cho anh em, đến những lời dặn dò ân tình trước lúc chia tay, tất cả đều chứa đựng tấm lòng bao dung, nhân hậu và sâu sắc. Trong trái tim Bác, người chiến sĩ không chỉ là lực lượng bảo vệ Tổ quốc, mà còn là niềm tự hào, niềm tin và những người con thân yêu của đất nước.</p>
            <p className="story-intro" >Nhiều câu chuyện, bài viết và tác phẩm như Tấm lòng của Bác, Chú ngã có đau không, Chú sang xông nhà cho Bác chỉ là phần nhỏ trong vô vàn câu chuyện cảm động về tình yêu thương của Bác với bộ đội. Qua những trang viết giản dị nhưng thấm đẫm cảm xúc, người đọc cảm nhận được vị lãnh tụ vĩ đại, luôn sống vì con người, vì hạnh phúc của đồng bào và đồng chí.</p>
            <p className="story-intro">Tình cảm của Bác đối với chiến sĩ bộ đội là minh chứng sống động cho lòng nhân ái vô bờ và tinh thần đoàn kết quân – dân như cá với nước. Nó không chỉ là nguồn động viên lớn lao cho các thế hệ chiến sĩ trong kháng chiến, mà còn là bài học quý giá về tình người, về đạo lý “uống nước nhớ nguồn”, và cách sống yêu thương, sẻ chia mà Bác để lại cho muôn đời sau.</p>
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
