document.addEventListener("DOMContentLoaded", function () {
  [...document.getElementsByClassName("sideMenuItem")].forEach((item) =>
    item.addEventListener("click", () =>
      document.querySelector(".toggler").click()
    )
  );
  document
    .querySelector(".toggler")
    .addEventListener("click", () =>
      document
        .querySelector(".dropdown-content")
        .classList.remove("mobileDropDown")
    );
  document.querySelector(".dropdown-content").firstChild.remove();
  document.querySelector("#dropdown").addEventListener("mouseover", () => {
    document.querySelector(".dropdown-content").style.display = "block";
    document.querySelector(".dropdown-content").style.top = `${
      145 + window.pageYOffset
    }px`;
  });

  document.querySelector(".fa-angle-down").addEventListener("click", () => {
    document.querySelector(".collapsed-content").classList.toggle("show");
  });

  document.querySelectorAll(".collapsible-question").forEach((el, index) => {
    el.addEventListener("click", () => {
      document.querySelector(`#answer-${index}`).classList.toggle("show");
    });
  });

  document
    .querySelector(".dropdown-content")
    .addEventListener(
      "mouseover",
      () =>
        (document.querySelector(".dropdown-content").style.display = "block")
    );
  document
    .querySelector("#dropdown")
    .addEventListener(
      "mouseout",
      () => (document.querySelector(".dropdown-content").style.display = "none")
    );
  document
    .querySelector(".dropdown-content")
    .addEventListener(
      "mouseout",
      () => (document.querySelector(".dropdown-content").style.display = "none")
    );
  let links = [...document.getElementsByTagName("a")];
});
