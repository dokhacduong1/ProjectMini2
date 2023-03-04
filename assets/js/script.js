
    // Lấy tất cả các liên kết trong header
    const headerLinks = document.querySelectorAll('.item-text-header a');

    // Thêm sự kiện 'click' cho mỗi liên kết
    headerLinks.forEach(link => {
        link.addEventListener('click', event => {
            // Ngăn chặn hành động mặc định của liên kết
            event.preventDefault();

            // Lấy đối tượng section tương ứng với liên kết được nhấn
            const sectionId = link.getAttribute('href');
            const section = document.querySelector(sectionId);

            // Cuộn đến vị trí của section đó
            section.scrollIntoView({behavior: 'smooth'});
        });
    });

    var iconMenuOpen = document.querySelector("#menu");
    var iconMenuClose = document.querySelector("#menu2");
    var navHeader = document.querySelector("#navHeader");
    var navHeaderLi = document.querySelectorAll("#navHeader li");
    iconMenuOpen.onclick =function(){
        iconMenuClose.classList.add("show-menu-pc2")
        iconMenuOpen.classList.remove("menu-pc")
        navHeader.classList.add("item-text-header-mobile");
      
        
    }
    iconMenuClose.onclick =function(){
        iconMenuOpen.classList.add("menu-pc")
        iconMenuClose.classList.remove("show-menu-pc2")
        navHeader.classList.remove("item-text-header-mobile");
    }
    console.log(navHeaderLi);