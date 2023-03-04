// Lấy tất cả các liên kết trong header
const headerLinks = document.querySelectorAll('.item-text-header a');

headerLinks.forEach(link => {
    link.addEventListener('click', event => {
      // Ngăn chặn hành động mặc định của liên kết
      event.preventDefault();
  
      // Lấy đối tượng section tương ứng với liên kết được nhấn
      const sectionId = link.getAttribute('href');
      const section = document.querySelector(sectionId);
  
      // Lấy vị trí của section đó
      const offsetTop = section.offsetTop;
  
      // Tính toán khoảng cách cần phải cuộn để đến vị trí của section
      const distance = Math.abs(window.pageYOffset - offsetTop);
  
      // Tính toán thời gian cần để cuộn đến vị trí của section (1px/ms)
      const duration = distance / 1;
  
      // Sử dụng CSS để áp dụng transition cho nội dung bên trong section
      section.style.transition = 'transform ' + duration + 'ms ease-in-out';
  
      // Thay đổi vị trí của trình duyệt để kích hoạt hiệu ứng
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
  
    });
  });

var iconMenuOpen = document.querySelector("#menu");
var iconMenuClose = document.querySelector("#menu2");
var navHeader = document.querySelector("#navHeader");
var navHeaderLi = document.querySelectorAll("#navHeader li")
iconMenuOpen.onclick = function () {
    iconMenuClose.classList.add("show-menu-pc2");
    iconMenuOpen.classList.remove("menu-pc");
    navHeader.classList.add("item-text-header-mobile");


}
iconMenuClose.onclick = function () {
    iconMenuOpen.classList.add("menu-pc");
    iconMenuClose.classList.remove("show-menu-pc2");
    navHeader.classList.remove("item-text-header-mobile");
}

for (var i = 0; i < navHeaderLi.length; i++) {
    navHeaderLi[i].addEventListener("click", function () {
        iconMenuOpen.classList.add("menu-pc");
        iconMenuClose.classList.remove("show-menu-pc2");
        navHeader.classList.remove("item-text-header-mobile");
    });
}