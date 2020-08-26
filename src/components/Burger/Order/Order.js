import React from 'react';
import Ox from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button';

const order = props => {
    const summary = Object.keys(props.ingredients)
        .map(iKey => {
            return (
                <li key={iKey}>
                    <span style={{textTransform: 'capitalize'}}>{iKey}</span>: {props.ingredients[iKey]}
                </li>
            )
        })
    return (
        <Ox>
            <h3>Your Order</h3>
            <p>That's a tasty burger! Includes:</p>
        <ul>
            {summary}
        </ul>
        <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
        <p>Checkout?</p>
        <Button btnType="Danger" clicked={props.orderCanceled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.orderContinued}>CONTINUE</Button>
        </Ox>
    )
};

export default order;