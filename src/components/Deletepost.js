import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast, ToastContainer } from 'react-toastify';
import LoaderContext from '../context/LoaderProvider';
import Services from '../services';

function Deletepost(props) {
    const { isLoading, setIsLoading } = useContext(LoaderContext);
    const delteposthandler = async () => {
        setIsLoading(true)
        const response = await Services.deletePost(props.idforedit)

        if (response) {
            setIsLoading(false)
            props.setShowdeletemodal(false)
            toast.success('Post deleted successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            props.handlePosts()
        }
    }
    const handleClose = () => props.setShowdeletemodal(false);
    return (
        <>
            <ToastContainer />
            <Modal show={props.showdeletemodal} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body>Are you sure to delete this post?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={delteposthandler}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Deletepost;