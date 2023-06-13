import React from 'react'
// import { useParams } from 'react-router-dom';

const Createpost = () => {

    return (
        <><form onSubmit={"addNewPost"}>
            <label htmlFor="post-title">Enter Post Title</label>
            <input id="post-title" name="postTitle" />
            <label htmlFor="post-description">Enter Post Description</label>
            <input id="post-description" name="description" />
            <label htmlFor="post-author">Enter Your Name</label>
            <input id="post-author" name="postAuthor" />
            <button type="submit">Add New Post </button>
        </form></>
    )
}

export default Createpost