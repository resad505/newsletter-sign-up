const success_msg = document.querySelector("#success")
const main = document.querySelector("main")
const form = document.querySelector("form")
const dismiss__btn = document.querySelector("#dismiss__btn")
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
const input = document.querySelector("#email")
const error__msg = document.querySelector("#error__msg")
const user__email = document.querySelector("#user__email")
form.addEventListener("submit", submit__click);
dismiss__btn.addEventListener("click", dismiss);
input.addEventListener("input", hideError)
function submit__click(e) {
    e.preventDefault();
    form__validation();
}
function dismiss() {
    success_msg.classList.add("!hidden");
    main.classList.remove("!hidden");
    input.value = '';
    hideError();
}
function hideError() {
    input.classList.remove("bg-red-100", "border-red-500")
    error__msg.classList.add("!hidden")
}
function form__validation() {
    const input__value = input.value.trim()
    const isValidEmail = emailRegex.test(input__value)
    if (!isValidEmail) {
        input.classList.add("bg-red-100", "border-red-500")
        error__msg.classList.remove("!hidden")
        input.setAttribute('aria-invalid', 'true')
    } else {
        success_msg.classList.remove("!hidden")
        main.classList.add("!hidden")
        user__email.textContent = input__value
        input.setAttribute('aria-invalid', 'false')
    }
};