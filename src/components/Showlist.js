import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';



function Showlist() {
const [data, setData]=useState([]);

function getData(){ 
axios
.get(
  `http://6495e02cb08e17c91792ce4d.mockapi.io/crud`
  )
  .then((res)=> {
   console.log(res.data);
    setData(res.data)
  })

}

function handleDelete(id){
  axios.delete(
  `http://6495e02cb08e17c91792ce4d.mockapi.io/crud/${id}`
  ).then(()=> {
   getData();
  });

}
const setDataToLocal=(id,name,email,mobile)=>{
  localStorage.setItem("id",id)
  localStorage.setItem("name",name)
  localStorage.setItem("email",email)
  localStorage.setItem("mobile",mobile)

}
useEffect (()=>{
  getData();
},[]);

  return (
    <>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
      <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th colSpan="2" scope="colgroup" style={{textAlign:"center"}}>Action</th>
    </tr>
  </thead>
  {data.map((eachdata) =>{
  return (
    <>
   <tbody>
   <tr>
    <th scope="row">{eachdata.id}</th>
     <td>{eachdata.name}</td>
     <td>{eachdata.email}</td>
     <td>{eachdata.mobile}</td>
     <td>
     <Link to="/update">
      <button className="btn btn-success" type="submit" 
      onClick={()=>setDataToLocal(
        eachdata.id,
        eachdata.name,
        eachdata.email,
        eachdata.mobile
        )}
      >Edit</button>
      </Link>
      </td>
     <td>
      <button className="btn btn-danger" 
      onClick={()=>handleDelete(eachdata.id)} type="submit">Delete</button>
      </td>
   </tr> 
 </tbody>
 </>
  )
  })
  }
  </table>
</div>
</div>
</div>
    </>
  )
}

export default Showlist