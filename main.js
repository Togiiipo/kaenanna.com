function showMenu(menuId) {
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => menu.style.display = 'none');
    document.getElementById(menuId).style.display = 'block';
}

