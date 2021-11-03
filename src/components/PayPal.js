import React from 'react'
import ReactDOM from "react-dom"
import './PayPal.css'

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const PayPal = (props) => {

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: props.price,
                    },
                },
            ],
        });
    }

    const onApprove = (data, actions) => {
        console.log(data);
        return actions.order.capture();
    }

    return (
        <div className="app">
            <div className="wrapper">
                <PayPalButton
                    createOrder={(data, actions) => createOrder(data, actions)}
                    onApprove={(data, actions) => onApprove(data, actions)}
                />
                {/* 官網提供的按鈕 刪除了=>之.this*/}
            </div>
        </div>
    );
}

export default PayPal