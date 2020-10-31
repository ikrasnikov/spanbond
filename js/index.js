const phoneInput = document.getElementById('phoneInput');
const phoneInputLabel = document.getElementById('phoneLabel');

phoneInput.addEventListener('input', hideLabel)

function hideLabel (event) {
    if (event.target.value) {
        phoneInputLabel.style.display = 'none';

        return;
    }

    phoneInputLabel.style.display = 'inline-block';
}
