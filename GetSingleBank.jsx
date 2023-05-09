import React, { useState } from 'react';
import axios from "axios";

function GetSingleBank() {
    let[id,setId]=useState(0);
    const [bank, setBank] = useState({ id: "", name: "",branch:"",address:""})
  
    const getBank=()=> {
          axios.get(`http://localhost:8080/bank/getbyid/${id}`)
          .then(respone => {
            setBank({
              bank: respone.data
            });
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
          {bank.length ? bank.map(post => <div key={post.id}> {post.title}</div>): null}
        <button onClick={getBank}>GetBank Details</button>
      </div>
    )
}

export default GetSingleBank
