import { useState } from 'react';
import Styles from './FlowerFilter.module.scss';
import { Box, Slider } from '@mui/material';
import Header from './Header';
import Card from '../Card';
import Pagination from './Pagination';


const FlowerFilter = () => {
    const [value, setValue] = useState([39, 1230]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                            <Box sx={{ width: "calc(100% - 20px)" }}>
                                <Slider
                                    getAriaLabel={() => 'Temperature range'}
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    min={39}
                                    max={1500}
                                />
                            </Box>
                            <div className={Styles.price__amount}>
                                <span>Price: </span>
                                <span className={Styles.amount}> {`$${value[0]} - $${value[1]}`} </span>
                            </div>
                            <div className={Styles.filter__btn}>
                                <button>Filter</button>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.menu__wrapper}>
                        <div className={Styles.menu__name}>
                            <span>Size</span>
                        </div>
                        <ul className={Styles.menu}>
                            <li className={`${Styles.item} ${Styles.active}`}>
                                <span className={Styles.item__name}>Small</span>
                                <span className={Styles.item__count}>(119)</span>
                            </li>
                            <li className={Styles.item}>
                                <span className={Styles.item__name}>Medium</span>
                                <span className={Styles.item__count}>(86)</span>
                            </li>
                            <li className={Styles.item}>
                                <span className={Styles.item__name}>Large</span>
                                <span className={Styles.item__count}>(78)</span>
                            </li>
                        </ul>
                    </div>
                </aside>

                <div className={Styles.filter__result}>
                    <Header />
                    <div className={Styles.card__wrapper}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />    
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>

                    <Pagination pageCount={4} />
                </div>
            </div>
        </section>
    )
}

export default FlowerFilter