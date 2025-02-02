
// document.getElementById("searchBtn").addEventListener("click", function() {
//     let query = document.getElementById("searchInput").value;
//     alert("Searching for: " + query);
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById("entryForm");

//     form.addEventListener("submit", function (event) {
//         event.preventDefault();
//         alert("Form Submitted Successfully!");
//         form.reset();
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("entryForm");
    const cardsContainer = document.getElementById("cards");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const role = document.getElementById("role").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const course = document.getElementById("course").value;
        const status = document.getElementById("status").value;

        if (name.trim() === "" || role.trim() === "" || email.trim() === "" || phone.trim() === "") return;

        addCard(name, role, email, phone, course, status);
        form.reset();
    });

    function addCard(name, role, email, phone, course, status) {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="card-content">
                <div class="left">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Course:</strong> ${course}</p>
                </div>
                <div class="right">
                    <p><strong>Role:</strong> ${role}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Status:</strong> ${status}</p>
                </div>
            </div>
            <button class="delete-btn">Delete</button>
        `;

        card.querySelector(".delete-btn").addEventListener("click", () => {
            card.remove();
        });

        cardsContainer.appendChild(card);
    }
});
