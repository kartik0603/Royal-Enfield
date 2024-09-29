
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    if (validateForm()) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let user = {
            firstname: document.getElementById('first_name').value,
            lastname: document.getElementById('Last_name').value,
            password: document.getElementById('password').value,
            email: document.getElementById('email').value,
            birthday: document.getElementById('birth_date').value,
            pincode: document.getElementById('pincode').value,
            intrestedbike: document.getElementById('intrested_bike').value
        };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        
        window.location.href = "/Pages/signIn.html";
    }
});

document.querySelector('#register-form').addEventListener("input", validateForm);

function validateForm() {
    const validfirstname = /^[A-Za-z]{1,16}$/;
    const validlastname = /^[A-Za-z]{1,16}$/;
    const strongPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8,}$/;

    let isValid = true;

    isValid &= validateField('first_name', validfirstname, 'First-name-msg');
    isValid &= validateField('Last_name', validlastname, 'Last-name-msg');
    isValid &= validateField('password', strongPassword, 'Password-msg');

    return !!isValid; 
}

function validateField(fieldId, regex, msgId) {
    let field = document.getElementById(fieldId);
    let msg = document.getElementById(msgId);

    if (regex.test(field.value)) {
        field.style.border = '3px solid yellow';
        msg.innerHTML = "Valid";
        msg.classList.add('valid');
        field.classList.remove('shake');
        return true;
    } else {
        field.style.border = '4px solid red';
        msg.innerHTML = "Invalid";
        msg.classList.remove('valid');
        shakeInput(field);
        return false;
    }
}

function shakeInput(input) {
    input.classList.remove('shake');
    setTimeout(() => {
        input.classList.add('shake');
    }, 100);
}
