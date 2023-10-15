$(document).ready(function() {
    const title = document.title;
    const animSeq = ["|"];
    let animIndex = 0;
    let titleIndex = 0;
  
    function doInverseSpinZeroPitch() {
      const loadTitle = title.substring(0, titleIndex);
  
      if (titleIndex > title.length) {
        animIndex = 0;
        titleIndex = 0;
      }
  
      if (animIndex > 1) {
        titleIndex++;
        animIndex = 0;
      }
  
      document.title = loadTitle + animSeq[0];
      animIndex++;
    }
  
    setInterval(doInverseSpinZeroPitch, 150);
  });
  
  $(document).ready(function() {
    $(".typed").typed({
      strings: ["why are you here?", "btw, here is my QQ 3065705698", "but im not chinese", "feeling kinda unwell but", "she likes winter melon tea", "❤️❤️❤️❤️❤️"],
      typeSpeed: 50,
      loop: true,
      cursorChar: "|",
    });
  });