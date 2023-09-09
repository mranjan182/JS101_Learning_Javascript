// fill in javascript code here
let inpName = document.getElementById("name");
let inpId = document.getElementById("employeeID");
let selectDept = document.getElementById("department");
let inpExp = document.getElementById("exp");
let inpEmail = document.getElementById("email");
let inpMob = document.getElementById("mbl");
let tbody = document.querySelector("tbody");

let detail = [];
let form = document
  .querySelector("form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let data = {
      name: inpName.value,
      id: inpId.value,
      department: selectDept.value,
      Experience: inpExp.value,
      email: inpEmail.value,
      mob: inpMob.value,
    };
    detail.push(data);

    
    display();
    
  });
function display() {
    tbody.innerHTML=""
  detail.map((el,index) => {
    let tr = document.createElement("tr");
    tr.setAttribute("id", "row");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");
    let td8 = document.createElement("td");
    let button = document.createElement("button");
    button.innerText = "Delete";

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
    td8.append(button);

    tbody.append(tr);

    td1.innerText = el.name;
    td2.innerText = el.id;
    td3.innerText = el.department;
    td4.innerText = el.Experience;
    td5.innerText = el.email;
    td6.innerText = el.mob;

    let userRole = role(el.Experience);
    td7.innerText = userRole;
    
    button.addEventListener('click',function(){
        detail.splice(index,1)
        console.log(detail)
        display()
    });
    console.log(el);
  });
}
function role(exp) {
  if (exp > 5) {
    return "Senior";
  } else if (exp <= 1) {
    return "Fresher";
  } else if (exp >= 2 && exp <= 5) {
    return "Junior";
  }
}
