const express = require("express");
const res = require("express/lib/response");
const app = express(); 
const PORT = 1738;
const { faker } = require('@faker-js/faker');

class User {
    constructor () {
        this.password = faker.internet.password();
        this.email = faker.internet.email();
        this.phone_number = faker.phone.phoneNumber();
        this.last_name = faker.name.lastName();
        this.first_name = faker.name.firstName();
        this._id = faker.random.numeric(10);
    }
}

class Company {
    constructor () {
        this._id = faker.random.numeric(9);
        this.name = faker.company.companyName();
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zip_code = faker.address.zipCode();
        this.country = faker.address.country();
    }
}


//---------------------------------
// MIDDLEWARE 
app.use(express.json(), express.urlencoded({extended:true}));


app.get("/api/users/new", (req, res) =>{
    res.json(new User());
    })


app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
    })

app.get("/api/user/company", (req, res) => {
    const user = new User();
    const company = new Company();
    const userAndCompany = {user, company};
    res.json(userAndCompany);
});

console.log("hello")



// ---- ALWAYS at the end of the file
// STARTS THE SERVER 

app.listen(PORT, () => {
    console.log(`SERVER UP ON port: ${PORT} and is listening for REQuests to RESpond to <<<`);
})