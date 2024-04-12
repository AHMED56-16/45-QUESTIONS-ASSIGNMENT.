var userNames = ["admin", "Babar Azam", "Sain Ayub", "Naseem Shah", "M Rizwan"];
userNames.forEach(function (userName) {
    if (userName == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userName, ", thank you for logging in again."));
    }
});
