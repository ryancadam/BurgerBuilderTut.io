import React from 'react';
import style from './BuildControls.module.css';
import Controls from './Controls/Controls';

const bControls = [
    { label: 'Lettuce', type: 'lettuce'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];

const buildControls = props => (
    <div className={style.BuildControls}>
        <p>Price: <strong>${props.price.toFixed(2)}</strong></p>
        {bControls.map(ctrl => (
            <Controls 
                key={ctrl.label} 
                label={ctrl.label}
                add={() => props.ingredientAdded(ctrl.type)}
                remove={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ) )}
        <button 
            className={style.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered} >PLACE ORDER</button>
    </div>

);

export default buildControls;