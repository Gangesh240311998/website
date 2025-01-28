// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting me! I will get back to you soon.');
    // You can add more functionality here, like sending the form data to a server.
});

// Handle resume upload form submission
document.getElementById('resume-upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('resume-upload');
    if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        alert(`Thank you for uploading your resume (${fileName}). I will review it and get back to you.`);
    } else {
        alert('Please select a file to upload.');
    }
});
