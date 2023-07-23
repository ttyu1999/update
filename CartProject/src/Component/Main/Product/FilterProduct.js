import './FilterProduct.css';

const FilterProduct = () => {
    return (
        <form className="filter_product" id="filter_product">
            <select>
                <option value="產品由新到舊">上架時間：由新到舊</option>
                <option value="產品由舊到新">上架時間：產品由舊到新</option>
                <option value="價格由高至低">價格：由高至低</option>
                <option value="價格由低至高">價格：由低至高</option>
            </select>
        </form>
    );
}

export default FilterProduct;