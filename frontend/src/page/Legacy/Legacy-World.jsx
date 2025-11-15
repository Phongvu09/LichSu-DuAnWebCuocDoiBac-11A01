import React from "react";
import "./LegacyWorld.css";
import Cover from "../../config/Cover";

import cover from "../../assets/legacy/NEN.jpg";

import nga1 from "../../assets/legacy/nga1.png";
import nga2 from "../../assets/legacy/nga2.png";
import nga3 from "../../assets/legacy/nga3.png";

import tq1 from "../../assets/legacy/tq1.png";
import tq2 from "../../assets/legacy/tq2.png";

import cuba1 from "../../assets/legacy/cuba1.png";

import phap1 from "../../assets/legacy/phap1.png";

// Component Tiêu đề quốc gia có ảnh nền nhẹ
function CountrySection({ title, bgImage, children }) {
    return (
        <>
            <div
                className="country-header"
                style={{ backgroundImage: `url(${bgImage})` }}
                aria-label={`Khu vực ${title}`}
            >
                <h2>{title}</h2>
            </div>
            <div className="country-content">{children}</div>
        </>
    );
}

// Nếu bạn chưa có ảnh nền riêng cho từng quốc gia, bạn có thể dùng ảnh cover hoặc nền màu đơn giản
// Mình tạm dùng ảnh cover cho demo, bạn thay thành ảnh phù hợp từng quốc gia nếu có
const ngaBg = cover;
const tqBg = cover;
const cubaBg = cover;
const phapBg = cover;

