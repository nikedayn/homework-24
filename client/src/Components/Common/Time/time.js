let timeFormat = (date) => {
    if (date < 10) {
        return `0${date}`;
    }
    else{
        return date;
    }
}

export const getTimeAndDate = () => {
    let dateNow = new Date();
    let time = `${timeFormat(dateNow.getHours())}:${timeFormat(dateNow.getMinutes())}`;
    let date = `${timeFormat(dateNow.getDate())}.${timeFormat(dateNow.getMonth() + 1)}.${timeFormat(dateNow.getFullYear())}`;
    return (`${time} | ${date}`);
}

