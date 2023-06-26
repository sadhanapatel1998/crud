import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Registration() {
  const[name,setName]=useState("name")
  const[email,setEmail]=useState("email")
    const[mobile,setMobile]=useState("mobile")
    
  const history =useNavigate();
 
 const header ={"Access-Control-Allow-Origin":"*"}

const submitData=()=>{
   console.log("clicked")
  axios.post('https://6495e02cb08e17c91792ce4d.mockapi.io/crud',{
   name:name,
   email:email,
   mobile:mobile,
   header
  })
  .then (()=>{
    history("/showlist")
  })
}

  return (
    <>
    <section className="h-100 h-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3">
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

            <form className="px-md-2">

            <div className="form-outline mb-4">
                <input type="text" 
                className="form-control" 
                onChange={(e)=>setName(e.target.value)} 
                placeholder='Name'required/>
              </div>

             <div className="form-outline mb-4">
                <input type="email" 
                className="form-control"
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Email' required/>
              </div>
              <div className="form-outline mb-4">
                <input type="number" 
                className="form-control"
                onChange={(e)=>setMobile(e.target.value)}
                placeholder='Mobile' required/>
              </div>
              <button type="button" value={"submit"} onClick={submitData} className="btn btn-success btn-lg mb-1">Submit</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section></>
  )
  }

export default Registration