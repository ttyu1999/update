import styles from './BreadCrumb.module.scss';

const BreadCrumb = () => {
    return (
        <ol className={styles.breadcrumb}>
            <li>
                <a href="index.html">首頁</a>
            </li>
            <li>
                <a>全館商品</a>
            </li>
            <li>
                <a>彩妝</a>
            </li>
            <li>
                <a>臉部彩妝</a>
            </li>
            <li>
                <a>底妝</a>
            </li>
        </ol>
    )
}
export default BreadCrumb;