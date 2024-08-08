import React from 'react';

const ImagePoster = ({ imageSrc = 'https://images.unsplash.com/photo-1624588483556-851e7726b9fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGZhc2hpb24lMjBtb2RlbCUyMGluJTIwcGFpcnN8ZW58MHx8MHx8fDA%3D' }) => {
  return (
    <div className='w-full h-full py-8'>
      <img 
        className='w-full h-full object-cover object-center' 
        src={imageSrc} 
        alt="Fashion Model" 
      />
    </div>
  );
}

export default ImagePoster;
