import React from 'react'
import { useForm } from 'react-hook-form';
import Services from '../services';

const Createpost = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const handleCreatePost = async (data) => {
        console.log(data, "data on submit")
        const response = await Services.createPost(data)
        console.log(response, "created successfully")
    }
    return (
        <>
            <form className="form-style-9" onSubmit={handleSubmit(handleCreatePost)}>
                <ul>
                    <li>
                        <input {...register('name', { required: true })}
                            type="text"
                            name="name"
                            className="field-style field-split align-left"
                            placeholder="Name" />
                        {errors.name && <div style={{ color: "red", textAlign: "left" }}> Name is required.</div>}
                        <input
                            {...register('email', { required: true })}
                            type="email" name="email" className="field-style field-split align-right" placeholder="Email" />
                        {errors.email && <p style={{ color: "red", textAlign: "left" }}> Email is required.</p>}
                    </li>

                    <li>
                        <input
                            {...register('title', { required: true })}
                            type="text" name="title" className="field-style field-full align-none" placeholder="Title" />
                        {errors.title && <p style={{ color: "red", textAlign: "left" }}> Title is required.</p>}
                    </li>
                    <li>
                        <input
                            {...register('id', { required: true })}
                            type="text" name="id" className="field-style field-full align-none" placeholder="Id" />
                        {errors.id && <p style={{ color: "red", textAlign: "left" }}> Id is required.</p>}
                    </li >
                    <li>
                        <textarea
                            {...register('description', { required: true })}
                            name="description" className="field-style" placeholder="Description"></textarea>
                        {errors.description && <p style={{ color: "red", textAlign: "left" }}> Description is required.</p>}
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