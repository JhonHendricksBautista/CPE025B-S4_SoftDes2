let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let options = prompt("Choose an option: first | last | new");

if (options === "first") {

    let firstContact = contacts[0];
    console.log("First Contact:");
    console.log("Name:", firstContact.name);
    console.log("Phone:", firstContact.phone);
    console.log("Email:", firstContact.email);

} else if (options === "last") {

    let lastContact = contacts[contacts.length - 1];
    console.log("Last Contact:");
    console.log("Name:", lastContact.name);
    console.log("Phone:", lastContact.phone);
    console.log("Email:", lastContact.email);

} else if (options === "new") {

    let newName = prompt("Enter name:");
    let newPhone = prompt("Enter phone:");
    let newEmail = prompt("Enter email:");

    if (newName && newPhone && newEmail) {

        contacts.push({
            name: newName,
            phone: newPhone,
            email: newEmail
        });

        console.log("New contact added successfully!");
        console.log("Updated Contact List:", contacts);

    } else {
        console.log("All fields are required | Contact Not Added"); // error catching
    }

} else {
    console.log("Invalid Input."); // error catching
};