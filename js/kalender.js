const bookingsUrl = "http://localhost:8080/bookings/all";
const servicesUrl = "http://localhost:8080/services/all";
const customersUrl = "http://localhost:8080/customers/all";

let serviceName = "";
let customerName = "";

const requestOption = {
  headers: {
    "Content-type": 'application/json'
  },
  method: 'GET',
  redirect: 'follow'
};

//rendering the calendar
fetch(bookingsUrl, requestOption)
  .then(response => response.json())
  .then(bookingsData => gotBookingData(bookingsData));

function gotBookingData(data, serviceData) {
  data.forEach(addToArray)
  serviceData.forEach(addToArray)

}

function addToArray(data, serviceData){
  let id = data.bookingId
  let date = data.bookingDate
  let title = serviceData.serviceName+"\n "+"Start tid: "+data.bookingTime.slice(0,5)
  // let url = "../../HTML/booking-calendars/calendar-show-bookings.html"+`?${id}`

  $('#calendar').fullCalendar('renderEvent', {
    id: id,
    start: date,
    title: title,
    // url: url,
    textColor: "white",
    allDay: true,
  }, true);
}

let currentTime = new Date();
$(document).ready(function() {

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,basicWeek,basicDay',
    },
    defaultDate: `${currentTime}`,
    navLinks: true,
    editable: true,
    eventLimit: true,
    events: [
    ]
  });
});

//getting service name instead of id

fetch(servicesUrl, requestOption)
  .then(response => response.json())
  .then(serviceData => gotBookingData(serviceData));

function gotServiceData(serviceData) {
  addToArray(serviceData)
}

