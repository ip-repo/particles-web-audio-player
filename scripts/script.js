//Get references to the input elements
const fileTypeFromDropDown = document.getElementById('file-type')
const fileUploadInput = document.getElementById('file-upload')
const urlInput = document.getElementById('url-input')
const loadButton = document.getElementById('load-button')
// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function () {
    urlInput.style.display = 'none';
    fileTypeFromDropDown.value = "local";
    loadButton.disabled = true

});


// Event listener for dropdown changes
fileTypeFromDropDown.addEventListener('change', function(){
    const selectedOption = fileTypeFromDropDown.value;
    console.log("New selection: ", selectedOption)
    // Show/hide input fields based on the selected option
    if (selectedOption === 'local'){
        fileUploadInput.style.display ='block';
        urlInput.style.display = 'none';
    } else if (selectedOption === 'url') {
        fileUploadInput.style.display ='none';
        urlInput.style.display = 'block';

    }
});

urlInput.addEventListener('input', function (){
    const url = urlInput.value.trim();
    var validateUrl = isValidUrl(url);
    loadButton.disabled = !validateUrl;
    if (validateUrl === true) {
        console.log("Load button active");

    }else {
        console.log("Load button not active");
    }
});





// Helper function to validate URLs
function isValidUrl(url) {
    try {
        new URL(url);
        console.log("Valid url: " + url)
        return true
    } catch(error) {
        console.log('Invalid url: ' + error)
        return false;
    }
}