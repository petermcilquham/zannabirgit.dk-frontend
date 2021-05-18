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
}

function postFunction(inputValue) {
  const bookingUrl = "http://localhost:8080/bookings/create";

  let requestBody = JSON.stringify(inputValue);

  const bookingRequestOption = {
    method: 'POST',
    body: requestBody,
    // mode: 'no-cors',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT,',
      'Access-Control-Allow-Credentials' : true
    },
  };

  fetch(bookingUrl, bookingRequestOption)
    .then(response => response.json())
    .catch(err => console.log(err))
  console.log(requestBody)
}


//Get services list
const serviceUrl = "http://localhost:8080/services/all";

const serviceRequestOption = {
  headers: {
    "Content-type": 'application/json'
  },
  method: 'GET',
  redirect: 'follow'
};

fetch(serviceUrl, serviceRequestOption)
  .then(response => response.json())
  .then(data => gotData(data));

function gotData(data) {
  data.forEach(populateSelect)
}

function populateSelect(data) {
  let element = document.getElementById('serviceDropdown');
  element.innerHTML = element.innerHTML + '<option value="' + data.serviceId + '">' + data.serviceName + '</option>';
}
