const submit_btn = document.querySelector("#submit")
const success_msg = document.querySelector("#success")
const main = document.querySelector("main")
function submit__click(e) {
    e.preventDefault();
    success_msg.classList.remove("!hidden")
    main.classList.add("!hidden")
    console.log("Clicked")
}
function dismiss() {
    success_msg.classList.add("!hidden")
    console.log("Dismissed")
    main.classList.remove("!hidden")

}