import { HiOutlineSearch } from "react-icons/hi";

const HeaderSearch = () => {
    return (
        <div className="search">
            <label className="search_btn" htmlFor="search_toggle">
                <span className="icon"><HiOutlineSearch /></span>
            </label>
        </div>
    );
}

export default HeaderSearch;