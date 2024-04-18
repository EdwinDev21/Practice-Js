const API_URl = "https://api.adviceslip.com";

document.getElementById("adviceButoon").addEventListener("click", function () {
  fetch(`${API_URl}/advice`)
    .then((res) => res.json())
    .then((data) => {
      const advice = data.slip.advice;
      const titleId = data.slip.id;
      document.getElementById("paragraph").textContent = advice;
      document.getElementById("title").textContent = "advice #" + titleId;
    })
    .catch((error) => {
      console.error("Ha ocurrido un error:", error);
    });
});
