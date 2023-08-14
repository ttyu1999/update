import { HiOutlineSearch } from "react-icons/hi";
import styles from "./HeaderSearch.module.scss";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { SearchContext } from "../../../store/product-context";

const HeaderSearch = () => {
  const [removeAnimation, setRemoveAnimation] = useState(false);
  const [inputBoxHide, setInputBoxHide] = useState(true);

  const searchCtx = useContext(SearchContext);

  const containerRef = useRef();
  const inputRef = useRef();

  const searchBoxHandler = () => {
    setInputBoxHide(false);
  };

  const submitHandler = () => {
    let inputValue = inputRef.current.value;
    searchCtx.setSearchInputValue(inputValue);
    searchCtx.setCurrentPage(1);

    const element = document.getElementById('product__content');

    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
  };

  const inputKeyDownHandler = (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        submitHandler();
      }
  }

  const hideSearchBoxHandler = useCallback(
    (e) => {
      // 檢查點擊事件是否來自下拉列表之外的區域
      if (!containerRef.current.contains(e.target)) {
        setRemoveAnimation(true);

        const timer = setTimeout(() => {
          setInputBoxHide(true);
          setRemoveAnimation(false);
        }, 350);

        return () => {
          clearTimeout(timer);
        };
      }
    },
    [setInputBoxHide]
  );

  useEffect(() => {
    document.addEventListener("click", hideSearchBoxHandler);

    return () => {
      document.removeEventListener("click", hideSearchBoxHandler);
    };
  }, [hideSearchBoxHandler]);

  const searchBox = !inputBoxHide && (
    <div className={`search__box ${removeAnimation ? "remove__box " : ""}`}>
      <input
        type="text"
        onKeyDown={inputKeyDownHandler}
        id="search__products"
        placeholder="搜尋..."
        ref={inputRef}
      />
      <button
        type="button"
        onClick={submitHandler}
        className={`icon ${removeAnimation ? "remove__icon" : ""}`}
      >
        <HiOutlineSearch />
      </button>
    </div>
  );

  return (
    <div
      className={styles.search}
      onClick={searchBoxHandler}
      ref={containerRef}
    >
      <form>
        {searchBox}
        <label
          htmlFor="search__products"
          className={!inputBoxHide ? "hidden" : ""}
        >
          <span className="icon">
            <HiOutlineSearch />
          </span>
        </label>
      </form>
    </div>
  );
};

export default HeaderSearch;
