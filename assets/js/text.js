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
  const strings = [
    "Pretend to be normal",
    "But couldnt hold that",
    "Then whats the point?"
  ];

  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  shuffleArray(strings);

  $(".typed").typed({
      strings: strings,
      typeSpeed: 50,
      loop: true,
      cursorChar: "|",
  });
});
