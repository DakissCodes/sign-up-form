console.log('test')

const firstName = document.querySelector('input[name="first-name"]')
const lastName = document.querySelector('input[name="last-name"]')
const userEmail = document.querySelector('input[name="user-email"]')
const phoneNumber = document.querySelector('input[name="user-phone-number"]')
const initialPassword = document.querySelector('input[name="initial-password"]');
const confirmPassword = document.querySelector('input[name="confirm-password"]');

const form = document.getElementById('signup-form');

const confirmPasswordContainer = document.getElementsByClassName('confirm-password-container');
// function that gets the value of all elements
// 





// validation text

const unmatchedError = document.createElement('div');
unmatchedError.textContent = 'Passwords do not match!'
unmatchedError.classList.add('error-message')

console.log(confirmPasswordContainer[0])



form.addEventListener('submit', function(event) {
    // Remove dafault submission on clic
    event.preventDefault();
    
    
    if (initialPassword.value == confirmPassword.value) {
        form.submit();
        // manually submit 
    } else {z
        confirmPasswordContainer[0].appendChild(unmatchedError);
        // validation text  
    }

    
})
