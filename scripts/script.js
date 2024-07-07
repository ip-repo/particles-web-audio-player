// Get references to the input elements
const fileTypeFromDropDown = document.getElementById('file-type')
const fileUploadInput = document.getElementById('file-upload')
const urlInput = document.getElementById('url-input')
const loadButton = document.getElementById('load-button')
const audioPlayer = document.querySelector('.audio-player')

// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function () {
    urlInput.style.display = 'none';
    fileTypeFromDropDown.value = "local";
    loadButton.disabled = true;

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
        loadButton.disabled = true;
    } else if (selectedOption === 'url') {
        // Clear file upload button
        fileUploadInput.value = '';
        // hide file upload button
        fileUploadInput.style.display ='none';
        // Show url input 
        urlInput.style.display = 'block';
        // Disable load button
        loadButton.disabled = true;

    }
});

// Event listener for url box inputs
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
// Event listener for file upload input
fileUploadInput.addEventListener('change', function (){
    // If a file is choosed then activate load button
    loadButton.disabled = !fileUploadInput.files[0];
    if (loadButton.disabled === false) {
        console.log("File Loaded\n",fileUploadInput.files[0]);
    }else {
        console.log("File loading aborted")
    }
});

// Event listener for load buttons
loadButton.addEventListener('click', function () {
    // Get dropdown selected value
    const selectedOption = fileTypeFromDropDown.value;
    // Audio source will hold the file as url object
    let audioSource;

    if (selectedOption === 'local'){
        // The local file to play
        const file = fileUploadInput.files[0];
        if (file) {
            // Create url object
            audioSource = URL.createObjectURL(file);
            // Load audio source to player
            audioPlayer.src = audioSource;
        } else {
            // The file was loaded and load button clicked but something went wrong
            alert("something went wrong")
            // Clear file upload
            fileUploadInput.value = '';
            // clear url input
            urlInput.value ='';
            // Disable load button
            loadButton.disabled = true;
        }
        
    } else if (selectedOption == "url"){
        // Clean url
        const url = urlInput.value.trim()
        if (isValidUrl(url)){
            // Set web url as audio source
            audioSource = url;
            // Load audio source to player
            audioPlayer.src = audioSource;
        } else {
            // The file was loaded and load button clicked but something went wrong
            alert("something went wrong.")
            // Clear file upload
            fileUploadInput.value = '';
            // clear url input
            urlInput.value ='';
            // Disable load button
            loadButton.disabled = true;
        }
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