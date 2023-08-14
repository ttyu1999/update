import React from 'react';
import { useContext } from 'react';
import styles from './Pagination.module.scss';
import { ProductListContext, SearchContext } from '../../../store/product-context';

const Pagination = () => {
    const ctx = useContext(ProductListContext);
    const searchCtx = useContext(SearchContext);

    const totalPages = Math.ceil(ctx.getProductLength.length / ctx.onePageItem);

    const handlePageChange = (page) => {
        searchCtx.setCurrentPage(page);

        const element = document.getElementById('product__content');

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    let hasPage;

    if (ctx.getProductLength.length > ctx.onePageItem) {
        hasPage = (
            <ul className={styles.pagination}>
                {
                    Array.from({ length: totalPages }, (_, index) => {
                        return (
                            <li key={index} className={searchCtx.currentPage === index + 1 ? 'currentpage' : ''} onClick={() => handlePageChange(index + 1)}>
                                <a>
                                    <span>{index + 1}</span>
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }

    return hasPage;
}

export default React.memo(Pagination);