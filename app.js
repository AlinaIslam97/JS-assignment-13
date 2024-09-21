// Question 01

var itemsArray = [
  { name: "juice", price: "50", quantity: "3" },
  { name: "cookie", price: "30", quantity: "9" },
  { name: "shirt", price: "880", quantity: "1" },
  { name: "pen", price: "100", quantity: "2" }
];

var totalPrice = 0;

itemsArray.forEach(item => {
  var itemPrice = parseFloat(item.price);
  var itemQuantity = parseInt(item.quantity);
  var itemTotalPrice = itemPrice * itemQuantity;

  document.write(`Total price of ${item.name}: Rs. ${itemTotalPrice}<br>`);

  totalPrice += itemTotalPrice;
});

document.write(`Total price of all items: Rs. ${totalPrice}`);

// Question 02

var user = {
  name: "Jamshed Akram",
  email: "jamshed.akram@example.com",
  password: "securepassword123",
  age: 22,
  gender: "Male",
  city: "Karachi",
  country: "Pakistan"
};

if ('age' in user) {
  console.log("Age exists in the object: " + user.age);
} else {
  console.log("Age does not exist in the object.");
}

if ('country' in user) {
  console.log("Country exists in the object: " + user.country);
} else {
  console.log("Country does not exist in the object.");
}

if ('firstName' in user) {
  console.log("First Name exists in the object: " + user.firstName);
} else {
  console.log("First Name does not exist in the object.");
}

if ('lastName' in user) {
  console.log("Last Name exists in the object: " + user.lastName);
} else {
  console.log("Last Name does not exist in the object.");
}

// Question 03

function Student(name, age, gender, email) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.email = email;
}

var student1 = new Student("Alice", 22, "Female", "alice@example.com");
var student2 = new Student("Bob", 24, "Male", "bob@example.com");
var student3 = new Student("Charlie", 21, "Male", "charlie@example.com");

var students = [student1, student2, student3];

console.log("Student Records:");
students.forEach(function (student) {
  console.log("Name: " + student.name + ", Age: " + student.age + ", Gender: " + student.gender + ", Email: " + student.email);
});

// Question 04


function Person(name, gender, address, education, profession) {
  this.name = name;
  this.gender = gender;
  this.address = address;
  this.education = education;
  this.profession = profession;
}

function loadRecords() {
  var records = JSON.parse(localStorage.getItem("populationRecords")) || [];
  var recordList = document.getElementById("recordList");
  recordList.innerHTML = "";
  records.forEach(record => {
    var li = document.createElement("li");
    li.textContent = `${record.name}, ${record.gender}, ${record.address}, ${record.education}, ${record.profession}`;
    recordList.appendChild(li);
  });
}

document.getElementById("recordForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var address = document.getElementById("address").value;
  var education = document.getElementById("education").value;
  var profession = document.getElementById("profession").value;


  var newPerson = new Person(name, gender, address, education, profession);


  var records = JSON.parse(localStorage.getItem("populationRecords")) || [];
  records.push(newPerson);
  localStorage.setItem("populationRecords", JSON.stringify(records));


  this.reset();


  loadRecords();
});

loadRecords();

