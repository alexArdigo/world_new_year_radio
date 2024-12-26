import {TimeStampType} from "@/app/types/ContextType";

export const timeStampZero: TimeStampType = (zeroMarker) => {
    const fullHour = 3600
    return {
        toOpenModalStart: zeroMarker + 20,
        countdownStart: zeroMarker + 10,
        toOpenModalEnd: zeroMarker + 1,
        toCloseModal: zeroMarker === 0 ? fullHour - 30 : zeroMarker - 30,
        toFinishCountdown: zeroMarker === 0 ? fullHour : zeroMarker,

    }

}