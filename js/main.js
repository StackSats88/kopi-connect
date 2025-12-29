setupNavigation();

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    // Add click event to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {

            // Get the section name from data-section attribute
            const sectionName = this.getAttribute('data-section');

            // Hide all sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });

            // Show the selected section
            const targetSection = document.getElementById(sectionName + '-section');
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Remove active class from all nav links
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            // Add active class to clicked link
            this.classList.add('active');
        });
    });
}