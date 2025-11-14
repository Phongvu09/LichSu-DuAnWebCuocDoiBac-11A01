import React from "react";
import "./hcm1.css";

// Ảnh bìa và ảnh minh họa
import cover from "../../assets/TPCB.png"; // Thay bằng ảnh bìa thật của bạn
import illustration from "../../assets/hcm/hcm1.png"; // Thay bằng ảnh minh họa thật của bạn
import illustration2 from "../../assets/hcm/hcm2.png"; // Thay bằng ảnh minh họa thật của bạn


export default function HCM1() {
    return (
        <div className="hcm1-container">
            {/* Ảnh bìa */}
            <header className="cover">
                <img src={cover} alt="Ảnh bìa Hồ Chí Minh 1" className="cover-image" />
            </header>

            {/* Nội dung */}
            <section className="content">
                <h2>Hoàn cảnh</h2>
                <p>
                    Năm 1919, sau khi Chiến tranh Thế giới thứ nhất kết thúc, các nước Đồng minh họp tại Hội nghị Hòa bình Versailles (Pháp) để chia lại thế cân trong thế giới thuộc địa.
                    Tại Paris, tổ chức Hội những người An Nam yêu nước (Association des Patriotes Annamites) – do các nhà yêu nước như Phan Châu Trinh, Phan Văn Trường, Nguyễn Thế Truyền và Nguyễn Tất Thành (sau này là Hồ Chí Minh) tham gia soạn thảo – nhân dịp này đưa ra bản yêu sách.
                    Bản yêu sách gồm 8 điểm yêu cầu chính quyền thực dân Pháp và các nước Đồng minh thừa nhận quyền cơ bản của người dân An Nam.
                </p>

                {/* Ảnh minh họa */}
                <div className="illustration-wrapper">
                    <img src={illustration} alt="Ảnh minh họa Bản Yêu Sách" />
                </div>

                <h2>Nội dung chính (8 điểm)</h2>
                <ol>
                    <li>Tổng ân xá cho tất cả những người bản xứ bị án tù chính trị.</li>
                    <li>Cải cách nền pháp lý ở Đông Dương: để người bản xứ được hưởng những bảo đảm pháp luật như người Âu, và xóa bỏ hoàn toàn các tòa án đặc biệt dùng để khủng bố người bản xứ.</li>
                    <li>Tự do báo chí và tự do ngôn luận.</li>
                    <li>Tự do lập hội và tự do hội họp.</li>
                    <li>Tự do cư trú ở nước ngoài và tự do xuất dương (ra nước ngoài).</li>
                    <li>Tự do học tập; thành lập các trường kỹ thuật và chuyên nghiệp ở tất cả các tỉnh cho người bản xứ.</li>
                    <li>Thay chế độ ra các sắc lệnh bằng chế độ ra các đạo luật.</li>
                    <li>Có đoàn đại biểu thường trực của người bản xứ, do người bản xứ bầu ra, tại Nghị viện Pháp để giúp Nghị viện biết được nguyện vọng của người bản xứ.</li>
                </ol>

                <h2>Ý nghĩa</h2>
                <p>
                    Bản yêu sách được coi là tuyên ngôn chính trị đầu tiên của nhân dân Việt Nam dưới chế độ thực dân, đánh dấu bước đầu trong đấu tranh dân tộc – dân chủ.
                    Mặc dù không được Hội nghị Versailles chấp thuận, nhưng nó đã tạo tiếng vang lớn, cổ vũ phong trào yêu nước và khẳng định quyền tự quyết của dân tộc.
                    Việc ký tên “Nguyễn Ái Quốc” dưới bản yêu sách cũng đánh dấu lần đầu tiên tên này xuất hiện công khai trong phong trào.
                </p>

                <div className="illustration-wrapper">
                    <img src={illustration2} alt="Ảnh minh họa Bản Yêu Sách" />
                </div>

                <h2>Tám yêu sách của nhân dân An Nam (Trích Việt Nam yêu cầu ca)</h2>
                <pre className="poem">
                    {`"... Một xin tha kẻ đồng bào,
Vì chưng chính trị mắc vào tù giam.
Hai xin phép luật sửa sang,
Người Tây người Việt hai phương cùng đồng.
Những toà đặc biệt bất công,
Dám xin bỏ đứt rộng dung dân lành.
Ba xin rộng phép học hành,
Mở mang kĩ nghệ, lập thành công thương.
Bốn xin được phép hội hàng,
Năm xin nghĩ ngợi nói bàn tự do,
Sáu xin được phép lịch du,
Bốn phương mặc sức, năm châu mặc tình.
Bảy xin hiến pháp ban hành,
Trăm điều phải có thần linh pháp quyền.
Tâm xin được cử nghị viên,
Qua Tây thay mặt giữ quyền thổ dân...."`}
                </pre>
            </section>
        </div>
    );
}
