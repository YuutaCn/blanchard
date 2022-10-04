const searchBtn = document.getElementById('search-btn');
const closeBtn = document.getElementById('close-btn');
const inputSearch = document.getElementById('input-search');
const headerLogo = document.querySelector('.header__logo');
const headerBurger = document.querySelector('.header__burger');

closeBtn.addEventListener('click', () => {
  if (window.innerWidth >= 1024) {
    inputSearch.style.width = '0px';
    inputSearch.style.margin = '0px';
    closeBtn.style.width = '0px';
  } else if ((window.innerWidth >= 768)) {
    inputSearch.style.width = '0px';
    inputSearch.style.margin = '0px';
    closeBtn.style.width = '0px';
    searchBtn.style.width = '27px';
    headerLogo.style.display = 'flex';
    headerBurger.style.display = 'flex';
  } else if ((window.innerWidth < 768)) {
    inputSearch.style.width = '0px';
    inputSearch.style.margin = '0px';
    closeBtn.style.width = '0px';
    headerLogo.style.display = 'flex';
    headerBurger.style.display = 'flex';
  }
});

searchBtn.addEventListener('click', () => {
  if (window.innerWidth >= 1024) {
    inputSearch.style.width = '218px';
    inputSearch.style.margin = '0px 24px 0px 10.55px';
    closeBtn.style.width = '23px';
  } else if ((window.innerWidth >= 768)) {
    inputSearch.style.width = '576px';
    inputSearch.style.margin = '0px 22px 0px 10px';
    closeBtn.style.width = '29px';
    searchBtn.style.width = '29px';
    headerLogo.style.display = 'none';
    headerBurger.style.display = 'none';
  } else if ((window.innerWidth < 768)) {
    inputSearch.style.width = '231px';
    inputSearch.style.margin = '0px 15px 0px 8px';
    closeBtn.style.width = '16px';
    headerLogo.style.display = 'none';
    headerBurger.style.display = 'none';
  }
});

$(document).keyup(function (e) {
  if (e.key === "Escape") {
    if (window.innerWidth >= 1024) {
      inputSearch.style.width = '0px';
      inputSearch.style.margin = '0px';
      closeBtn.style.width = '0px';
    } else if ((window.innerWidth >= 768)) {
      inputSearch.style.width = '0px';
      inputSearch.style.margin = '0px';
      closeBtn.style.width = '0px';
      searchBtn.style.width = '27px';
      headerLogo.style.display = 'flex';
      headerBurger.style.display = 'flex';
    } else if ((window.innerWidth < 768)) {
      inputSearch.style.width = '0px';
      inputSearch.style.margin = '0px';
      closeBtn.style.width = '0px';
      headerLogo.style.display = 'flex';
      headerBurger.style.display = 'flex';
    }
}
});
