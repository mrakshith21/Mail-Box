function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
}

function sameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();
}

function sameWeek(d1, d2){
    return Math.abs(d1 - d2) <= 7 * MS_PER_DAY;
}
function sameYear(d1, d2){
    // d1 > d2
    return d1.getFullYear() === d2.getFullYear()
}

function getFullDate(d){
    date = new Date(d);
    return addZero(date.getDate()) + "-" + addZero(date.getMonth()) + "-" + d.getFullYear();
}

function getFullTime(d){
    date = new Date(d);
    return addZero(date.getHours()) + ":" + addZero(date.getMinutes());
}

function getFullDateTime(d){
    date = new Date(d);
    return getFullDate(date) + " " + getFullTime(date);
}

function getDateTime(d){
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    let date = new Date(d);
    let now = new Date();
    console.log(now + " " + date);
    if(sameDay(now, date)){
        return getFullTime(date);
    }
    else if(sameWeek(now, date)){
        return days[date.getDay()] + "\r\n" + getFullTime(date);
    }
    else if(sameYear(now, date)){
        return days[date.getDay()] + " " + addZero(date.getDate()) + "-" + addZero(date.getMonth());
    }
    else {
        return getFullDate(date);
    }
}