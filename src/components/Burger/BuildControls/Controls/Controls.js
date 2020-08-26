import React from 'react';
import style from './Controls.module.css';

const Controls = props => (
    <div className={style.Controls}>
        <div className={style.Label}>{props.label}</div>
        <button 
            className={style.Less} 
            onClick={props.remove} 
            disabled={props.disabled}>Remove</button>
        <button className={style.More} onClick={props.add}>Add</button>
    </div>

);

export default Controls;