import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Services from '../services'
import "../pages/index.css"
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter'
import Loader from '../components/Spinner'
const Postdetail = () => {
    const [detail, setDetail] = useState()
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const handlePostDetail = async () => {
        const detailResponse = await Services.getSinglepost(id)
        setLoading(true)
        if (detailResponse) {
            setDetail(detailResponse?.data)
            setLoading(false)
        }
        return detailResponse
    }
    useEffect(() => {
        handlePostDetail()
        // handleComments()
    }, [id])
    //fun to get comments on post
    const handleComments = async () => {
        setLoading(true)
        const comment = await Services.getCommentOnPost(id)

        if (comment) {
            setComments(comment.data)
            setLoading(false)
            return comment
        } else {
            return ""
        }
    }
    return (
        <>
            <div className="container">
                <div className="row d-flex align-items-center">
                    {loading ? <Loader />
                        : <div className="blog-post mt-5">
                            <div className="image-container">
                                <img src="https://placeimg.com/380/230/nature" alt="" />
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
                    {loading ? <Loader /> :
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Recent Comments</h4>
                                    <h6 className="card-subtitle">Latest Comments section by users</h6> </div>

                                <div className="comment-widgets m-b-20">
                                    {comments && comments.map((com, i) => (
                                        <div className="d-flex flex-row comment-row">

                                            <div className="p-2"><span className="round"><img src="https://i.imgur.com/uIgDDDd.jpg" alt="user" width="50" /></span></div>
                                            <div className="comment-text w-100">
                                                <h5>{com.name}</h5>
                                                <div className="comment-footer">
                                                    {/* <span className="date">April 14, 2019</span> */}
                                                </div>
                                                <p className="m-b-5 m-t-10">{com.body}</p>
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