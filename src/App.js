import './App.css';
import Payment from './components/Payment';
import Transfer from './components/Transfer';
import CreditCard from './components/CreditCard';
import PayPal from './components/PayPal'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from "axios"


function App() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [payway, setPayway] = useState([]);
  
  // const [id, setId] = useState(0);

  useEffect(() => {

    axios.get("http://localhost:5000/data").then(res => {
      setName(res.data.name)
      setPrice(res.data.price)
      setPayway(res.data.payway)
      // setId(res.data.id)
    })
    //data取得後端接收之post的body
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Payment name={name} price={price} payway={payway} />
          </Route>

          <Route path="/transfer">
            <Transfer price={price}/>
          </Route>

          <Route path="/creditcard">
            <CreditCard price={price}/>
          </Route>

          <Route path="/paypal">
            <PayPal price={price}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
