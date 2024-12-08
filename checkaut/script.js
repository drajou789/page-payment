// Select Elements
const modal = document.querySelector('.modal');
const paymentOptions = document.querySelectorAll('.payment--options button');
const form = document.querySelector('.form');
const inputFields = document.querySelectorAll('.input_field');
const submitButton = document.querySelector('.btn');

// Show Modal Function (Optional if you need to control visibility)
function showModal() {
  modal.style.display = 'block'; // Display modal
}

// Hide Modal Function
function hideModal() {
  modal.style.display = 'none'; // Hide modal
}

// Add Event Listeners for Payment Options
paymentOptions.forEach((button) => {
  button.addEventListener('click', () => {
    paymentOptions.forEach((btn) => btn.classList.remove('selected'));
    button.classList.add('selected');
  });
});

// Validate Input Fields on Submit
function validateForm(event) {
  event.preventDefault(); // Prevent default form submission
  let isValid = true;

  inputFields.forEach((field) => {
    if (!field.value.trim()) {
      isValid = false;
      field.classList.add('error');
    } else {
      field.classList.remove('error');
    }
  });

  if (isValid) {
    alert('Form submitted successfully!');
    form.reset(); // Reset form after submission
  } else {
    alert('Please fill all required fields.');
  }
}

// Add Event Listener to Submit Button
submitButton.addEventListener('click', validateForm);

// Remove Error Class on Focus
inputFields.forEach((field) => {
  field.addEventListener('focus', () => {
    field.classList.remove('error');
  });
});
