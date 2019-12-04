const iconsData = [
  {
    inputElementSelector: ".js-email",
    cardElementSelector: ".js-card__icon--email",
    prefix: "mailto:"
  },
  {
    inputElementSelector: ".js-phone",
    cardElementSelector: ".js-card__icon--phone",
    prefix: "tel:"
  },
  {
    inputElementSelector: ".js-linkedin",
    cardElementSelector: ".js-card__icon--linkedin",
    prefix: "https://www.linkedin.com/in/"
  },
  {
    inputElementSelector: ".js-github",
    cardElementSelector: ".js-card__icon--github",
    prefix: "https://www.github.com/"
  }
];
const preventIcons = function(ev) {
  ev.preventDefault();
};

const updateIcons = function() {
  for (const iconData of iconsData) {
    const input = document.querySelector(iconData.inputElementSelector);
    const icon = document.querySelector(iconData.cardElementSelector);

    if (input.value === isEmpty) {
      icon.addEventListener("click", preventIcons);
      icon.classList.add("js-icon-deactivated");
    } else {
      icon.classList.remove("js-icon-deactivated");
      icon.href = iconData.prefix + input.value;
      console.log(icon.href);
    }
  }
};
updateIcons();

for (const iconData of iconsData) {
  const input = document.querySelector(iconData.inputElementSelector);

  input.addEventListener("keyup", updateData);
}
