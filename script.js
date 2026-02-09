const URL1 = "https://openlibrary.org/search.json?subject=computer_science";
const URL2 = "https://openlibrary.org/search.json?subject=mathematics";
const URL3 = "https://openlibrary.org/search.json?subject=science";
const URL4 = "https://openlibrary.org/search.json?subject=social_science";
const URL5 = "https://openlibrary.org/search.json?subject=english";

const booksRow = document.querySelector("#booksRow");
const subjectDropdown = document.querySelector("#subject-dropdown");
const books = document.querySelector("#books");

const clearBooks = () => {};
subjectDropdown.addEventListener("change", (e) => {
  booksRow.style.display = "block";
  let subjectName = e.target.value;
  console.log(subjectName);

  if (subjectName === "computerScience") {
    getData1();
  } else if (subjectName === "maths") {
    getData2();
  } else if (subjectName === "science") {
    getData3();
  } else if (subjectName === "socialScience") {
    getData4();
  } else {
    getData5();
  }
});

const getData1 = async () => {
  let response = await fetch(URL1);
  console.log(response);
  let data = await response.json();
  console.log(data);
  for (let doc of data.docs) {
    console.log(doc.title);
    let bookOptions = document.createElement("option");
    bookOptions.value = doc.title;
    bookOptions.textContent = doc.title;
    books.appendChild(bookOptions);
  }
};
const getData2 = async () => {
  let response = await fetch(URL2);
  console.log(response);
  let data = await response.json();
  console.log(data);
  for (let doc of data.docs) {
    console.log(doc.title);
    let bookOptions = document.createElement("option");
    bookOptions.value = doc.title;
    bookOptions.textContent = doc.title;
    books.appendChild(bookOptions);
  }
};
const getData3 = async () => {
  let response = await fetch(URL3);
  console.log(response);
  let data = await response.json();
  console.log(data);
  for (let doc of data.docs) {
    console.log(doc.title);
    let bookOptions = document.createElement("option");
    bookOptions.value = doc.title;
    bookOptions.textContent = doc.title;
    books.appendChild(bookOptions);
  }
};
const getData4 = async () => {
  let response = await fetch(URL4);
  console.log(response);
  let data = await response.json();
  console.log(data);
  for (let doc of data.docs) {
    console.log(doc.title);
    let bookOptions = document.createElement("option");
    bookOptions.value = doc.title;
    bookOptions.textContent = doc.title;
    books.appendChild(bookOptions);
  }
};
const getData5 = async () => {
  let response = await fetch(URL5);
  console.log(response);
  let data = await response.json();
  console.log(data);
  for (let doc of data.docs) {
    console.log(doc.title);
    let bookOptions = document.createElement("option");
    bookOptions.value = doc.title;
    bookOptions.textContent = doc.title;
    books.appendChild(bookOptions);
  }
};
