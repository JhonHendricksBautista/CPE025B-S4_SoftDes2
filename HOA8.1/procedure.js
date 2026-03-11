// Vehicle Class
class Vehicle {
    constructor(id, type) {
        this.id = id;            // Unique ID
        this.type = type;        // Type of vehicle 
        this.isDeployed = false; // Deployment 
    }
}


class FleetManager {
    constructor() {
        this.vehicles = []; 
    }


    addVehicle(vehicle) {
        if (vehicle instanceof Vehicle) {
            this.vehicles.push(vehicle);
        } else {
            console.warn("Only Vehicle instances can be added!");
        }
    }

  
    deployVehicle(id) {
        const vehicle = this.vehicles.find(v => v.id === id);
        if (vehicle) {
            vehicle.isDeployed = true;
            return vehicle;
        } else {
            return undefined; 
        }
    }


    getAvailableVehicles() {
        return this.vehicles.filter(v => !v.isDeployed);
    }
}


console.log("CREATING TRUCK");
const testVehicle = new Vehicle("V01", "Truck");
console.log(testVehicle);



console.log("\nINSERT NEW VEHICLE IN FLEET");
const fleet = new FleetManager();
fleet.addVehicle(testVehicle);
fleet.addVehicle(new Vehicle("V02", "Van"));
fleet.addVehicle(new Vehicle("V03", "Drone"));
console.log(fleet.vehicles.length);



console.log("\nDEPLOYING VEHICLE");
fleet.deployVehicle("V02");
const deployedVehicle = fleet.vehicles.find(v => v.id === "V02");
console.log(deployedVehicle.isDeployed);



console.log("\nGETTTING NUMBER OF");
const available = fleet.getAvailableVehicles();
console.log(available.length);
// Expect: 2
console.log(available.map(v => v.id));
// Expect: [ 'V01', 'V03' ]