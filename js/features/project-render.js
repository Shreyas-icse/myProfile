function renderProject(){
    const projectsContainer = document.getElementById("projects-container");
    if(!projectsContainer){
        console.log("Projects container not found");
        return;
    }
    projectsContainer.innerHTML = "";
    projectsData.forEach(function(project){
        const card = document.createElement("div");
        card.className = "p-8 text-center bg-white rounded-3xl shadow-lg";
        card.setAttribute("data-category", project.category.toLowerCase());

        //create icon
        const iconBox = document.createElement("div");
        iconBox.className = "w-20 h-20 mx-auto mb-4 bg-green-900 rounded-2xl flex items-center justify-center";

        const iconData = document.createElement("span");
        iconData.className = "text-2xl text-white font-bold";
        iconData.textContent = project.status;

        iconBox.appendChild(iconData);
       
        const projectName = document.createElement("h3");
        projectName.className ="text-xl font-bold mb-2";
        projectName.textContent = project.name;
        
        const projectDescription = document.createElement("p");
        projectDescription.className = "text-sm";
        projectDescription.textContent = project.description;
    
        const projectTechnologies = document.createElement("p");
        projectTechnologies.className = "text-sm";
        projectTechnologies.textContent = project.technologies;

        card.appendChild(iconBox);
        card.appendChild(projectName);
        card.appendChild(projectDescription);
        card.appendChild(projectTechnologies);
        projectsContainer.appendChild(card);
    });
    console.log("projects opened successfully");
}

