const question = document.querySelectorAll('.question_nav');
const ansBar = document.querySelector('.answer-box');
const qBar = document.querySelector('.question-box');
const ansBar2 = document.querySelector('.abox2');
const qBar2 = document.querySelector('.qbox2');

question[0].value = {
  q1: 'Can UG3 and UG4 students attend this?',
  a1: 'This is more like an introductory session for first years to step into the world of ML. Although If you are willing to join us to set your foot into the beautiful world of ML, then you are most welcome.',
   q2: 'How can we register?',
   a2: ' Click on the register option at the top of the website and fill up the necessary details in the ensuing form. ',
};
question[1].value = {
  q: 'How can we register?',
  a: ' Click on the register option at the top of the website and fill up the necessary details in the ensuing form. ',
};
question[2].value = {
  q: 'What topics will be covered in the session?',
  a: 'It will be revealed soon. Let there be an element of suspense in the event, so that the anticipation does not die down.',
};
question[3].value = {
  q: 'What prerequisite knowledge do I need for this event?',
  a: 'A basic knowledge of Python will be advantageous. ',
};
question[4].value = {
  q: 'Is this only for JU students?',
  a: ' Yes. It is only for JU students.',
};
question[5].value = {
  q1: 'Can I attend this event virtually?',
  a1: 'Sorry, you cannot. This is the 1st offline event of IEEE after the pandemic. We expect enthusiastic physical presence.',
  q2: 'Will the teams be provided with any assistance during this event? ',
  a2: 'We will have plenty of mentors and resources accessible, along with workshops to guide the participants.',
};

question[6].value = {
  q: 'Who are the speakers?',
  a: 'That will be revealed soon. Stay tuned!',
};
// question[8].value = {
//   q: 'On what basis will the winners be selected? ',
//   a: 'The winners of HackOwasp 4.0 will be selected based on Evaluation criteria which will include novelty of the idea, complexity, clarity, and details in the prescribed format, feasibility, practicability, sustainability, the scale of impact, user experience, and potential for prospects.',
// };
var c = 0;
function print(i) {
  // question[i].style.backgroundColor="red";
  ansBar2.style.display = 'none';
  qBar2.style.display = 'none';
  question[c].classList.remove('colorClass');

  c = i;
  question[i].classList.add('colorClass');
  ansBar.innerText = question[i].value.a;
  qBar.innerText = question[i].value.q;
}
function print1(i) {
  question[c].classList.remove('colorClass');

  c = i;
  question[i].classList.add('colorClass');
  ansBar.innerText = question[i].value.a1;
  qBar.innerText = question[i].value.q1;
  ansBar2.style.display = 'block';
  ansBar2.innerText = question[i].value.a2;
  qBar2.style.display = 'block';
  qBar2.innerText = question[i].value.q2;
}

for (let i = 0; i < 7; i++) {
  question[i].addEventListener('click', () => {
    if (i == 0 || i == 5) print1(i);
    else print(i);
  });
}
