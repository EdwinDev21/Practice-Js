// Esta función se ejecuta cuando el contenido HTML ha sido completamente cargado y analizado
document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar elementos del DOM
  const elementLDay = document.getElementById("idDay");
  const elementLMonth = document.getElementById("idMonth");
  const elementLYear = document.getElementById("idYear");

  const elementIDay = document.getElementById("day");
  const elementIMonth = document.getElementById("month");
  const elementIYear = document.getElementById("year");

  const elementSDay = document.getElementById("reqrd1");
  const elementSMonth = document.getElementById("reqrd2");
  const elementSYear = document.getElementById("reqrd3");

  // Función para verificar si los campos están vacíos y mostrar mensajes de error
  function showEmptyError() {
    let day = elementIDay.value.trim();
    let month = elementIMonth.value.trim();
    let year = elementIYear.value.trim();

    let isEmpty = false;

    // Validar si el campo de día está vacío
    if (day === "") {
      elementLDay.style.color = "red";
      elementIDay.style.borderColor = "red";
      elementSDay.innerText = "The field is required";
      elementSDay.style.display = "block";
      isEmpty = true;
    } else {
      elementLDay.style.color = "";
      elementIDay.style.borderColor = "";
      elementSDay.style.display = "none";
    }

    // Validar si el campo de mes está vacío
    if (month === "") {
      elementLMonth.style.color = "red";
      elementIMonth.style.borderColor = "red";
      elementSMonth.innerText = "The field is required";
      elementSMonth.style.display = "block";
      isEmpty = true;
    } else {
      elementLMonth.style.color = "";
      elementIMonth.style.borderColor = "";
      elementSMonth.style.display = "none";
    }

    // Validar si el campo de año está vacío
    if (year === "") {
      elementLYear.style.color = "red";
      elementIYear.style.borderColor = "red";
      elementSYear.innerText = "The field is required";
      elementSYear.style.display = "block";
      isEmpty = true;
    } else {
      elementLYear.style.color = "";
      elementIYear.style.borderColor = "";
      elementSYear.style.display = "none";
    }

    return !isEmpty;
  }

  // Función para validar si la fecha ingresada es válida
  function validateDate() {
    let day = parseInt(elementIDay.value);
    let month = parseInt(elementIMonth.value);
    let year = parseInt(elementIYear.value);

    let checkDayValid = false;
    let checkMonthValid = false;
    let checkYearValid = false;

    // Validar el día
    if (day >= 1 && day <= 31) {
      checkDayValid = true;
    } else {
      elementSDay.innerText = "Invalid date";
      elementSDay.style.display = "block";
    }

    // Validar el mes
    if (month >= 1 && month <= 12) {
      checkMonthValid = true;
    } else {
      elementSMonth.innerText = "Invalid date";
      elementSMonth.style.display = "block";
    }

    // Validar el año
    if (year >= 1 && year <= 2024) {
      checkYearValid = true;
    } else {
      elementSYear.innerText = "Invalid date";
      elementSYear.style.display = "block";
    }

    return checkDayValid && checkMonthValid && checkYearValid;
  }

  // Función para realizar la operación de cálculo de la edad
  function operation() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();

    let inputDay = parseInt(elementIDay.value);
    let inputMonth = parseInt(elementIMonth.value);
    let inputYear = parseInt(elementIYear.value);

    let ageYear = currentYear - inputYear;
    let ageMonth = currentMonth - inputMonth;
    let ageDay = currentDay - inputDay;

    // Validar la fecha antes de realizar el cálculo
    if (validateDate()) {
      if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
        ageYear--;
        ageMonth += 12;
      }
      if (ageDay < 0) {
        ageMonth--;
        let daysInLastMonth = new Date(
          currentYear,
          currentMonth - 1,
          0
        ).getDate();
        ageDay += daysInLastMonth;
      }
      console.log("Día: ", ageDay, "Mes: ", ageMonth, "Año: ", ageYear);
      document.getElementById("dayfinal").innerHTML = ageDay;
      document.getElementById("monthfinal").innerHTML = ageMonth;
      document.getElementById("yearfinal").innerHTML = ageYear;
    } else {
      console.error("Error en las fechas");
    }
  }

  // Evento para el botón de calcular
  document
    .getElementById("calculateButton")
    .addEventListener("click", function () {
      // Verificar si los campos están vacíos y validar la fecha antes de realizar el cálculo
      showEmptyError();
      validateDate();
      operation();
    });
});
