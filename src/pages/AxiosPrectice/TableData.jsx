import React, { useState, useEffect } from 'react'
import axios from 'axios'


const TableData = () => {
    const [tableData, setTableData] = useState([]);


    const getTableData = async () => {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        console.log(result.data);
        setTableData(result.data);
    }
    useEffect(() => {
        getTableData();
    }, []);

    return (
        <div>
            <div className="container py-4">
                <div className="row">
                    <h5 className='text-center pb-3 bold' style={{ textTransform: 'capitalize' }}>Table data intergation usin Axios</h5>
                    <table className='table table-striped border shadow table-hover'>
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((item,index) => {
                                const { id, name, email, phone,address } = item;
                                return <>
                                 <tr>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{phone}</td>
                                    <td>{address.city}</td>
                                </tr>
                                </>
                                // return <>
                                //     <tr>
                                //         <td>{id}</td>
                                //     </tr>
                                // </>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TableData