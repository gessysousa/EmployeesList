let employees = [];
let roles = [];
let employeesFiltered = [];
const select = document.getElementById("sortBy");
let addTable = document.createElement("table");
let nameAscending = true;

//função para armazenar em arrays a lista com employees e roles
async function init() {
  [employees, roles] = await Promise.all([listEmployees(), listRoles()]);
  select.addEventListener("change", sortEmployees);
  rolesOptions();
  testaCheckbox();
}
init();

function createTable() {
  if (nameAscending) {
    employeesFiltered.sort((i1, i2) => {
      if (i1.name < i2.name) {
        return -1;
      } else if (i1.name > i2.name) {
        return 1;
      } else {
        return 0;
      }
    });
    nameAscending = false;
  }
  //criando tabela
  let addHead = document.createElement("thead");
  let addBody = document.createElement("tbody");

  addTable.appendChild(addHead);
  addTable.appendChild(addBody);
  document.getElementById("table").appendChild(addTable);

  //linha 1
  let tr1 = document.createElement("tr");
  let thID1 = document.createElement("th");
  thID1.innerHTML = "ID";
  let thName1 = document.createElement("th");
  thName1.innerHTML = "Name";
  let thRole1 = document.createElement("th");
  thRole1.innerHTML = "Role";
  let thSalary1 = document.createElement("th");
  thSalary1.innerHTML = "Salary";

  tr1.appendChild(thID1);
  tr1.appendChild(thName1);
  tr1.appendChild(thRole1);
  tr1.appendChild(thSalary1);
  addHead.appendChild(tr1);

  //varrendo o vetor employees
  for (const employee of employeesFiltered) {
    //pegar na /roles e encontra a profissão referente ao número que está em /employees
    let role = roles.find((role) => role.id == employee.role_id);

    //montando o corpo da tabela
    let tr;
    let tdID;
    let tdName;
    let tdRole;
    let tdSalary;
    tr = document.createElement("tr");
    tdID = document.createElement("td");
    tdID.innerHTML = employee.id;
    tr.appendChild(tdID);
    addBody.appendChild(tr);
    tdName = document.createElement("td");
    tdName.innerHTML = employee.name;
    tr.appendChild(tdName);
    tdRole = document.createElement("td");
    tdRole.innerHTML = role.name;
    tr.appendChild(tdRole);
    tdSalary = document.createElement("td");
    tdSalary.innerHTML = employee.salary;
    tr.appendChild(tdSalary);
  }
}

var fieldSelect = document.querySelectorAll(".rolesFieldset");
function rolesOptions() {
  for (const role of roles) {
    for (let i = 0; i < fieldSelect.length; i++) {
      initMultipleFieldSet(fieldSelect[i]);
    }

    function initMultipleFieldSet(fs) {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = role.id;
      checkbox.value = role.id;
      checkbox.className = role.id;
      checkbox.name = role.id;
      checkbox.checked = false;
      checkbox.onchange = testaCheckbox;

      const label = document.createElement("label");
      label.innerHTML = `${role.name} <br>`;

      fs.appendChild(checkbox);
      fs.appendChild(label);
    }
  }
}

function showError(message, error) {
  document.getElementById("errors").textContent = message;
  if (error) {
    console.error(error);
  }
}

function sortEmployees() {
  nameAscending = false;
  let value = select.options[select.selectedIndex].value;
  switch (value) {
    case "a":
      employeesFiltered.sort((i1, i2) => {
        if (i1.name < i2.name) {
          return -1;
        } else if (i1.name > i2.name) {
          return 1;
        } else {
          return 0;
        }
      });
      addTable.innerHTML = "";
      createTable();
      break;

    case "b":
      nameAscending = false;
      employeesFiltered.sort((i1, i2) => {
        if (i1.name < i2.name) {
          return 1;
        } else if (i1.name > i2.name) {
          return -1;
        } else {
          return 0;
        }
      });
      addTable.innerHTML = "";

      createTable();
      break;

    case "c":
      employeesFiltered.sort((i1, i2) => {
        if (i1.salary < i2.salary) {
          return -1;
        } else if (i1.salary > i2.salary) {
          return 1;
        } else {
          return 0;
        }
      });
      addTable.innerHTML = "";
      createTable();
      break;

    case "d":
      employeesFiltered.sort((i1, i2) => {
        if (i1.salary > i2.salary) {
          return -1;
        } else if (i1.salary < i2.salary) {
          return 1;
        } else {
          return 0;
        }
      });
      addTable.innerHTML = "";
      createTable();
      break;

    default:
      employeesFiltered.sort((i1, i2) => {
        if (i1.name < i2.name) {
          return -1;
        } else if (i1.name > i2.name) {
          return 1;
        } else {
          return 0;
        }
      });
      addTable.innerHTML = "";
      createTable();
      break;
  }
}

