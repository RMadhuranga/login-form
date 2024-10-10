const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

if (sign_up_btn && sign_in_btn && container) {
    sign_up_btn.addEventListener("click", () => {
        console.log("Sign-up button clicked!");
        container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
        console.log("Sign-in button clicked!");
        container.classList.remove("sign-up-mode");
    });
} else {
    console.error("One or more elements are missing in the HTML. Check the IDs and class names.");
}

if (sign_up_btn2 && sign_in_btn2 && container) {
    sign_up_btn2.addEventListener("click", () => {
        console.log("Sign-up button clicked!");
        container.classList.add("sign-up-mode");
    });

    sign_in_btn2.addEventListener("click", () => {
        console.log("Sign-in button clicked!");
        container.classList.remove("sign-up-mode");
    });
} else {
    console.error("One or more elements are missing in the HTML. Check the IDs and class names.");
}
