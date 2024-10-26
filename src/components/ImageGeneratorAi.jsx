import React, { useState } from 'react';
import axios from 'axios';
import "./Ai.css";
import AiImages from './AiImages';


const ImageGeneratorAi = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateImage = async () => {
    setLoading(true);
    setError('');
    setImageUrl(''); // Clear previous image
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/images/generations', // Replace with the correct endpoint if needed
        {
          model: "dall-e-3",
          prompt: prompt, // Use the user's prompt
          n: 1,
          size: "1024x1024",
        },
        {
          headers: {
            'Authorization': ``, // Replace with your actual API key
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data && response.data.data && response.data.data[0] && response.data.data[0].url) {
        setImageUrl(response.data.data[0].url);
      } else {
        setError('Image generation failed. Invalid response from API.');
      }
    } catch (error) {
      console.error('Error generating image:', error);
      setError('Image generation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    if (prompt.trim()) {
      generateImage();
    } else {
      setError('Prompt cannot be empty.');
    }
  };

  return (
    <div style={{backgroundColor: "black"}}>
    <div className='aiContainer'>
      <h1 className='head'>AI Image Generator</h1>
      <input
        type="text"
        placeholder="Enter a prompt for image generation"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: '300px', padding: '10px', marginBottom: '20px' }}
      />
      <br />
      <button style={{backgroundColor: "#8800ff"}} onClick={handleSubmit} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Image'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {imageUrl && <div><img src={imageUrl} alt="Generated" style={{ marginTop: '20px', width: '1024px', height: '1024px' }} /></div>}

    

    </div>
    <div style={{display: "flex", justifyContent: "center"}}>
        <AiImages />
      </div>
    </div>
  );
};

export default ImageGeneratorAi;
