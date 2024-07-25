let users = document.querySelector(".users")

fetch("https://randomuser.me/api/")
.then(function(res){
    return res.json()
})
.then(function(data){
 let results = data.results;
let user = results[0];

let email = user.email;
let phone = user.phone;
let name = `${user.name.title} ${user.name.first} ${user.name.last}`;
let addres =`${user.location.street.number} ${user.location.street.name} ${user.location.country}`;
let image = user.picture.large;


let div = document.createElement("div");
let h1 = document.createElement("h1");
let h2 = document.createElement("h2")
let h3 = document.createElement("h3")
let img = document.createElement("img");

img.src = image;
h1.textContent = name;
h2.textContent = email;
h3.textContent = phone;

div.appendChild(h1);
div.appendChild(h2);
div.appendChild(h3);
div.insertAdjacentElement('afterbegin', img)

users.appendChild(div);
})