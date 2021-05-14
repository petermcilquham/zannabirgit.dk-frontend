const url = "http://localhost:8080/services/all";

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
  const table = document.querySelector(".servicesTable");
  let rowCount = table.rows.length;
  let row = table.insertRow(rowCount);

  let cell1 = row.insertCell(0);
  cell1.innerHTML = "- " + data.serviceName;

  let cell2 = row.insertCell(1);
  cell2.innerHTML = data.servicePrice + "kr";

  let cell3 = row.insertCell(2);
  cell3.innerHTML = data.serviceLength + " min.";
}
