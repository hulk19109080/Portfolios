const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links ");

navToggle.addEventListener("click", function () {

  links.classList.toggle("show-links");
});


(function () {
  $('.btn').click(function () {
    $(this).toggleClass('active');
    return $('.box').toggleClass('open');
  });

}).call(this);




const imgContent = document.querySelectorAll('.img-content-hover');

function showImgContent(e) {
  for (var i = 0; i < imgContent.length; i++) {
    x = e.pageX;
    y = e.pageY;
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
};

document.addEventListener('mousemove', showImgContent);
