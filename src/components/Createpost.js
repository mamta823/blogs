import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Services from '../services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../components/index.css"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Createpost = () => {

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { errors, isSubmitSuccessful },
    } = useForm();

    //state for reset formdata after submission below:||
    React.useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful]);

    const onSubmit = async (data) => {
        console.log(data, "data on submit")
        const response = await Services.createPost(data)
        if (response) {
            toast.success('Post added successfully!', {
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
    const onEditorStateChange = (editorState) => {
        setValue("description", editorState);
    };

    useEffect(() => {
        register("description", { required: true, minLength: 11 });
    }, [register]);

    const editorContent = watch("description");

    return (
        <>

            <ToastContainer />
            <div className="container">
                <h1 className="title-posts">Add new post here</h1>
            </div>
            <form className="form-style-9" onSubmit={handleSubmit(onSubmit)}>
                <ul>
                    <li>
                        <input
                            {...register('title', { required: true })}
                            type="text" name="title" className="field-style field-full align-none" placeholder="Title" />
                        {errors.title && <p style={{ color: "red", textAlign: "left" }}> Title is required.</p>}
                    </li>
                    <li>
                        <textarea
                            {...register('shortdescription', { required: true })}
                            name="shortdescription" className="field-style" placeholder="Short description"></textarea>
                        {errors.shortdescription && <p style={{ color: "red", textAlign: "left" }}> Short description is required.</p>}
                    </li>
                    <li>
                        <input
                            {...register('image', { required: true })}
                            type="text" name="image" className="field-style field-full align-none" placeholder="Paste image url here" />
                        {errors.image && <p style={{ color: "red", textAlign: "left" }}> Image is required.</p>}
                    </li>

                    <li>
                        <ReactQuill
                            theme="snow"
                            value={editorContent}
                            onChange={onEditorStateChange}
                            className="field-style field-full field-size"
                            placeholder="Description"
                        />
                        {errors.description && <p style={{ color: "red", textAlign: "left" }}> Description is required.</p>}
                        {/* <textarea
                                {...register('description', { required: true })}
                                name="description" className="field-style" placeholder="Description"></textarea>
                            {errors.description && <p style={{ color: "red", textAlign: "left" }}> Description is required.</p>} */}
                    </li>
                    <li>
                        <input type="submit" value="Submit" />
                    </li>
                </ul >
            </form >

        </>
    )
}

export default Createpost