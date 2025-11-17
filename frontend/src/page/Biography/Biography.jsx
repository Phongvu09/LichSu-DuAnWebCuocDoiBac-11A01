import React from "react";

import nen from "../../assets/biography/nen.png";
import youthImg from "../../assets/biography/BH.png";
import nguyenSinhSac from "../../assets/biography/NSS.png";
import hoangThiLoan from "../../assets/biography/HTL.png";
import nguyenThiThanh from "../../assets/biography/NTT.png";
import nguyenSinhKhiem from "../../assets/biography/NSK.png";

import "./Biography.css";


export default function Biography() {
    return (
        <div className="biography">
            {/* Background hero */}
            <section className="bio-hero">
                <img src={nen} alt="Chủ tịch Hồ Chí Minh" className="bio-hero-img" />
            </section>

            <main className="bio-content">
                {/* Tiểu sử chung */}
                <section className="bio-section bio-intro">
                    <div className="bio-intro-img-wrap">
                        <img src={youthImg} alt="Chủ tịch Hồ Chí Minh thời niên thiếu" className="bio-intro-img" />
                    </div>
                    <div className="bio-intro-text">
                        <h2>Tiểu sử Chủ tịch Hồ Chí Minh</h2>
                        <p>
                            Hồ Chí Minh sinh ngày 19 tháng 5 năm 1890 tại quê ngoại là làng Hoàng Trù (lúc bấy giờ thuộc xã xã Chung Cự, tổng Lâm Thịnh, huyện Nam Đàn, tỉnh Nghệ An). Thời thơ ấu, Người có tên là Nguyễn Sinh Cung, sau này lớn hơn một chút thì lấy tên là Nguyễn Tất Thành, trong nhiều năm hoạt động cách mạng thì lấy tên là Nguyễn Ái Quốc. Người sinh ra trong một gia đình nhà nho yêu nước, lớn lên ở một địa phương có truyền thống anh dũng chống giặc ngoại xâm. Sống trong hoàn cảnh đất nước chìm dưới ách đô hộ của thực dân Pháp, thời niên thiếu và thanh niên của mình, Hồ Chí Minh đã chứng kiến nỗi khổ cực của đồng bào và những phong trào đấu tranh chống thực dân, Hồ Chí Minh sớm có chí đuổi thực dân, giành độc lập cho đất nước, đem lại tự do, hạnh phúc cho đồng bào. Chủ tịch Hồ Chí Minh mất vào ngày 02 tháng 9 năm 1969 tại Hà Nội.
                        </p>
                    </div>
                </section>


                {/* Gia đình */}
                <section className="bio-section family-section">
                    <h2>Gia đình Chủ tịch Hồ Chí Minh</h2>

                    <div className="family-member">
                        <img src={nguyenSinhSac} alt="Nguyễn Sinh Sắc" className="family-img" />
                        <div className="family-info">
                            <h3>Nguyễn Sinh Sắc</h3>
                            <p>
                                Cụ Nguyễn Sinh Sắc (thường được gọi bằng tên cụ Phó bảng, cụ Sắc) là cha ruột của Chủ tịch Hồ Chí Minh cũng là người có ảnh hưởng rất lớn đến Bác trong suốt giai đoạn tuổi trẻ. Cụ lớn lên trong một môi trường Nho giáo dưới sự dạy dỗ của nhà Nho và cha vợ của mình – cụ Hoàng Xuân Đường, ông đỗ cử nhân năm 1894 và Phó bảng vào năm 1901. Cụ từng có giai đoạn làm chức  Thừa biện bộ Lễ vào năm 1906 và Tri huyện Bình Khê tỉnh Bình Định năm 1909. Sau này, cụ đi vào miền Nam và sinh sống tại Làng Hòa An, Cao Lãnh, Đồng Tháp (nay là xã Hòa An, thành phố Cao Lãnh) tới cuối đời.
                            </p>
                        </div>
                    </div>

                    <div className="family-member">
                        <img src={hoangThiLoan} alt="Hoàng Thị Loan" className="family-img" />
                        <div className="family-info">
                            <h3>Hoàng Thị Loan</h3>
                            <p>
                                Bà Hoàng Thị Loan là thân mẫu của Hồ Chí Minh. Sau khi chồng bà là cụ Nguyễn Sinh Sắc đi thi ở Huế, vì túng thiếu tiền bạc nên ngỏ ý mời bà lên kinh giúp ông học tập, bà đã gửi con gái đầu lòng của mình lại Nghệ An, rồi đưa hai con trai là Nguyễn Sinh Khiêm (7 tuổi) và Nguyễn Sinh Cung (5 tuổi) cùng chồng vào Huế. Ở đây, bà làm nghề dệt vải để trang trải cuộc sống vật chất cho gia đình. Năm 1900, sau khi sinh người con thứ tư là Nguyễn Sinh Nhuận cộng với sự vất vả khó nhọc trước đó, Hoàng Thị Loan sinh bệnh rồi qua đời vào ngày 10 tháng 2 năm 1901. Dù mất sớm nhưng bà đã là một trong những người vô cùng quan trọng trong cuộc đời của Chủ tịch Hồ Chí Minh.
                            </p>
                        </div>
                    </div>

                    <div className="family-member">
                        <img src={nguyenThiThanh} alt="Nguyễn Thị Thanh" className="family-img" />
                        <div className="family-info">
                            <h3>Nguyễn Thị Thanh</h3>
                            <p>
                                Nguyễn Thị Thanh (1884–1954) là người chị cả của Chú tịch Hồ Chí Minh, có hiệu khác là Bạch Liên nữ sĩ, bà hoạt động tích cực chống Pháp dưới ngọn cờ yêu nước của chí sĩ Phan Bội Châu. Trong những năm tháng hoạt động cách mạng, bà Nguyễn Thị Thanh đã nhiều lần bị bắt và nhốt vào nhà tù tra tấn dã man. Trải qua nhiều năm tháng cực khổ, nhờ vào tài bốc thuốc, bà đã được Án sát Phạm Bá Phổ mời về nhà và làm gia sư cho con trai mình. Ngày 18 tháng 8 năm 1940, bà được trả tự do và trở về quê hương sinh sống. Năm 1946, bà cũng đã từng đến thăm Chủ tịch Hồ Chí Minh – em trai của mình, sau đó bà trở về làng Sen sống trọng đời người công dân mẫu mực với bà con, làng xóm. Bà mất vào tháng 3 năm 1954 vì tuổi già, sức yếu và bệnh tật.
                            </p>
                        </div>
                    </div>

                    <div className="family-member">
                        <img src={nguyenSinhKhiem} alt="Nguyễn Sinh Khiêm" className="family-img" />
                        <div className="family-info">
                            <h3>Nguyễn Sinh Khiêm</h3>
                            <p>
                                Nguyễn Sinh Khiêm (1888–1950), hay còn gọi là Cả Khiêm (tự là Tất Đạt), là anh trai của Chủ tịch Hồ Chí Minh (Nguyễn Sinh Cung/Nguyễn Tất Thành). Thời trẻ, ông tham gia hoạt động yêu nước chống thực dân và phong kiến nên bị tù đày nhiều năm, sau này hành nghề thầy thuốc và thầy địa lý với biệt danh "Thầy Nghệ". Ông kết hôn với bà Nguyễn Thị Giáng tại Huế, nhưng ba người con chung của họ đều mất sớm; ông dành tình thương và nuôi dạy người con riêng của vợ là Hà Hữu Thừa. Năm 1940, sau cái chết của con gái, ông về Nghệ An, cải táng mẹ và tổ chức diễn tuồng yêu nước, bị Pháp bắt giam và bị tiêm thuốc triệt nòi giống. Năm 1941, ông bị buộc trở lại Huế để dễ bề theo dõi. Năm 1946, ông đã ra Hà Nội thăm em. Ông qua đời tại Nghệ An vào ngày 9/11/1950, hưởng thọ 62 tuổi.
                            </p>
                        </div>
                    </div>

                    {/* Không có ảnh Nguyễn Sinh Nhuận nên không thêm phần ảnh */}
                    <div className="family-member no-image">

                        <h3>Nguyễn Sinh Nhuận</h3>
                        <p>
                            Nguyễn Sinh Nhuận (1900–1901), hay tên khai sinh là Nguyễn Sinh Xin, là con trai út trong gia đình của Bác, sau khi sinh ra, bà Hoàng Thị Loan bệnh nặng và qua đời. Nguyễn Sinh Xin được gửi về quê ngoại Hoàng Trù để chăm sóc nhưng vì ốm yếu nên đã qua đời mấy tháng sau đó.                        </p>
                    </div>
                </section>

                {/* Quá trình hoạt động cách mạng */}
                <section className="bio-section">
                    <h2>Quá trình hoạt động cách mạng</h2>
                    <p>Ngày 03/6/1911, Nguyễn Tất Thành rời cảng Nhà Rồng trên tàu Amiran Latusơ Tơrêvin hai ngày sau, bắt đầu hành trình tìm đường cứu nước. Từ 1912 - 1917, Người đã đi qua nhiều quốc gia tại các Châu lục khác nhau.</p>
                    <p>Cuối năm 1917, Hồ Chí Minh trở lại Pháp, và năm 1919, lấy tên Nguyễn Ái Quốc, Người đã gửi Bản yêu sách đòi quyền tự do cho nhân dân Việt Nam tới Hội nghị Vécxây. Dưới ảnh hưởng của Cách mạng Tháng Mười Nga và Luận cương của Lênin, tháng 12/1920, Nguyễn Ái Quốc tham gia sáng lập Đảng Cộng sản Pháp, khẳng định con đường cách mạng vô sản là con đường cứu nước duy nhất.</p>
                    <p>Năm 1921, Người tham gia sáng lập Hội Liên hiệp các dân tộc thuộc địa và cho xuất bản báo “Người cùng khổ” (Le Paria). Tác phẩm “Bản án chế độ thực dân Pháp” (1925) của Người đã góp phần thức tỉnh nhân dân các nước thuộc địa đứng lên tự giải phóng.</p>
                    <p>Tháng 6/1923, Nguyễn Ái Quốc sang Liên Xô làm việc tại Quốc tế Cộng sản, bảo vệ và phát triển sáng tạo tư tưởng của Lênin về vấn đề dân tộc và thuộc địa. Tháng 11/1924, Người đến Quảng Châu (Trung Quốc). Năm 1925, Người thành lập Hội Việt Nam Cách mạng Thanh niên, ra tuần báo “Thanh niên” và tập hợp bài giảng thành sách “Đường Kách mệnh”, đặt nền móng tư tưởng cho cách mạng Việt Nam.</p>
                    <p>Từ 1927 - 1929, Người tiếp tục hoạt động qua Liên Xô, châu Âu và Xiêm (Thái Lan) để chuẩn bị cho sự ra đời của Đảng Cộng sản. Tháng 2/1930, Nguyễn Ái Quốc chủ trì Hội nghị thành lập Đảng tại Hồng Kông, thông qua các văn kiện cơ bản, lập nên Đảng Cộng sản Việt Nam.</p>
                    <p>Tháng 6/1931, Người bị chính quyền Anh bắt giam tại Hồng Kông, nhưng được trả tự do đầu năm 1933. Từ 1934 đến 1938, Người nghiên cứu tại Mátxcơva, vẫn kiên trì theo dõi và chỉ đạo phong trào cách mạng trong nước.</p>
                    <p>Ngày 28/1/1941, Nguyễn Ái Quốc trở về nước sau hơn 30 năm xa Tổ quốc. Tháng 5/1941, Người triệu tập Hội nghị Trung ương VIII, quyết định đường lối cứu nước, thành lập Việt Nam độc lập đồng minh (Việt Minh).</p>
                    <p>Tháng 8/1942, lấy tên Hồ Chí Minh, Người sang Trung Quốc tìm sự liên minh chống phát xít và bị chính quyền Tưởng Giới Thạch bắt giam một năm 14 ngày, thời gian này Người viết tập thơ “Nhật ký trong tù”. Tháng 12/1944, Người chỉ thị thành lập Đội Việt Nam tuyên truyền giải phóng quân.</p>
                    <p>Tháng 5/1945, Hồ Chí Minh về Tân Trào (Tuyên Quang), Hội nghị toàn quốc của Đảng và Đại hội Quốc dân quyết định Tổng khởi nghĩa và bầu Người làm Chủ tịch Ủy ban giải phóng dân tộc Việt Nam. Tháng 8/1945, Hồ Chí Minh cùng Trung ương Đảng lãnh đạo nhân dân giành chính quyền thắng lợi.</p>
                    <p>Ngày 2/9/1945, tại Quảng trường Ba Đình, Hồ Chí Minh đọc “Tuyên ngôn độc lập”, tuyên bố thành lập nước Việt Nam Dân chủ Cộng hòa, và làm Chủ tịch Chính phủ lâm thời. Tháng 01/1946, Quốc hội khóa I bầu Người làm Chủ tịch nước.</p>
                    <p>Ngày 19/12/1946, Người kêu gọi toàn quốc kháng chiến chống thực dân Pháp. Dưới sự lãnh đạo của Trung ương Đảng và Chủ tịch Hồ Chí Minh, cuộc kháng chiến đã giành thắng lợi, kết thúc bằng chiến thắng Điện Biên Phủ (7/5/1954).</p>
                    <p>Sau năm 1955, Trung ương Đảng và Chủ tịch Hồ Chí Minh đề ra hai nhiệm vụ chiến lược là xây dựng chủ nghĩa xã hội ở miền Bắc và đấu tranh thống nhất đất nước ở miền Nam. Tại Đại hội Đảng lần thứ II (1951) và lần thứ III (1960), Người được bầu làm Chủ tịch Ban Chấp hành Trung ương Đảng.</p>
                    <p>Năm 1964, khi Mỹ mở cuộc chiến tranh phá hoại miền Bắc, Người động viên toàn dân quyết tâm đánh thắng giặc Mỹ xâm lược với lời khẳng định: “Không có gì quí hơn độc lập, tự do!”.</p>
                    <p>Chủ tịch Hồ Chí Minh qua đời ngày 02/9/1969, tại Hà Nội, để lại Di chúc lịch sử về sự nghiệp xây dựng đất nước hòa bình, thống nhất. Thực hiện Di chúc, nhân dân Việt Nam đã đánh thắng Mỹ, buộc ký Hiệp định Paris (1973), và hoàn thành giải phóng miền Nam, thống nhất Tổ quốc vào mùa xuân 1975.</p>
                    <p>Chủ tịch Hồ Chí Minh là người thầy vĩ đại của cách mạng Việt Nam, Người đã sáng lập ra Đảng Mácxít - Lêninnít và nước Việt Nam Dân chủ Cộng hòa. Từ 20/10 đến 20/11/1987, UNESCO đã thông qua Nghị quyết, tôn vinh Người là "Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất của Việt Nam". Ngày nay, tư tưởng Hồ Chí Minh là tài sản tinh thần vô giá, soi đường cho sự nghiệp xây dựng và bảo vệ đất nước.</p>
                </section>


            </main>
        </div>
    );
}
