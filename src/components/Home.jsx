import React from 'react'
import { useState } from 'react';
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { enhancedImageAPI } from "../utils/enhancedImageApi";

function Home() {

    const [uploadImage, setuploadImage] = useState(null);
    const [enchancedImage, setenchancedImage] = useState(null);
    const [loading, setloading] = useState(false);

    const UploadImageHandler = async (file) => {
        setuploadImage(URL.createObjectURL(file));
        setloading(true)

        try {
            const enhancedURL = await enhancedImageAPI(file);
            setenchancedImage(enhancedURL);
            setloading(false);
        } catch (error) {
            console.log(error);
            alert("come back later");
        }
     }
    return (
        <>

            <ImageUpload UploadImageHandler={UploadImageHandler} />
            <ImagePreview
                Loading={loading}
                uploaded={uploadImage}
                enchanced={enchancedImage?.image} />

        </>
    )
}

export default Home