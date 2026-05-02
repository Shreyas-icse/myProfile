// js/features/project-filter.js

function setupFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      if (filter === "all") {
        renderProjects(projectsData);
        return;
      }

      const filteredProjects = projectsData.filter((project) => {
        if (filter === "mern") return project.category === "mern";
        if (filter === "backend") return project.category === "backend";
        if (filter === "java") return project.category === "java";
        return false;
      });

      renderProjects(filteredProjects);
    });
  });
}

// Make it globally available (very important)
window.setupFilter = setupFilter;