import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';
import Reciept from './Reciept';

const Bank = () => {
     const dispatch = useDispatch();
     const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)
     return (
          <div>
               <div>
                    <h5>Deposit/Withdraw Money</h5>
                    <button className="btn btn-primary mx-2" onClick={() => { withdrawMoney(100) }}>Withdraw Money</button>
                    Update Balance
                    <button className="btn btn-primary mx-2" onClick={() => { depositMoney(100) }}>Deposit Money</button>
               </div>
               <div>
                    <Reciept />
               </div>
          </div>
     )
}

export default Bank
