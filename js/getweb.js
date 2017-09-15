    function getWeb(clickedId) {
      var value = document.getElementById(clickedId).getAttribute("value");
      window.open(value);
    }