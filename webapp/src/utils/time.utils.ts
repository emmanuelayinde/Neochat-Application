import moment from 'moment'


export const formatDuration = (seconds: number) => {
    return [seconds / 60, seconds % 60].map((v) => `0${Math.floor(v)}`.slice(-2)).join(':')
}


export const updateProgress = (seconds: number) => {
    // time will be in milliseconds, convert it to mm:ss format
    const formattedTime = [
        Math.floor((seconds % 3600000) / 60000), // minutes
        Math.floor((seconds % 60000) / 1000), // seconds
    ]
        .map((v) => (v < 10 ? '0' + v : v))
        .join(':')
    return formattedTime
}

export const formatDate = (timestamp: string) => {
    const now = moment();
    const inputDate = moment(parseInt(timestamp, 10));

    if (now.diff(inputDate, 'hours') < 6) {
        return inputDate.fromNow();
    } else if (now.diff(inputDate, 'hours') < 24) {
        return inputDate.format('h:mma');
    } else if (now.diff(inputDate, 'days') < 7 && now.month() === inputDate.month()) {
        return inputDate.format('ddd Do');
    } else if (now.year() === inputDate.year()) {
        return inputDate.format('Do MMMM');
    } else {
        return inputDate.format('Do MMMM, YYYY');
    }
}