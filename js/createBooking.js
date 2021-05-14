const in1 = document.getElementById("serviceDropdown");
const in2 = document.getElementById("customer");
const in3 = document.getElementById("bookingDate");
const in4 = document.getElementById("bookingTime");


const createBookingBtn = document.querySelector(".createBookingButton");
createBookingBtn.onclick = function(){
  postFunction({
    "serviceId": `${in1.value}`,
    "customerId": `${in2.value}`,
    "bookingDate": `${in3.value}`,
    "bookingTime": `${in4.value + ":00"}`,
  });
  console.log(in4.value)
  console.log(in3.value)
}

function postFunction(inputValue){
  const url = "http://localhost:8080/bookings/create";

  let requestBody = JSON.stringify(inputValue);

  const requestOption = {
    headers: {
      "Content-type": 'application/json',
      // "Access-Control-Allow-Headers": '*'
    },
    method: 'POST',
    redirect: 'follow',
    body: requestBody,
    mode: 'no-cors'
  };

  fetch(url, requestOption)
    .then(response => response.json())

  alert(console.log(requestBody))
}
