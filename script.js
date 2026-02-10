const URL1 = "https://openlibrary.org/search.json?subject=computer_science";
const URL2 = "https://openlibrary.org/search.json?subject=mathematics";
const URL3 = "https://openlibrary.org/search.json?subject=science";
const URL4 = "https://openlibrary.org/search.json?subject=social_science";
const URL5 = "https://openlibrary.org/search.json?subject=english";

const booksRow = document.querySelector("#booksRow");
const subjectDropdown = document.querySelector("#subject-dropdown");
const books = document.querySelector("#books");
const loadingText = document.querySelector("#loadingText");
const submittBtn = document.querySelector("#submittBtn");
const studyForm = document.querySelector("#studyForm");

const clearBooks = () => {
  books.innerHTML =
    '<option value=""selected disabled hidden> Select a book</option>';
};
subjectDropdown.addEventListener("change", (e) => {
  booksRow.style.display = "block";
  clearBooks();
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
  loadingText.style.display = "inline";
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
  loadingText.style.display = "none";
};
const getData2 = async () => {
  loadingText.style.display = "inline";
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
  loadingText.style.display = "none";
};
const getData3 = async () => {
  loadingText.style.display = "inline";
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
  loadingText.style.display = "none";
};
const getData4 = async () => {
  loadingText.style.display = "inline";
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
  loadingText.style.display = "none";
};
const getData5 = async () => {
  loadingText.style.display = "inline";
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
  loadingText.style.display = "none";
};
studyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let dataFromForm = new FormData(studyForm);
  const data = {
    Subjects: dataFromForm.get("subject-dropdown"),
    Books: dataFromForm.get("books"),
    Description: dataFromForm.get("textArea"),
    PriorityLevel: dataFromForm.get("priorityLevel"),
    EstimatedTime: dataFromForm.get("estimatedTime"),
  };
  console.log("User submitted data:", data);
  alert("Form submitted successfully");
});
