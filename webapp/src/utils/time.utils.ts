// import dayjs from 'dayjs'


export const formatTime = (seconds: number) => {
    return [seconds / 60, seconds % 60].map((v) => `0${Math.floor(v)}`.slice(-2)).join(':')
}


