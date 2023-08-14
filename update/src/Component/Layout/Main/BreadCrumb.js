import { useContext, useEffect } from 'react';
import styles from './BreadCrumb.module.scss';
import { ProductListContext, SearchContext } from '../../../store/product-context';
import useFindMenuItem from '../../../hook/useFindMenuItem';

const BreadCrumb = () => {
    const ctx = useContext(ProductListContext);
    const searchCtx = useContext(SearchContext);
    
    const { categoriesClick } = useFindMenuItem();

    const breadCrumbs = searchCtx.searchInputValue
    ? [{ id: '000000', name: '全館商品' }]
    : ctx.breadCrumbArray;

    return (
        <ol className={styles.breadcrumb}>
            <li>
                <button type="button">首頁</button>
            </li>
            {
                breadCrumbs.map((breadCrumb) => {
                    return (
                        <li key={breadCrumb.id}>
                            <button type="button" onClick={() => categoriesClick(breadCrumb.id)}>{breadCrumb.name}</button>
                        </li>
                    );
                })
            }
        </ol>
    )
}
export default BreadCrumb;