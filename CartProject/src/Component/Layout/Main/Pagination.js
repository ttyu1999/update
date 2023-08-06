import './Pagination.css';

const Pagination = () => {
    return (
        <ul className="pagination">
            <li>
                <a>
                    <span className="material-symbols-outlined">chevron_left</span>
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
                    <span className="material-symbols-outlined">chevron_right</span>
                </a>
            </li>
        </ul>
    );
}

export default Pagination;