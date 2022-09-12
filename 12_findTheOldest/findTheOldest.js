const findTheOldest = function(people) {
    return people.reduce((prevPerson, curPerson) => {
        const currentYear = (new Date()).getFullYear();
        const prevPersonAge = prevPerson.yearOfDeath ? 
                              prevPerson.yearOfDeath - prevPerson.yearOfBirth : 
                              currentYear - prevPerson.yearOfBirth;
        const curPersonAge = curPerson.yearOfDeath ? 
                             curPerson.yearOfDeath - curPerson.yearOfBirth :
                             currentYear - curPerson.yearOfBirth;
        return prevPersonAge < curPersonAge ? curPerson : prevPerson;
    })
};

// Useful array methods: sort(), reduce(), 

// Do not edit below this line
module.exports = findTheOldest;
