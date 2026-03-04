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

// show a single contact by index
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

// show all contacts
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

// add a new contact
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

let action = prompt(
  "Choose an action:\n" +
  "1 - Show all contacts\n" +
  "2 - Show a contact\n" +
  "3 - Add a new contact\n" +
  "4 - Exit"
);

if (action === "1") {
  showAllContacts(contacts);

} else if (action === "2") {
  let index = parseInt(prompt("Enter contact index (starting from 1):"));
  showContact(contacts, index - 1);

} else if (action === "3") {
  let name = prompt("Enter name:");
  let phone = prompt("Enter phone:");
  let email = prompt("Enter email:");
  addNewContact(contacts, name, phone, email);

} else if (action === "4") {
  console.log("Program exited.");

} else {
  console.log("Invalid option selected.");
}