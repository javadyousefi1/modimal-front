import React from 'react';

interface ImageProps {
  image: string;
}

const Image: React.FC<ImageProps> = ({ image }) => {
const baseUrl = import.meta.env.VITE_APP_BASE_URL

return (
    <img src={`${baseUrl}${image}`} alt={`Image: ${image}`} className='w-[392px] h-[498px]'/>
  );
};

export default Image;
