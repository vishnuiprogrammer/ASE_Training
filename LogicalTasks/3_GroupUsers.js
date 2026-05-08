const users = [
    { name: "Anil", role: "Admin" },
    { name: "Sunil", role: "User" },
    { name: "Rita", role: "Admin" },
    { name: "Karan", role: "User" },
    { name: "Pooja", role: "Manager" }
];

// Created object of roles to store usernames.
const roles = {
    Admin: [],
    User: [],
    Manager: []
}
function groupUsersByRole() {
    // Iterate user one after another & checking their role then according to that adding into the roles object.
    users.forEach(user => {
        if (user.role == "Admin") {
            roles.Admin.push(user.name);
        } else if (user.role == "User") {
            roles.User.push(user.name);
        } else {
            roles.Manager.push(user.name);
        }
    });
}

groupUsersByRole();

console.log(roles);