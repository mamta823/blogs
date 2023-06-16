import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Services from '../services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../components/index.css"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';



function Modalforeditpost(props) {
    console.log(props.editdata, "editdata")
    const handleClose = () => props.setShow(false);
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
            props.setShow(false)
            props.handlePosts()
        }
    }, [isSubmitSuccessful]);

    const onSubmit = async (data) => {
        console.log(data, "data on submit")
        const response = await Services.editPost(props.idforedit, data)
        console.log(response, "edit successfully")
        if (response) {
            toast.success('Post updated successfully!', {
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


    // const handlePostDetail = async () => {


    // }
    useEffect(() => {
        setValue('title', props.editdata?.title,)
        setValue('shortdescription', props.editdata?.shortdescription)
        setValue('image', props.editdata?.image)
        setValue('description', props.editdata?.description)
    }, [props.editdata])
    return (
        <>
            <Modal
                show={props.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ToastContainer />
                    <form className="form-style-9" onSubmit={handleSubmit(onSubmit)}>
                        <ul>
                            <li>
                                <input
                                    {...register('title', { required: true })}
                                    type="text" name="title" className="field-style field-full align-none" placeholder="Title" />
                                {errors.title && <p style={{ color: "red", textAlign: "left" }}> Title is required.</p>}
                            </li>
                            <li>  <textarea
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
                                />
                                {errors.description && <p style={{ color: "red", textAlign: "left" }}> Description is required.</p>}

                            </li>
                            <li>
                                <Button variant="success me-4" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button type="submit" variant="success">Edit</Button>
                            </li>
                        </ul >
                    </form >
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Modalforeditpost;