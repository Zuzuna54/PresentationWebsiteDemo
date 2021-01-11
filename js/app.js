document.addEventListener("DOMContentLoaded", function() {
  console.log("js loaded")

  $('.btn').on('click', function (e) {
    console.log("JQ loaded")
      if (this.hash !== '') {
        e.preventDefault();
       
        const hash = this.hash;

        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800
        );
      }
    });
})