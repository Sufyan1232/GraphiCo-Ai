import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { ref as dbRef, onValue } from "firebase/database";
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 
import { Line } from 'react-chartjs-2';
import '../addproduct/all.css'; 
import cycle from './icons/cycle.gif';
import Header from '../routes/Header';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function WebProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsRef = dbRef(db, 'webProducts');

    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productsArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setProducts(productsArray);
      }

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    });
  }, []);

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Dummy Data',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: 'pink',
        borderColor: '#b3008f',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  if (loading) {
    return (
      <div className="loading-container">
        <img src={cycle} alt="Loading..." className="loading-gif" />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className='pmain'>
        <div className='psidebar'>
          <Calendar />
          <div className="chart-container">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
        <div className="product-list">
          <div style={{display: "flex", flexDirection: "1 column"}}>
            <div>      
              <h1 style={{ color:"#FFF"}}>Trending Websites</h1>
              <p style={{color: "#fff"}}>Recommended for you</p>
            </div>
            <div><a href='/website'><button style={{marginLeft:"370px", width: "200px"}}>Sell Your Website</button></a></div>
          </div>
          <div className='myproduct'>
          {products.map(product => (
            <div key={product.id} className="product-item">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <h3>{product.websiteName}</h3>
              <p>Link: {product.link}</p>
              <p>Num Of Blogs: {product.numOfBlog}</p>
              <p>Revenue: {product.revenue}</p>
              <p className="price">Price: ${product.price}</p>
              <button>Buy Now</button>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebProduct;

