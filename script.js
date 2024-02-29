let giveaway = document.querySelector("#giveaway") 
let count_down = document.querySelectorAll(".end")
const months_array = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const weekday_array = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

let now = new Date()
let current_day = now.getDate()
let current_year = now.getFullYear()
let current_month = now.getMonth()




let futuredate = new Date(current_year, current_month, current_day + 10, 7, 30, 0);
let future_weekday = futuredate.getDay()
future_weekday = weekday_array[future_weekday]
let future_day = futuredate.getDate()
let future_month = futuredate.getMonth()
future_month = months_array[future_month]
let future_hour = futuredate.getHours()
let future_minutes = futuredate.getMinutes()
let future_year = futuredate.getFullYear()
let future_time = futuredate.getTime()

giveaway.textContent= "Giveaway Ends On " + future_weekday + ", " + future_day + "th " + future_month + " " + future_year + " At " + future_hour + ":"+ future_minutes + "am" 

function getCountdownTimer(){
let current_time = new Date().getTime()
let time_remaining = future_time - current_time;
let remaining_days = Math.floor(time_remaining/(1000 * 60 * 60 *24))
let remaining_hours = Math.floor((time_remaining % (1000*60*60*24))  / (1000*60*60))
let remaining_minute = Math.floor((time_remaining % (1000*60*60))/ (1000*60))
let remaining_seconds = Math.floor((time_remaining % (1000*60))/ 1000)

const values = [remaining_days, remaining_hours, remaining_minute, remaining_seconds]

function add_zero(item) {
    if (item < 10) {
      return (item = "0" + item);
    }
    return item;
  
}
  count_down.forEach(function (item, index) {
    item.innerHTML = add_zero(values[index]);
  });


if (current_time < 0) {
    clearInterval(countdown);
    
    let giveaway_info = document.querySelector(".giveaway_info")
    giveaway_info.innerHTML = "<h4 class='giveaway_info'>SORY, THIS GIVEAWAY HAS EXPIRED</h4>";
    giveaway_info.style.color = 'red';
    giveaway_info.style.fontWeight = 'bold';
  
  }


}
let countdown = setInterval(getCountdownTimer, 1000);

getCountdownTimer();


