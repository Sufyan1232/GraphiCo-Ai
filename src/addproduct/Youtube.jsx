import React, { useState } from 'react';
import { storage, db } from '../firebase';
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref as dbRef, push, set } from "firebase/database";
import './all.css';
import Header from '../routes/Header';

function Youtube() {
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [country, setCountry] = useState('');
  const [link, setLink] = useState('');
  const [pay, setPay] = useState('');
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
        role: role,
        company: company,
        country: country,
        link: link,
        pay: parseFloat(pay),
        imageUrl: uploadedImageUrl
      };

      try {
        const newProductRef = push(dbRef(db, 'jobs'));
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
        <h1>Post a Job</h1>
        <h5>Instant access to creative Designers</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Job Position or Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            className='cname'
          />
          <br />
          <input
            type="text"
            placeholder="Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            className='subscribers'
          />
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            className='videos'
          />
          <br />
          <input
            type="text"
            placeholder="Job Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
            className='videos'
          />
          <input
            type="number"
            placeholder="Pay"
            value={pay}
            onChange={(e) => setPay(e.target.value)}
            required
            className='videos'
          />
          <br />
          <input className='file' type="file" onChange={handleImageChange} required />
          <br />
          <button style={{width: "300px"}} type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Youtube;
