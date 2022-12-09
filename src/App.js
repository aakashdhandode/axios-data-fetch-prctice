import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/Header/Header'
import About from './pages/About/About'
import AxioxData from './pages/AxiosPrectice/AxioxData'
import FetchData from './pages/AxiosPrectice/FetchData'
import ImgDataFetch from './pages/AxiosPrectice/ImgDataFetch'
import ProductDetails from './pages/AxiosPrectice/ProductDetails'
import ProductsList from './pages/AxiosPrectice/ProductsList'
import TableData from './pages/AxiosPrectice/TableData'

import FetchMethod from './pages/FetchTableData/FetchMethod'
import Home from './pages/Home/Home'
import InfiniteScroll from './pages/Infinitescroll/InfiniteScroll'

const App = () => {
  return (
    <div>
        
        <BrowserRouter>
          <Header />
           <Routes>
             <Route  path='/' element= {<Home />} />
             <Route  path='about' element= {<About />} />
             <Route  path='InfiniteScroll' element= {<InfiniteScroll />} />
             <Route  path='FetchMethod' element= {<FetchMethod />} />
             <Route  path='AxioxFetch' element= {<FetchData />} />
             <Route  path='FetchDataTwo' element= {<AxioxData />} />
             <Route  path='ImageData' element= {<ImgDataFetch />} />
             <Route path='TableData' element= {<TableData />} />
             <Route path="ProductsList" element={<ProductsList />} />
             <Route path="ProductDetail" element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App