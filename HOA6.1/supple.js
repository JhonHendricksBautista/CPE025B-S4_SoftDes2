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

    option = prompt("Choose: show | all | add | search | quit");
    if (option === null) {
        console.log("Returning to main menu");
        continue;
    }

    option = option.toLowerCase();
    if (option === "show") {

        let index = prompt("Select contact index (0-" + (contacts.length - 1) + "):");

        if (index === null) {
            continue;
        }

        index = Number(index);

        if (!isNaN(index) && index >= 0 && index < contacts.length) {

            console.log("Contact Found:");
            console.log(
                contacts[index].name,
                contacts[index].phone,
                contacts[index].email
            );

        } else {
            console.log("Invalid index.");
        }

    }

    else if (option === "all") {
        console.log("All Contacts:");
        for (let i = 0; i < contacts.length; i++) {
            console.log(
                i + ":",
                contacts[i].name,
                contacts[i].phone,
                contacts[i].email
            );
        }

    }

    else if (option === "add") {
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
            console.log("All fields are required | Contact not added.");
        }
    }

    else if (option === "search") {

        let searchName = prompt("Enter name to search:");
        if (!searchName) {
            continue;
        }

        let found = false;

        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].name.toLowerCase() === searchName.toLowerCase()) {
                console.log("Contact Found:");
                console.log(
                    contacts[i].name,
                    contacts[i].phone,
                    contacts[i].email
                );
                found = true;
                break;
            }
        }

        if (!found) {
            console.log("Contact not found.");
        }

    }

    else if (option === "quit") {
        console.log("Program ended.");
        break;

    }

    else {
        console.log("Invalid option selected.");
    }
}