
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$";

function generatepassword() {
    let password = "";

    for (let i = 0; i < 8; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

function generatePasswords() {
    let first = generatepassword();
    let second = generatepassword();

    document.getElementById("firstpassword").value = first;
    document.getElementById("secondpassword").value = second;
}
