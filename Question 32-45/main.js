var currentUsername = ["Babar azam", "saim ayub", "fakhar", "rizwan", "naseem"];
var newUsername = ["babar azam", "shaheen", "shahdab", "haris", "naseem"];
newUsername.forEach(function (newUsers) {
    if (currentUsername.some(function (currentUsername) { return currentUsername.toLowerCase() === newUsers.toLowerCase(); })) {
        console.log("".concat(newUsers, " as a user name is not available,enter a new username."));
    }
    else {
        console.log("".concat(newUsers, " as a user name is available."));
    }
});
