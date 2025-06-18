function toggleForms() {
  document.getElementById("signupForm").classList.toggle("hidden");
  document.getElementById("loginForm").classList.toggle("hidden");
}

function signup() {
  const username = document.getElementById("signupUsername").value.trim();
  const password = document.getElementById("signupPassword").value;

  if (username === "" || password === "") {
    alert("Please fill out both fields.");
    return;
  }

  if (localStorage.getItem(username)) {
    alert("Username already exists. Try a different one.");
  } else {
    localStorage.setItem(username, password);
    alert("Signup successful! Please log in.");
    toggleForms();
  }
}

function login() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;

  const storedPassword = localStorage.getItem(username);

  if (!storedPassword) {
    alert("User not found. Please sign up first.");
  } else if (storedPassword === password) {
    alert("Login successful! Welcome " + username + " 🎉");
  } else {
    alert("Incorrect password. Try again.");
  }
}
