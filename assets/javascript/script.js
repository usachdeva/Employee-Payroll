// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

let employeesArray = [];

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects

  let confirm1 = confirm("Do you want to add the details of the employee : ");

  do {
    let firstName = prompt("Enter the first name : ");
    firstName = firstName.toUpperCase();

    let lastName = prompt("Enter the last name : ");
    lastName = lastName.toUpperCase();

    let salary = Number(prompt("Enter the salary : "));

    if (salary > 0) {
      salary = salary;
    } else {
      salary = NaN;
    }

    employeesArray.push({ firstName, lastName, salary });

    let contData = confirm("Do you wish to continue to add :");

    if (contData) {
      confirm1 = true;
    } else {
      confirm1 = false;
    }
  } while (confirm1);

  return employeesArray;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let sum = 0;

  // sum of salaries
  employeesArray.forEach((element) => {
    sum += element.salary;
  });
  console.log(sum);

  // average of employees
  console.log(`The average salary : ${sum / employeesArray.length}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee

  let rando = Math.floor(Math.random() * employeesArray.length);
  let randomEmp = employeesArray[rando];

  console.log(`The data for the employee is : `);
  console.log(
    `first name - "${randomEmp.firstName}", last name - "${randomEmp.lastName}" with salary of $${randomEmp.salary}`
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
