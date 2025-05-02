import React from 'react';
import Loading from './Loading';

function ImagePreview(props) {
  return (
    <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>

      {/* Original image */}
      <div className='bg-white shadow-lg overflow-hidden rounded-2xl'>
        <h2 className='bg-gray-500 text-white font-semibold text-center p-4'>Original Image</h2>
        {props.loading ? (
          <Loading />
        ) : props.uploaded ? (
          <img src={props.uploaded} alt='' className='w-full h-full object-fit' />
        ) : (
          <div className='flex items-center justify-center text-center h-50'> no original image</div>
        )}
      </div>

      {/* Enhanced image */}
      <div className='bg-white shadow-lg overflow-hidden rounded-2xl'>
        <h2 className='bg-gray-500 text-white font-semibold text-center p-4'>Enhanced Image</h2>
        {props.Loading ? (
          <Loading />
        ) : props.enchanced ? (
          <img src={props.enchanced} alt='' className='w-full h-full object-cover' />
        ) : (
          <div className='flex items-center justify-center text-center h-50'> no enhanced image</div>
        )}
      </div>

    </div>
  );
}

export default ImagePreview;
