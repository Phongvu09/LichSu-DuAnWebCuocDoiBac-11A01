import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import timelineData from "../../data/timeline.json";
import "./Header.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [visible, setVisible] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const [openDropdown, setOpenDropdown] = useState(null);


    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();
    const searchRef = useRef(null);

    // Ẩn header khi cuộn xuống
    useEffect(() => {
        const onScroll = () => {
            const cur = window.scrollY;
            setVisible(cur < lastScroll || cur < 60);
            setLastScroll(cur);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [lastScroll]);

    // Lọc sự kiện theo từ khóa
    useEffect(() => {
        const lower = searchTerm.toLowerCase();
        if (lower.length >= 3) {
            const filtered = timelineData.filter((it) =>
                [it.year, it.title, it.location, it.description]
                    .some((f) => String(f).toLowerCase().includes(lower))
            );
            setSuggestions(filtered.slice(0, 6));
        } else setSuggestions([]);
    }, [searchTerm]);

    // Đóng gợi ý khi click ra ngoài
    useEffect(() => {
        function handleClick(e) {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setSuggestions([]);
            }
        }
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    const handleSelect = (item) => {
        setSearchTerm("");
        setSuggestions([]);
        setMenuOpen(false);
        navigate(`/timeline/${item.id}`);
    };

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (suggestions.length > 0) {
            navigate(`/timeline/${suggestions[0].id}`);
            setSearchTerm("");
            setSuggestions([]);
            setMenuOpen(false);
        }
    };

    const menuData = [
        // {
        //     title: "Trang chủ",
        //     link: "/",
        //     dropdown: [
        //         { name: "Thông tin cá nhân", link: "/biography" },
        //         { name: "Gia đình & Quê hương", link: "/factors" },
        //         { name: "Tri thức", link: "/biography#knowledge" },
        //     ],
        // },
        {
            title: "Trang chủ",
            link: "/",
        },
        {
            title: "Cuộc đời",
            link: "",
            dropdown: [
                { name: "1.Tiểu sử", link: "/biography" },
                { name: "2.Yếu tố tác động đến quá trình hoạt động cách mạng", link: "/factors" },
            ],
        },
        {
            title: "Quá trình hoạt động cách mạng",
            link: "/timeline",
            dropdown: [
                { name: "1.Giai đoạn 1 (Trước 1911)", link: "/timeline/1" },
                { name: "2.Giai đoạn 2 (1911 -1920)", link: "/timeline/2" },
                { name: "3.Giai đoạn 3 (1920 - 1931)", link: "/timeline/3" },
                { name: "4.Giai đoạn 4 (1931 - 1945)", link: "/timeline/4" },
                { name: "5.Giai đoạn 5 (1945 - 1969)", link: "/timeline/5" },


            ],
        },
        {
            title: "Công lao - Đóng góp ",
            link: "/contributions"
        },
        {
            title: "Dấu ấn của Người",
            link: "",
            dropdown: [
                {
                    name: "Với dân tộc Việt Nam",
                    dropdown: [
                        { name: "1.Di sản về tư tưởng", link: "/legacy-tthcm/" },
                        { name: "2.Di sản về văn và hóa đạo đức", link: "/legacy-dsvvhdd" },
                    ],
                },
                { name: "Với lịch sử Thế giới", link: "/legacy-world" },
            ],
        },
        {
            title: "Các tác phẩm của Bác",
            link: "/learn",
            dropdown: [
                { name: "1.Đường Kách Mệnh", link: "/learn/1" },
                { name: "2.Bản Yêu sách của nhân dân An Nam", link: "/learn/2" },
                { name: "3.Bản án chế độ Thực dân Pháp", link: "/learn/3" },
                { name: "4.Cương lĩnh chính trị ", link: "/learn/4" },
                { name: "5.Nhật kí trong tù", link: "/learn/5" },
                { name: "6.Tuyên ngôn độc lập", link: "/learn/6" },
                { name: "7.Lời kêu gọi toàn quốc kháng chiến 1946", link: "/learn/7" },
                { name: "8.Tám điều mệnh lệnh", link: "/learn/8" },
                { name: "9.Lời kêu gọi toàn quốc kháng chiến 1966", link: "/learn/9" },

            ],
        },
        {
            title: "Mẩu truyện",
            link: "/story",
            dropdown: [
                { name: "1.Câu chuyện & bài học rút ra", link: "/story1" },
                { name: "2.Bác Hồ & thiếu nhi", link: "/story2" },
                { name: "3.Bác Hồ với thanh niên", link: "/story3" },
                { name: "4.Bác Hồ & chiến sĩ", link: "/story4" },
                { name: "5.Một số câu chuyện khác", link: "/story5" },
                { name: "6.Một số câu chuyện khác", link: "/story6" }


            ],

        },
    ];


    return (
        <header className={`header ${visible ? "show" : "hide"}`}>
            {/* --- Hàng 1: Logo + Title --- */}
            <div className="header-row header-top">
                <Link to="/" className="logo-area" onClick={() => setMenuOpen(false)}>
                    <div className="logo-text">
                        <div className="site-title">THEO DẤU CHÂN NGƯỜI</div>
                        <div className="site-sub">Tư liệu — Dòng thời gian — Học tập</div>
                    </div>
                </Link>

                {/* Nút hamburger mobile */}
                <button
                    className="hamburger-btn"
                    aria-label="menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* --- Hàng 2: Menu chính --- */}
            <div className={`header-row header-nav ${menuOpen ? "open" : ""}`}>
                <nav className="nav-center">
                    <ul className="nav-list">
                        {menuData.map((m, i) => (
                            <li
                                key={i}
                                className="nav-item"
                                onMouseEnter={() => setActiveDropdown(i)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {m.link ? (
                                    <Link to={m.link} onClick={() => setMenuOpen(false)} className="nav-link">
                                        {m.title}
                                    </Link>
                                ) : (
                                    <span className="nav-link no-link">{m.title}</span>
                                )}

                                {m.dropdown && (
                                    <ul className={`dropdown ${activeDropdown === i ? "visible" : ""}`}>
                                        {m.dropdown.map((s, k) => (
                                            <li key={k} className={s.dropdown ? "has-submenu" : ""}>
                                                {s.link ? (
                                                    <Link to={s.link} onClick={() => setMenuOpen(false)}>
                                                        {s.name}
                                                    </Link>
                                                ) : (
                                                    <span className="no-link">{s.name}</span>
                                                )}


                                                {/* Nếu có dropdown con thì render submenu */}
                                                {s.dropdown && (
                                                    <ul className="submenu">
                                                        {s.dropdown.map((ss, kk) => (
                                                            <li key={kk}>
                                                                <Link to={ss.link} onClick={() => setMenuOpen(false)}>
                                                                    {ss.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                            </li>
                        ))}
                    </ul>

                    {/* --- Mobile Search (chỉ hiện khi mở menu) --- */}
                    {menuOpen && (
                        <div className="nav-search-mobile" ref={searchRef}>
                            <form onSubmit={handleSubmit} className="search-form-mobile">
                                <Search className="icon-mobile" />
                                <input
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Tìm kiếm sự kiện, năm, địa điểm..."
                                />
                            </form>

                            {suggestions.length > 0 && (
                                <ul className="suggestions mobile-suggestions">
                                    {suggestions.map((s) => (
                                        <li key={s.id} onClick={() => handleSelect(s)}>
                                            <div className="suggest-year">{s.year}</div>
                                            <div className="suggest-info">
                                                <strong>{s.title}</strong>
                                                <p className="desc">{(s.description || "").slice(0, 80)}...</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </nav>
            </div>

            {/* --- Hàng 3: Search (PC only) --- */}
            <div className="header-row header-search" ref={searchRef}>
                <form className="search-form" onSubmit={handleSubmit}>
                    <Search className="search-icon" />
                    <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Tìm kiếm sự kiện, năm, địa điểm..."
                    />
                </form>

                {suggestions.length > 0 && (
                    <ul className="suggestions desktop-suggestions">
                        {suggestions.map((s) => (
                            <li key={s.id} onClick={() => handleSelect(s)}>
                                <div className="suggest-year">{s.year}</div>
                                <div className="suggest-info">
                                    <strong>{s.title}</strong>
                                    <p className="desc">📍 {s.location} — {(s.description || "").slice(0, 80)}...</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </header>
    );
}

