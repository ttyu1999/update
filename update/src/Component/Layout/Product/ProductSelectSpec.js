import React, { useMemo } from 'react';
import { useCallback, useContext, useState } from 'react';
import ProductSpecList from './ProductSpecList';
import FormSelect from '../../UI/FormSelect';
import { SelectedProductContext } from '../../../store/product-context';

const ProductSelectSpec = (props) => {
    const { productSpecs } = props;

    const [ filterList, setFilterList ] = useState(false);
    const [ selectDefault, setSelectDefault ] = useState('請選擇規格');

    const ctx = useContext(SelectedProductContext);

    const selected = useCallback((specName) => {
        setSelectDefault(specName);
        setFilterList(false);
        ctx.specSelected();
    }, [ctx]);

    return (
        <FormSelect
            selectDefault={selectDefault}
            filterList={filterList}
            setFilterList={setFilterList}
        >
            {
                productSpecs.map((productSpec) => {
                    return (
                        <ProductSpecList
                            key={productSpec.id}
                            productSpec={productSpec}
                            onSelected={() => selected(productSpec.specName)}
                        />
                    );
                })
            }
        </FormSelect>
    );
}

export default ProductSelectSpec;