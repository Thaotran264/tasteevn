import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = (event) => {
            if ( window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    // This function will scroll the window to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // for smoothly scrolling
        });
    };

    return (
        <>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    aria-label="Scroll To Top"
                    className="position-fixed bottom-0 end-0"
                >
                    <IoIosArrowUp />
                </button>
            )}
        </>
    );
}