const students = [
    {id: 21, name:'Omar Sunny'},
    {id: 31, name:'Mannaa'},
    {id: 41, name:'Moyuri'},
    {id: 71, name:'DeepJol'},
];

const names = students.map(s => s.name);
const idS = students.map(s => s.id);
// Filter will return all matching element 
// Find will return only the first matching element
const bigger = students.filter(s => s.id>40);
const biggerOne = students.find(s => s.id>40);
console.log(biggerOne);