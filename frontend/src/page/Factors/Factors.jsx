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
                            Sau hai bản hiệp ước Harmand (1883) và hiệp ước Patenôtre (1884), đất nước bị chia cắt thành ba xứ  là Bắc Kỳ (Tonkin), Trung Kỳ (Annam), Nam Kỳ (Cochinchine) dưới ba chế độ khác nhau nhưng đều do Pháp quản lí hoặc thao túng. Do đó ngay từ nhỏ, Người đã hiểu được nỗi khó khăn của người nghèo và sự vất vả của nhân dân khi phải “ ăn bữa nay, lo bữa mai “.
                        </p>

                        <p>
                            Khi ở Sài Gòn, Nguyễn Tất Thành đã chứng kiến biết bao sự bất công cùng việc thực dân Pháp đối xử tàn bạo thế nào với nhân dân ta. Người Pháp thì ăn mặc sang trọng, kẻ hầu người hạ. Còn quan lại thì khúm núm theo sau, người dân thì cơ cực, vừa làm việc nặng nhọc mà còn ăn không đủ no. Điều đó khiến Người thấy đồng cảm và quyết tâm tìm đường cứu nước, giúp Việt Nam thoát khỏi kiếp nô lệ.
                        </p>

                        <p>
                            Thời gian 10 năm sống ở Kinh đô Huế – trung tâm văn hóa, chính trị của đất nước, tiếp xúc với nền văn hóa mới, với phong trào Duy Tân, đã cho Nguyễn Tất Thành nhiều hiểu biết mới. Nhìn lại các phong trào yêu nước như phong trào Cần Vương, mà tiêu biểu là cuộc khởi nghĩa Hương Khê do cụ Phan Đình Phùng lãnh đạo; Phong trào Đông Du của cụ Phan Bội Châu; Phong trào Đông Kinh nghĩa thục; cuộc khởi nghĩa Yên Thế do cụ Hoàng Hoa Thám lãnh đạo; cuộc vận động cải cách của cụ Phan Châu Trinh và phong trào chống thuế của nông dân Trung Kỳ, Người rất khâm phục và coi trọng các bậc tiền bối, nhưng Nguyễn Tất Thành không đi theo con đường đó. Thực tiễn thất bại của các phong trào yêu nước đầu thế kỷ XX đã đặt ra nhiều câu hỏi và tác động đến chí hướng của Nguyễn Tất Thành, để rồi anh có một quyết định chính xác và táo bạo là xuất dương tìm đường cứu nước.

                        </p>
                    </div>
                </section>

                {/* SECTION 2 */}
                <section className="factor-box factor-flex reverse">


                    <div className="factor-text">
                        <h2>2. Hoàn cảnh gia đình</h2>

                        <p>
                            Nguyễn Sinh Cung rất thương mẹ mình là Hoàng Thị Loan. Năm 1901, bà Loan hạ sinh Nguyễn Sinh Sin nhưng không may qua đời ít ngày sau vì phải làm việc mệt nhọc lâu ngày. Người lúc đó mới 11 tuổi đã phải bồng em khắp nơi đi xin sữa, những chẳng được mấy tháng thì em cũng mất. Trải qua 2 cú sốc lớn liên tiếp trong thời gian ngắn khiến cậu bé Cung trưởng thành, hiểu chuyện từ sớm.
                        </p>

                        <p>
                            Khi theo học tại Trường tiểu học Pháp – bản xứ, chính tại ngôi trường này, Nguyễn Tất Thành lần đầu tiên được tiếp xúc với khẩu hiệu “LIBERTÉ, ÉGALITÉ, FRATERNITÉ” (Tự do – Bình đẳng – Bác ái).Người thắc mắc tại sao một đất nước đi xâm lược nước khác lại có khẩu hiệu như vậy. Người nhận thấy ở đâu nhân dân cũng đều lam lũ, đói khổ. Trước cảnh thống khổ của nhân dân, Người đã sớm “có chí đuổi thực dân Pháp giải phóng đồng bào”.

                        </p>

                        <p>
                            Giáo dục tư tưởng cứu nước, cứu dân và đặt niềm tin vào con mình của cụ Nguyễn Sinh Sắc đã tạo thành ý chí, nghị lực và động lực cho Nguyễn Tất Thành. Sự giáo dục của Nguyễn Sinh Sắc không chỉ truyền cho các con trí tuệ, học vấn, mà còn truyền lòng nhiệt huyết, chí khí mạnh mẽ và động lực vượt qua mọi gian nan để vươn tới sự nghiệp lớn cứu nước, cứu dân, giải phóng dân tộc. Tính cách, ý chí của người dân xứ Nghệ, lòng yêu nước, thương dân của cụ Nguyễn Sinh Sắc đã ảnh hưởng sâu sắc tới Nguyễn Tất Thành và theo suốt cuộc đời Hồ Chí Minh sau này. Sau này, trên đường đi vào phía Nam, “Nguyễn Tất Thành lên Bình Khê (Bình Định) thăm cha. Thấy con trai đến Bình Khê, cụ Nguyễn Sinh Sắc hỏi con: - Con đến đây làm gì? – Con đến đây tìm cha. Nghe vậy, cụ Sắc trìu mến nói với con: - Nước mất không lo đi tìm, tìm cha phỏng có ích gì?”. Nguyễn Tất Thành đã từ biệt thân phụ với niềm thôi thúc: “Nước mất thì đi tìm hồn của nước”
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
}