export default function LegacyWorld() {
    return (
        <>
            {/* Ảnh bìa chính */}
            <header className="cover">
                <img src={cover} alt="Ảnh bìa Legacy" className="cover-image" />
                <h1 className="cover-title">Dấu Ấn Hồ Chí Minh Trên Thế Giới</h1>
            </header>

            <div className="legacy container">
                {/* Nga */}
                <CountrySection title="Nga" bgImage={ngaBg}>
                    <section className="section">
                        <div className="section-content image-left">
                            <div className="image-wrapper">
                                <img src={nga1} alt="Tượng HCM tại Moscow" />
                            </div>
                            <div className="text-wrapper">
                                <h3>Nga – Quảng trường Hồ Chí Minh tại Moscow</h3>
                                <p>
                                    Quảng trường Hồ Chí Minh tại thủ đô Moscow được xây dựng năm 1990
                                    nhân kỷ niệm 100 năm Ngày sinh của Người. Tượng đài bằng đồng cao 5m
                                    với hình nền mặt trời tượng trưng cho tương lai tươi sáng của Việt Nam.
                                    Đây là biểu tượng về tình cảm đặc biệt của nhân dân Nga dành cho Hồ Chí Minh.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="section-content image-right">
                            <div className="image-wrapper">
                                <img src={nga2} alt="Tượng HCM tại Saint Petersburg" />
                            </div>
                            <div className="text-wrapper">
                                <h3>Nga – Tượng đài tại Saint Petersburg</h3>
                                <p>
                                    Tượng đài Chủ tịch Hồ Chí Minh tại Saint Petersburg khánh thành năm
                                    2023, nhân 100 năm Người tới thành phố. Tượng đồng cao 3m, thể hiện
                                    hình ảnh Người đang ngồi đọc sách, là minh chứng cho tình hữu nghị
                                    bền chặt giữa Saint Petersburg và Thành phố Hồ Chí Minh.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="section-content image-left">
                            <div className="image-wrapper">
                                <img src={nga3} alt="Tượng HCM tại Ulyanovsk" />
                            </div>
                            <div className="text-wrapper">
                                <h3>Nga – Tượng đài Hồ Chí Minh tại Ulyanovsk</h3>
                                <p>
                                    Trên quê hương của Lenin, tượng đài Hồ Chí Minh được khánh thành với
                                    chiều cao 5m, đúc bằng đồng nguyên chất. Đây là biểu tượng tinh thần
                                    cho cộng đồng người Việt tại Nga và thể hiện sự kính trọng sâu sắc của
                                    nhân dân Ulyanovsk đối với Người.
                                </p>
                            </div>
                        </div>
                    </section>
                </CountrySection>

                {/* Trung Quốc */}
                <CountrySection title="Trung Quốc" bgImage={tqBg}>
                    <section className="section">
                        <div className="section-content image-left">
                            <div className="image-wrapper">
                                <img src={tq1} alt="Di tích Quảng Châu" />
                            </div>
                            <div className="text-wrapper">
                                <h3>Trung Quốc – Di tích Quảng Châu</h3>
                                <p>
                                    Tại số nhà 248–250 đường Văn Minh, Quảng Châu, là nơi Hồ Chí Minh hoạt
                                    động từ 1924–1927. Đây là trụ sở Hội Việt Nam Cách mạng Thanh niên và
                                    nơi xuất bản báo Thanh Niên – tờ báo cách mạng đầu tiên của Việt Nam.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="section-content image-right">
                            <div className="image-wrapper">
                                <img src={tq2} alt="Phòng trưng bày Quảng Châu" />
                            </div>
                            <div className="text-wrapper">
                                <h3>Trung Quốc – Không gian trưng bày</h3>
                                <p>
                                    Khu trưng bày “Chủ tịch Hồ Chí Minh tại Quảng Châu” rộng 240m² với hơn
                                    150 hiện vật tái hiện chân thực nơi Người dạy học, làm việc và truyền bá
                                    chủ nghĩa Mác – Lênin cho thanh niên Việt Nam.
                                </p>
                            </div>
                        </div>
                    </section>
                </CountrySection>

                {/* Cuba */}
                <CountrySection title="Cuba" bgImage={cubaBg}>
                    <section className="section">
                        <div className="section-content image-left">
                            <div className="image-wrapper">
                                <img src={cuba1} alt="Tượng HCM tại La Habana" />
                            </div>
                            <div className="text-wrapper">
                                <h3>Cuba – Tượng đài Hồ Chí Minh tại La Habana</h3>
                                <p>
                                    Khánh thành năm 2003 tại Công viên Hòa Bình, tượng đài Hồ Chí Minh tại
                                    Cuba được xây dựng với nền đá cẩm thạch đỏ mang ý nghĩa 54 dân tộc Việt Nam.
                                    Đây là nơi thường xuyên diễn ra các lễ tưởng niệm và hoạt động hữu nghị.
                                </p>
                            </div>
                        </div>
                    </section>
                </CountrySection>

                {/* Pháp */}
                <CountrySection title="Pháp" bgImage={phapBg}>
                    <section className="section">
                        <div className="section-content image-left">
                            <div className="image-wrapper">
                                <img src={phap1} alt="Không gian Hồ Chí Minh Montreuil" />
                            </div>
                            <div className="text-wrapper">
                                <h3>Pháp – Không gian Hồ Chí Minh tại Montreuil</h3>
                                <p>
                                    Thành phố Montreuil (ngoại ô Paris) là nơi lưu giữ nhiều kỷ vật của Hồ Chí Minh
                                    trong thời gian Người hoạt động tại Pháp. Tượng bán thân được đặt trong công
                                    viên Montreau, bao quanh là tre trúc mang đậm bản sắc Việt Nam.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="section-content image-right">
                            <div className="text-wrapper">
                                <h3>Pháp – Tượng Hồ Chí Minh</h3>
                                <p>
                                    Đây là pho tượng Hồ Chí Minh duy nhất tại Pháp, cao 1,1m, đặt trên bệ đá 3m.
                                    Mỗi dịp 19/5, cộng đồng người Việt và bạn bè Pháp đều đến dâng hoa tưởng niệm,
                                    thể hiện sự kính trọng đối với Người.
                                </p>
                            </div>
                        </div>
                    </section>
                </CountrySection>
            </div>
        </>
    );
}
