//! for JSON we just only "Parse" & "Stringify"  for object notation
//? JavaScript Object Notation - JSON

/**
 * { id: 1, name: "Rusho Mrong", job: "Freelancer" } //! JavaScript Property
 * { "id": 1, "name": "Rusho Mrong", "job": "Freelancer" } //? JSON String Property Object
 */

const user = { id: 1, name: "Rusho Mrong", job: "Freelancer" };
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

const shop = {
  owner: "Alia",
  address: {
    street: "Kalurghat Bangladesh",
    city: "Dhaka",
    country: "BD",
  },

  products: ["laptop", "mic", "monitor", "keyboard"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};

console.log(shop);
const shopJSON = JSON.stringify(shop); //! JSON always need to write with capital letter
console.log(shopJSON);

const shopObj = JSON.parse;
console.log(shopObj);
