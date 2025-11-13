import React from "react";

import heroImg from "../../assets/biography/NEN.jpg";
import BAC from "../../assets/biography/ABH.jpg"
import youthImg from "../../assets/biography/youth.webp";
import abroadImg from "../../assets/biography/abroad.jpg";
import franceImg from "../../assets/biography/france.jpg";
import vietnameseYouthImg from "../../assets/biography/viet-nam-thanh-nien.jpg";
import chinaImg from "../../assets/biography/china.webp";
import resistanceImg from "../../assets/biography/resistance.jpg";
import leadershipImg from "../../assets/biography/leadership.jpg";
import legacyImg from "../../assets/biography/legacy.jpg";

import "./Biography.css"

export default function Biography() {
    return (
        <div className="biography">
            {/* Hero */}

            <section className="bio-hero">
                <img
                    src={heroImg}
                    alt="Chủ tịch Hồ Chí Minh"
                    className="bio-hero-img"
                />
            </section>

            <main className="bio-content">
                {/* 1. Zigzag */}
                <section className="bio-section zigzag">
                    <img src={youthImg} alt="Thời niên thiếu" />
                    <div className="section-text">
                        <h2>👶 Thời niên thiếu và thanh niên</h2>
                        <p>
                            Hồ Chí Minh sinh ngày 19 tháng 5 năm 1890 tại quê ngoại là làng
                            Hoàng Trù (lúc bấy giờ thuộc xã xã Chung Cự, tổng Lâm Thịnh, huyện
                            Nam Đàn, tỉnh Nghệ An). Người sinh ra trong một gia đình nhà nho yêu
                            nước, lớn lên ở một địa phương có truyền thống anh dũng chống giặc
                            ngoại xâm. Chịu ảnh hưởng từ gia đình cùng với việc phải sống trong
                            hoàn cảnh đất nước chìm dưới ách đô hộ của thực dân Pháp, thời niên
                            thiếu và thanh niên của mình, Hồ Chí Minh đã chứng kiến nỗi khổ cực
                            của đồng bào và những phong trào đấu tranh chống thực dân, Hồ Chí
                            Minh sớm có chí đuổi thực dân, giành độc lập cho đất nước, đem lại
                            tự do, hạnh phúc cho đồng bào. Với ý chí và quyết tâm đó, tháng 6/1911,
                            Hồ Chí Minh đã rời Tổ quốc đi sang phương Tây để tìm con đường giải
                            phóng dân tộc.
                        </p>
                    </div>
                </section>

                {/* 2. Circle wrap */}
                <section className="bio-section circle-wrap">
                    <div className="circle-image">
                        <img src={abroadImg} alt="Hành trình nước ngoài" />
                    </div>
                    <p>
                        Trong suốt giai đoạn 1912 - 1917, với tên gọi Nguyễn Tất Thành, Người
                        đặt chân đến nhiều nước trên Châu Á, Âu, Mỹ, Phi. Người chọn cách sống
                        chan hòa và thấu hiểu cuộc đời của người dân lao động. Qua trải nghiệm
                        thực tế, Chủ tịch Hồ Chí Minh cảm nhận sâu sắc những nỗi khổ tột cùng
                        của nhân dân các dân tộc thuộc địa và nhận ra khát vọng tự do cháy
                        bỏng của họ. Người sớm nhìn nhận đấu tranh giải phóng dân tộc ở Việt
                        Nam là một phần không thể tách rời của cuộc chiến chung trên toàn cầu,
                        từ đó tích cực hành động nhằm củng cố khối đoàn kết quốc tế trong cuộc
                        chiến giành độc lập.
                    </p>
                </section>

                {/* 3. Card grid */}
                <section className="bio-section card-grid">
                    <div className="card">
                        <h3>🇫🇷 Hoạt động ở Pháp và Quốc tế Cộng sản (1917 - 1924)</h3>
                        <p>
                            Cuối năm 1917, Người rời Anh, quay trở lại Pháp, tham gia hoạt động
                            sôi nổi trong phong trào của Việt kiều yêu nước và giai cấp công nhân
                            Pháp. Năm 1919, dưới danh xưng Nguyễn Ái Quốc, thay mặt cho những người
                            Việt Nam tại Pháp, Người đã gửi đến Hội nghị Vécxây (Versailles) bản
                            Yêu sách, kiên quyết đòi quyền tự do cho nhân dân Việt Nam, cũng là
                            đòi quyền lợi chung cho các dân tộc thuộc địa.
                        </p>
                        <p>
                            Dưới ánh sáng của Cách mạng Tháng Mười Nga (1917) và sự ảnh hưởng của
                            Luận cương về vấn đề dân tộc và thuộc địa của Lênin, vào tháng 12/1920,
                            Nguyễn Ái Quốc tham dự Đại hội lần thứ XVIII Đảng Xã hội Pháp. Người
                            bỏ phiếu tán thành việc Đảng gia nhập Quốc tế III (Quốc tế Cộng sản),
                            chính thức trở thành một trong các nhà sáng lập Đảng Cộng sản Pháp. Từ
                            đó, Người đã chuyển hóa từ một người yêu nước thành một chiến sĩ
                            cộng sản, khẳng định con đường duy nhất để cứu và giải phóng dân tộc là
                            con đường cách mạng vô sản.
                        </p>
                    </div>
                </section>

                {/* 4. Parallax */}
                <section
                    className="bio-section parallax"
                    style={{ backgroundImage: `url(${vietnameseYouthImg})` }}
                >
                    <div className="parallax-text">
                        <h2>✊ Thành lập Hội Việt Nam Cách mạng Thanh niên và các hoạt động quốc tế</h2>
                        <p>
                            Năm 1921, Nguyễn Ái Quốc cùng một số nhà hoạt động từ các thuộc địa
                            Pháp tham gia thành lập Hội Liên hiệp các dân tộc thuộc địa. Tháng
                            4/1922, Hội xuất bản tờ báo “Người cùng khổ” (Le Paria), nhằm mục đích
                            tập hợp lực lượng, tổ chức và định hướng phong trào giải phóng ở các
                            thuộc địa. Nhiều bài viết của Người được đưa vào công trình nghiên cứu
                            nổi tiếng “Bản án chế độ thực dân Pháp”, xuất bản tại Paris năm 1925.
                            Tác phẩm này phơi bày bản chất chủ nghĩa thực dân, có vai trò to lớn
                            trong việc thức tỉnh và cổ vũ nhân dân các nước đứng lên tự giải phóng.
                            Tháng 6/1923, Nguyễn Ái Quốc rời Pháp, đi Liên Xô để làm việc tại Quốc
                            tế Cộng sản. Tháng 10/1923, tại Hội nghị Quốc tế Nông dân lần thứ nhất,
                            Người được bầu vào Hội đồng Quốc tế Nông dân và là đại biểu nông dân
                            thuộc địa duy nhất trong Đoàn Chủ tịch Hội đồng.
                        </p>
                    </div>
                </section>

                {/* 5. Pattern background */}
                <section className="bio-section pattern-bg">
                    <h2>🇨🇳 Hoạt động tại Trung Quốc và thành lập Việt Minh</h2>
                    <p>
                        Tháng 11/1924, với tư cách là Ủy viên Ban Phương Đông Quốc tế Cộng sản
                        và Ủy viên Đoàn Chủ tịch Quốc tế Nông dân, Nguyễn Ái Quốc đến Quảng
                        Châu (Trung Quốc), công tác trong đoàn cố vấn Bôrôđin của Chính phủ Liên
                        Xô tại Chính phủ Tôn Dật Tiên. Năm 1925, Nguyễn Ái Quốc sáng lập Hội
                        Việt Nam Cách mạng Thanh niên, trực tiếp tổ chức các lớp đào tạo cán bộ
                        cách mạng. Người cũng cho ra đời tuần báo “Thanh niên”, ấn phẩm cách
                        mạng đầu tiên của Việt Nam, nhằm truyền bá tư tưởng Mác - Lênin và xúc
                        tiến công tác chuẩn bị thành lập Đảng Cộng sản Việt Nam.
                        <br />
                        Tháng 10/1938, Người rời Liên Xô sang Trung Quốc, bắt đầu nối lại liên
                        lạc với tổ chức Đảng để chuẩn bị trở về quê hương. Ngày 28/1/1941,
                        Nguyễn Ái Quốc đặt chân về Tổ quốc sau hơn ba thập kỷ xa cách. Tại đây,
                        vào tháng 5/1941, Nguyễn Ái Quốc triệu tập Hội nghị lần thứ VIII Ban
                        Chấp hành Trung ương Đảng, xác lập đường lối cứu nước trong giai đoạn
                        mới, thành lập Việt Nam độc lập đồng minh (Việt Minh), đồng thời tổ chức
                        xây dựng các lực lượng vũ trang và căn cứ địa cách mạng.
                    </p>
                </section>

                {/* 6. Zigzag */}
                <section className="bio-section zigzag">
                    <img src={resistanceImg} alt="Kháng chiến" />
                    <div className="section-text">
                        <h2>⚔️ Kháng chiến và thành lập nước Việt Nam Dân chủ Cộng hòa</h2>
                        <p>
                            Tháng 8/1942, Người đại diện Mặt trận Việt Minh và Phân hội Việt Nam thuộc
                            Hiệp hội Quốc tế chống xâm lược sang Trung Quốc tìm kiếm sự liên minh
                            quốc tế nhằm phối hợp chống phát xít trên chiến trường Thái Bình Dương.
                            Người bị chính quyền Tưởng Giới Thạch bắt giam tại Quảng Tây trong một
                            năm 14 ngày. Trong thời gian này, Người đã sáng tác tập thơ “Nhật ký
                            trong tù” với 133 bài thơ chữ Hán. Tháng 9/1943, Hồ Chí Minh được trả
                            tự do.
                        </p>
                        <p>
                            Tháng 9/1944, Hồ Chí Minh trở về căn cứ Cao Bằng. Tháng 12/1944, Người
                            ra chỉ thị thành lập Đội Việt Nam tuyên truyền giải phóng quân, tổ chức
                            tiền thân của Quân đội nhân dân Việt Nam.
                        </p>
                        <p>
                            Tháng 5/1945, Hồ Chí Minh di chuyển từ Cao Bằng về Tân Trào (Tuyên Quang).
                            Tại đây, theo đề nghị của Người, Hội nghị toàn quốc của Đảng và Đại hội
                            Quốc dân đã họp, đi đến quyết định tiến hành Tổng khởi nghĩa. Đại hội
                            Quốc dân bầu ra Ủy ban giải phóng dân tộc Việt Nam (tức Chính phủ lâm
                            thời) do Hồ Chí Minh giữ chức Chủ tịch.
                        </p>
                        <p>
                            Vào tháng 8/1945, Hồ Chí Minh cùng Trung ương Đảng lãnh đạo nhân dân
                            khởi nghĩa thành công, giành lấy chính quyền. Ngày 2/9/1945, tại Quảng
                            trường Ba Đình (Hà Nội), Hồ Chí Minh đọc “Tuyên ngôn độc lập”, chính thức
                            công bố sự ra đời của nước Việt Nam Dân chủ Cộng hòa và giới thiệu Chính
                            phủ lâm thời do Người làm Chủ tịch kiêm Bộ trưởng Bộ Ngoại giao. Người
                            cũng tổ chức Tổng tuyển cử tự do toàn quốc để bầu Quốc hội và thông qua
                            Hiến pháp dân chủ đầu tiên.
                        </p>
                    </div>
                </section>

                {/* 7. Circle wrap */}
                <section className="bio-section circle-wrap">
                    <div className="circle-image">
                        <img src={leadershipImg} alt="Những năm hoạt động" />
                    </div>
                    <p>
                        Ngày 01/01/1946, Chính phủ liên hiệp lâm thời được thành lập, Chủ tịch
                        Hồ Chí Minh vẫn giữ vai trò Chủ tịch, kiêm Bộ trưởng Bộ Ngoại giao. Cũng
                        ngày, cuộc Tổng tuyển cử toàn quốc được tiến hành, với kết quả tỷ lệ
                        cử tri đi bầu đạt hơn 98%. Quốc hội khóa I khai mạc ngày 6/1/1946.
                        Hồ Chí Minh được bầu làm Chủ tịch nước Việt Nam Dân chủ Cộng hòa. Thời
                        kỳ này, Người còn thực hiện công tác ngoại giao quan trọng với các nước
                        đồng minh để tranh thủ sự ủng hộ, giúp đỡ, góp phần giữ vững nền độc lập
                        non trẻ.
                    </p>
                </section>

                {/* 8. Card grid */}
                <section className="bio-section card-grid">
                    <div className="card">
                        <h3>🏆 Di sản và tầm ảnh hưởng</h3>
                        <p>
                            Hồ Chí Minh là biểu tượng vĩ đại trong lịch sử Việt Nam và thế giới,
                            người đã đặt nền móng cho nền độc lập dân tộc và chủ nghĩa xã hội tại
                            Việt Nam. Tư tưởng, đạo đức và phong cách của Người luôn được tôn
                            vinh và trở thành nguồn cảm hứng cho các thế hệ sau này.
                        </p>
                        <p>
                            Ngày nay, di sản của Hồ Chí Minh không chỉ được ghi nhận trong các công
                            trình lịch sử, văn hóa, mà còn được truyền lại qua giáo dục và các
                            phong trào cách mạng trên toàn cầu, góp phần xây dựng một thế giới
                            công bằng, hòa bình.
                        </p>
                    </div>
                </section>
                <section className="bio-hero">
                    <img
                        src={BAC}
                        alt="Chủ tịch Hồ Chí Minh"
                        className="bio-hero-img"
                    />
                    <div className="bio-hero-text">
                        <h1>Chủ tịch Hồ Chí Minh</h1>
                        <p>“Không có gì quý hơn độc lập, tự do!” — Hồ Chí Minh</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
