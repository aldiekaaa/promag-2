const submit = document.querySelector('#submit');

const saveUser = async() => {

  const namaLengkap = document.getElementById('namaLengkap').value;
  const nik = document.getElementById('nik').value;
  const pekerjaan = document.getElementById('pekerjaan').value;
  const password = document.getElementById('password').value;
  const ulangPassword = document.getElementById('ulangPassword').value;
  const email = document.getElementById('email').value;
  const noTelepon = document.getElementById('noTelepon').value;
  const alamat = document.getElementById('alamat').value;
  
  let response = await fetch('http://localhost:8080/api/v1/auth/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ namaLengkap, nik, pekerjaan, password, ulangPassword, email, noTelepon, alamat }),
  });

  if(response.ok){
    
      // Login successful, do something
      alert('Silahkan untuk melakukan aktifasi melalui Gmail!');
      // Redirect to another page, for example:
      window.location.href = 'http://localhost:5500/login/index.html';
    
  } else {
    // Login failed due to network or server error
    alert('Registered failed. Please try again.');
  }

}

submit.addEventListener('click', saveUser);