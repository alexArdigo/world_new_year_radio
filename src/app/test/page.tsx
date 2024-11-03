// app/page.js
'use client';
import { useState } from 'react';

export default function Home() {
    const [gmtOffset, setGmtOffset] = useState('');
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState<string | null>(null);

    const fetchCountries = async () => {
        try {
            const response = await fetch(`/api/timezones/${gmtOffset}`);
            const data = await response.json();
            console.log(response);
            setCountries(data);
            setError(null);
        } catch (error) {
            setError(`${error}, An error occurred`);
            setCountries([]);
        }
    };

    return (
        <div>
            <h1>Filter Countries by GMT Offset</h1>
            <input
                type="number"
                value={gmtOffset}
                onChange={(e) => setGmtOffset(e.target.value)}
                placeholder="Enter GMT offset (in seconds)"
                required
            />
            <button onClick={fetchCountries}>Filter</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {countries.error ? <p>{countries.error}</p> : countries?.map((zone, index) => (
                    <li key={index}>{zone.countryName}</li>
                ))}
            </ul>
        </div>
    );
}
