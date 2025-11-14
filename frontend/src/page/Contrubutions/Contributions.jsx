import React from "react";
import "./Contributions.css";

import heroImg from "../../assets/contributions/anh1.png";
import section1Img from "../../assets/contributions/anh3.png";
import section1ImgSide from "../../assets/contributions/anh4.png";

import section2Img from "../../assets/contributions/anh5.png";
import section2ImgSide from "../../assets/contributions/anh6.png";

import beforeSectionImg from "../../assets/contributions/anh2.png";

export default function Contributions() {
    return (
        <div className="contributions fade-in">

            {/* HERO */}
            <section className="contri-hero">
                <img src={heroImg} alt="Bác Hồ" className="contri-hero-img" />

            </section>

            {/* INTRO */}
            <section className="contri-intro container">
                <p className="quote">
                    “Người không con mà có triệu con<br />
                    Nhân dân ta gọi Người là Bác<br />
                    Cả đời người là của nước non”<br />
                    <span className="author">(Việt Bắc – Nguyễn Đình Thi)</span>
                </p>

                <p className="text">
                    Như lời khẳng định đầy xúc động của cố Tổng Bí thư Lê Duẩn:
                </p>

                <p className="quote">
                    “Dân tộc ta, nhân dân ta, non sông đất nước ta đã sinh ra Hồ Chủ Tịch,
                    Người anh hùng dân tộc vĩ đại, và chính Người đã làm rạng rỡ dân tộc ta…”
                    <span className="author"> – Lê Duẩn</span>
                </p>

                <p className="text">
                    Những câu thơ ấy khắc ghi hình ảnh Bác – người luôn đồng hành cùng dân tộc,
                    tiếp thêm sức mạnh cho các thế hệ Việt Nam trên hành trình phát triển đất nước.
                </p>
            </section>

            {/* SECTION 1 */}
            <section className="contri-section container">
                <div className="contri-content">
                    <h2>I. Người đã dùng cả một đời vì nước vì non</h2>

                    <p>
                        Chủ tịch Hồ Chí Minh sinh ngày 19/5/1890 tại Nam Đàn – Nghệ An, trong
                        một gia đình nhà nho yêu nước. Chứng kiến cảnh nước mất, dân lầm than,
                        Người quyết ra đi tìm đường cứu nước ngày 5/6/1911 tại bến Nhà Rồng.
                    </p>

                    <p>
                        Trải qua hơn 30 năm bôn ba tìm đường cứu nước, Người tiếp cận
                        chủ nghĩa Marx – Lenin và tìm thấy con đường giải phóng dân tộc.
                        Từ đó, Người sáng lập Đảng Cộng sản Việt Nam ngày 3/2/1930 – mở ra
                        kỷ nguyên mới cho cách mạng Việt Nam.
                    </p>

                    <p>
                        Dưới sự lãnh đạo của Đảng, nhân dân ta thắng lợi trong Cách mạng Tháng Tám 1945
                        và ngày 2/9/1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc
                        Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.
                    </p>

                    <p>
                        Suốt hai cuộc kháng chiến chống Pháp và chống Mỹ, nhân dân ta liên tiếp
                        giành chiến thắng với đỉnh cao là Điện Biên Phủ (1954), “Điện Biên Phủ trên không”
                        (1972) và đại thắng mùa Xuân 1975, giải phóng miền Nam, thống nhất đất nước.
                    </p>

                    <p>
                        Người để lại tư tưởng, đạo đức và phong cách Hồ Chí Minh – tài sản tinh thần
                        vô giá của dân tộc Việt Nam.
                    </p>
                </div>

                <div className="contri-image-wrapper">
                    <img src={section1Img} alt="Hồ Chí Minh" className="contri-image" />
                </div>
            </section>

            {/* SECTION 2 */}
            <section className="contri-section container reverse">
                <div className="contri-content">
                    <h2>II. Những tư tưởng của Người tiếp tục soi đường cho dân tộc</h2>

                    <p>
                        Trong Di chúc thiêng liêng, Người căn dặn toàn Đảng, toàn dân đoàn kết,
                        xây dựng một nước Việt Nam hòa bình, độc lập, dân chủ và giàu mạnh.
                        Ước nguyện ấy đến nay đang trở thành hiện thực.
                    </p>

                    <p>
                        Từ một đất nước nghèo, Việt Nam nay đã trở thành một trong 34 nền kinh tế
                        lớn nhất thế giới, thu nhập bình quân đạt gần 5.000 USD, HDI liên tục tăng,
                        và là điểm đến tin cậy của bạn bè quốc tế.
                    </p>

                    <p>
                        Việt Nam đã thiết lập quan hệ ngoại giao với 194 quốc gia, là thành viên
                        của hơn 70 tổ chức quốc tế, duy trì hòa bình, ổn định và khẳng định uy tín
                        ngày càng cao trên trường quốc tế.
                    </p>

                    <p>
                        Công tác xây dựng Đảng, phòng chống tham nhũng, chỉnh đốn hệ thống chính trị
                        được đẩy mạnh toàn diện, tạo niềm tin sâu rộng trong nhân dân.
                    </p>

                    <p>
                        Thời gian càng trôi qua, sự vĩ đại của Người càng được khẳng định.
                        Tư tưởng của Người mãi soi đường cho dân tộc Việt Nam.
                    </p>
                </div>

                <div className="contri-image-wrapper">
                    <img src={section2Img} alt="Hồ Chí Minh" className="contri-image" />
                </div>
            </section>
        </div>
    );
}
