import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LoaderContext from '../context/LoaderProvider'
import Services from '../services'
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter'
import Deletepost from './Deletepost'
import "./index.css"
import Modalforeditpost from './Modal'
import Loader from './Spinner'

const Allposts = () => {
    const [postdata, setPostdata] = useState()
    // const [loading, setLoading] = useState(false)
    const [data, setData] = useState(9)
    const [show, setShow] = useState(false)
    const [showdeletemodal, setShowdeletemodal] = useState(false)
    const [idforedit, setIdforedit] = useState('')
    const [editdata, setEditdata] = useState()
    const { isLoading, setIsLoading } = useContext(LoaderContext);

    // function to list all posts
    const handlePosts = async () => {
        setIsLoading(true)
        const response = await Services.getPosts()
        if (response) {
            const sortData = response.data?.sort(function compare(a, b) {
                var dateA = a.createdAt;
                var dateB = b.createdAt;
                return moment(dateB).diff(moment(dateA));
            });
            setPostdata(sortData)
            setIsLoading(false)
        }
        return response
    }
    useEffect(() => {
        handlePosts()
    }, [])


    //func for laodmore button:
    const handleLoadMore = () => {
        setData((prev) => prev + 9);
    };

    // func for delete post:
    const handleDeletePost = async (id) => {
        setIdforedit(id)
        setShowdeletemodal(true)
    }

    // func for edit post:
    const handleEditPost = async (data, id) => {
        setIdforedit(id)
        setEditdata(data)
        setShow(true)
    }
    return (
        <>
            {/* <Loader /> */}
            <section className="details-card">
                <div className="container">
                    <div className="row">
                        <Modalforeditpost
                            show={show}
                            setShow={setShow}
                            handleEditPost={handleEditPost}
                            idforedit={idforedit}
                            handlePosts={handlePosts}
                            postdata={postdata}
                            editdata={editdata}
                        />
                        <Deletepost
                            showdeletemodal={showdeletemodal}
                            setShowdeletemodal={setShowdeletemodal}
                            handleDeletePost={handleDeletePost}
                            idforedit={idforedit}
                            handlePosts={handlePosts}
                        />

                        {

                            postdata?.slice(0, data).map((data, index) =>
                                // loading ? <ContentLoaderr />
                                <div key={index} className="col-md-4 mt-3 card-decor">

                                    <div className="card-content">
                                        <Link to={`/detail/${data?.id}`}>
                                            <div className="card-img">
                                                <img src={data.image} loading="lazy" alt="" />
                                            </div>
                                            <div className="card-desc">
                                                <h3 className='title-color'>{capitalizeFirstLetter(data?.title)}</h3>
                                                <p className='title-color'>{capitalizeFirstLetter(data?.shortdescription)}</p>

                                                <h5 dangerouslySetInnerHTML={{
                                                    __html: capitalizeFirstLetter(data?.post)
                                                }}></h5>
                                                <button className="btn-card me-2"> Read </button>

                                            </div>
                                        </Link>
                                        <div className="d-flex">
                                            <p className="m-0 px-3" style={{ color: "#747373" }}>{moment(data?.createdAt).format('LL')}</p>
                                            <p className="m-auto" style={{ cursor: "pointer" }} onClick={() => handleDeletePost(data?.id)}>  <FontAwesomeIcon icon={faTrash} /></p>
                                            <p className="m-auto" style={{ cursor: "pointer" }} onClick={() => { handleEditPost(data, data.id) }}> <FontAwesomeIcon icon={faPenToSquare} /></p>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                        {/* </Loader> */}

                        {data <= postdata?.length && postdata?.length > 8 &&
                            <div> <button className="loadmorebutton" onClick={() => handleLoadMore()} style={{ cursor: "pointer" }}>Loadmore</button></div>
                        }
                    </div>

                </div>
            </section >
        </>
    )
}

export default Allposts