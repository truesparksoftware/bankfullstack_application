import React, { useState } from 'react';
import axios from "axios";

function AllBanks() {
    const [bank, setBank] = useState({ id: "", name: "",branch:"",address:"" })
    const getAllBanks=(e)=>{
            axios.get("http://localhost:8080/bank/all")
              .then(respone => {
                setBank({
                  bank: respone.data
                });
                console.log(respone.data);
              })
              .catch(error => {
                console.log(error);
                setBank({
                    errorMsg: "Error while retriving data"
                });
              });
          }
    
  return (
    <div>
         List of posts
            {bank.length ? 
            bank.map(post => <div key={post.id}> {post.title}</div>)
              : null}
      <button onClick={getAllBanks}>Get All Banks</button>
    </div>
  )
}

export default AllBanks
