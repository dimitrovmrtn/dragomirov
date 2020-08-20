document.addEventListener("DOMContentLoaded", function () {
  [...document.getElementsByClassName("sideMenuItem")].forEach((item) =>
    item.addEventListener("click", () =>
      document.querySelector(".toggler").click()
    )
  );
  // [...document.getElementsByClassName("menuItem")].forEach((item) =>
  //   item.addEventListener("click", () =>
  //     document.querySelector(".toggler").click()
  //   )
  // );
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
    document
      .querySelector(".dropdown-content")
      .classList.toggle("mobileDropDown");
    document.querySelector(
      ".dropdown-content"
    ).style.top = `calc(55vh + ${window.pageYOffset}px)`;
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
  // links.forEach(link => link.addEventListener('ontouchend', () => link.removeClass('hover')))
});
