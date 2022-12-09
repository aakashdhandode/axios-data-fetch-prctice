import axios from 'axios'
import React, { useState, useEffect } from 'react'
import InfiniteScrolll from 'react-infinite-scroll-component';

const InfiniteScroll = () => {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  useEffect(() => {
    // getPost();
    setTimeout(() => {
      getPost();
    }, 700);
  }, []);

  const getPost = async () => {
    try {
      await axios.get('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=12').then((res) => {
        if (res !== null) {
          setPost(res.data)
        }
      })

    } catch (error) {
      console.log(error)
    }
  }
  const fetchData = async () => {
  setTimeout(async () => {
    try {
      await axios.get('https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=12').then((res) => {
        if (res !== null) {
          setPost([...post, ...res.data]);
          if(res.data.length === 0 && res.data.length<10){
            sethasMore(false);
          }
        }
        setPage(page+1);
      })

    } catch (error) {
      console.log(error)
    }
  }, 700);
  }
  console.log(post)



  return (
    <div>
      <div className="container">
        <div className="row">
          <h4 className='text-center py-4'>fetch data using axios (infinite data fetching)</h4>
          <InfiniteScrolll
            dataLength={post.length} //This is important field to render the next data
            next={fetchData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }

          >
          </InfiniteScrolll>



          {
            post.length !== 0 && post.map((item, index) => {
              return (
                <>
                  {/* <h5>{item.title}</h5> */}
                  <div className="col-sm-4 py-3">
                    <div className="card">
                      <div className="card-header">
                        <h6>{index + 1}  {item.title}</h6>
                      </div>
                      <div className="card-body">
                        <p>{item.body}</p>
                      </div>
                    </div>

                  </div>
                </>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default InfiniteScroll
