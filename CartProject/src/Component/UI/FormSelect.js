import React from 'react';
import { useRef, useEffect } from 'react';
import classes from './FormSelect.module.css';

const FormSelect = (props) => {
    const { filterList, setFilterList } = props;

    const filterListRef = useRef(null); // 建立一個ref

    const showListHandler = () => {
        setFilterList(!filterList);
    }

    const hideListHandler = (e) => {
        // 檢查點擊事件是否來自下拉列表之外的區域
        if (!filterListRef.current.contains(e.target)) {
            setFilterList(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', hideListHandler);

        return () => {
            document.removeEventListener('click', hideListHandler);
        };
    });

    const toggleList = `${classes.filter_list} ${filterList ? classes.hidden : ''}`;

    const toggleArrow = `material-symbols-outlined ${filterList ? classes.rotate : ''}`;

    return (
        <div className={classes.select}>
            <div className={classes.select_filter} onClick={showListHandler} ref={filterListRef}>
                <button className={classes.filter_btn} type="button">{props.selectDefault}</button>
                <span className={toggleArrow}>expand_more</span>
            </div>
            <ul className={toggleList}>
                {props.children}
            </ul>
        </div>
    );
}

export default React.memo(FormSelect);