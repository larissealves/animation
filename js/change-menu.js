async function toggleMenu() {
  const contentMenu = document.getElementById("content-menu");
  const toggleBtn = document.querySelector(".btn-toggle-menu");
  const toggleLink = document.getElementById("link-toggle-menu");
  const toggleBtnMenuSanduiche = document.getElementById("btn-toggle-menu--sanduiche");
  const menu = document.getElementById("menu");

  const iconMenuSanduiche = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
  </svg>`;

  const iconCloseMenuSanduiche = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L12 13.41l-6.29 6.3-1.42-1.41L10.59 12 4.29 5.71 5.7 4.29 12 10.59l6.29-6.3z"/>
  </svg>`;

  function handleToggle() {
    const isHorizontal = menu.classList.contains("menu-horizontal");
    const isClosed = menu.classList.contains("deactive");

    if (isHorizontal) {
      // Passa para vertical (primeira abertura)
      toggleBtnMenuSanduiche.classList.remove("display-none");
      menu.classList.remove("menu-horizontal");
      toggleBtn.classList.add("display-none");
      toggleBtnMenuSanduiche.innerHTML = iconMenuSanduiche;
      menu.classList.add("menu-vertical", "deactive");
    } else if (isClosed) {
      // Abre menu vertical
      menu.classList.remove("deactive");
      menu.classList.add("active");
      contentMenu.classList.add("position-absolute");
      toggleBtnMenuSanduiche.innerHTML = iconCloseMenuSanduiche;
    } else {
      // Fecha menu vertical
      menu.classList.remove("active");
      menu.classList.add("deactive");
      contentMenu.classList.remove("position-absolute");
      toggleBtnMenuSanduiche.innerHTML = iconMenuSanduiche;
    }
  }

  // ✅ Aplica o mesmo handler em múltiplos elementos
  [toggleBtn, toggleBtnMenuSanduiche, toggleLink].forEach(el => {
    if (el) {
      el.addEventListener("click", handleToggle);
    }
  });
}

toggleMenu();
