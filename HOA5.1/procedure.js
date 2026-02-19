// 2.0.15  LAB  Variables
let name1 = "Maxwell Wright";
let name2 = "Raja Villarreal";
let name3 = "Helen Richards";

let num1 = "(0191) 719 6495";
let num2 = "0866 389 2895";
let num3 = "0800 1111";

let mail1 = "Curabitur.egestas.nunc@nonummyac.co.uk";
let mail2 = "posuere.vulputate@sed.com";
let mail3 = "libero@convallis.edu";

console.log("Name: " + name1 + ' | ' + "Phone: "+ num1 + ' | ' + "Email: "+ mail1);
console.log("Name: " + name2 + ' | ' + "Phone: "+ num2 + ' | ' + "Email: "+ mail3);
console.log("Name: " + name3 + ' | ' + "Phone: "+ num3 + ' | ' + "Email: "+ mail3);



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

let newPerson = {
    name: "Maise Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
};

contacts.push(newPerson);


console.log("Name: ", contacts[0].name, " | ", "Phone: ", contacts[0].phone, " | ", "Email: ", contacts[0].email);
console.log("Name: ", contacts[3].name, " | ", "Phone: ", contacts[3].phone, " | ", "Email: ", contacts[3].email);
