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

let option;

while (true) {

    option = prompt("Choose an option: first | last | all | new | quit");

    if (option === "first") {

        let firstContact = contacts[0];
        console.log("First Contact:");
        console.log(firstContact.name, firstContact.phone, firstContact.email);

    } else if (option === "last") {

        let lastContact = contacts[contacts.length - 1];
        console.log("Last Contact:");
        console.log(lastContact.name, lastContact.phone, lastContact.email);

    } else if (option === "all") {

        console.log("All Contacts:");
        for (let i = 0; i < contacts.length; i++) {
            console.log(
                contacts[i].name,
                contacts[i].phone,
                contacts[i].email
            );
        }

    } else if (option === "new") {

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
        } else {
            console.log("Error: All fields are required. Contact not added.");
        }

    } else if (option === "quit") {

        console.log("Program ended.");
        break;

    } else {

        console.log("Invalid option selected.");

    }
}