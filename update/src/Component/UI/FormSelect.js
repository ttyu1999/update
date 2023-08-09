import React, { useCallback } from 'react';
import { useRef, useEffect } from 'react';
import { HiOutlineChevronDown } from "react-icons/hi";
import styles from './FormSelect.module.scss';

const FormSelect = (props) => {
    const { filterList, setFilterList } = props;

    const filterListRef = useRef();

    const showListHandler = useCallback(() => {
        setFilterList(!filterList);
    }, [filterList, setFilterList])

    const hideListHandler = useCallback((e) => {
        // 檢查點擊事件是否來自下拉列表之外的區域
        if (!filterListRef.current.contains(e.target)) {
            setFilterList(false);
        }
    }, [setFilterList]);

    useEffect(() => {
        document.addEventListener('click', hideListHandler);

        return () => {
            document.removeEventListener('click', hideListHandler);
        };
    });

    const toggleList = `filter_list ${!filterList ? "hidden" : ''}`;

    const toggleArrow = `icon ${filterList ? "rotate" : ''}`;

    return (
        <div className={`${styles.select} ${props.maxWidth ? styles.width : ''}`}>
            <div className="select_filter" onClick={showListHandler} ref={filterListRef}>
                <button className="filter_btn" type="button">{props.selectDefault}</button>
                <span className={toggleArrow}><HiOutlineChevronDown /></span>
            </div>
            <ul className={toggleList}>
                {props.children}
            </ul>
        </div>
    );
}

export default React.memo(FormSelect);