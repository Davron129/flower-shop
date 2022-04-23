import Styles from './FlowerFilter.module.scss';

const FlowerFilter = () => {
    return (
        <section className={Styles.flowerFilter}>
            <div className={Styles.container}>
                <aside className={Styles.sideFilter}>
                    <div className={Styles.menu__wrapper}>
                        <div className={Styles.menu__name}>
                            <span>Categories</span>
                        </div>
                        <ul className={Styles.menu}>
                            <li className={`${Styles.item} ${Styles.active}`}>
                                <span className={Styles.item__name}>House Plants</span>
                                <span className={Styles.item__count}>(33)</span>
                            </li>
                            <li className={Styles.item}>
                                <span className={Styles.item__name}>House Plants</span>
                                <span className={Styles.item__count}>(33)</span>
                            </li>
                            <li className={Styles.item}>
                                <span className={Styles.item__name}>House Plants</span>
                                <span className={Styles.item__count}>(33)</span>
                            </li>
                            <li className={`${Styles.item} ${Styles.active}`}>
                                <span className={Styles.item__name}>House Plants</span>
                                <span className={Styles.item__count}>(33)</span>
                            </li>
                            <li className={Styles.item}>
                                <span className={Styles.item__name}>House Plants</span>
                                <span className={Styles.item__count}>(33)</span>
                            </li>
                            <li className={Styles.item}>
                                <span className={Styles.item__name}>House Plants</span>
                                <span className={Styles.item__count}>(33)</span>
                            </li>
                            <li className={`${Styles.item} ${Styles.active}`}>
                                <span className={Styles.item__name}>House Plants</span>
                                <span className={Styles.item__count}>(33)</span>
                            </li>
                            <li className={Styles.item}>
                                <span className={Styles.item__name}>House Plants</span>
                                <span className={Styles.item__count}>(33)</span>
                            </li>
                            <li className={Styles.item}>
                                <span className={Styles.item__name}>House Plants</span>
                                <span className={Styles.item__count}>(33)</span>
                            </li>
                        </ul>
                    </div>
                    <div className={Styles.menu__wrapper}>
                        <div className={Styles.menu__name}>
                            <span>Price Range</span>
                        </div>
                        <div className={Styles.priceRange}>
                            
                        </div>
                    </div>
                </aside>

                <div className={Styles.filter__result}>

                </div>
            </div>
        </section>
    )
}

export default FlowerFilter