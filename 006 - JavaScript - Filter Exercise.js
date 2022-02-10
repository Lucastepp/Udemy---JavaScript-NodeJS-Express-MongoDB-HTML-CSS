

// Filter exercise 
// Write a Function called validUserNames that accepts 
// an array of usernames. It should return a news array
// containing only the usernames that are less than 10 chars
 

function validUserNames(userNames) {
    const shortUserNames = userNames.filter(username => username.length < 10);
    return shortUserNames;
} 

validUserNames(['mark', 'sdasdsads', 'cici20202', 'asas22345', 'aavv'])