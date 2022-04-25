const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

let ol = document.createElement("ol");
for (let user of users) {
  console.log(user.firstName);
  let li = document.createElement("li");
  li.innerHTML = user.firstName + " " + user.lastName;
  li.classList.add(`${user.id}`);
  ol.appendChild(li);
}
document.body.appendChild(ol);
