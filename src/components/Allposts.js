import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Services from '../services'
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter'
import ContentLoaderr from './ContentLoader'
import "./index.css"
import Loader from './Spinner'

const Allposts = () => {
    const [postdata, setPostdata] = useState()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(9)
    const [show, setShow] = useState(true)
    //arrow function to list all posts
    const handlePosts = async () => {
        setLoading(true)
        const response = await Services.getPosts()
        if (response) {
            setLoading(false)
            setPostdata(response.data)
        }
        return response
    }

    useEffect(() => {
        handlePosts()
    }, [])
    const handleLoadMore = () => {
        setData((prev) => prev + 9)
        if (data > postdata.length) {
            setShow(false)
            setLoading(false)
        } else {
            setShow(true)
        }
    }

    return (
        <>
            <section className="details-card">
                <div className="container">
                    <div className="row">

                        {loading ? <Loader /> :
                            postdata && postdata?.slice(0, data).map((data, index) =>
                                // loading ? <ContentLoaderr />
                                <div key={index} className="col-md-4 mt-3 card-decor">
                                    <Link to={`/detail/${data?.id}`}>
                                        <div className="card-content">
                                            <div className="card-img">
                                                <img src={data.image} loading="lazy" alt="" />
                                            </div>
                                            <div className="card-desc">
                                                <h3 className='title-color'>{capitalizeFirstLetter(data?.title)}</h3>

                                                <p dangerouslySetInnerHTML={{
                                                    __html: capitalizeFirstLetter(data?.post)
                                                }}></p>
                                                <button className="btn-card me-2"> Read </button>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                        {!loading && show && postdata?.length > 4 &&
                            <div> <button className="loadmorebutton" onClick={() => handleLoadMore()} style={{ cursor: "pointer" }}>Loadmore</button></div>
                        }
                    </div>

                </div>
            </section >
        </>
    )
}

export default Allposts