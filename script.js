// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href'))
//       .scrollIntoView({ behavior: 'smooth' });
//   });
// });



  document.getElementById("downloadBtn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "cv.pdf"; // path to your PDF
    link.download = "SummerPlays_CV.pdf"; // name for download
    link.click();
  });
