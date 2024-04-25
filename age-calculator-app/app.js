const elementLDay = document.getElementById("idDay");
const elementLMonth = document.getElementById("idMonth");
const elementLYear = document.getElementById("idYear");

const elementIDay = document.getElementById("day");
const elementIMonth = document.getElementById("month");
const elementIYear = document.getElementById("year");

const elementSDay = document.getElementById("reqrd1");
const elementSMonth = document.getElementById("reqrd2");
const elementSYear = document.getElementById("reqrd3");

let checkDay;
let checkMonth;
let checkYear;

let checkDayValid;
let checkMonthValid;
let checkYearValid;

let totalResult;

let correctDates;

function showEmptyError() {
  if (document.getElementById("day").value == "") {
    elementLDay.stayle.display = "block";
    elementLDay.style.color = "red";
    elementIDay.style.border = "1px solid red";
    checkDay = false;
  } else {
    elementLDay.stayle.display = "";
    elementLDay.style.color = "";
    elementIDay.style.border = "";
    checkDay = true;
  }

  if (document.getElementById("month").value == "") {
    elementLMonth.stayle.display = "block";
    elementLMonth.style.color = "red";
    elementIMonth.style.border = "1px solid red";
    checkMonth = false;
  } else {
    elementLMonth.stayle.display = "";
    elementLMonth.style.color = "";
    elementIMonth.style.border = "";
    checkMonth = true;
  }

  if (document.getElementById("year").value == "") {
    elementLYear.stayle.display = "block";
    elementLYear.style.color = "red";
    elementIYear.style.border = "1px solid red";
    checkYear = false;
  } else {
    elementLYear.stayle.display = "";
    elementLYear.style.color = "";
    elementIYear.style.border = "";
    checkYear = true;
  }

  if (checkDay === true && checkMonth === true && checkYear === true) {
    console.log("los espacios esta completados");
    totalResult = true;
  } else {
    console.log("los espacios no esta completados");
    totalResult = false;
  }
}

function dayValid() {
  elementSDay.style.display = "block";
  elementLDay.style.color = "red";
  elementIDay.style.border = "1px solid red";
  elementSDay.innerText = "Must be a valid Day";
}

function montValid() {
  elementSMonth.style.display = "block";
  elementLMonth.style.color = "red";
  elementIMonth.style.border = "1px solid red";
  elementSMonth.innerText = "Must be a valid Month";
}

function yearValid() {
  elementSYear.style.display = "block";
  elementLYear.style.color = "red";
  elementIYear.style.border = "1px solid red";
  elementSYear.innerText = "Must be a valid Year";
}

function date() {
  let day = elementIDay.value;
  let month = elementIMonth.value;
  let year = elementIYear.value;

  if (totalResult === true) {
    console.log("lest Go!");
    if (
      month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 12
    ) {
      if (day >= 1 && day <= 31) {
        console.log("day ok");
        checkDayValid = true;
      } else {
        console.log("day is not ok");
        dayValid();
        checkDayValid = false;
      }
    }
    if (month == 4 || month == 6 || month == 9 || month == 11) {
      if (day >= 1 && day <= 30) {
        console.log("day ok");
        checkDayValid = true;
      } else {
        console.log("day is not ok");
        dayValid();
        checkDayValid = false;
      }
    }
    if (month >= 1 && month <= 12) {
      console.log("month ok");

      checkDayValid = true;
    } else {
      console.log("month is not ok");
      montValid();
      checkDayValid = false;
    }
    if (year >= 1 && year <= 2024) {
      console.log("year ok");
      checkYearValid = true;
    } else {
      console.log("year is not ok");
      yearValid();
      checkYearValid = false;
    }
  }
  if (
    checkDayValid === true &&
    checkMonthValid === true &&
    checkYearValid === true
  ) {
    console.log("Correct dates");
    correctDates = true;
  } else {
    console.log("invalid dates");
    correctDates = false;
  }
}
