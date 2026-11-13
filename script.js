
const form = document.getElementById("registrationForm");
const notification = document.getElementById("notification");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        course: document.getElementById("course").value
    };

    console.log("Student Registration:", student);

    notification.textContent =
        `Welcome ${student.name}! Registration received successfully.`;

    notification.className = "notification success";

    form.reset();
});
