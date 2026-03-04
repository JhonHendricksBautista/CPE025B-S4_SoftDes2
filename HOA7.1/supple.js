let contacts = [
  {
    name: "Linus Torvalds",
    role: "System Admin",
    skills: ["Linux", "Git", "Kernels"],
    availability: true
  },
  {
    name: "Ada Lovelace",
    role: "Logic Analyst",
    skills: ["Algorithms", "Math", "Analytics"],
    availability: false
  },
  {
    name: "Alan Turing",
    role: "Cryptographer",
    skills: ["Logic", "Enigma", "Security"],
    availability: true
  }
];


function showContact(contactList) {
  let index = prompt("Enter contact index (0-" + (contactList.length - 1) + "):");

  if (index === null) return; // error check

  index = Number(index);

  if (!isNaN(index) && index >= 0 && index < contactList.length) {

    console.log("Contact Found:");
    console.log("Name:", contactList[index].name);
    console.log("Role:", contactList[index].role);
    console.log("First Skill:", contactList[index].skills[0]); // first skill index

  } else {
    console.log("Invalid index.");
  }
}


function showAllContacts(contactList) {
  console.log("All Contacts:");
  for (let i = 0; i < contactList.length; i++) {
    console.log(contactList[i].name); // print lang
  }
}


function addContact(contactList) {
  let name = prompt("Enter Name:");
  let role = prompt("Enter Role:");
  let skill = prompt("Enter a Skill:");

  if (!name || !role || !skill) {
    console.log("Error: All fields must be filled."); // checker of empty fields
    return;
  }

  contactList.push({
    name: name,
    role: role,
    skills: [skill],
    availability: true
  });

  console.log("Contact added successfully.");
}


function searchContact(contactList) {
  let searchName = prompt("Enter name to search:");
  if (!searchName) return;

  let found = false;

  for (let i = 0; i < contactList.length; i++) {
    if (contactList[i].name.toLowerCase() === searchName.toLowerCase()) {
      console.log("Contact Found:");
      console.log("Role:", contactList[i].role);
      console.log(
        "Status:",
        contactList[i].availability ? "Available" : "Busy"
      );

      found = true;
      break;
    }
  }

  if (!found) {
    console.log("Contact not found.");
  }
}


// while loops for no end 
while (true) {

  let option = prompt(
    "Choose an action:\n" +
    "show - Show a contact\n" +
    "all - Show all contacts\n" +
    "add - Add new contact\n" +
    "search - Search by name\n" +
    "quit - Exit program"
  );

  if (option === null) continue;

  if (option === "show") {
    showContact(contacts);

  } else if (option === "all") {
    showAllContacts(contacts);

  } else if (option === "add") {
    addContact(contacts);

  } else if (option === "search") {
    searchContact(contacts);

  } else if (option === "quit") {
    alert("PROGRAM END");
    break;

  } else {
    console.log("Invalid option.");
  }
}