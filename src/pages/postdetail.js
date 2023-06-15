import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Services from '../services'
import "../pages/index.css"
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter'
import Loader from '../components/Spinner'
import Commentbox from '../components/Commentbox'
const Postdetail = () => {
    const [detail, setDetail] = useState()
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const handlePostDetail = async () => {
        setLoading(true)
        const detailResponse = await Services.getSinglepost(id)
        if (detailResponse) {
            setDetail(detailResponse?.data)
            setLoading(false)
        }
        return detailResponse
    }
    useEffect(() => {
        handlePostDetail()
    }, [id])

    return (
        <>
            <div className="container">
                <div className="row d-flex align-items-center">
                    {loading ? <Loader />
                        : <div className="blog-post mt-5">
                            <div className="image-container">
                                <img src={detail?.image} alt="" />
                            </div>
                            <div className="content-container">
                                <h2 className="title-color">{capitalizeFirstLetter(detail?.title)}</h2>
                                <p>{capitalizeFirstLetter(detail?.description)}</p>
                            </div>
                        </div>

                    }
                </div>
            </div>

            {/*comment listing below  */}
            <div className="container d-flex justify-content-center mt-100 mb-100">
                <div className="row">
                    {detail && <Commentbox
                        id={detail?.id}
                        comment={detail?.comment}
                        handlecomment={handlePostDetail}
                    />
                    }

                    {!loading &&
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Recent Comments</h4>
                                </div>
                                <div className="comment-widgets m-b-20">
                                    {detail && detail?.comment?.map((com, i) => (
                                        <div key={i} className="d-flex flex-row comment-row">

                                            <div className="p-2"><span className="round"><img src="https://i.imgur.com/uIgDDDd.jpg" alt="user" width="50" /></span></div>
                                            <div className="comment-text w-100">
                                                <h5>{com}</h5>
                                                <div className="comment-footer">
                                                    {/* <span className="date">April 14, 2019</span> */}
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    }
                </div>
            </div>
        </>
    )
}

export default Postdetail