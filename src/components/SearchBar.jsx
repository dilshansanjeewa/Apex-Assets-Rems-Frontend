import { useEffect, useState } from 'react';
import './css/SearchBar.css'

function SearchBar() {
    const [isActive, setIsActive] = useState(false);
    const [displayText, setDisplayText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const words = ["Land", "House", "Apartment", "Annex"];
    const typingSpeed = isDeleting ? 50 : 150;

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[wordIndex];
            if (!isDeleting) {
                setDisplayText(currentWord.substring(0, displayText.length + 1));
                if (displayText === currentWord) {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                setDisplayText(currentWord.substring(0, displayText.length - 1));
                if (displayText === "") {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, wordIndex]);

    return (
        <>
            {/* <div className="sticky-search-wrapper"> */}
            <div className="container search-wrapper">
                <div className={`search-container ${isActive ? 'active' : 'animating-border'}`}>
                    <div className="search-inner">
                        <span className="static-text">I am looking for</span>
                        <div className="input-box">
                            <input
                                type="text"
                                onFocus={() => setIsActive(true)}
                                onBlur={(e) => {
                                    if (e.target.value === "") setIsActive(false);
                                }}
                                placeholder={!isActive ? displayText : ""}
                                className="main-input"
                            />
                            {!isActive && <span className="typing-cursor">|</span>}
                        </div>
                        <button className="search-btn">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default SearchBar;