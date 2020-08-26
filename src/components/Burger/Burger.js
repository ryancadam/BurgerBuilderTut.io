import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = props => {
    let arrayIngredients = Object.keys(props.ingredients).map(iKey => {
        return [...Array(props.ingredients[iKey])].map((_, i) => {
            return <BurgerIngredients key={iKey + i} type={iKey} />
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (arrayIngredients.length === 0){
        arrayIngredients = <p>Add ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="breadTop" />
            {arrayIngredients}
            <BurgerIngredients type="breadBottom" />
        </div>
    );
};

export default burger;