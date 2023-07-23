import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="group">
                <div className="logo_info">
                    <a href="#">
                        <h2>
                            <img src="img/logo.png" alt="INNISFREE" />
                        </h2>
                    </a> 
                    <div className="icon">
                        <a href="#">
                            <i className="icofont-facebook"></i>
                        </a>
                        <a href="#">
                            <i className="icofont-instagram"></i>
                        </a>
                        <a href="#">
                            <i className="icofont-youtube-play"></i>
                        </a>
                        <a href="#">
                            <i className="icofont-line"></i>
                        </a>
                    </div>
                </div>
                <nav className="footer_menu">
                    <ul>
                        <li>
                            <ul>
                                <li>
                                    <a href="#"><h3>產品資訊</h3></a>
                                </li>
                                <li>
                                    <a href="#">熱銷推薦</a>
                                </li>
                                <li>
                                    <a href="#">新品上市</a>
                                </li>
                                <li>
                                    <a href="#">官網限定</a>
                                </li>
                                <li>
                                    <a href="#">現正優惠</a>
                                </li>
                                <li>
                                    <a href="#">產品系列</a>
                                </li>
                                <li>
                                    <a href="#">臉部保養</a>
                                </li>
                                <li>
                                    <a href="#">彩妝</a>
                                </li>
                                <li>
                                    <a href="#">身體髮品</a>
                                </li>
                                <li>
                                    <a href="#">香氛</a>
                                </li>
                                <li>
                                    <a href="#">美妝工具</a>
                                </li>
                                <li>
                                    <a href="#">男士保養</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <a href="#"><h3>優惠活動</h3></a>
                                </li>
                                <li>
                                    <a href="#">進行中的活動</a>
                                </li>
                                <li>
                                    <a href="#">活動結束</a>
                                </li>
                                <li>
                                    <a href="#">獲獎名單</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <a href="#"><h3>關於我們</h3></a>
                                </li>
                                <li>
                                    <a href="#">品牌故事</a>
                                </li>
                                <li>
                                    <a href="#">品牌歷程</a>
                                </li>
                                <li>
                                    <a href="#">原料故事</a>
                                </li>
                                <li>
                                    <a href="#">綠色森林運動</a>
                                </li>
                                <li>
                                    <a href="#">創新技術</a>
                                </li>
                                <li>
                                    <a href="#">空瓶回收</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <a href="#"><h3>會員專區</h3></a>
                                </li>
                                <li>
                                    <a href="#">購物指南</a>
                                </li>
                                <li>
                                    <a href="#">聯絡客服</a>
                                </li>
                                <li>
                                    <a href="#">門市資訊</a>
                                </li>
                                <li>
                                    <a href="#">公告</a>
                                </li>
                                <li>
                                    <a href="#">常見問題</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="copyright">
                <p>ⓒ 2023 作品集</p>
            </div>
    </footer>
    )
}

export default Footer;