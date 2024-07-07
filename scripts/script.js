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
        // Clear url input
        urlInput.value = '';
        // Show upload button
        fileUploadInput.style.display ='block';
        // Hide url
        urlInput.style.display = 'none';
        // Disable load button
        loadButton.disabled = true
    } else if (selectedOption === 'url') {
        // Clear file upload button
        fileUploadInput.value = ''
        // hide file upload button
        fileUploadInput.style.display ='none';
        // Show url input 
        urlInput.style.display = 'block';
        // Disable load button
        loadButton.disabled = true

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