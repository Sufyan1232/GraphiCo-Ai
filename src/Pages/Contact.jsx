import Header from '../routes/Header'
import "./ContactJob.css";
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { ref as dbRef, onValue } from "firebase/database";

function Contact() {
  console.log("SalalhuAlehiWasalim");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsRef = dbRef(db, 'jobs');

    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productsArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setProducts(productsArray);
      }
    });
  }, []);



  return (
    <div>
      <div> <Header /></div>
      <div className='mainjob'>
          <div>
            <h1 className='jobh1'>The #1 Job Board for Graphic Design Jobs</h1>
            <div className='jobh5'>GraphiCo is the heart of the design community and the best resource to discover and connect with designers and jobs worldwide.</div>
            <div><a href='/postjob'><button className='jobbutton'>+ Post a Job</button></a></div>
            <div className='alljobs'>
          {products.map(product => (
            <div key={product.id} className="myJobs">
              <img src={product.imageUrl} alt={product.role} style={{width: "70px", height: "70px"}} />
              <div className='cr'>
                <div><p style={{fontSize: "15px", paddingLeft: "2px"}}>{product.company}</p></div>
                <div><p style={{width: "250px", color: "black", fontSize: "20px", fontWeight: "bold"}}>{product.role}</p></div>
              </div> 
              <div className='cr'>
                <div><p style={{fontSize: "15px", paddingLeft: "2px"}}>{product.country}</p></div>
                <div><p style={{width: "500px", color: "black", fontSize: "15px", fontWeight: "bold"}}>Copy Link: {product.link}</p></div>
              </div> 
              <div><p style={{fontSize: "20px", fontWeight: "bold", color: "#5400b3", marginTop: "20px"}}>Pay: ${product.pay}</p></div>
              <div><button style={{width: "150px", marginTop: "10px"}}>Apply Now</button></div>
        
              
            </div>
          ))}
          </div>
          </div>        
      </div>
     </div>
  )
}

export default Contact


