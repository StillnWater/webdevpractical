import React, { useState } from 'react';

const Name = () => {
  
  const [name, setName] = useState('');

  
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      
      <input type="text" placeholder="Enter your name..." value={name} onChange={handleChange}/>

      <div>
        <strong>Your name is:</strong> {name || '...'}
      </div>
    </div>
  );
};

export default Name;