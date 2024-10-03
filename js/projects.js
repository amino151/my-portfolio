// Fetching projects from JSON file
fetch('json/projects.json')
    .then(response => response.json())
    .then(data => {
        const projectContainer = document.getElementById('project-container');
        data.projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            `;
            projectContainer.appendChild(projectCard);
        });
    });
