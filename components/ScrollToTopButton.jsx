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
                    className="position-fixed border-0 rounded-5 text-light "
                    style={{backgroundColor: '#ccc', bottom: '5vh', right: '6vw',
                width: 40, height: 40}}
                >
                    <IoIosArrowUp />
                </button>
            )}
        </>
    );
}