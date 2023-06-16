import { useState } from 'react';
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/BounceLoader'

function Loader({ loading, children }) {

    return (

        <LoadingOverlay
            active={loading}
            spinner
            text='Loading your content...'
        >
            {children}
        </LoadingOverlay>

    );
}

export default Loader;