import { useState } from 'react';
import FormSelect from '../../UI/FormSelect';

const FILTER_DATA = [
    {'new_to_old': '上架時間：由新到舊'},
    {'old_to_new': '上架時間：由舊到新'},
    {'high_to_low': '價格：由高至低'},
    {'low_to_high': '價格：由低至高'}
];

const FilterProduct = () => {
    const [ filterList, setFilterList ] = useState(false);
    const [ selectDefault, setSelectDefault ] = useState('上架時間：由新到舊');

    const selectedHandler = (e) => {
        setSelectDefault(e.target.innerText);
    }

    return (
        <FormSelect
            selectDefault={selectDefault}
            filterList={filterList}
            setFilterList={setFilterList}
        >
            {
                FILTER_DATA.map(data => {
                    return (
                        <li key={Object.keys(data)} onClick={selectedHandler}>
                            {Object.values(data)}
                        </li>
                    );
                })
            }
        </FormSelect>
    );
}

export default FilterProduct;
