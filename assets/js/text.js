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
      strings: [
        "...",
        "investing into your hobbies", "keep your eyes open", "continuously learn and grow", "take care of your health"
        , "...", 
        "thats how life goes"
      ],
      typeSpeed: 100,
      loop: true,
      cursorChar: "|",
  });
});
