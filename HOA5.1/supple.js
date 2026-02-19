let directory = [{
        Name: "Leo Brooks",
        Role: "Designer",
        Skills: ["UI", "UX", "Figma"],
        Available: true
    },
    {
        Name: "Sasha Ivana",
        Role: "Developer",
        Skills: ["HTML", "CSS", "JS"],
        Available: false,
    },
    {
        Name: "Jordan Lee",
        Role: "Manager",
        Skills: ["Planning", "Agile"],
        Available: true
    }
];

let newPerson = {
    Name: "Casey Moore",
    Role: "QA Engineer",
    Skills: ["Testing", "Debugging"],
    Available: true
};

directory.push(newPerson);

console.log(directory.length);

directory[1].Available = true;

console.log(directory[1].Available);


console.log("Name of First Team Member: ", directory[0].Name, "First Skill", directory[0].Skills[0]);
console.log("Name of Last Team Member: ", directory[3].Name, "Number of Skills", directory[3].Skills.length);
console.log("Number of People Currently in the Directory: ", directory.length);