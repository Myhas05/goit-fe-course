'use strict';

const quizData = {
  title: 'Тест на базовый уровень JavaScript.',
  questions: [
    {
      question: 'Что возвращает метод Array.prototype.filter()?',
      choices: [
        'Массив, если результат работы содержит более одного элемента',
        'Один элемент, если только он прошел фильтрацию',
        'Всегда массив',
      ],
      answer: 2,
    },
    {
      question: 'Как получить список всех ключей объекта obj?',
      choices: [
        'obj.keys()',
        'Object.keys(obj)',
        'obj.keys',
        'Object.getKeys(obj)',
      ],
      answer: 1,
    },
    {
      question: 'Что такое статическое свойство класса?',
      choices: [
        'Свойство доступное только экземплярам, но не классу',
        'Свойство доступное только классу, но не его экземплярам',
        'Свойство которое нельзя изменять после создания',
      ],
      answer: 1,
    },
    {
      question: 'Что такое обещание (promise)?',
      choices: [
        'Функция, представляющая конечный результат асинхронной операции',
        'Данные полученные в результате асинхронной операции',
        'Объект, представляющий конечный результат асинхронной операции',
      ],
      answer: 2,
    },
    {
      question: 'Выберите не существующий HTTP-метод.',
      choices: ['PUT', 'GET', 'GRAB', 'DELETE', 'PATCH'],
      answer: 2,
    },
    {
      question: 'Какой командой будет запускаться npm-скрипт с именем server?',
      choices: [
        'npm server',
        'npm start server',
        'npm execute server',
        'npm run server',
      ],
      answer: 3,
    },
  ],
};

{
  /* <section>
  <h3>1. Текст вопроса</h3>

  <ol>
    <li>
      <label>
        <input type="radio" name="" value="" />
        Ответ 1
      </label>
    </li>
    <li>
      <label>
        <input type="radio" name="" value="" />
        Ответ 2
      </label>
    </li>
  </ol>
</section> */
}
const testContainer = document.querySelector('.test-container');
const testOne = createTestSection();
const testTwo = createTestSection();
const testThree = createTestSection();
const button = document.querySelector('button');

testContainer.insertBefore(testOne, button);
testOne.appendChild(testTwo);
testTwo.appendChild(testThree);

function createTestSection(question, choices, answer) {
  const section = document.createElement('section');
  section.classList.add('sd');

  const sectionQuestion = document.createElement('h3');
  sectionQuestion.textContent = question;
  sectionQuestion.classList.add('section__question');

  const sectionList = document.createElement('ol');
  const firstAnswerChoise = createTestList();
  const secondAnswerChoise = createTestList();
  const thirdAnswerChoise = createTestList();
  const forthAnswerChoise = createTestList();

  section.appendChild(sectionQuestion);
  section.appendChild(sectionList);
  sectionList.append(
    firstAnswerChoise,
    secondAnswerChoise,
    thirdAnswerChoise,
    forthAnswerChoise,
  );

  console.log(section);
  return section;
}

function createTestList() {
  const testList = document.createElement('li');
  const label = document.createElement('label');
  const input = document.createElement('input');

  input.type = 'radio';
  input.name = ' ';
  input.value = ' ';
  label.appendChild(input);
  testList.appendChild(label);
  return testList;
}
