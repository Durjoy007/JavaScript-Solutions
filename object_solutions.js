// FIND A VALUE FROM A NESTED OBJECT

var someObject = {
    friends : [
        {name: "Malfoy"},
        {name: "Sumon"},
        {name: "Niloy"}
    ],
    color: 'baby blue',
    isEvil: true
}

someObject.friends[0].name;