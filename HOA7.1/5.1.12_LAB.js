let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
  }
];

function showContact(contactList, index) {
  if (!Array.isArray(contactList)) {
    console.log("Error: contacts should be an array.");
    return;
  }
  if (typeof index !== "number" || index < 0 || index >= contactList.length) {
    console.log("Error: invalid index.");
    return;
  }

  const contact = contactList[index];
  console.log(`Name: ${contact.name}`);
  console.log(`Phone: ${contact.phone}`);
  console.log(`Email: ${contact.email}`);
  console.log("-----------------------");
}


function showAllContacts(contactList) {
  if (!Array.isArray(contactList)) {
    console.log("Error: contacts should be an array.");
    return;
  }

  contactList.forEach((contact, i) => {
    console.log(`Contact #${i + 1}`);
    console.log(`Name: ${contact.name}`);
    console.log(`Phone: ${contact.phone}`);
    console.log(`Email: ${contact.email}`);
    console.log("-----------------------");
  });
}


function addNewContact(contactList, name, phone, email) {
  if (!Array.isArray(contactList)) {
    console.log("Error: contacts should be an array.");
    return;
  }
  if (!name || !phone || !email) {
    console.log("Error: all contact data must have a value.");
    return;
  }

  contactList.push({ name, phone, email });
  console.log(`Contact ${name} added successfully!`);
}

function sortContacts(contactList, key) {
  if (!Array.isArray(contactList)) {
    console.log("Error: contacts should be an array.");
    return;
  }

  if (!["name", "phone", "email"].includes(key)) {
    console.log("Error: Invalid sort option.");
    return;
  }

  contactList.sort((a, b) => a[key].localeCompare(b[key]));
  console.log(`Contacts sorted by ${key}.`);
}


let option = prompt(
  "Choose an option:\n1 - Show all contacts\n2 - Show one contact\n3 - Add new contact\n4 - Sort contacts"
);

switch (option) {
  case "1":
    showAllContacts(contacts);
    break;

  case "2":
    let index = parseInt(prompt("Enter contact index (starting from 0):"));
    showContact(contacts, index);
    break;

  case "3":
    let name = prompt("Enter name:");
    let phone = prompt("Enter phone:");
    let email = prompt("Enter email:");
    addNewContact(contacts, name, phone, email);
    break;

  case "4":
    let sortOption = prompt("Sort by: name, phone, or email?");
    sortContacts(contacts, sortOption);
    showAllContacts(contacts);
    break;

  default:
    console.log("Invalid option selected.");
}