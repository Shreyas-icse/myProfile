// Keyboard shortcut functions

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function focusSearch() {
    var searchBox = document.getElementById("project-search");
    if (searchBox) {
        searchBox.focus();
    }
}

function scrollToTop() {
    window.scrollTo(0, 0);
}

function goToProjects() {
    window.location.href = "#projects";
}
function clearSearch() {
    var search = document.getElementById("project-search");
    if (search) {
        search.value = "";
    }
}
function goToExperience() {
    window.location.href = "#experience";
}

// Keyboard event listener

document.addEventListener("keydown", function(e) {

    var tag = document.activeElement.tagName;

    if (tag == "INPUT" || tag == "TEXTAREA") {
        return;
    }

    var key = e.key;

    if (key == "d") {
        toggleDarkMode();
    } 
    else if (key == "s") {
        focusSearch();
    } 
    else if (key == "t") {
        scrollToTop();
    } 
    else if (key == "p") {
        goToProjects();
    }
     else if (key == "k") {
       clearSearch() ;
    }
 else if (key == "e") {
     goToExperience()  ;
    }

});