const CountdownTimer = () => {
    const minutes = 59
    const seconds = 59
    const P_TEXT_XL = 'text-xl'

    return (
        <div className={'flex absolute z-3 w-5/12 h-32 justify-evenly'}>
            <div className={'flex flex-col justify-center items-center'}>
                <h3>{minutes}</h3>
                <p className={P_TEXT_XL}>min</p>
            </div>
            <div className={'flex flex-col justify-center items-center'}>
                <h3>{seconds}</h3>
                <p className={P_TEXT_XL}>sec</p>
            </div>

        </div>
    );
};

export default CountdownTimer;