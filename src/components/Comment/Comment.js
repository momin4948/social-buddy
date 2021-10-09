import React from 'react';

const Comment = (props) => {
    const {name, email} = props.comment;
    return (
        <p>
            Name: {name} Email: {email};
        </p>
    );
};

export default Comment;