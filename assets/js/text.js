$(function() {
    var title = document.title,
      animSeq = ["|"],
        animIndex = 0,
        titleIndex = 0;
    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0
        }
        if (animIndex > 1) {
            titleIndex++;
            animIndex = 0
        }
        document.title = loadTitle + animSeq[0];
        animIndex++
    }
    window.setInterval(doInverseSpinZeroPitch, 160);
});
$(function() {
  $(".baby").typed({
      strings: ["imagine", "you are looking", "for a man", "who describing about his life", "its gotta be me",
    "imagine", "you are looking for a man", "thats not me!", "that would be nice", "im not a bad guy"],
      typeSpeed: 100,
      loop: true,
      cursorChar: "|",
  });
});
