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
    window.setInterval(doInverseSpinZeroPitch, 150);
});
$(function() {
  $(".typed").typed({
      strings: ["zzzzzzzz... xd", "Professional java paster"
    , ":sunglasses:", "everything is fine", ":smirk:", "well...", "...", "...", 
  "I love Ngoc's ", "Nothing to say", "-loop"],
      typeSpeed: 130,
      loop: true,
      cursorChar: "|",
  });
});
