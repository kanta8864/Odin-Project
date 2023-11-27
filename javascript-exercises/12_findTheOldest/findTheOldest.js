const findTheOldest = function(people) {
    let sorted = people.sort((a,b)=> {
        let aAge = 0;
        let bAge = 0;
        if(!a.yearOfDeath) {
            aAge = 2023 - a.yearOfBirth;
        }else {
            aAge = a.yearOfDeath - a.yearOfBirth;
        }
        if(!b.yearOfDeath) {
            bAge = 2023 - b.yearOfBirth;
        }else {
            bAge = b.yearOfDeath - b.yearOfBirth;
        }
        return aAge > bAge ? -1 : 1;
    });
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
