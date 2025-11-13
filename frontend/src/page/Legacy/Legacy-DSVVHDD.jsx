import React from "react";
import "./Legacy-DSVVHDD.css";

import cover from "../../assets/legacy/NEN.jpg";
import img3 from "../../assets/legacy/kdtkl.jpeg";
import img4 from "../../assets/legacy/NBTLS.jpg"
import img5 from "../../assets/legacy/NGDONB.jpg"
import img6 from "../../assets/legacy/KDTHTL.jpg"
import img7 from "../../assets/legacy/KDTHTL2.jpg"
import img8 from "../../assets/legacy/NKTT.jpg"
import img9 from "../../assets/legacy/DKM.jpg"

function Divider() {
    return <div className="divider" />;
}

export default function Legacy_DSVVHDD() {
    return (
        <div className="legacy">
            {/* Ảnh bìa */}
            <header className="cover">
                <img src={cover} alt="Ảnh bìa Legacy" className="cover-image" />
                <h1 className="cover-title">Legacy</h1>
            </header>

            {/* Phần Giới thiệu Tư tưởng Hồ Chí Minh */}
            <section className="intro">
                <p> Các di sản văn hóa và đạo đức Chủ tịch Hồ Chí Minh có thể kể đến như di sản phi vật thể (đạo đức, phong cách sống) và di sản vật thể (các di tích, tác phẩm và hiện vật liên quan tới cuộc đời hoạt động cách mạng của Người). Các di sản này là một phần quan trọng trong nền văn hóa Việt Nam, với những di sản tinh thần mang tính phổ quát và vượt thời đại, còn các di sản vật thể được bảo tồn và phát huy tại nhiều địa điểm trên khắp cả nước. Các di sản này đóng một vai trò vô cùng quan trọng trong việc giáo dục những thế hệ học sinh trên cả nước, là kim chỉ nam cho lối sống chuẩn mực đề học hỏi.
                </p>
            </section>

            {/* Section 1 */}
            <section className="section">
                <h2>1. Di sản văn hóa phi vật thể - những nét đẹp trong phong cách sống và đạo đức của chủ tịch Hồ Chí Minh</h2>
                <div className="section-content image-left">
                    <div className="text-wrapper">
                        <p>  Nét chung trong phong cách sống của Chủ tịch Hồ Chí Minh là rất mực giản dị, thanh cao, đạm bạc trong đời sống vật chất, nhưng lại vô cùng phong phú về những giá trị đạo đức - tinh thần; chứa chan tình yêu thương con người, yêu cuộc sống, thiên nhiên..</p>
                        <p> Sống cần, kiệm, liêm, chính: Cả trong lời nói và trong việc làm, đó là tư tưởng đạo đức mà cả đời Chủ tịch Hồ Chí Minh không ngừng theo đuổi, Người luôn luôn tự mình thực hiện bốn tiêu chuẩn đó:</p>
                        <p>    Về ăn, dù cho là khi ở Paris hoa lệ hay lúc về hoạt động bí mật tại vùng Pác Bó, kể cả khi đã trở thành Chủ tịch nước, Người vẫn thích lối ăn đạm bạc, mang tính truyền thống quê hương. Có “của ngon, vật lạ”, Người thường không chịu ăn một mình, mà san sẻ đều cho những người cùng đi, để phần cho người đi vắng... Khi ăn xong, bao giờ Người cũng sắp xếp lại mâm bát cho gọn ghẽ, thể hiện sự tôn trọng đối với người phục vụ của mình.</p>
                        <p>Về mặc, quần áo và cách mặc của Bác Hồ không cầu kỳ mà lại vô cùng giản dị, gần gũi và thân quen như mọi người xung quanh mà vẫn lịch sự, tao nhã. Khi ở miền núi, Người mặc bộ đồ chàm như một ông ké người Nùng. Đến với nông dân, Người mặc bộ cánh nâu, khăn mặt vắt vai như một lão nông. Đi chiến dịch, Người mặc bộ quân phục như một chiến sĩ. Hành trang của vị Chủ tịch nước, là thượng khách của nước Pháp, cũng chỉ có hai bộ quần áo ngoài, một bộ bằng kaki, một bộ bằng dạ cùng vài bộ đồ lót, vừa xếp gọn trong chiếc vali nhỏ. Dùng lâu, quần áo đã cũ, sờn nhưng Người vẫn không chịu cho may bộ mới...</p>
                        <p> Về chỗ ở, Hồ Chí Minh đề ra là gần gũi với thiên nhiên chứ không chìm đắm trong những xa hoa, tráng lệ như các lãnh tụ của các nước khác thường làm:</p>
                        <p className="quote">“Trên có núi, dưới có sông; có đất ta trồng, có bãi ta chơi; nhà thoáng ráo, kín mái; gần dân, không gần đường”</p>
                        <p> Trong sinh hoạt đời thường, việc gì có thể làm, những gì mà bản thân mình có khả năng, Người đều tự làm, không muốn phiền người khác. Dọc đường những chuyến đi công tác, Người tắm suối, tự giặt quần áo, phơi lên sào rồi vác vai đi tiếp, bình dị, tự nhiên như một lão nông, thật gần gũi với chúng ta.
                        </p>
                        <p>  Mỗi khi đi công tác xuống cơ sở, Bác ít khi báo trước, cốt là để địa phương không được tổ chức đón tiếp linh đình. Người dặn:</p>
                        <p className="quote">“Đi như thế này mới thấy sự thật. Nếu báo trước thì không thấy gì hết. Thế rồi địa phương lại lấy cớ ta ăn mà mổ gà, mổ lợn. Đoàn công tác ăn một, cán bộ địa phương ăn hai và kết quả cuối cùng là gì? Nhân dân lại è vai ra mà gánh...”</p>
                    </div>
                </div>
            </section>


            <Divider />

            <section className="section">
                <h2> 2. Di sản văn hóa vật thể của Chủ tịch Hồ Chí Minh:
                </h2>
                <div className="section-content image-left">

                    <div className="text-wrapper">
                        <p>Trong suốt cuộc đời hoạt động cách mạng, Chủ tịch Hồ Chí Minh đã để lại nhiều những tác phẩm cũng như những giá trị vật chất khác để lại cho các thế hệ sau. Những di sản mà Người để lại như nhắc nhở chúng ta về những gian nan, khốn khó mà các thế hệ yêu nước đời trước đã phải trải qua để giành lấy độc lập, tự do, khích lệ chúng ta trở thành những người có ích cho xã hội, cho đất nước về mai sau. </p>
                        <h2>I.Khu di tích Kim Liên</h2>

                        <div className=" section-content image-left">
                            <div className=" text-wrapper">
                                <p> Khu di tích Kim Liên, thuộc xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An, là một quần thể di tích lịch sử quan trọng, là quê nội và quê ngoại của Chủ tịch Hồ Chí Minh. Quần thể này bao gồm làng Sen (quê nội) và làng Hoàng Trù (quê ngoại), nơi lưu giữ nhiều kỷ vật, hiện vật và không gian văn hóa gắn liền với tuổi thơ của Bác và gia đình Người. Đây là nơi có vai trò quan trọng trong việc giáo dục truyền thống yêu nước và là điểm du lịch văn hóa thu hút du khách trong và ngoài nước. Khu di tích lịch sử văn hóa Kim Liên được Bộ Văn hóa, Thể thao và Du lịch Việt Nam công nhận là một trong những khu du lịch trọng điểm quốc gia và là một trong bốn khu di tích quan trọng bậc nhất về cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh.
                                </p>
                            </div>
                            <div className="image-wrapper">
                                <img src={img3} alt="Ảnh trái 3" />
                            </div>
                        </div>
                        <h2>Làng sen(Quê nội)</h2>
                        <div className=" section-content image-right">

                            <div className=" text-wrapper">
                                <p>  Đây là nơi Chủ tịch Hồ Chí Minh (lúc nhỏ tên là Nguyễn Sinh Cung) đã sống cùng gia đình từ năm 1901 đến năm 1906 trước khi cùng cha vào Huế. Nơi đây đã chứng kiến những ngày tháng đầu đời của Người
                                    Hình ảnh ngôi nhà tranh tại làng Sen mà Bác đã sống trong những năm tháng tuổi thơ
                                    Làng Sen nổi tiếng với Ngôi nhà tranh giản dị của gia đình Bác Hồ, tái hiện khung cảnh sinh hoạt mộc mạc của gia đình nhà nho yêu nước Nguyễn Sinh Sắc.
                                    Tại đây còn có Nhà thờ gia tiên họ Nguyễn Sinh, nơi thờ cúng ông bà nội và các thế hệ đời trước của tổ tiên Chủ tịch Hồ Chí Minh.
                                </p>
                            </div>
                            <div className="image-wrapper">
                                <img src={img4} alt="Ảnh trái 3" />
                            </div>
                        </div>
                        <h2>  Làng Hoàng Trù (Quê Ngoại)</h2>

                        <div className=" section-content image-left">
                            <div className=" text-wrapper">
                                <p>   Làng Hoàng Trù là nơi mà Chủ tịch Hồ Chí Minh đã cất tiếng khóc chào đời vào năm 1890 và trải qua những năm tháng thơ ấu cùng với mẹ là bà Hoàng Thị Loan. Khu di tích này bao gồm Ngôi nhà của ông bà ngoại (Hoàng Đường), nơi bà Hoàng Thị Lan đã sinh ra ba người con: Nguyễn Thị Thanh (chị), Nguyễn Sinh Cung (tức Chủ tịch hồ Chí Minh), và Nguyễn Sinh Nhuận (em trai)
                                </p>
                            </div>
                            <div className="image-wrapper">
                                <img src={img5} alt="Ảnh trái 3" />
                            </div>
                        </div>
                        <h2>  Khu Di tích mộ Bà Hoàng Thị Loan
                        </h2>

                        <div className=" section-content image-right">

                            <div className=" text-wrapper">
                                <p>       Khu di tích mộ Bà Hoàng Thị Loan (tức mẹ của Bác Hồ) nằm tách biệt khỏi khu vực Làng Sen và Làng Hoàng Trù nhưng vẫn nằm trong phạm vi quản lý của Khu Di tích Lịch sử Kim Liên. Đây là nơi an nghỉ của bà Hoàng Thị Loan, khu mô được thiết kế trang nghiêm, kết hợp giữa kiến trúc truyền thống và không gian xanh mát như để thể hiện lòng kính trọng với một trong những người có công lao to lớn với Chủ tịch Hồ Chí Minh, nuôi dưỡng Người từ những năm tháng đầu đời.

                                </p>
                            </div>
                            <div className="image-wrapper">
                                <img src={img6} alt="Ảnh trái 3" />
                                <img src={img7} alt="" />
                            </div>
                        </div>

                        <h2>II.Nhật ký trong tù</h2>
                        <div className=" section-content image-left">

                            <div className=" text-wrapper">
                                <p> Nhật ký trong tù (Ngục trung nhật ký) là tập thơ chữ Hán gồm 133 (không tính “Đầu từ”) bài theo thể Đường luật do Chủ tịch Hồ Chí Minh sáng tác trong thời gian bị chính quyền Tưởng Giới Thạch bắt giam ở Quảng Tây, Trung Quốc, từ ngày 29/8/1942 đến ngày 10/9/1943. Đây là một tập nhật kí bằng thơ mà trong đó Bác đã ghi chép khá tỉ mỉ, chân thực những gì Bác đã chững khiến, đã trải qua trong thời gian 13 tháng ở tù. Cũng chính vì vậy mà tập thơ có một giá trị hiện thực rất cao. Tập thơ đã thể hiện tâm hồn phong phú cao đẹp của người tử tù vĩ đại. Về phương diện này, có thể xem Nhật kí trong tù như một bức chân dung tự họa con người tinh thần của chủ tịch Hồ Chí Minh. Tập thơ đã khắc họa chân dung của Bác Hồ trong tập thơ là hình ảnh nhà ái quốc, trong lòng luôn hướng về tổ quốc, khao khát tự do và là chiến sĩ cộng sản kiên cường bất khuất. Dù bị đầy đọa trong lao tù Người vẫn ung dung tự tại, tràn trề tinh thần lạc quan, hướng đến tương lai. Các bài thơ trong Tập thơ này được sử dụng cho rất nhiều các mục đích khác nhau, phần lớn là được sử dụng trong các tài liệu dạy học, sách giáo khao nhằm giáo dục các thế hệ học sinh Việt Nam. Năm 2012, tập thơ Nhật kí trong tù chính thức được công nhận là một bảo vật quốc gia, có giá trị về văn học, lịch sử sâu sắc
                                </p>
                            </div>
                            <div className="image-wrapper">
                                <img src={img8} alt="Ảnh trái 3" />

                            </div>
                        </div>


                        <h2>III.Đường Kách Mệnh</h2>
                        <div className=" section-content image-right">

                            <div className=" text-wrapper">
                                <p>   Đường Kách Mệnh là một tác phẩm lý luận cách mạng kinh điển, được Nguyễn Ái Quốc (tức tên Chủ tịch Hồ Chí Minh thời còn hoạt động ở nước ngoài) biên soạn và xuất bản lần đầu vào năm 1927 tại Quảng Châu, Trung Quốc. Tác phẩm ra đời trong bối cảnh Nguyễn Ái Quốc đang hoạt động tại Trung Quốc và phụ trách lớp huấn luyện cán bộ cho Hội Việt Nam Cách mạng Thanh niên, nhằm trang bị lý luận chính trị và phương pháp tổ chức cho các học viên. Nội dung cốt lõi của Đường Kách Mệnh là việc truyền bá chủ nghĩa Mác - Lênin và kinh nghiệm tích lỹ từ Cách mạng Tháng Mười Nga vào Việt Nam. Nguyễn Ái Quốc đã trình bày các vấn đề lý luận phức tạp của chủ nghĩa cộng sản và phong trào vô sản quốc tế một cách ngắn gọn, dễ hiểu, dễ nhớ, phù hợp với trình độ nhận thức của quần chúng và cán bộ cách mạng Việt Nam lúc bấy giờ. Tác phẩm đã phân tích rõ mục đích của cách mạng là giành độc lập dân tộc và đem lại hạnh phúc cho nhân dân, chỉ rõ tính chất và đối tượng của cách mạng (đế quốc và phong kiến), đồng thời xác định lực lượng cách mạng chủ yếu là công nông. Một điểm đặc sắc của tác phẩm là việc Nguyễn Ái Quốc đặc biệt chú trọng đến tổ chức và đạo đức của người làm cách mạng. Người nhấn mạnh vai trò của Đảng Cộng sản là người dẫn đường, và yêu cầu cán bộ phải thực hành "Cần, Kiệm, Liêm, Chính" để tạo lòng tin trong dân. Đường Kách Mệnh đã đóng vai trò là kim chỉ nam đầu tiên và cơ bản, định hướng con đường cách mạng vô sản cho Việt Nam, đặt nền móng lý luận cho việc thành lập Đảng Cộng sản Việt Nam vào năm 1930. Đây được coi là tài liệu lý luận chính trị đầu tiên có ý nghĩa đặc biệt quan trọng trong lịch sử tư tưởng cách mạng Việt Nam.
                                </p>
                                <div className="image-wrapper">
                                    <img src={img9} alt="Ảnh trái 3" />

                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </section>
            <Divider />




            {/* <section className="section">
                <div className="section-content image-left">
                    <div className="image-wrapper">
                        <img src={img3} alt="Ảnh trái 3" />
                    </div>
                    <div className="text-wrapper">
                        <h2>Tiêu đề 3</h2>
                        <p> Nội dung </p>
                    </div>
                </div>
            </section>

            <Divider />

            <section className="section">
                <div className="section-content image-right">
                    <div className="text-wrapper">
                        <h2>Tiêu đề 4</h2>
                        <p> Nội dung </p>
                    </div>
                    <div className="image-wrapper">
                        <img src={img4} alt="Ảnh phải 4" />
                    </div>
                </div>
            </section> */}
        </div>
    );
}
