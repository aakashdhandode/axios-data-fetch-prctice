// import axios from 'axios'
import axios from './BaseUrl'
import React, { useEffect, useState } from 'react'



const FetchData = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");

    // using promises
    //    useEffect(() => {
    //         axios.get(`https://jsonplaceholder.typicode.com/posts`)
    //         .then((res) => {setMyData(res.data);})
    //         .catch((error) => setIsError(error.message));
    //    }, []); 


     
    // using async await
    // const getDataApi = async () => {
    //     try {
    //         const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    //         setMyData(res.data)
    //     } catch (error) {
    //         setIsError(error.message);
    //     } 
    // }
    // useEffect(() => {
    //     getDataApi();
    // }, [])
 


    // using base url
    const getDataApi = async () => {
        try {
            const res = await axios.get("/posts")
            setMyData(res.data)
        } catch (error) {
            setIsError(error.message);
        } 
    }

    useEffect(() => {
        getDataApi();
    }, [])

    
    return (
        <>
            <div className="container">
                <div className="row">
                    <h5>Fetch data using Axios</h5>
                    {isError !== "" && <h2>{isError}</h2>} 
                    <div className='grid'>
                        {myData.map((post) => {
                            const { id, title, body } = post; // destructur
                            return <div className='card p-3' key={id}>
                                <h6>{title}</h6>
                                <p>{body}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FetchData