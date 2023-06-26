const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:8080/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if(response.ok) {
    try {
      const result = await response.json();

      if (result.status === 'success'){

      alert('Login Success');

      window.location.href = 'http://localhost:5500/index.html';
      } else {
      alert('Login Failed!!' + ', Akun belum diaktifkan', result.message);
      }
    } catch (error) {
      alert('Invalid JSON response: ', error);
    } 
    
  } else {
    alert('Login Failed!!' + ', Akun belum diaktifkan', response.statusText);
  }

});


// function validateForm(event) {
//   event.preventDefault();

//   var passwordInput = document.getElementById("password");
//   var passwordError = document.getElementById("passwordError");

//   var password = passwordInput.value;
//   var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;

//   if (!pattern.test(password)) {
//       passwordError.textContent = "Password harus terdiri dari huruf kapital, huruf kecil, angka, simbol, dan minimal 8 karakter";
//       passwordInput.classList.add("error-input");
//   } else {
//       passwordError.textContent = "";
//       passwordInput.classList.remove("error-input");
//       document.getElementById("registrationForm").submit();
//   }
// }