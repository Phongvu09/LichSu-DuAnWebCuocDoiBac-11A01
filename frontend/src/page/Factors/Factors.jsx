import React from "react";
import "./Factors.css";
import factorsImg from "../../assets/factors/anh1.jpg";
import countryImg from "../../assets/factors/anh1.jpg";
import familyImg from "../../assets/factors/anh2.jpg";

export default function Factors() {
    return (
        <div className="factors-page fade-in">

            {/* HERO */}
            <section className="factors-hero">
                <img src={factorsImg} alt="Yếu tố tác động" className="factors-hero-img" />
                <div className="factors-hero-overlay">
                    <h1 className="factors-title">YẾU TỐ TÁC ĐỘNG</h1>
                    <p className="factors-subtitle">Những tác động hình thành tư tưởng và chí hướng của Người</p>
                </div>
            </section>

            <div className="factors-container">

                {/* SECTION 1 */}
                <section className="factor-box factor-flex">
                    <div className="factor-img-wrapper">
                        <img src={countryImg} alt="Hoàn cảnh đất nước" className="factor-img" />
                    </div>

                    <div className="factor-text">
                        <h2>1. Hoàn cảnh đất nước</h2>
                        <p>
                            Sau hai bản hiệp ước Harmand (1883) và hiệp ước Patenôtre (1884), đất nước bị chia cắt thành
                            Bắc Kỳ, Trung Kỳ và Nam Kỳ dưới ba chế độ khác nhau nhưng đều do Pháp quản lý hoặc thao túng.
                            Ngay từ nhỏ, Người đã thấu hiểu nỗi khổ của nhân dân khi phải “ăn bữa nay, lo bữa mai”.
                        </p>

                        <p>
                            Tại Sài Gòn, Nguyễn Tất Thành chứng kiến cảnh thực dân Pháp ăn mặc sang trọng,
                            sống xa hoa trong khi dân ta cơ cực, làm nặng nhưng ăn không đủ. Điều đó khiến Người
                            quyết tâm tìm con đường giải phóng dân tộc.
                        </p>

                        <p>
                            10 năm sống tại Huế – trung tâm văn hóa và chính trị – giúp Người tiếp xúc với phong trào
                            Duy Tân và nhiều xu hướng yêu nước. Người khâm phục các bậc tiền bối nhưng nhận ra các con
                            đường ấy đều thất bại. Chính thực tiễn đó thúc đẩy Người đưa ra quyết định táo bạo:
                            <b> xuất dương tìm đường cứu nước.</b>
                        </p>
                    </div>
                </section>

                {/* SECTION 2 */}
                <section className="factor-box factor-flex reverse">


                    <div className="factor-text">
                        <h2>2. Hoàn cảnh gia đình</h2>

                        <p>
                            Nguyễn Sinh Cung rất thương mẹ – bà Hoàng Thị Loan. Năm 1901,
                            bà sinh Nguyễn Sinh Sin nhưng vì lao lực quá mức nên qua đời không lâu sau.
                            Người mới 11 tuổi đã phải bồng em đi xin sữa nhưng em cũng mất.
                            Những mất mát liên tiếp khiến cậu bé Cung trưởng thành sớm.
                        </p>

                        <p>
                            Khi học tại Trường tiểu học Pháp – bản xứ, Người lần đầu thấy khẩu hiệu
                            “Liberté, Égalité, Fraternité” nhưng tự hỏi vì sao một nước đi xâm lược lại nói về tự do – bình đẳng – bác ái.
                        </p>

                        <p>
                            Dưới sự động viên của cha và tiếng gọi của trái tim, Nguyễn Tất Thành đã lựa chọn
                            con đường mới chưa ai từng thử: <b> sang Pháp tìm đường cứu nước.</b>
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
}
