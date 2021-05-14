const in1 = document.getElementById("service");
const in2 = document.getElementById("customer");
const in3 = document.getElementById("bookingDate");
const in4 = document.getElementById("bookingTime");

const createBookingBtn = document.querySelector(".createBookingButton");
createBookingBtn.onclick = function(){
  postFunction({
    "customerName": `${in1.value}`,
    "customerMobileNumber": `${in2.value}`,
    "showId": `${in3.value}`,
    "seatNum01": `${in4.value}`,
  });
}
