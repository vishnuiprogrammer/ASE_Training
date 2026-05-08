const employees = [
    { name: "Rahul", salary: 50000 },
    { name: "Amit", salary: 70000 },
    { name: "Neha", salary: 65000 },
    { name: "Priya", salary: 80000 },
    { name: "Vikram", salary: 70000 }
];



function findSecondHighestSalary() {
    // Sorting the employees object based on their salary in descending order.
    employees.sort((a, b) => b.salary - a.salary); // O(n log n)


    // Storing first highest salary of employee
    let highestSalary = employees[0].salary;

    // Checking the second highest salary by comparing with highest salary. 
    for (let i = 1; i < employees.length; i++) {
        // Checking the second highest salary by comparing with highest salary. 
        if (employees[i].salary < highestSalary) {
            return employees[i].salary;
        }
    }

    // Returning the -1 if second highest salary not found.
    return -1;

}
let secondHighestSalary = findSecondHighestSalary();
console.log(secondHighestSalary);
