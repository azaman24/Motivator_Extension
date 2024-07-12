document.addEventListener('DOMContentLoaded', () => {
    const toggleModeButton = document.getElementById('toggleMode');
    const body = document.body;

    function applyTheme(theme) {
        var lightIcon = document.getElementById('lightIcon');
        var darkIcon = document.getElementById('darkIcon');

        if (theme === 'dark') {
            body.classList.add('darkMode');
            body.classList.remove('lightMode');
            lightIcon.style.display = 'block';
            darkIcon.style.display = 'none';
        } else {
            body.classList.add('lightMode');
            body.classList.remove('darkMode');
            lightIcon.style.display = 'none';
            darkIcon.style.display = 'block';
        }
    }

    // Look for a saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Toggle the theme and save the preference
    toggleModeButton.addEventListener('click', () => {
        const currentTheme = body.classList.contains('darkMode') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });


    // fetch('http://localhost:3000/')
    //       .then(response => response.text())
    //       .then(data => {
    //         document.getElementById('server-response').innerText = data;
    //       })
    //       .catch(error => console.error('Error:', error));
    fetch('/random-quote')
    .then(response => response.json())
    .then(data => {
        const quote = document.getElementById('quote');
        const source = document.getElementById('source');
        quote.innerHTML = data.Quote;
        source.innerHTML = data.Source;
    })
    .catch(error => console.error('Error fetching quote:', error));
    console.log(quote);
});



// Open Gmail in a new tab
document.getElementById('gmailBtn').addEventListener('click', function(event) {
    window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox', '_blank');
});

// Open Google Drive in a new tab
document.getElementById('driveBtn').addEventListener('click', function(event) {
    window.open('https://drive.google.com', '_blank');
});

// Perform a Google search in a new tab
document.getElementById("searchInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        const query = encodeURIComponent(event.target.value);
        window.open(`https://www.google.com/search?q=${query}`, '_blank');
    }
});