(function () {
  var menuBtn = document.querySelector("[data-menu-toggle]");
  var mobileNav = document.querySelector("[data-mobile-nav]");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  var form = document.querySelector("[data-contact-form]");
  if (!form) return;

  var status = document.querySelector("[data-form-status]");
  var submit = form.querySelector("[type='submit']");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var honeypot = form.querySelector("[name='company']");
    if (honeypot && honeypot.value) {
      showThanks();
      return;
    }

    if (!form.reportValidity()) return;

    var action = (window.COLO && window.COLO.formAction) || "";
    var data = new FormData(form);

    if (!action) {
      showThanks();
      return;
    }

    if (submit) {
      submit.disabled = true;
      submit.textContent = "Sending…";
    }

    fetch(action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then(function (response) {
        if (!response.ok) throw new Error("Form error");
        showThanks();
      })
      .catch(function () {
        if (submit) {
          submit.disabled = false;
          submit.textContent = "Send message";
        }
        window.alert("Something went wrong sending the form. Please try again, or write to me directly.");
      });
  });

  function showThanks() {
    form.hidden = true;
    if (status) status.classList.add("is-visible");
  }
})();
