(function () {
  // INITIALIZATION OF HEADER
  // =======================================================
  new HSHeader("#header").init();

  // INITIALIZATION OF MEGA MENU
  // =======================================================
  new HSMegaMenu(".js-mega-menu", {
    desktop: {
      position: "left",
    },
  });

  // INITIALIZATION OF SHOW ANIMATIONS
  // =======================================================
  new HSShowAnimation(".js-animation-link");

  // INITIALIZATION OF BOOTSTRAP VALIDATION
  // =======================================================
  HSBsValidation.init(".js-validate", {
    onSubmit: (data) => {
      data.event.preventDefault();
      alert("Submited");
    },
  });

  // INITIALIZATION OF BOOTSTRAP DROPDOWN
  // =======================================================
  HSBsDropdown.init();

  // INITIALIZATION OF GO TO
  // =======================================================
  new HSGoTo(".js-go-to");

  // INITIALIZATION OF TOGGLE PASSWORD
  // =======================================================
  new HSTogglePassword(".js-toggle-password");
})();
