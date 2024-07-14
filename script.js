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
function shareProfile() {
  if (navigator.share) {
      navigator.share({
          title: 'Danh Thiếp Thông Minh',
          text: 'Hãy kiểm tra danh thiếp thông minh của tôi!',
          url: window.location.href
      }).then(() => {
          console.log('Thanks for sharing!');
      }).catch((error) => {
          console.error('Error sharing:', error);
      });
  } else {
      alert('Trình duyệt của bạn không hỗ trợ chức năng chia sẻ này.');
  }
}

// Thêm sự kiện onclick vào phần tử app-item cho chia sẻ
document.querySelector('.app-item.share').onclick = shareProfile;
function sendSMS() {
  window.open('sms:+84382296309', '_self');
}

// Thêm sự kiện onclick vào phần tử app-item cho tin nhắn
document.querySelector('.app-item.sms').onclick = sendSMS;
