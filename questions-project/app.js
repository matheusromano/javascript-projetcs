// using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (qtn) {
  const btn = qtn.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      console.log(item);
      if (item !== qtn) {
        item.classList.remove("show-text");
      }
    });
    qtn.classList.toggle("show-text");
  });
});

// transversing the DOM (parentElement)

// const questionBtn = document.querySelectorAll(".question-btn");
// questionBtn.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text")

//     // MY WAY
//     // if (e.currentTarget.parentElement.parentElement.classList.contains("show-text")) {
//     //     e.currentTarget.parentElement.parentElement.classList.remove("show-text");
//     // } else {
//     //     e.currentTarget.parentElement.parentElement.classList.add("show-text");
//     // }
//   });
// });
