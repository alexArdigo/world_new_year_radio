'use client';

import React from 'react';
const CountryNameDisplay = ({countryName}: {countryName: string}) => {
    return (
            <div className={'text-8xl'}>{(countryName)}</div>
    );
};

export default CountryNameDisplay;