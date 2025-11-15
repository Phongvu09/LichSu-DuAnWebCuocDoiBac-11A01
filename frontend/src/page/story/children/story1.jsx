import React from "react";
import { useNavigate } from "react-router-dom";
import "./storyAll.css";

const storyCategories = [
    {
        id: 1,
        title: "Bài học về cách ứng xử",
        shortDesc: "Buổi đầu kháng chiến chống Pháp, có một đồng chí cán bộ Trung đoàn thường hay quát mắng chiến sĩ. Đồng chí này đã từng làm ...",
        link: "/story/bai-hoc",
    },
    {
        id: 2,
        title: "Bài học về chữ tín",
        shortDesc: "Hồi ở Pác Bó, Bác Hồ sống rất chan hòa với mọi người. Một hôm được tin Bác đi công tác xa, một trong những em bé thường ...",
        link: "/story/thieu-nhi",
    },
    {
        id: 3,
        title: "Bài học về giản dị và tiết kiệm",
        shortDesc: "Bà Nguyễn Thị Liên, nguyên cán bộ Văn phòng Phủ Chủ tịch, kể lại rằng: Khi làm việc ở văn phòng Bác, đôi khi bà còn đảm nhận việc ...",
        link: "/story/thanh-nien",
    },
    {
        id: 4,
        title: "Bài học về giản dị",
        shortDesc: "Đôi dép của Bác “ra đời’’ vào năm 1947, được ‘’chế tạo’’ từ một chiếc lốp ô tô quân sự của thực dân Pháp bị bộ đội ta phục kích tại ...",
        link: "/story/thanh-nien",
    },
    {
        id: 5,
        title: "Bài học về sự chia sẻ",
        shortDesc: "Đồng chí liên lạc đi công văn 10 giờ đêm mới đến. Bác gọi mang ra một bát, một thìa con. Rồi Bác đem bát chè đậu đen, đường phèn, mà anh em ...",
        link: "/story/chien-si",
    },
    {
        id: 6,
        title: "Bài học về sự công bằng",
        shortDesc: "Trong những ngày sống ở Việt Bắc, mỗi lần Bác đi công tác, có hai đồng chí đi cùng. Vì sợ Bác mệt, nên hai đồng chí định ...",
        link: "/story/khac",
    },
    {
        id: 7,
        title: "Bài học đầu tiên về sự đoàn kết",
        shortDesc: "Anh hùng La Văn Cầu, dân tộc Tày mãi mãi không quên bữa cơm của Bác ''đã'' với rau, thịt gà… những ''sản phẩm'' do ...",

        link: "/story/ra-di",

    },
    {
        id: 8,
        title: "Bài học đầu tiên về sự quyết tâm",
        shortDesc: "Hút thuốc lá là thú vui duy nhất của Bác như Bác thường nói. Nhưng từ khi bị bệnh, theo lời khuyên của hội đồng thầy thuốc, Bác có kế hoạch quyết tâm bỏ dần. Bác nói: ...",

        link: "/story/ra-di",
    },
    {
        id: 9,
        title: "Bài học đầu tiên về thời gian",
        shortDesc: "Năm 1945, mở đầu bài nói chuyện tại lễ tốt nghiệp khóa V Trường huấn luyện cán bộ Việt Nam, Chủ tịch Hồ Chí Minh thẳng thắn góp ý:",
        link: "/story/ra-di",
    },
];

export default function StoryPage1() {
    const navigate = useNavigate();

    return (
        <div className="story-page">
            <h1 className="story-title" style={{ marginTop: "80px" }}> Những câu chuyện ngắn về Bác Hồ và bài học rút ra</h1>
            <p className="story-intro">
                Những câu chuyện về Bác Hồ và bài học rút ra là tập hợp những mẩu chuyện gần gũi, chân thật nhưng chứa đựng nhiều ý nghĩa sâu sắc về tấm gương đạo đức và nhân cách cao đẹp của Chủ tịch Hồ Chí Minh. Qua những việc làm giản dị hằng ngày của Bác – từ cách sống, cách làm việc đến cách đối xử với mọi người – ta thấy được một con người luôn khiêm tốn, tiết kiệm, yêu thương, quan tâm đến từng người dân, dù là cán bộ hay chiến sĩ nơi xa. Mỗi câu chuyện không chỉ cho ta hiểu thêm về Bác mà còn nhắc nhở chúng ta phải biết sống có ý chí, có lòng nhân hậu, biết sẻ chia, đoàn kết và quyết tâm vượt qua khó khăn. Đây là những bài học quý báu, giúp mỗi người noi theo để hoàn thiện bản thân và góp phần xây dựng xã hội tốt đẹp hơn.            </p>

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
