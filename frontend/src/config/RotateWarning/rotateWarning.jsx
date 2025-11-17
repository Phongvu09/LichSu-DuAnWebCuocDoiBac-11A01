import React, { useState, useEffect } from "react";
import "./rotateWarning.css";

export default function RotateWarning({ children }) {
    const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        function onResize() {
            setIsPortrait(window.innerHeight > window.innerWidth);
            setIsMobile(window.innerWidth < 768);
        }

        window.addEventListener("resize", onResize);
        window.addEventListener("orientationchange", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
            window.removeEventListener("orientationchange", onResize);
        };
    }, []);

    if (isMobile && isPortrait) {
        return (
            <div className="rotate-screen-warning">
                Vui lòng xoay điện thoại sang chế độ ngang để xem nội dung.
            </div>
        );
    }

    return <>{children}</>;
}
