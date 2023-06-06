const checkbox = document.getElementById('myCheckbox');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        checkbox.classList.add('rounded-full');
    } else {
        checkbox.classList.remove('rounded-full');
    }
});

const text = document.getElementById('email, password');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        text.classList.remove('placeholder:block');
    } else {
        text.classList.add('placeholder:hidden');
    }
});