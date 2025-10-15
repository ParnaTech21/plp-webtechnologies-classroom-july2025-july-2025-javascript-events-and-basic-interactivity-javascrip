// --- Theme Toggle (Light/Dark Mode) ---
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  themeToggleBtn.textContent = document.body.classList.contains('dark-mode')
    ? 'Toggle Light Mode'
    : 'Toggle Dark Mode';
});

// --- Counter Game ---
let counterValue = 0;
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

incrementBtn.addEventListener('click', function () {
  counterValue++;
  counterDisplay.textContent = counterValue;
});

decrementBtn.addEventListener('click', function () {
  if (counterValue > 0) counterValue--;
  counterDisplay.textContent = counterValue;
});

// --- Collapsible FAQ Section ---
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(function (btn) {
  btn.addEventListener('click', function () {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// --- Form Validation ---
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const formSuccess = document.getElementById('form-success');

// Helper functions for validation
function validateName(name) {
  return name.trim().length >= 2;
}

function validateEmail(email) {
  // Simple regex for demonstration purposes
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
  // At least 6 chars, 1 number
  return /^(?=.*\d).{6,}$/.test(password);
}

// Validate on submit
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let valid = true;
  formSuccess.textContent = '';

  // Name validation
  if (!validateName(nameInput.value)) {
    nameError.textContent = 'Enter at least 2 characters.';
    valid = false;
  } else {
    nameError.textContent = '';
  }

  // Email validation
  if (!validateEmail(emailInput.value)) {
    emailError.textContent = 'Enter a valid email address.';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  // Password validation
  if (!validatePassword(passwordInput.value)) {
    passwordError.textContent = 'Password must be 6+ chars & include a number.';
    valid = false;
  } else {
    passwordError.textContent = '';
  }

  if (valid) {
    formSuccess.textContent = 'Form submitted successfully!';
    form.reset();
  }
});

// Real-time validation (optional, for better UX)
[nameInput, emailInput, passwordInput].forEach((input) => {
  input.addEventListener('input', () => {
    formSuccess.textContent = '';
    // Re-run validation on each field separately
    if (input === nameInput) {
      nameError.textContent = validateName(input.value) ? '' : 'Enter at least 2 characters.';
    } else if (input === emailInput) {
      emailError.textContent = validateEmail(input.value) ? '' : 'Enter a valid email address.';
    } else if (input === passwordInput) {
      passwordError.textContent = validatePassword(input.value) ? '' : 'Password must be 6+ chars & include a number.';
    }
  });
});