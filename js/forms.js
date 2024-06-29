const form = document.getElementById('form');
const formName = document.getElementById('form-name');
const formEmail = document.getElementById('form-email');
const formPhone = document.getElementById('form-phone');
const formMessage = document.getElementById('form-message');
const sendProcess = document.getElementById('send-process');


form.addEventListener('submit', (e) => {
	e.preventDefault();
    if (checkImputs()) {
	    sendProcess.className = 'f-p form-success-send';
		form.submit(); // Submete o formulário se todas as validações passarem
	}
});

function checkImputs() {
	const formNameValue = formName.value;
	const formEmailValue = formEmail.value;
	const formPhoneValue = formPhone.value;
	const formMessageValue = formMessage.value;

	let isValid = true;

	if (formNameValue === '') {
		setErrorFor(formName);
		isValid = false;
	} else {
		setSuccessFor(formName);
	}
	if (formEmailValue === '') {
		setErrorFor(formEmail);
	} else if (!checkEmail(formEmailValue)) {
		setErrorFor(formEmail);
		isValid = false;
	} else {
		setSuccessFor(formEmail);
	}
	if (formPhoneValue === '') {
		setErrorFor(formPhone);
	} else if (!checkPhone(formPhoneValue)) {
		setErrorFor(formPhone);
		isValid = false;
	} else {
		setSuccessFor(formPhone);
	}
	if (formMessageValue === '') {
		setErrorFor(formMessage);
		isValid = false;
	} else {
		setSuccessFor(formMessage);
	}
	return isValid;
}

function setErrorFor(input) {
	const formContainer = input.parentElement;
	formContainer.className = 'forms-container form-error';
}

function setSuccessFor(input) {
	const formContainer = input.parentElement;
	formContainer.className = 'forms-container form-success';
}

function checkEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function checkPhone(phone) {
	return /^\+\d{1,3} \d{1,3} \d{3,5}-\d{4}$/.test(phone);
}
