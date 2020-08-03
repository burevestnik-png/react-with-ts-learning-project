import React, { FunctionComponent } from 'react';
import { useHistory } from "react-router-dom";


const AboutPage: FunctionComponent = () => {
    const history = useHistory();

    return (
        <>
            <h1>About page</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A doloremque est id maiores minus nostrum
                quaerat quam similique ut! Vero.
            </p>
            <button className="btn" onClick={() => history.push('/')}>
                Go back to TODO list
            </button>
        </>
    );
};

export default AboutPage;
