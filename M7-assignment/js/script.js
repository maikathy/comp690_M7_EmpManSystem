// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById("addForm");
const employeeTable = document.getElementById("employees");
const employeeCount = document.getElementById("empCount");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;
employeeCount.textContent = count;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {

    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let extension = document.getElementById("extension").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = employeeTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell();
    let cellName = row.insertCell();
    let cellExtension = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDepartment = row.insertCell();
    let cellDelete = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExtension.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDepartment.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn btn-danger btn-sm";
    cellDelete.appendChild(deleteButton);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById("id").focus

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    employeeCount.textContent = count;
});

// DELETE EMPLOYEE
employeeTable.addEventListener('click', (e) => {
    // CHECK IF THE CLICKED ELEMENT IS A DELETE BUTTON
    if  (e.target.tagName === "BUTTON") {
        // CONFIRM DELETION
        let answer = confirm("Are you sure you want to delete this employee?");

        if (answer) {
            // GET THE ROW THAT HAS THE DELETE BUTTON
            let row = e.target.closest("tr");
            // DELETE THE SELECTED ROW
            employeeTable.deleteRow(row.rowIndex);
            
            count--;
            employeeCount.textContent = count;
        }
    } 
});