import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import './Payment.css'

const Payment = (props) => {
//     const [name, setName] = useState("");
//     const [price, setPrice] = useState(0);
//     const [payway, setPayway] = useState([]);
    // const [id, setId] = useState(0);

    // useEffect(()=>{

    //     axios.get("http://localhost:5000/data").then(res=>{
    //         setName(res.data.name)
    //         setPrice(res.data.price) 
    //         setPayway(res.data.payway)
    //         // setId(res.data.id)
    //     })
        //data取得後端接收之post的body
    // }, [])

    // const paywayString = payway.toString(); 全部移往index.js

    return (
        <div>
            <h1>您好 {props.name}</h1>
            <h2>您的付款金額是 {props.price}</h2>
            <div className='payway'>
            <h2>選擇付款方式</h2>
            {props.payway.includes("PayPal") && <div className='btn'><Link className='link' to="/paypal">PayPal</Link></div>} 
            {props.payway.includes("creditCard") && <div className='btn'><Link className='link' to="/creditcard">銀行刷卡</Link></div>}
            {props.payway.includes("transfer") && <div className='btn'><Link className='link' to="/transfer">轉帳</Link></div>}
            </div>
        </div>
    )
}

export default Payment
