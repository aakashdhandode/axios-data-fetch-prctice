import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


const ProductsList = () => {
    const [productList, setProductList] = useState([]);
    const [isError, setIsError] = useState("")

     
    const getProductData = async () => {
      try {
        const result = await axios.get(`https://fakestoreapi.com/products`);
        console.log(result.data);
        setProductList(result.data);
      } catch (error) {
        alert(error)
        setIsError(error.message);
      }
    }

    useEffect(() => {
        getProductData();
    }, []);

    return (
        <div>
            <div className="container">
                <h5 className='text-center pt-4'>Product Lists</h5>
                {isError !== " " && <h2>{isError}</h2>}
                <div className="row">
                    {/* <div className="col-sm-3">
                        <img src='' alt="" className='img-responsive'/>
                        <h6>Product Title</h6>
                    </div> */}  
                    {productList.map((items) => {
                        const {id, image, title} = items
                        return <>
                            <div className="col-sm-2 mb-4">
                               <Link to='/Details'>
                               <div className='card card-body'>
                                  <img src={image} alt=""  className='img-fluid' style={{height: 150}}/>
                               </div>
                               <p>{title}</p>
                               </Link>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductsList