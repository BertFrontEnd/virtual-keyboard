document.addEventListener('DOMContentLoaded', function () {
  /* Main */
  document.body.insertAdjacentHTML('afterbegin', '<main></main>');

  const mainContent = document.querySelector('main');

  /* Screen */
  function initTextArea() {
    mainContent.insertAdjacentHTML(
      'afterbegin',
      '<section id="for-screen"><textarea name="screen" class="screen" cols="150" rows="12" placeholder="A long time ago in a galaxy far far away..."></textarea></section>'
    );
  }

  /* Keyboard */
  function initAreaForKeyboard() {
    mainContent.insertAdjacentHTML(
      'beforeend',
      '<section id="for-keyboard"><div class="keyboard"></div></section>'
    );
  }

  function initKeyboard() {
    const keyboard = document.querySelector('.keyboard');
    let key = '';
    let keys = 52;
    for (let i = 0; i <= keys; i++) {
      key += '<div class="key-default"></div>';
      if (i == 13) {
        key += '<div class="key-default key-backspace"></div>';
      }
      if (i == 13) {
        key += '<div class="key-default key-tab"></div>';
      }
      if (i == 26) {
        key += '<div class="key-default key-del"></div>';
      }
      if (i == 26) {
        key += '<div class="key-default key-caps"></div>';
      }
      if (i == 37) {
        key += '<div class="key-default key-enter"></div>';
      }
      if (i == 37) {
        key += '<div class="key-default key-l-shift"></div>';
      }
      if (i == 48) {
        key += '<div class="key-default key-r-shift"></div>';
      }
      if (i == 48) {
        key += '<div class="key-default key-l-func"></div>';
      }
      if (i == 48) {
        key += '<div class="key-default key-l-ctrl"></div>';
      }
      if (i == 49) {
        key += ' <div class="key-default key-l-alt"></div>';
      }
      if (i == 49) {
        key += '<div class="key-default key-space"></div>';
      }
      if (i == 49) {
        key += '<div class="key-default key-r-alt"></div>';
      }
      if (i == 49) {
        key += '<div class="key-default key-r-ctrl"></div>';
      }
      if (i == 52) {
        key += '<div class="key-default key-r-func"></div>';
      }
    }
    keyboard.innerHTML = key;
  }

  /* Load Screen & Keyboard */
  window.onload = initTextArea();
  window.onload = initAreaForKeyboard();
  window.onload = initKeyboard();

  /* Render Function */
  const keyKeyboardId = [
    'Blockquote',
    'Digit1',
    'Digit2',
    'Digit3',
    'Digit4',
    'Digit5',
    'Digit6',
    'Digit7',
    'Digit8',
    'Digit9',
    'Digit0',
    'Minus',
    'Equal',
    'Backspace',
    'Tab',
    'KeyQ',
    'KeyW',
    'KeyE',
    'KeyR',
    'KeyT',
    'KeyY',
    'KeyU',
    'KeyI',
    'KeyO',
    'KeyP',
    'BracketLeft',
    'BracketRight',
    'Delete',
    'CapsLock',
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyF',
    'KeyG',
    'KeyH',
    'KeyJ',
    'KeyK',
    'KeyL',
    'Semicolon',
    'Quote',
    'Enter',
    'ShiftLeft',
    'IntlBackslash',
    'KeyZ',
    'KeyX',
    'KeyC',
    'KeyV',
    'KeyB',
    'KeyN',
    'KeyM',
    'Comma',
    'Period',
    'Slash',
    'ArrowUp',
    'ShiftRight',
    'ControlLeft',
    'MetaLeft',
    'AltLeft',
    'Space',
    'AltRight',
    'en',
    'ArrowLeft',
    'ArrowDown',
    'ArrowRight',
  ];
  const en = [
    'Esc',
    '`',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'Backspace',
    'Tab',
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    '[',
    ']',
    '\\',
    'Delete',
    'CapsLock',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    ';',
    "'",
    'Enter',
    'Shift',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    ',',
    '.',
    '/',
    '↑',
    'Shift',
    'Fn',
    'Ctrl',
    'Win',
    'Alt',
    ' ',
    'Alt',
    'Ctrl',
    '←',
    '↓',
    '→',
    'Fn',
  ];
  const enUp = [
    'Esc',
    '~',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '+',
    'Backspace',
    'Tab',
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    '{',
    '}',
    '|',
    'Delete',
    'CapsLock',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    ':',
    '"',
    'Enter',
    'Shift',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '<',
    '>',
    '?',
    '↑',
    'Shift',
    'Fn',
    'Ctrl',
    'Win',
    'Alt',
    ' ',
    'Alt',
    'Ctrl',
    '←',
    '↓',
    '→',
    'Fn',
  ];
  const ru = [
    'Esc',
    'ё',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'Backspace',
    'Tab',
    'й',
    'ц',
    'у',
    'к',
    'е',
    'н',
    'г',
    'ш',
    'щ',
    'з',
    'х',
    'ъ',
    '\\',
    'Delete',
    'CapsLock',
    'ф',
    'ы',
    'в',
    'а',
    'п',
    'р',
    'о',
    'л',
    'д',
    'ж',
    'э',
    'Enter',
    'Shift',
    'я',
    'ч',
    'с',
    'м',
    'и',
    'т',
    'ь',
    'б',
    'ю',
    '.',
    '↑',
    'Shift',
    'Fn',
    'Ctrl',
    'Win',
    'Alt',
    ' ',
    'Alt',
    'Ctrl',
    '←',
    '↓',
    '→',
    'Fn',
  ];
  const ruUp = [
    'Esc',
    'Ё',
    '!',
    '"',
    '№',
    ';',
    '%',
    ':',
    '?',
    '*',
    '(',
    ')',
    '_',
    '+',
    'Backspace',
    'Tab',
    'Й',
    'Ц',
    'У',
    'К',
    'Е',
    'Н',
    'Г',
    'Ш',
    'Щ',
    'З',
    'Х',
    'Ъ',
    '/',
    'Delete',
    'CapsLock',
    'Ф',
    'Ы',
    'В',
    'А',
    'П',
    'Р',
    'О',
    'Л',
    'Д',
    'Ж',
    'Э',
    'Enter',
    'Shift',
    'Я',
    'Ч',
    'С',
    'М',
    'И',
    'Т',
    'Ь',
    'Б',
    'Ю',
    ',',
    '↑',
    'Shift',
    'Fn',
    'Ctrl',
    'Win',
    'Alt',
    ' ',
    'Alt',
    'Ctrl',
    '←',
    '↓',
    '→',
    'Fn',
  ];

  const virtualKeyboardKeys = document.querySelectorAll('.key-default');
  console.log(virtualKeyboardKeys);

  function renderSymbols(symbol) {
    virtualKeyboardKeys.innerHTML = '';
    for (let i = 0; i < symbol.length; i++) {
      virtualKeyboardKeys[i].textContent = symbol[i];
    }
  }

  const virtualKeyboard = document.querySelector('.keyboard');
  console.log(virtualKeyboard);

  /*   virtualKeyboard.addEventListener('mousedown', (e) => {
    if (
      e.code === 'ShiftLeft' ||
      e.code === 'ShiftRight' ||
      e.target.className === 'key-l-shift' ||
      e.target.className === 'key-r-shift'
    ) {
      document.querySelector('.key-l-shift').classList.toggle('key-active');
    }
  }); */

  /*  ChangeLanguage */
  document.addEventListener('keydown', (e) => {
    if (e.code === 'ControlLeft') {
      if (langKeyboard === en) {
        langKeyboard = ru;
        console.log(langKeyboard);
      } else {
        langKeyboard = en;
        console.log(langKeyboard);
      }
      renderSymbols(langKeyboard);
      localStorage.setItem('language', JSON.stringify(langKeyboard));
    }
  });

  /* ShiftUpperCase&LowerCase */
  document.addEventListener('keydown', (e) => {
    const myShiftKey = document.querySelector('.key-l-shift');
    if (e.code === 'ShiftLeft') {
      myShiftKey.classList.add('key-active');
    }
    if (e.code === 'ShiftLeft') {
      if (langKeyboard === enUp) {
        langKeyboard = enUp;
      } else if (langKeyboard === ruUp) {
        langKeyboard = ruUp;
      }
    }
    if (e.code === 'ShiftLeft') {
      if (langKeyboard === en) {
        langKeyboard = enUp;
      } else {
        langKeyboard = ruUp;
      }
      renderSymbols(langKeyboard);
    }

    document.addEventListener('keyup', (e) => {
      myShiftKey.classList.remove('key-active');
      if (e.code === 'ShiftLeft') {
        if (langKeyboard === enUp) {
          langKeyboard = en;
          console.log(langKeyboard);
        } else if (langKeyboard === ruUp) {
          langKeyboard = ru;
          console.log(langKeyboard);
        }
        renderSymbols(langKeyboard);
        localStorage.setItem('language', JSON.stringify(langKeyboard));
      }
    });
  });

  /* CapsLock */
  document.addEventListener('keydown', (e) => {
    const myCapsLockKey = document.querySelector('.key-caps');
    if (e.code === 'CapsLock') {
      myCapsLockKey.classList.toggle('key-active');
    }
    if (e.code === 'CapsLock') {
      if (langKeyboard === en) {
        langKeyboard = enUp;
      } else if (langKeyboard === enUp) {
        langKeyboard = en;
      } else if (langKeyboard === ru) {
        langKeyboard = ruUp;
      } else if (langKeyboard === ruUp) {
        langKeyboard = ru;
      }
      renderSymbols(langKeyboard);
      /* localStorage.setItem('language', JSON.stringify(langKeyboard)); */
    }
  });

  /* languageStorage  */
  let langKeyboard = [];
  if (
    /* localStorage.getItem('language') || */
    localStorage.getItem('language') == null ||
    localStorage.getItem('language') == undefined
  ) {
    langKeyboard = en;
  } else {
    langKeyboard = JSON.parse(localStorage.getItem('language'));
  }
  /* localStorage.setItem('language', lang); */

  window.onload = renderSymbols(langKeyboard);
});
