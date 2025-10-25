import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import timelineData from "../../data/timeline.json";
import "./Header.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [visible, setVisible] = useState(true);
    const lastScroll = useRef(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();
    const searchRef = useRef(null);

    // Ẩn header khi cuộn xuống
    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;
            const isScrollingUp = current < lastScroll.current;
            const nearTop = current < 60;
            setVisible(isScrollingUp || nearTop);
            lastScroll.current = current;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Gợi ý tìm kiếm
    useEffect(() => {
        const query = searchTerm.toLowerCase();
        if (query.length >= 3) {
            const filtered = timelineData.filter((item) =>
                [item.year, item.title, item.location, item.description]
                    .some((f) => String(f).toLowerCase().includes(query))
            );
            setSuggestions(filtered.slice(0, 6));
        } else {
            setSuggestions([]);
        }
    }, [searchTerm]);

    // Click ra ngoài để đóng gợi ý
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setSuggestions([]);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const handleSelect = (item) => {
        setSearchTerm("");
        setSuggestions([]);
        setMenuOpen(false);
        navigate(`/timeline/${item.id}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (suggestions.length > 0) handleSelect(suggestions[0]);
    };

    const menuItems = [
        { label: "Trang chủ", path: "/" },
        {
            label: "Cuộc đời",
            children: [
                { label: "Tiểu sử", path: "/biography" },
                { label: "Dòng thời gian", path: "/timeline" },
                { label: "Tác phẩm", path: "/works" },
            ],
        },
        {
            label: "Tư tưởng & Di sản",
            children: [
                { label: "Di sản", path: "/legacy" },
                { label: "Ảnh hưởng thế giới", path: "/worldimpact" },
                { label: "Yếu tố hình thành", path: "/factors" },
            ],
        },
        {
            label: "Học & Tương tác",
            children: [
                { label: "Học tập", path: "/learn" },
                { label: "Trò chơi", path: "/quiz" },
                { label: "Phần thưởng", path: "/rewards" },
                { label: "Danh ngôn", path: "/quotes" },
            ],
        },
        { label: "Đóng góp", path: "/contributions" },
        { label: "Liên hệ", path: "/contact" },
    ];

    return (
        <header className={`header ${visible ? "show" : "hide"}`}>
            {/* --- Hàng 1: Logo + hamburger + mobile search --- */}
            <div className="header-row header-top">
                <Link to="/" className="logo-area" onClick={() => setMenuOpen(false)}>
                    <img src="/src/assets/icons/logo.png" alt="logo" className="logo-img" />
                    <div className="logo-text">
                        <div className="site-title">Hành Trình Cuộc Đời Bác Hồ</div>
                        <div className="site-sub">Tư liệu — Dòng thời gian — Học tập</div>
                    </div>
                </Link>

                <button
                    className="hamburger-btn"
                    aria-label="menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* --- Thanh tìm kiếm mobile ngay dưới logo --- */}
            <div className="header-row mobile-search-row" ref={searchRef}>
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

            {/* --- Hàng 2: Menu --- */}
            <div className={`header-row header-nav ${menuOpen ? "open" : ""}`}>
                <nav className="nav-center">
                    <ul className="nav-list">
                        {menuItems.map((m, i) => (
                            <li
                                key={i}
                                className="nav-item"
                                onMouseEnter={() => setActiveDropdown(i)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={m.path || "#"}
                                    onClick={() => {
                                        if (!m.children) setMenuOpen(false);
                                    }}
                                    className="nav-link"
                                >
                                    {m.label}
                                </Link>
                                {m.children && activeDropdown === i && (
                                    <ul className="dropdown">
                                        {m.children.map((s, k) => (
                                            <li key={k}>
                                                <Link to={s.path} onClick={() => setMenuOpen(false)}>
                                                    {s.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* --- Hàng 3: Search PC --- */}
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
