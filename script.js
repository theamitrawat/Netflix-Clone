document.addEventListener('DOMContentLoaded', function() {
    const questionBoxes = document.querySelectorAll('.ques-box');
    const answerBoxes = document.querySelectorAll('.ans-box');
    const addRemoveIcons = document.querySelectorAll('.ques-box i');

    questionBoxes.forEach((questionBox, index) => {
        questionBox.addEventListener('click', function() {
            answerBoxes.forEach((answerBox, idx) => {
                if (idx !== index) {
                    answerBox.classList.remove('show-answer');
                    addRemoveIcons[idx].classList.remove('fa-xmark');
                    addRemoveIcons[idx].classList.add('fa-plus');
                }
            });

            answerBoxes[index].classList.toggle('show-answer');

            if (answerBoxes[index].classList.contains('show-answer')) {
                addRemoveIcons[index].classList.remove('fa-plus');
                addRemoveIcons[index].classList.add('fa-xmark');
            } else {
                addRemoveIcons[index].classList.remove('fa-xmark');
                addRemoveIcons[index].classList.add('fa-plus');
            }
        });
    });
});
