window.onload = function(){
  var el = document.getElementById('preloader');
  el.style.display = 'none';
};
const preBtn = document.querySelector('.preloader__delete')

preBtn.addEventListener('click', () => {
  var el = document.getElementById('preloader');
  el.style.display = 'none';
});
