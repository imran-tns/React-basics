import React from 'react';


const person = (props) => {
    return(
        <div>
            <p>
                I'm {props.name} and I'm {props.age} years of age
            </p>
        </div>
    );
}

export default person;