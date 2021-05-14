const url = "http://localhost:8080/bookings/all";

const requestOption = {
  headers: {
    "Content-type": 'application/json'
  },
  method: 'GET',
  redirect: 'follow'
};

fetch(url, requestOption)
  .then(response => response.json())
  .then(data => gotData(data));

function gotData(data) {
  data.forEach(addRow)
}

function addRow(data) {
  const table = document.querySelector(".bookingsTable");
  let rowCount = table.rows.length;
  let row = table.insertRow(rowCount);

  let cell1 = row.insertCell(0);
  cell1.innerHTML = data.bookingId;

  let cell2 = row.insertCell(1);
  cell2.innerHTML = data.serviceId;

  let cell3 = row.insertCell(2);
  cell3.innerHTML = data.customerId;

  let cell4 = row.insertCell(3);
  cell4.innerHTML = data.bookingDate;

  let cell5 = row.insertCell(4);
  cell5.innerHTML = data.bookingTime;
}
