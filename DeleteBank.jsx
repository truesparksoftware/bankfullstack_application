import React, { useState } from 'react';
import axios from "axios";

function DeleteBank() {
    let[id,setId]=useState(0);
  
  const deleteBank=()=> {
        axios.delete("http://localhost:8080/bank/deletebyid",{params: {id: id}})
          .then(respone => {
            console.log(respone.data);
          })
          .catch(error => {
            console.log(error);
            this.setState({
                errorMsg: "Error while retriving data"
            });
          });
      }

  return (
    <div>
        <input type='number' name='id' id='id' onChange={(e)=>setId(e.target.value)}></input>
      <button onClick={deleteBank}>Delete Bank</button>
    </div>
  )
}

export default DeleteBank
