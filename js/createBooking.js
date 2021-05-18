const in1 = document.getElementById("serviceDropdown");
const in2 = document.getElementById("bookingDate");
const in3 = document.getElementById("bookingTime");
const in4 = document.getElementById("customerEmail");
let customerId = 0

const createBookingBtn = document.querySelector(".createBookingButton");
createBookingBtn.onclick = function(){
  getCustomerId()
}

//get customer id
function getCustomerId() {
  const customerEmailUrl = `http://localhost:8080/customers/email/${in4.value}`;
  const customerEmailRequestOption = {
    headers: {
      "Content-type": 'application/json'
    },
    method: 'GET',
    redirect: 'follow'
  };

  fetch(customerEmailUrl, customerEmailRequestOption)
    .then(response => response.json())
    .then(customerData => changeCustomerId(customerData));
}

function changeCustomerId(customerData) {
  postFunction({
    "serviceId": `${in1.value}`,
    "bookingDate": `${in2.value}`,
    "bookingTime": `${in3.value + ":00"}`,
    "customerId": customerId = customerData.customerId
  });
}

//actual create booking function
function postFunction(inputValue) {
  const bookingUrl = "http://localhost:8080/bookings/create";
  let bookingRequestBody = JSON.stringify(inputValue);

  const bookingRequestOption = {
    method: 'POST',
    body: bookingRequestBody,
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
