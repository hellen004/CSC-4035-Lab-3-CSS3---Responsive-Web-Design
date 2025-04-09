document.getElementById("loadUsersBtn").addEventListener("click", async () => {
        try {
            const res = await
            fetch('https://jsonplaceholder.typicode.com/users');
            const users = await res.json();
            const userList = document.getElementById("userList");
            userList.innerHTML = "";
            users.forEach(user => {
                const li = document.createElement("li");
                li.textContent = user.name;
                userList.appendChild(li);
            });
        } catch (err) {
            console.error("Failed to load users:", err);
        }
    });

document.getElementById("themeToggle").addEventListener("click", () =>
{
    document.body.classList.toggle("dark-theme");
});
    
document.getElementById("contactForm").addEventListener("submit", (e) => 
    {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === "" || email === "" || message === "") {
          alert("Please fill out all fields.");
        } else {
            document.getElementById("response").innerText = `Thanks, ${name}.
            We'll get back to you soon!`;
          form.reset();
        }
    });