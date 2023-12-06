const clock = () => {
    let date = new Date()

    let month_num = date.getMonth()
    let day = date.getDate()
    let hours = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds()

    if(day<=9)day='0'+day
    if(hours<=9)hours='0'+hours
    if(minute<=9)minute='0'+minute
    if(seconds<=9)seconds='0'+seconds

    let month = ["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек",]

    let date_time2 = day
    let date_time3 = month[month_num]
    let date_time = hours + ':' + minute
    let date_time1 = seconds

    console.log(month[11])


    let element = document.getElementById("time")
    element.innerHTML = date_time
    let element1 = document.getElementById("time1")
    element1.innerHTML = date_time1
    let element2 = document.getElementById("time2")
    element2.innerHTML = date_time2
    let element3 = document.getElementById("time3")
    element3.innerHTML = date_time3

    setTimeout(() => {
        clock()
    }, 1000);

    
}

clock()