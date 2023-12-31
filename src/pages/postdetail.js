import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Services from '../services'
import "../pages/index.css"
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter'
import Loader from '../components/Spinner'
import Commentbox from '../components/Commentbox'
import LoaderContext from '../context/LoaderProvider'
const Postdetail = () => {
    const [detail, setDetail] = useState()
    const { isLoading, setIsLoading } = useContext(LoaderContext);
    const { id } = useParams()
    const handlePostDetail = async () => {
        setIsLoading(true)
        const detailResponse = await Services.getSinglepost(id)
        if (detailResponse) {
            setDetail(detailResponse?.data)
            setIsLoading(false)
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
                    <div className="blog-post mt-5">
                        <div className="image-container">
                            <img src={detail?.image} alt="" />
                        </div>
                        <div className="content-container">
                            <h2 className="title-color">{capitalizeFirstLetter(detail?.title)}</h2>
                            <p dangerouslySetInnerHTML={{
                                __html: capitalizeFirstLetter(detail?.post)
                            }}></p>
                        </div>
                    </div>

                </div>
                <div className='row mt-5 container-size'>
                    <h2>Post description</h2>
                    <div className="description-container " dangerouslySetInnerHTML={{
                        __html: capitalizeFirstLetter((detail?.description))

                    }} >
                    </div>
                </div>

            </div>

            {/*comment listing below  */}
            <div className="container d-flex justify-content-center mt-100 mb-100">
                <div className="row">
                    {detail?.comment &&
                        <Commentbox
                            id={detail?.id}
                            comment={detail?.comment}
                            handlecomment={handlePostDetail}
                        // setLoading={setLoading}
                        // loading={loading}
                        />

                    }


                    {/* {!loading && */}
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Recent Comments</h4>
                            </div>
                            <div className="comment-widgets m-b-20">
                                {detail?.comment?.map((com, i) => (
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

                    {/* } */}
                </div>
            </div>
        </>
    )
}

export default Postdetail