function testaCheckbox() {
  let countEmployees = document.getElementById("countEmployees");
  let checkbox1 = document.getElementById("1");
  let checkbox2 = document.getElementById("2");
  let checkbox3 = document.getElementById("3");
  let checkbox4 = document.getElementById("4");
  let checkbox5 = document.getElementById("5");
  let checkbox6 = document.getElementById("6");
  let checkbox7 = document.getElementById("7");
  let checkbox8 = document.getElementById("8");
  let checkbox9 = document.getElementById("9");
  let checkbox10 = document.getElementById("10");
  let checkbox11 = document.getElementById("11");
  let checkbox12 = document.getElementById("12");

  let dataAdministrator = [];
  let juniorDevopsEngineer = [];
  let juniorQAAnalyst = [];
  let juniorWebDesigner = [];
  let juniorWebDeveloper = [];
  let seniorDevopsEngineer = [];
  let seniorQAAnalyst = [];
  let seniorWebDesigner = [];
  let seniorWebDeveloper = [];
  let networkAdministrator = [];
  let projectManager = [];
  let dataAnalyst = [];

  if (
    !checkbox1.checked &&
    !checkbox2.checked &&
    !checkbox3.checked &&
    !checkbox4.checked &&
    !checkbox5.checked &&
    !checkbox6.checked &&
    !checkbox7.checked &&
    !checkbox8.checked &&
    !checkbox9.checked &&
    !checkbox10.checked &&
    !checkbox11.checked &&
    !checkbox12.checked
  ) {
    nameAscending = true;
    addTable.innerHTML = "";
    employeesFiltered = employees;
    createTable();
    countEmployees.innerHTML = `Employees (${employeesFiltered.length})`;
  } else {
    if (checkbox1.checked) {
      dataAdministrator = employees.filter((item) => item.role_id == "1");
    } else {
      dataAdministrator = [];
    }
    if (checkbox2.checked) {
      seniorQAAnalyst = employees.filter((item) => item.role_id == "2");
    } else {
      seniorQAAnalyst = [];
    }
    if (checkbox3.checked) {
      juniorQAAnalyst = employees.filter((item) => item.role_id == "3");
    } else {
      juniorQAAnalyst = [];
    }
    if (checkbox4.checked) {
      seniorWebDesigner = employees.filter((item) => item.role_id == "4");
    } else {
      seniorWebDesigner = [];
    }
    if (checkbox5.checked) {
      juniorWebDesigner = employees.filter((item) => item.role_id == "5");
    } else {
      juniorWebDesigner = [];
    }
    if (checkbox6.checked) {
      juniorWebDeveloper = employees.filter((item) => item.role_id == "6");
    } else {
      juniorWebDeveloper = [];
    }
    if (checkbox7.checked) {
      seniorWebDeveloper = employees.filter((item) => item.role_id == "7");
    } else {
      seniorWebDeveloper = [];
    }
    if (checkbox8.checked) {
      dataAnalyst = employees.filter((item) => item.role_id == "8");
    } else {
      dataAnalyst = [];
    }
    if (checkbox9.checked) {
      juniorDevopsEngineer = employees.filter((item) => item.role_id == "9");
    } else {
      juniorDevopsEngineer = [];
    }
    if (checkbox10.checked) {
      seniorDevopsEngineer = employees.filter((item) => item.role_id == "10");
    } else {
      seniorDevopsEngineer = [];
    }
    if (checkbox11.checked) {
      networkAdministrator = employees.filter((item) => item.role_id == "11");
    } else {
      networkAdministrator = [];
    }
    if (checkbox12.checked) {
      projectManager = employees.filter((item) => item.role_id == "12");
    } else {
      projectManager = [];
    }
    if (
      checkbox1.checked ||
      checkbox2.checked ||
      checkbox3.checked ||
      checkbox4.checked ||
      checkbox5.checked ||
      checkbox6.checked ||
      checkbox7.checked ||
      checkbox8.checked ||
      checkbox9.checked ||
      checkbox10.checked ||
      checkbox11.checked ||
      checkbox12.checked
    ) {
      employeesFiltered = [
        ...dataAdministrator,
        ...seniorQAAnalyst,
        ...juniorQAAnalyst,
        ...seniorWebDesigner,
        ...juniorWebDesigner,
        ...juniorWebDeveloper,
        ...seniorWebDeveloper,
        ...dataAnalyst,
        ...juniorDevopsEngineer,
        ...seniorDevopsEngineer,
        ...networkAdministrator,
        ...projectManager,
      ];
      addTable.innerHTML = "";
      createTable();
      countEmployees.innerHTML = `Employees (${employeesFiltered.length})`;
    }
  }
}
