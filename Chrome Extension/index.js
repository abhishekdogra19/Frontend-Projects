let myLeads = [];
const inputbtn = document.getElementById("input-btn");
const inputEL = document.getElementById("input-el");

const leadsFromStorage = JSON.parse(localStorage.getItem("myleads"));

if (leadsFromStorage) {
  myLeads = leadsFromStorage;
  display();
}

function display() {
  const ulEl = document.getElementById("ul-el");
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
        <li>
        <a href='https://${myLeads[i]}' target='_blank'>${myLeads[i]}</a>
        </li>
    `;
  }
  ulEl.innerHTML = listItems;
}

inputbtn.addEventListener("click", function () {
  let address = inputEL.value;

  inputEL.value = "";

  myLeads.push(address);
  display();
  localStorage.setItem("myleads", JSON.stringify(myLeads));

  console.log(localStorage.getItem("myleads"));
});

const deleteBtn = document.getElementById("delete-btn");
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  display();
});

const tabBtn = document.getElementById("tab-btn");

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url); ///url saved in this format
    localStorage.setItem("myleads", JSON.stringify(myLeads));
    display();
  });
});
