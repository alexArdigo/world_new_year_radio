'use client';

import React from 'react';
const CountryNameDisplay = ({countryName}) => {
    return (
            <div className={'text-8xl'}>{/*t*/(countryName)}</div>
    );
};

export default CountryNameDisplay;