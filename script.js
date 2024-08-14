function validateForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var gender = document.querySelector('input[name="gender"]:checked');

    if (name == "" || phone == "" || email == "" || password == "" || gender == null) {
        alert("All fields must be filled out");
        return false;
    }

    // You can add more specific validation for each field if needed (e.g., phone number format)

    return true;
}
