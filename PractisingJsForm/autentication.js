const form = document.querySelector("#myForm");

form.addEventListener("submit", (event) => {
    const password = document.querySelector("#password");
    const age = document.querySelector("#age");
    const name = document.querySelector("#name");

    if (password.value.length < 10) {
        alert("Password must be at least 10 characters long");
        event.preventDefault();
    }
});