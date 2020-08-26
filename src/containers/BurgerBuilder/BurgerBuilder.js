import React, { Component } from 'react';
import Ox from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import Order from '../../components/Burger/Order/Order'

const PRICES = {
    lettuce: .5,
    cheese: .5,
    meat: 1.75,
    bacon: 1.25
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            lettuce: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        ordering: false
    };

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
            .map(iKey => {
                return ingredients[iKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({purchasable: sum > 0})
    }

    addIngHandler = type => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const priceAddition = PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    };

    remIngHandler = type => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const priceDeduction = PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    };

    orderHandler = () => {
        this.setState({ordering: true})
    };

    orderCancelHandler = () => {
        this.setState({ordering: false})
    };

    orderContinueHandler = () => {
        alert("Continued....sorta")
    }

    render () {
        const disabled = {
            ...this.state.ingredients
        };
        for (let key in disabled){
            disabled[key] = disabled[key] <= 0
        }
        return (
            <Ox>
                <Modal show={this.state.ordering} modalClosed={this.orderCancelHandler}>
                    <Order 
                        ingredients={this.state.ingredients}
                        orderCanceled={this.orderCancelHandler}
                        orderContinued={this.orderContinueHandler}
                        price={this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <div>
                    <BuildControls 
                        ingredientAdded={this.addIngHandler}
                        ingredientRemoved={this.remIngHandler}
                        disabled={disabled} 
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        ordered={this.orderHandler} />
                </div>
            </Ox>
        );
    }
};

export default BurgerBuilder;