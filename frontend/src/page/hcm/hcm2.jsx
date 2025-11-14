import React from "react";
import "./hcm2.css";
import cover from "../../assets/TPCB.png"
import coverBook from "../../assets/hcm/hcm3.png"; // Ảnh bìa cuốn sách (đặt tên và path tương ứng với bạn)

export default function HCM2() {
    return (
        <div className="hcm2-container">
            <header className="hcm2-cover">
                <img src={cover} alt="Ảnh bìa cuốn sách Hồ Chí Minh" className="hcm2-cover-image" />
            </header>

            <section className="hcm2-content">
                <p>
                    Năm 1925, tại Paris - thủ đô nước Pháp, trên báo tập san Inprekorr của Quốc tế Cộng sản.
                    Tại Việt Nam được xuất bản lần đầu năm 1946.
                </p>

                <h2>Danh sách chương trong tác phẩm:</h2>
                <ul>
                    <li>Chương 1: Thuế máu</li>
                    <li>Chương 2: Việc đầu độc người bản xứ</li>
                    <li>Chương 3: Các quan thống đốc</li>
                    <li>Chương 4: Các quan cai trị</li>
                    <li>Chương 5: Những nhà khai hoá</li>
                    <li>Chương 6: Tệ tham nhũng trong bộ máy cai trị</li>
                    <li>Chương 7: Bóc lột người bản xứ</li>
                    <li>Chương 8: Công lí</li>
                    <li>Chương 9: Chính sách ngu dân</li>
                    <li>Chương 10: Chủ nghĩa giáo hội</li>
                    <li>Chương 11: Nỗi khổ nhục của người phụ nữ bản xứ</li>
                    <li>Chương 12: Nô lệ thức tỉnh</li>
                    <li>Phụ lục: Gửi thanh niên Việt Nam</li>
                </ul>

                <h2>Nội dung chính</h2>
                <p>
                    Tác phẩm được Nguyễn Ái Quốc phê bình là "tố cáo thực dân Pháp đã bắt dân bản xứ phải đóng 'thuế máu' cho chính quốc...
                    để 'phơi thây trên chiến trường châu Âu'; 'đày đọa' phụ nữ, trẻ em thuộc địa; các thống sứ, quan lại thực dân 'độc ác như một bầy thú dữ'...
                    Tác phẩm được cho là đã hướng các dân tộc bị áp bức đi theo con đường Cách mạng Tháng Mười Nga, tiêu diệt "hai cái vòi của con đỉa đế quốc"...
                    và đề ra con đường đấu tranh giải phóng theo chủ nghĩa Marx-Lenin.
                </p>

                <h2>Chi tiết theo nhóm chương</h2>

                <h3>1. Tố cáo Chính sách Bóc lột (Chương I - VII)</h3>
                <ul>
                    <li><b>Chương I - Thuế máu:</b> Tố cáo việc chính quyền thực dân bắt người dân thuộc địa phải làm lính, đi phu, chiến đấu, hy sinh vô ích trong các cuộc chiến tranh đế quốc.</li>
                    <li><b>Chương II - Việc đầu độc người bản xứ:</b> Vạch trần chính sách bán rượu, thuốc phiện để thu lợi nhuận và làm suy yếu nòi giống, đầu độc tinh thần.</li>
                    <li><b>Chương III - Các quan thống đốc:</b> Tố cáo lòng tham và hành động độc ác của các viên chức cấp cao thực dân.</li>
                    <li><b>Chương IV - Các quan cai trị:</b> Tiếp tục tố cáo tham nhũng, hách dịch, bóc lột của quan lại cấp dưới.</li>
                    <li><b>Chương V - Những nhà khai hoá:</b> Lên án những kẻ tự xưng là “người khai hóa” nhưng thực chất là bọn áp bức.</li>
                    <li><b>Chương VI - Tệ tham nhũng trong bộ máy cai trị:</b> Phơi bày chi tiết sự ăn cắp, hối lộ, thối nát trong bộ máy cai trị.</li>
                    <li><b>Chương VII - Bóc lột người bản xứ:</b> Chỉ rõ các chính sách thuế, lao dịch cưỡng bức, vơ vét tài nguyên và sức lao động.</li>
                </ul>

                <h3>2. Tố cáo Chính sách Độc ác và Sự khổ nhục (Chương VIII - XI)</h3>
                <ul>
                    <li><b>Chương VIII - Công lí:</b> Tố cáo sự bất công, độc đoán và thối nát của hệ thống tư pháp thực dân.</li>
                    <li><b>Chương IX - Chính sách ngu dân:</b> Lên án chính sách hạn chế giáo dục để duy trì sự ngu dốt và dễ cai trị.</li>
                    <li><b>Chương X - Chủ nghĩa giáo hội:</b> Tố cáo sự cấu kết giáo sĩ với chính quyền thực dân áp bức dân chúng.</li>
                    <li><b>Chương XI - Nỗi khổ nhục của người phụ nữ bản xứ:</b> Nhấn mạnh những đau khổ, tủi nhục mà phụ nữ thuộc địa phải chịu.</li>
                </ul>

                <h3>3. Lời Kêu gọi và Định hướng (Chương XII và Phụ lục)</h3>
                <ul>
                    <li><b>Chương XII - Nô lệ thức tỉnh:</b> Kêu gọi người dân thuộc địa và vô sản thức tỉnh, đoàn kết đấu tranh chống chủ nghĩa đế quốc.</li>
                    <li><b>Phụ lục - Gửi thanh niên Việt Nam:</b> Thư gửi thế hệ trẻ Việt Nam, thúc giục họ đấu tranh để cứu nước.</li>
                </ul>
            </section>
        </div>
    );
}
