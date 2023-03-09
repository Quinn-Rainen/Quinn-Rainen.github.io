document.addEventListener("DOMContentLoaded", function(event) { 
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('mail').value;
        window.location.href = `mailto:${email}`;
    });
});