import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {useCountdownStore} from "@/app/stores/CountdownStore";
import {useCountryStore} from "@/app/stores/CountryStore";
import Confetti from "react-confetti";
import {timeStampZero} from "@/app/utils/timeStampZero.utils";
import {useState} from "react";
import {handleTranslate} from "@/app/utils/handleTranslate.utils";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    height: 600,
    bgcolor: `rgba(255, 255, 255, 0.95)`,
    opacity: 1,
    boxShadow: 24,
    p: 4,
};

export default function TransitionsModal() {
    const [open, setOpen] = useState(false);
    const [clientWidth, setClientWidth] = useState(window.innerWidth);

    const handleClose = () => setOpen(false);
    const {countdown} = useCountdownStore();
    console.log('countdown', countdown);
    const {country, fetchCountries} = useCountryStore();
    const {
        toOpenModalStart,
        toOpenModalEnd,
        toFinishCountdown,
        toCloseModal
    } = timeStampZero(1800);
    const [happyNewYearPhrase, setHappyNewYearPhrase] = useState('');

    React.useEffect(() => {
        // Set the width only on the client-side
        if (typeof window !== 'undefined') {
            setClientWidth(window.innerWidth);
        }
    }, [clientWidth]);

    React.useEffect(() => {
        const newFetch = async () => await fetchCountries(country);

        const handleTranslation = async () => {
            const phraseToTranslate = `Happy New Year, ${country.countryName}!`;
            const translatedPhrase = await handleTranslate(phraseToTranslate, country.countryName);
            setHappyNewYearPhrase(translatedPhrase);
        };

        if ((countdown <= toOpenModalStart && countdown >= toOpenModalEnd) && !open) {
            handleTranslation();
            setOpen(true);
        }
        if (countdown === toCloseModal && open) {
            setOpen(false);
            setHappyNewYearPhrase('');
            newFetch();
        }
    }, [
        countdown,
        open,
        toOpenModalStart,
        toOpenModalEnd,
        toCloseModal,
        country,
        fetchCountries
    ]);

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{backdrop: Backdrop}}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {countdown === 0 || (countdown <= toFinishCountdown && countdown >= toCloseModal)
                            ? <div className="flex h-full justify-center items-center">
                                <Confetti width={clientWidth} height={style.height}/>
                                <div className="flex">
                                    <Typography
                                        id="transition-modal-description"
                                        sx={{
                                            textAlign: 'center',
                                            fontSize: 100,
                                            fontWeight: 600,
                                            textShadow: "1px 1px 1px #000"
                                        }}
                                    >
                                        {happyNewYearPhrase
                                            ? happyNewYearPhrase
                                            : `Happy New Year, ${country.countryName}!`}
                                    </Typography>
                                </div>
                            </div>
                            : <>
                                <Typography
                                    id="transition-modal-title"
                                    variant="h3"
                                    component="h2"
                                    sx={{
                                        textAlign: 'center',
                                        color: '#3a32a8',
                                        margin: '30px'
                                    }}
                                >
                                    CONTAGEM REGRESSIVA, MALTA!
                                </Typography>
                                <Typography
                                    id="transition-modal-description"
                                    sx={{
                                        mt: 2,
                                        textAlign: 'center',
                                        fontSize: 300,
                                        textShadow: "1px 1px 1px #000"
                                    }}
                                >
                                    {countdown % 100}
                                </Typography>
                            </>
                        }
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
