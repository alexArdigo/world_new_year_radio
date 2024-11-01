const RadioTitle = () => {
    const radio = 'J1 Radio Gold'
    const city = 'Tokyo'
    const country = 'Japan'

    return (
        <div className={'flex flex-col z-3 w-full h-32 items-center'}>
            <h3>{radio}</h3>
            <p className={'text-2xl'}>{city}, {country}</p>
        </div>
    );
};

export default RadioTitle;