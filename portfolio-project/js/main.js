// document.addEventListener("DOMContentLoaded",function(){
//     //Render skills
//     renderSkills();
// })
// features/main(
document.addEventListener("DOMContentLoaded",
    function () {
        //Render skills
        renderSkills();
        initModal();
        initContactValidation();
        initThemeToggle();
        initFilterButtons();
        toggleDarkMode();
        focusSearch();
        scrollToTop();
        renderExperience();


    }
);
document.addEventListener("DOMContentLoaded", function () {

    renderSkills();
    renderProject();

});