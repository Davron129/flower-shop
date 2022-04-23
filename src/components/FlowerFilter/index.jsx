import { useState } from 'react';
import Styles from './FlowerFilter.module.scss';
import { Box, Slider } from '@mui/material';


const FlowerFilter = () => {
    const [value, setValue] = useState([20, 37]);

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
                        <Box sx={{ width: 300 }}>
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                
                                // getAriaValueText={valuetext}
                            />
                        </Box>
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