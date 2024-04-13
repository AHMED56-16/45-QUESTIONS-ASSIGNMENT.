let currentUsername: string[] = ["Babar azam", "saim ayub", "fakhar", "rizwan", "naseem"];
let newUsername: string[] = ["babar azam", "shaheen", "shahdab", "haris", "naseem"];

newUsername.forEach((newUsers) => {
  if (
    currentUsername.some(
      (currentUsername) => currentUsername.toLowerCase() === newUsers.toLowerCase()
    )
  ) {
    console.log(`${newUsers} as a user name is not available,enter a new username.`);
  } else {
    console.log(`${newUsers} as a user name is available.`);
  }
});