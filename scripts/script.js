//Get references to the input elements
const fileTypeFromDropDown = document.getElementById('file-type')
const fileUploadInput = document.getElementById('file-upload')
const urlInput = document.getElementById('url-input')

// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function () {
    urlInput.style.display = 'none';
});


// Event listener for dropdown changes
fileTypeFromDropDown.addEventListener('change', function(){
    const selectedOption = fileTypeFromDropDown.value;
    // Show/hide input fields based on the selected option
    if (selectedOption === 'local'){
        fileUploadInput.style.display ='block';
        urlInput.style.display = 'none';
    } else if (selectedOption === 'url') {
        fileUploadInput.style.display ='none';
        urlInput.style.display = 'block';

    }
});