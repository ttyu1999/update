import styles from './Pagination.module.scss';
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";

const Pagination = () => {
    return (
        <ul className={styles.pagination}>
            <li>
                <a>
                    <span className="icon"><HiOutlineChevronLeft /></span>
                </a>
            </li>
            <li className="currentpage">
                <a>
                    <span>1</span>
                </a>
            </li>
            <li>
                <a>
                    <span>2</span>
                </a>
            </li>
            <li>
                <a>
                    <span>3</span>
                </a>
            </li>
            <li>
                <a>
                    <span>4</span>
                </a>
            </li>
            <li>
                <a>
                    <span className="icon"><HiOutlineChevronRight /></span>
                </a>
            </li>
        </ul>
    );
}

export default Pagination;