import { useState } from "react";
import React from 'react';
import Axios from 'axios';

function BankSave() {
    const [bank, setBank] = useState({ id: "", name: "",branch:"",address:"" })
    const updateBank = e => {
        const fieldName = e.target.name
        setBank(existingValues => ({
          // Retain the existing values
          ...existingValues,
          // update the current field
          [fieldName]: e.target.value,
        }))
      }
     const saveBank=(e)=>{
        e.preventDefault()
        console.log(bank)
        Axios.post("http://localhost:8080/bank/savebank",bank)
        .then(response=>{
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
        }  
  return (
    <div>
   Bank ID: <input type="text" name="id" id="id" value={bank.id} onChange={updateBank}/><br/><br/>
   Bank Name: <input type="text" name="name" id="name" value={bank.name} onChange={updateBank}/><br/><br/>
   Bank Branch: <input type="text" name="branch" id="branch" value={bank.branch} onChange={updateBank}/><br/><br/> 
   Bank Address: <input type="text" name="address" id="address" value={bank.address} onChange={updateBank}/>    
    <div>
      Name is: {bank.id} {bank.name}  {bank.branch}  {bank.address}
    </div>
    <button onClick={saveBank}>Save Bank</button>
  </div>
  )
}



export default BankSave
