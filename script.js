
const registerButton = document.getElementById('registerNow');
const registerDialog = document.getElementById('registerDialog');
const closeDialogButton = document.getElementById('closeDialog');


registerButton.addEventListener('click', () => {
  registerDialog.style.display = 'flex';
});


closeDialogButton.addEventListener('click', () => {
  registerDialog.style.display = 'none';
});


window.addEventListener('click', (event) => {
  if (event.target === registerDialog) {
    registerDialog.style.display = 'none';
  }
});


const registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Registration Successful!');
  registerDialog.style.display = 'none'; 
});