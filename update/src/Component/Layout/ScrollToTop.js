import { HiUpload } from "react-icons/hi";
import styles from './ScrollToTop.module.scss';

const ScrollToTop = () => {

    const scrollToTop = () => {
        const body = document.body;

        body.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }

    return (
        <div className={styles.scroll__to__top} onClick={scrollToTop}>
            <span className="icon">
                <HiUpload />
            </span>
        </div>
    );
}

export default ScrollToTop;