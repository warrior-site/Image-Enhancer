import React from 'react'

function ImageUpload(props) {

    const ShowImageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            props.UploadImageHandler(file);
        }
    };

    return (
        <div className='bg-white shadow-lg max-w-2xl rounded-2xl w-full p-6'>
            <label htmlFor='inputfile' className='block p-6 hover:border-blue-400 text-center cursor-pointer border-dashed border-2 border-gray-300 w-full rounded-lg'>
                <input type='file' id='inputfile' className='hidden' onChange={ShowImageHandler} />
                <p>Click and drag your image</p>
            </label>
        </div>
    );
}

export default ImageUpload;
