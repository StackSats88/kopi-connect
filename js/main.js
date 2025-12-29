// * Function for navbar to show and hide each sections
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


// * Function to dynamically display keyword buttons in chatbot section
const keywords = [
    {
        "id": 1,
        "name": "Crisis",
        "color": "#EF4444",
    },
    {
        "id": 2,
        "name": "Crisis",
        "color": "#EF4444",
    },
    {
        "id": 3,
        "name": "General",
        "color": "#198754",
    },
    {
        "id": 4,
        "name": "General",
        "color": "#198754",
    },
    {
        "id": 5,
        "name": "Male",
        "color": "#0d6efd",
    },
    {
        "id": 6,
        "name": "Male",
        "color": "#0d6efd",
    },
    {
        "id": 7,
        "name": "Female",
        "color": "#FF69B4",
    },
    {
        "id": 8,
        "name": "Female",
        "color": "#FF69B4",
    },
];

// Function to create keyword buttons dynamically
function createChatButtons() {
    const container = document.getElementById('chatButtonsContainer');

    const buttonsPerRow = 4;
    const numRows = keywords.length / buttonsPerRow;

    for (let rows = 0; rows < numRows; rows++) {
        const row = document.createElement('div');
        row.className = 'button-row';
        if (rows < numRows - 1) {
            row.classList.add('mb-2');
        }

        const startIndex = rows * buttonsPerRow;
        const endIndex = Math.min(startIndex + buttonsPerRow, keywords.length);

        for (let buttons = startIndex; buttons < endIndex; buttons++) {
            const button = document.createElement('button');
            button.className = 'chat-button';
            button.textContent = keywords[buttons].name;
            button.style.background = keywords[buttons].color;
            button.style.color = 'white';

            button.addEventListener('click', function () {
                handleButtonClick(keywords[buttons]);
            });

            row.appendChild(button);
        }

        container.appendChild(row);
    }
}

createChatButtons();

// TODO: Function to handle keyword button clicks and dynamically display the services in the chat
function handleButtonClick(btnKeyword) {
    // Shows what buttons are pressed
    console.log(btnKeyword);

    // Add your own functions here
}