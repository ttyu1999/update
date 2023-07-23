import { useState, memo, useRef, useEffect } from 'react';
import ProductSpecList from './ProductSpecList';
import './ProductSelectSpec.css';

const ProductSelectSpec = memo((props) => {
    const { productSpecs, productId } = props;

    const [ specList, setSpecList ] = useState(false);
    const [ selectDefault, setSelectDefault ] = useState('請選擇規格');

    const specListRef = useRef(null); // 建立一個ref

    const showListHandler = () => {
        setSpecList(!specList);
    }

    const hideListHandler = (e) => {
        // 檢查點擊事件是否來自下拉列表之外的區域
        if (!specListRef.current.contains(e.target)) {
            setSpecList(false);
        }
    };

    useEffect(() => {
        // 加入點擊事件監聽器
        document.addEventListener('click', hideListHandler);

        // 在元件卸載時移除點擊事件監聽器
        return () => {
            document.removeEventListener('click', hideListHandler);
        };
    }, []);

    const toggleList = specList ? 'spec_list' : 'spec_list hidden';

    const toggleArrow = specList ? 'material-symbols-outlined rotate' : 'material-symbols-outlined';

    const selected = (e) => {
        setSelectDefault(e);
        setSpecList(false);
    }

    return (
        <div className="spec_select">
            <div className='select' onClick={showListHandler} ref={specListRef}>
                <button type="button">{selectDefault}</button>
                <span className={toggleArrow}>expand_more</span>
            </div>
            <ul className={toggleList}>
                {
                    productSpecs.map((productSpec, index) => {
                        index = index + 1;
                        const itemIndex = index > 10 || '0' + index;
                        return (
                            <ProductSpecList
                                key={productId + itemIndex}
                                productSpec={productSpec}
                                onSelected={selected}
                                onBuyQuantityHandler={props.onBuyQuantityHandler}
                                onResetQuantity={props.onResetQuantity}
                            />
                        );
                    })
                }
            </ul>
        </div>
    );
});

export default ProductSelectSpec;