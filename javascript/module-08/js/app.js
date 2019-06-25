'use strict';

import quizData from './quiz-data.js';
const { title: quizTitle, questions: quizQuestions } = quizData;

const form = document.querySelector('form');
const submitBtn = document.querySelector('button[type="submit"]');
const formTitle = document.createElement('h2');
formTitle.textContent = quizTitle;
form.insertBefore(formTitle, submitBtn);

const quizItems = createQuizItems(quizQuestions);
submitBtn.before(...quizItems);

// Создает одну li с одним ответом
function createChoiceItem(choice, choiceIndex, questionIndex) {
  const choiceItem = document.createElement('li');
  const label = document.createElement('label');

  const input = document.createElement('input');
  input.setAttribute('type', 'radio');
  input.setAttribute('name', `question-${questionIndex + 1}`);
  input.setAttribute('value', `${choiceIndex}`);

  label.append(input, choice);
  choiceItem.appendChild(label);

  return choiceItem;
}

// Создает секцию с текстом вопроса и списком ol с ответами
function createQuizItem(questionData, questionIndex) {
  const quizItem = document.createElement('section');
  quizItem.classList.add('test-question');

  const question = document.createElement('h3');
  question.textContent = `${questionIndex + 1}. ${questionData.question}`;

  const choicesList = document.createElement('ol');
  const choices = questionData.choices.map((choice, choiceIndex) =>
    createChoiceItem(choice, choiceIndex, questionIndex),
  );

  choicesList.append(...choices);
  quizItem.append(question, choicesList);

  return quizItem;
}

// Создает список секций с вопросами
function createQuizItems(quizQuestions) {
  return quizQuestions.map((question, i) => createQuizItem(question, i));
}

// Проверка формы при submit

const correctAnswer = quizQuestions.map(question => question.answer);
console.log(correctAnswer);

form.addEventListener('change', changeUserChoiiceForm);
form.addEventListener('submit', submitUserChoiiceForm);

function changeUserChoiiceForm(e) {
  e.preventDefault();
  const userChoiseAnswer = new FormData(e.currentTarget);
  const userChoise = [];
  userChoiseAnswer.forEach(value => {
    userChoise.push(Number(value));
    if (userChoise.length === quizQuestions.length) {
      submitBtn.removeAttribute('disabled');
    }
  });
}
function submitUserChoiiceForm(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const userAnswers = [];

  formData.forEach(value => {
    userAnswers.push(Number(value));
  });
  console.log(userAnswers);

  const checkedAnsewers = [];
  userAnswers.forEach((answer, idx) => {
    checkedAnsewers.push({ answer, passed: answer === correctAnswer[idx] });
  });
  const passed = checkedAnsewers.every(answer => answer.passed);

  console.log(checkedAnsewers);
  console.log(passed);

  const userRigthAnswersCount = checkedAnsewers.reduce((acc, answer) => {
    if (answer.passed) {
      return acc + 1;
    }
    return acc;
  }, 0);

  console.log(userRigthAnswersCount);

  function testMessage(userRigthAnswersCount) {
    const correctAnswerPercentage = Math.round(
      (userRigthAnswersCount / correctAnswer.length) * 100,
    );
    let message = `${correctAnswerPercentage} % Правильных ответов.`;
    if (correctAnswerPercentage < 80) {
      return (message += ' Тест не пройден.');
    } else {
      return (message += ' Поздравляем! Тест пройден.');
    }
  }

  alert(testMessage(userRigthAnswersCount));
}
