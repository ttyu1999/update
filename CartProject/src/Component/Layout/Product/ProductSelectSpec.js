import React, { useMemo } from 'react';
import { useCallback, useContext, useState } from 'react';
import ProductSpecList from './ProductSpecList';
import FormSelect from '../../UI/FormSelect';
import { ProductContext } from '../../../store/product-context';

const ProductSelectSpec = (props) => {
    const { productSpecs, productId } = props;

    const [ filterList, setFilterList ] = useState(false);
    const [ selectDefault, setSelectDefault ] = useState('請選擇規格');

    const ctx = useContext(ProductContext);

    const selected = (specName) => {
        setSelectDefault(specName);
        setFilterList(false);
        ctx.specSelected();
    }
    console.log('spec');
    return (
        <FormSelect
            selectDefault={selectDefault}
            filterList={filterList}
            setFilterList={setFilterList}
        >
            {
                productSpecs.map((productSpec, index) => {
                    index = index + 1;
                    const itemIndex = index > 10 || '0' + index;
                    return (
                        <ProductSpecList
                            key={productId + itemIndex}
                            productSpec={productSpec}
                            onSelected={() => selected(productSpec.specName)}
                        />
                    );
                })
            }
        </FormSelect>
    );
}

export default React.memo(ProductSelectSpec);