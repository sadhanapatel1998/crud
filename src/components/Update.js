import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

 const Update=()=> {
    const [id,setId]=useState(0);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");

    const navigate= useNavigate();
    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setMobile(localStorage.getItem("mobile"));
    },[]);

    const handleUpdate= (e) =>{
        e.preventDefault();
        console.log("Id...",id)
        axios.put(
          `https://6495e02cb08e17c91792ce4d.mockapi.io/crud/${id}`,{
          name:name,
          email:email,
          mobile:mobile,
        })
          .then(()=> {
           navigate("/showlist")
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
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Update Info</h3>

            <form className="px-md-2">

            <div className="form-outline mb-4">
                <input type="text" 
                className="form-control" 
                value={name}
                onChange={(e)=>setName(e.target.value)} 
                placeholder='Name'/>
              </div>

             <div className="form-outline mb-4">
                <input type="email" 
                className="form-control"
                value={email}
                onChange={(e)=>setEmail(e.target.value)} 
                placeholder='Email'/>
              </div>

              <div className="form-outline mb-4">
                <input type="number" 
                className="form-control"
                value={mobile}
                onChange={(e)=>setMobile(e.target.value)} 
                placeholder='Mobile'/>
              </div>
              
            <button type="submit"
               onClick={handleUpdate}  
               className="btn btn-success btn-lg mb-1">Update</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Update