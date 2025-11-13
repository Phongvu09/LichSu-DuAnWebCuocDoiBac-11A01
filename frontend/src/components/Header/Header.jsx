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
        {
            title: "Giới thiệu",
            link: "/biography",
            dropdown: [
                { name: "Thông tin cá nhân", link: "/biography" },
                { name: "Gia đình & Quê hương", link: "/factors" },
                { name: "Tri thức", link: "/biography#knowledge" },
            ],
        },
        {
            title: "Cuộc đời & Sự nghiệp",
            link: "/timeline",
            // dropdown: [
            //     { name: "1911 – Tìm đường cứu nước", link: "/timeline#1911" },
            //     { name: "1920 – Con đường cách mạng", link: "/timeline#1920" },
            //     { name: "1930 – Thành lập Đảng", link: "/timeline#1930" },
            //     { name: "1945 – Cách mạng Tháng Tám", link: "/timeline#1945" },
            // ],
        },
        {
            title: "Tư tưởng & Tác động",
            dropdown: [
                { name: "Tác phẩm - Câu chuyện tiêu biểu", link: "/works" },
                { name: "Yếu tố tác động", link: "/factors" },
                { name: "Học tập & Làm theo", link: "/learn" },

            ],
        },
        {
            title: "Di sản & Ảnh hưởng",
            dropdown: [
                { name: "Công lao - Đóng góp", link: "/contributions" },
                { name: "Dấu ấn thế giới", link: "/worldimpact" },
                { name: "Dấu ấn Việt Nam hiện đại", link: "/legacy" },

            ],
        },
        {
            title: "Học tập & Tương tác",
            link: "/learn",
            dropdown: [
                { name: "Bài học", link: "/learn" },
                { name: "Trò chơi", link: "/quiz" },
                { name: "Phần thưởng", link: "/rewards" },
            ],
        },
        { title: "Liên hệ", link: "/contact" },
    ];

    return (
        <header className={`header ${visible ? "show" : "hide"}`}>
            {/* --- Hàng 1: Logo + Title --- */}
            <div className="header-row header-top">
                <Link to="/" className="logo-area" onClick={() => setMenuOpen(false)}>
                    <div className="logo-text">
                        <div className="site-title">Hành Trình Cuộc Đời Bác Hồ</div>
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
                                <Link to={m.link} onClick={() => setMenuOpen(false)} className="nav-link">
                                    {m.title}
                                </Link>
                                {m.dropdown && (
                                    <ul className={`dropdown ${activeDropdown === i ? "visible" : ""}`}>
                                        {m.dropdown.map((s, k) => (
                                            <li key={k}>
                                                <Link to={s.link} onClick={() => setMenuOpen(false)}>
                                                    {s.name}
                                                </Link>
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

