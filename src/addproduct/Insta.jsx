import React, { useState } from 'react';
import { storage, db } from '../firebase';
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref as dbRef, push, set } from "firebase/database";
import './all.css';
import Header from '../routes/Header';

function Insta() {
  const [productName, setProductName] = useState('');
  const [subscribers, setSubscriber] = useState('');
  const [videos, setVideos] = useState('');
  const [revenue, setReveneu] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("https://via.placeholder.com/150"); // Default image

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0])); // Display chosen image immediately
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting product");

    if (image) {
      console.log("Uploading file:", image.name, image.size, image.type);
      const imageRef = storageRef(storage, `products/${Date.now()}_${image.name}`);
      await uploadBytes(imageRef, image);
      const uploadedImageUrl = await getDownloadURL(imageRef);

      // Update the image URL in the database
      const product = {
        accountName: productName,
        followers: subscribers,
        numOfPosts: videos,
        revenue: revenue,
        price: parseFloat(price),
        imageUrl: uploadedImageUrl
      };

      try {
        const newProductRef = push(dbRef(db, 'instaProducts'));
        await set(newProductRef, product);
        alert("Product uploaded successfully! Alhumdulillah");
      } catch (error) {
        console.error("Error adding product: ", error);
      }
    }
  };

  return (
    <div> 
      <div><Header /></div>
    <div className='you'>
     
      <div className='lyou'>
        <img className='youimg' src={imageUrl} alt="Uploaded Product" /> {/* Display chosen image */}
      </div>
      <div className='ryou'>
        <h1>Sell your Insta Account</h1>
        <h5>Instant access to global buyers</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Account Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            className='cname'
          />
          <br />
          <input
            type="text"
            placeholder="followers"
            value={subscribers}
            onChange={(e) => setSubscriber(e.target.value)}
            required
            className='subscribers'
          />
          <input
            type="text"
            placeholder="num of posts"
            value={videos}
            onChange={(e) => setVideos(e.target.value)}
            required
            className='videos'
          />
          <br />
          <input
            type="text"
            placeholder="revenue generated"
            value={revenue}
            onChange={(e) => setReveneu(e.target.value)}
            required
            className='videos'
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className='videos'
          />
          <br />
          <input className='file' type="file" onChange={handleImageChange} required />
          <br />
          <button style={{width: "300px"}} type="submit">Upload Product</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Insta;
