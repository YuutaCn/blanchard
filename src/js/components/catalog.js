const catalogHref = document.querySelectorAll('.content__item-a');
const catalogPerson = document.querySelector('.catalog__accordion-person');
const catalogNn = document.querySelector('.catalog__accordion-nn');
const catalogNnTwo = document.querySelector('.catalog__accordion-nn-two');

let catalogNum = 0;

catalogHref.forEach(el => {
  el.addEventListener('click', () => {
    if (document.querySelectorAll('.catalog-active').length === 0) {
      catalogPerson.style.transition = 'all 250ms var(--default-cubic)';
      catalogPerson.style.transform = 'scale(0.5) translateX(-100%)';
      catalogPerson.style.visibility = 'hidden';
      catalogPerson.style.opacity = '0';
      catalogNn.style.transition = 'all 250ms var(--default-cubic)';
      catalogNn.style.transform = 'scale(1) translateX(0)';
      catalogNn.style.visibility = 'visible';
      catalogNn.style.opacity = '1';
      el.classList.add('catalog-active');
    } else if (document.querySelectorAll('.catalog-active').length != 0) {
      document.querySelector('.catalog-active').className = 'content__item-a';
      catalogNn.style.transition = 'all 250ms var(--default-cubic)';
      catalogNn.style.transform = 'scale(0.5) translateX(-100%)';
      catalogNn.style.visibility = 'hidden';
      catalogNn.style.opacity = '0';
      catalogNnTwo.style.transition = 'all 250ms var(--default-cubic)';
      catalogNnTwo.style.transform = 'scale(1) translateX(0)';
      catalogNnTwo.style.visibility = 'visible';
      catalogNnTwo.style.opacity = '1';
      setTimeout(() => {
        catalogNn.style.transition = 'all 0ms var(--default-cubic)';
        catalogNn.style.transform = 'scale(1) translateX(00%)';
        catalogNn.style.visibility = 'visible';
        catalogNn.style.opacity = '1';
        catalogNnTwo.style.transition = 'all 0ms var(--default-cubic)';
        catalogNnTwo.style.transform = 'scale(0.5) translateX(100%)';
        catalogNnTwo.style.visibility = 'hidden';
        catalogNnTwo.style.opacity = '0';
      }, 250);
      el.classList.add('catalog-active');
    }
  });
});
