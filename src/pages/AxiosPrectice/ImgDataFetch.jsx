import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ImgDataFetch = () => {
    const [photos, setMyPhotos] = useState([]);
    const [isError, setIsError] = useState(['']);

    const getImageData = async () => {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
        setMyPhotos(result.data);

    }
    useEffect(() => {
        getImageData();
    }, []);

  return (
    <div>
        <div className="container">
            <div className="row">
                <h5>Image Data</h5>
                {photos.slice(0,5).map((items) => {
                    const {id, title, url} = items;
                    return <>
                        <div className="col-sm-3 py-2">
                            <img src={url} alt="" className='img-responsive w-100'/>
                            <h6>{title}</h6>
                        </div> 
                    </>
                })}
            </div>
        </div>
    </div>
  )
}

export default ImgDataFetch