import React, { useState } from 'react'
import "../components/index.css"
import Services from '../services'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Commentbox = (props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm();
    React.useEffect(() => {
        console.log(isSubmitSuccessful, "isSubmitSuccessful")
        if (isSubmitSuccessful) {
            reset();
            props.handlecomment()
        }
    }, [isSubmitSuccessful]);


    const onSubmit = async (data) => {
        const obj = { comment: [...props.comment, data.comment] }
        const response = await Services.getCommentOnPost(obj, props?.id)
        if (response) {
            toast.success('Comment added successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }

    }


    return (
        <div>
            <ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                    {...register('comment', { required: true })}
                    name="comment" id="comment" className='commnt' placeholder='Hey... say something!' >

                </textarea>
                {errors.comment && <p style={{ color: "red", textAlign: "left" }}> Field is required.</p>}
                <input type="submit" value="Submit" />
            </form></div>
    )
}

export default Commentbox