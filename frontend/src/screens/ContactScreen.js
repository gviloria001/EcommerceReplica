import React, { useEffect, useState } from 'react';


export default function ContactScreen() {
    const [message, setMessage] = useState('Contact Screen: Work In Progress')
    useEffect(() => {

    }, []);
    return (
        <div className="row center">{message}</div>
    );
}

