import React, { useState, useEffect } from 'react'

const FetchMethod = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    let Url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(Url).then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))

  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <h4 className='text-center py-3'>Fetch Data Using Fetch Method (map,promis, aysnc,awit, arrydestructring)</h4>
          <table className="table border shadow table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">id</th>
                <th scope="col">title</th>
                <th scope="col">Descrition</th>
              </tr>
            </thead>
            <tbody>
              {Data.slice(0,10).map((item, index) => (
                <tr>
                  <th>{item.userId}</th>
                  <th>{item.id}</th>
                  <th>{item.title}</th>
                  <th>{item.body}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default FetchMethod
