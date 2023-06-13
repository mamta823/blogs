import axiosFile from "../helpers/axiosfile"

const getPosts = async () => {
    return await axiosFile.get("/posts")
}
const getSinglepost = async (id) => {
    return await axiosFile.get(`/posts/${id}`)
}
const getCommentOnPost = async (id) => {
    return await axiosFile.get(`/posts/${id}/comments`)
}
export { getPosts, getSinglepost, getCommentOnPost }

