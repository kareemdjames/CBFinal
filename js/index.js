  // slideshow function
  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
  showDivs(slideIndex += n);
}
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("miSlides");
    
    if(n > x.length) {
      slideIndex = 1;
    }
    if(n < 1) {
      slideIndex = x.length;
    }
    for(i = 0; i < x.length; i += 1) {
      x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
  }
  //tabbed list function
  function openMe(inside) {
    var i, content;
    content = document.getElementsByClassName("content");
      for(i = 0; i < content.length; i +=1) {
        content[i].style.display = "none"
      }
      document.getElementById(inside).style.display = "block";
  }
  





