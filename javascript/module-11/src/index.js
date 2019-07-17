'use strict';
import posts from './menu.json';
import htmlIteams from './templates/menu.hbs';
import './styles.css';

const refs = {
  body: document.querySelector('body'),
  themeSwitchControl: document.querySelector('#theme-switch-control'),
  menuList: document.querySelector('#menu'),
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.menuList.insertAdjacentHTML('beforeend', buildPostFood(posts));
refs.body.classList.add(Theme.LIGHT);

function buildPostFood(posts) {
  const markup = posts.map(post => htmlIteams(post)).join('');
  return markup;
}

const loadFromLocalStorage = key => {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

const saveToLocalStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};

const localThemeValue = loadFromLocalStorage('theme');

if (localThemeValue === Theme.DARK) {
  refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
}

const themeClickGhange = e => {
  const switchClick = e.currentTarget.classList.value;
  const saveTheme = saveToLocalStorage('theme', switchClick);
  const currentTheme = loadFromLocalStorage('theme');

  if (currentTheme === Theme.DARK) {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    saveToLocalStorage('theme', Theme.LIGHT);
  } else {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    saveToLocalStorage('theme', Theme.DARK);
  }
};

refs.body.addEventListener('change', themeClickGhange);
