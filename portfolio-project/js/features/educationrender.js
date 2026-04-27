function renderExperience() {

    var container = document.getElementById("experience-container");

    if (!container) {
        console.log("Experience container not found");
        return;
    }

    container.innerHTML = "";

    experienceData.forEach(function(item) {

        var card = document.createElement("div");
        card.className = "p-8 text-center bg-white rounded-3xl shadow-lg";

        // Title
        var title = document.createElement("h3");
        title.className = "text-xl font-bold mb-2";
        title.textContent = item.title;

        // Place
        var place = document.createElement("p");
        place.className = "text-sm text-gray-600";
        place.textContent = item.place;

        // Year
        var year = document.createElement("p");
        year.className = "text-sm";
        year.textContent = item.year;

        // Description
        var desc = document.createElement("p");
        desc.className = "text-sm";
        desc.textContent = item.description;

        card.appendChild(title);
        card.appendChild(place);
        card.appendChild(year);
        card.appendChild(desc);

        container.appendChild(card);
    });

    console.log("Experience loaded successfully");
}