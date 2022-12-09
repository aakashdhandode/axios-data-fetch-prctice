import axios from 'axios'
import React, {useEffect, useState} from 'react'


const AxioxData = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState(" ");


    const getApiData = async () => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/post`);
            setMyData(res.data);

        } catch (error) {
            setIsError(error.message);
        }
    }
    

    useEffect(() => {
        getApiData();
    }, []);

  return (
    <div>
        <div className="container">
        <h2 className='text-center py-5'>data fetching api using axios</h2>
        {isError !== " " && <h2>{isError}</h2>}
            <div className="grid">
                {myData.map((item) =>{
                    const {id, title, body} = item // destructuring
                    return <div  key={id}>
                        <div className='card p-3'>
                            <h6 className='text-center'>{title}</h6>
                            <p>{body}</p>

                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default AxioxData