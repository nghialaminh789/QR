const menu = ["profile", "about", "photos", "videos", "shop", "news"];

function showSection(sectionId) {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => {
    section.style.display = "none";
  });
  document.getElementById(sectionId).style.display = "flex";
  activeMenu(sectionId);
}

function activeMenu(sectionId = "profile") {
  const menu_item = document.querySelectorAll(".menu-item");
  const index = menu.indexOf(sectionId);
  menu_item.forEach((item) => {
    {
      item.classList.remove("active");
    }
  });
  if (menu_item && index !== -1) {
    menu_item[index].classList.add("active");
  } else {
    menu_item[0].classList.add("active");
  }
}

function callPhone (value){
    window.open(`tel:${value}`, '_self')
}

showSection('profile');
activeMenu("profile");
