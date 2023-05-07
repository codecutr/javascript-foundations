//Meg Fryling

module.exports = {createHobbit, celebrateBirthday, getRing, meetPeople, findFriends
}

function createHobbit(name='unknown', age=0) {
    var hobbit = new Object(); //create empty js object
    hobbit.name = name; //add name property
    hobbit.age = age; //add age property
    //considered an adult at the age of 33
    if (hobbit.age >= 33){
        hobbit.isAdult = true;
    } else {
        hobbit.isAdult = false;
    }
    //considered old at the age of 101
    if (hobbit.age >= 101){
        hobbit.isOld = true;
    } else {
        hobbit.isOld = false;
    }
    hobbit.acquaintances=[];
    hobbit.friends=[];
    return hobbit; //return hobbit object
}

function celebrateBirthday(hobbit){
    hobbit.age++;
    //considered an adult at the age of 33
    if (hobbit.age >= 33){
        hobbit.isAdult = true;
    }
    //considered old at the age of 101
    if (hobbit.age >= 101) {
        hobbit.isOld = true;
    }
    return hobbit;
}

function getRing(hobbit)
{
    //should be able to get the ring if its name is Frodo
    if (hobbit.name=="Frodo"){
        return 'Here is the ring!';
    } else {
        return 'You can\'t have it!';
    }
}

function meetPeople(hobbit, people){
    for (let i = 0; i < people.length; i++) {
        // Declare object
        let acquaintance = {
            name: people[i].name,
            relationship: people[i].relationship
        };
        // Push 'acquaintance' object to 'acquaintances' array
        hobbit.acquaintances.push(acquaintance);
    }
    return hobbit;
}

function findFriends(hobbit){
    for (let i = 0; i < hobbit.acquaintances.length; i++) {
        if (hobbit.acquaintances[i].relationship=="friend"){
            hobbit.friends.push(hobbit.acquaintances[i].name);
        }
    }
    return hobbit.friends;
}
