import {useEffect, useState} from "react";
import toTop from "../../assests/images/arrow.png";
import "./ScrollToTop.scss"

export function ScrollToTop() {

    const [toTopBtn, setToTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setToTopBtn(true);
            } else {
                setToTopBtn(false)
            }
        })
    }, []);

    const scrollToTheTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    return (
        <div>
            { toTopBtn ? <img onClick={scrollToTheTop} className={'back-to-top-img'} src={toTop} alt="toTheTopArrow"/> :
            null }
        </div>
    )
};