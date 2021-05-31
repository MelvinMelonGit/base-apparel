const form = document.querySelector(".apparelForm");

const wrapper = document.querySelector(".apparelForm__wrapper");
const label = document.querySelector(".apparelForm__email");

const email = document.querySelector(".apparelForm__input");
const emailValue = email.value.trim();
const submit = document.querySelector(".apparelForm__submit");

const validationText = document.querySelector("#validationText");

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

email.addEventListener("keypress", () => {
    label.style.opacity = 0;
})

submit.addEventListener("click", (e) => {
    if (!isEmailValid(emailValue)) {
        e.preventDefault();
        validationText.innerHTML = "Please provide a valid email";
        validationText.style.opacity = 1;
        wrapper.style.borderColor = "hsl(0, 93%, 68%)";
    }
})