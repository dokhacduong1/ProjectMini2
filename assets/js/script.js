
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
