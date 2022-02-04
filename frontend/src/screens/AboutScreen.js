import React, { useEffect, useState } from 'react';


export default function AboutScreen() {
    useEffect(() => {

    }, []);
    return (
        <div className='row center'>
            <div className='form-about'>
                <ul>
                    Amazona is to be treated as a practice project that has no intention of being used as an actual ecommernce website.
                </ul>
                <ul>List of website functionality:
                    <li>Shopping Cart</li>
                    <li>Home and Product Screens</li>
                </ul>
                <ul>List of website functionality that is incomplete:
                    <li>Create account functionality</li>
                    <li>MongoDB Integration</li>
                </ul>
            </div>
        </div>
    );
}

