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
    let keys = 66;
    for (let i = 0; i <= keys; i++) {
      if (i == 0) {
        key += '<div class="key-default key-esc"></div>';
      }
      if (i == 1) {
        key += '<div class="key-default key-backquote"></div>';
      }
      if (i == 2) {
        key += '<div class="key-default key-dig1"></div>';
      }
      if (i == 3) {
        key += '<div class="key-default key-dig2"></div>';
      }
      if (i == 4) {
        key += '<div class="key-default key-dig3"></div>';
      }
      if (i == 5) {
        key += '<div class="key-default key-dig4"></div>';
      }
      if (i == 6) {
        key += '<div class="key-default key-dig5"></div>';
      }
      if (i == 7) {
        key += '<div class="key-default key-dig6"></div>';
      }
      if (i == 8) {
        key += '<div class="key-default key-dig7"></div>';
      }
      if (i == 9) {
        key += '<div class="key-default key-dig8"></div>';
      }
      if (i == 10) {
        key += '<div class="key-default key-dig9"></div>';
      }
      if (i == 11) {
        key += '<div class="key-default key-dig0"></div>';
      }
      if (i == 12) {
        key += '<div class="key-default key-minus"></div>';
      }
      if (i == 13) {
        key += '<div class="key-default key-equal"></div>';
      }
      if (i == 14) {
        key += '<div class="key-default key-backspace"></div>';
      }
      if (i == 15) {
        key += '<div class="key-default key-tab"></div>';
      }
      if (i == 16) {
        key += '<div class="key-default key-q"></div>';
      }
      if (i == 17) {
        key += '<div class="key-default key-w"></div>';
      }
      if (i == 18) {
        key += '<div class="key-default key-e"></div>';
      }
      if (i == 19) {
        key += '<div class="key-default key-r"></div>';
      }
      if (i == 20) {
        key += '<div class="key-default key-t"></div>';
      }
      if (i == 21) {
        key += '<div class="key-default key-y"></div>';
      }
      if (i == 22) {
        key += '<div class="key-default key-u"></div>';
      }
      if (i == 23) {
        key += '<div class="key-default key-i"></div>';
      }
      if (i == 24) {
        key += '<div class="key-default key-o"></div>';
      }
      if (i == 25) {
        key += '<div class="key-default key-p"></div>';
      }
      if (i == 26) {
        key += '<div class="key-default key-b-left"></div>';
      }
      if (i == 27) {
        key += '<div class="key-default key-b-right"></div>';
      }
      if (i == 28) {
        key += '<div class="key-default key-backslash"></div>';
      }
      if (i == 29) {
        key += '<div class="key-default key-del"></div>';
      }
      if (i == 30) {
        key += '<div class="key-default key-caps"></div>';
      }
      if (i == 31) {
        key += '<div class="key-default key-a"></div>';
      }
      if (i == 32) {
        key += '<div class="key-default key-s"></div>';
      }
      if (i == 33) {
        key += '<div class="key-default key-d"></div>';
      }
      if (i == 34) {
        key += '<div class="key-default key-f"></div>';
      }
      if (i == 35) {
        key += '<div class="key-default key-g"></div>';
      }
      if (i == 36) {
        key += '<div class="key-default key-h"></div>';
      }
      if (i == 37) {
        key += '<div class="key-default key-j"></div>';
      }
      if (i == 38) {
        key += '<div class="key-default key-k"></div>';
      }
      if (i == 39) {
        key += '<div class="key-default key-l"></div>';
      }
      if (i == 40) {
        key += '<div class="key-default key-semicolon"></div>';
      }
      if (i == 41) {
        key += '<div class="key-default key-quote"></div>';
      }
      if (i == 42) {
        key += '<div class="key-default key-enter"></div>';
      }
      if (i == 43) {
        key += '<div class="key-default key-l-shift"></div>';
      }
      if (i == 44) {
        key += '<div class="key-default key-z"></div>';
      }
      if (i == 45) {
        key += '<div class="key-default key-x"></div>';
      }
      if (i == 46) {
        key += '<div class="key-default key-c"></div>';
      }
      if (i == 47) {
        key += '<div class="key-default key-v"></div>';
      }
      if (i == 48) {
        key += '<div class="key-default key-b"></div>';
      }
      if (i == 49) {
        key += '<div class="key-default key-n"></div>';
      }
      if (i == 50) {
        key += '<div class="key-default key-m"></div>';
      }
      if (i == 51) {
        key += '<div class="key-default key-comma"></div>';
      }
      if (i == 52) {
        key += '<div class="key-default key-period"></div>';
      }
      if (i == 53) {
        key += '<div class="key-default key-slash"></div>';
      }
      if (i == 54) {
        key += '<div class="key-default key-arrow-up"></div>';
      }
      if (i == 55) {
        key += '<div class="key-default key-r-shift"></div>';
      }
      if (i == 56) {
        key += '<div class="key-default key-func"></div>';
      }
      if (i == 57) {
        key += '<div class="key-default key-l-ctrl"></div>';
      }
      if (i == 58) {
        key += '<div class="key-default key-win"></div>';
      }
      if (i == 59) {
        key += '<div class="key-default key-l-alt"></div>';
      }
      if (i == 60) {
        key += '<div class="key-default key-space"></div>';
      }
      if (i == 61) {
        key += '<div class="key-default key-r-alt"></div>';
      }
      if (i == 62) {
        key += '<div class="key-default key-r-ctrl"></div>';
      }
      if (i == 63) {
        key += '<div class="key-default key-arrow-l"></div>';
      }
      if (i == 64) {
        key += '<div class="key-default key-arrow-d"></div>';
      }
      if (i == 65) {
        key += '<div class="key-default key-arrow-r"></div>';
      }
      if (i == 66) {
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

  const codeKeyboard = [
    'Escape',
    'Backquote',
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
    'Backslash',
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
    'Func',
    'ControlLeft',
    'MetaLeft',
    'AltLeft',
    'Space',
    'AltRight',
    'ControlRight',
    'ArrowLeft',
    'ArrowDown',
    'ArrowRight',
    'Func',
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
    'En',
    'Ctrl',
    'Win',
    'Alt',
    ' ',
    'Alt',
    'Ctrl',
    '←',
    '↓',
    '→',
    'En',
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
    'En',
    'Ctrl',
    'Win',
    'Alt',
    ' ',
    'Alt',
    'Ctrl',
    '←',
    '↓',
    '→',
    'En',
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
    'Ru',
    'Ctrl',
    'Win',
    'Alt',
    ' ',
    'Alt',
    'Ctrl',
    '←',
    '↓',
    '→',
    'Ru',
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
    'Ru',
    'Ctrl',
    'Win',
    'Alt',
    ' ',
    'Alt',
    'Ctrl',
    '←',
    '↓',
    '→',
    'Ru',
  ];

  const virtualKeyboardKeys = document.querySelectorAll('.key-default');
  console.log(virtualKeyboardKeys);

  const virtualScreen = document.querySelector('.screen');
  console.log(virtualScreen);

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
      e.code === 'ShiftLeft' || e.code === 'ShiftRight' ||
      || e.code === 'ShiftRight' ||
      e.target.className === 'key-l-shift' ||
      e.target.className === 'key-r-shift'
    ) {
      document.querySelector('.key-l-shift').classList.toggle('key-active');
    }
  }); */

  /* Keypress Animation All Key */

  /*   document.addEventListener('keydown', (e) => {
    for (let i = 0; i <= codeKeyboard.length; i++) {
      if (e.code === codeKeyboard[i]) {
        for (let j = 0; j <= virtualKeyboardKeys.length; j++)
          virtualKeyboardKeys[j].classList.add('key-active');
      }
    }
  }); */

  /*   document.addEventListener('keydown', (e) => {
    codeKeyboard.forEach((elk) =>
      virtualKeyboardKeys.forEach((elv) => {
        if (e.code === elk) {
          console.log('work');
          elv.classList.add('key-active');
          let symbol = elv.textContent;
          text += symbol;
          virtualScreen.textContent = text;

          document.addEventListener('keyup', (e) => {
            elv.classList.remove('key-active');
          });
        }
      })
    );
  }); */

  /*   document.addEventListener('keydown', (e) => {
    for (let i = 0; i <= codeKeyboard.length; i++) {
      for (let j = 0; j <= virtualKeyboardKeys.length; j++) {
        if (e.code === codeKeyboard[i]) {
          console.log('work');
          virtualKeyboardKeys[i].classList.add('key-active');
          let symbol = virtualKeyboardKeys[i].textContent;
          text += symbol;
          virtualScreen.textContent = text;

          document.addEventListener('keyup', (e) => {
            virtualKeyboardKeys[i].classList.remove('key-active');
          });
        }
      }
    }
  }); */

  /*  Change Language */

  document.addEventListener('keydown', (e) => {
    const ctrlKeyLeft = document.querySelector('.key-l-ctrl');
    const ctrlKeyRight = document.querySelector('.key-r-ctrl');
    if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
      ctrlKeyLeft.classList.add('key-active');
      ctrlKeyRight.classList.add('key-active');
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

    document.addEventListener('keyup', (e) => {
      ctrlKeyLeft.classList.remove('key-active');
      ctrlKeyRight.classList.remove('key-active');
    });
  });

  /* Shift */

  document.addEventListener('keydown', (e) => {
    const shiftKeyLeft = document.querySelector('.key-l-shift');
    const shiftKeyRight = document.querySelector('.key-r-shift');
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      shiftKeyLeft.classList.add('key-active');
      shiftKeyRight.classList.add('key-active');
    }
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      if (langKeyboard === enUp) {
        langKeyboard = enUp;
      } else if (langKeyboard === ruUp) {
        langKeyboard = ruUp;
      } else if (langKeyboard === en) {
        langKeyboard = enUp;
      } else {
        langKeyboard = ruUp;
      }
      renderSymbols(langKeyboard);
    }
  });

  document.addEventListener('keyup', (e) => {
    const shiftKeyLeft = document.querySelector('.key-l-shift');
    const shiftKeyRight = document.querySelector('.key-r-shift');
    shiftKeyLeft.classList.remove('key-active');
    shiftKeyRight.classList.remove('key-active');
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      if (langKeyboard === enUp) {
        langKeyboard = en;
        console.log(langKeyboard);
      } else if (langKeyboard === ruUp) {
        langKeyboard = ru;
        console.log(langKeyboard);
      }
      renderSymbols(langKeyboard);
    }
  });

  /* CapsLock */

  document.addEventListener('keydown', (e) => {
    const capsLockKey = document.querySelector('.key-caps');
    if (e.code === 'CapsLock') {
      capsLockKey.classList.toggle('key-active');
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
    }
  });

  /* Print  */

  let text = '';

  /* Keys*/

  document.addEventListener('keydown', (e) => {
    if (
      e.code === 'AltLeft' ||
      e.code === 'AltRight' ||
      e.code === 'Escape' ||
      e.code === 'Tab' ||
      e.code === 'MetaLeft'
    ) {
      e.preventDefault();
    }

    const backspaceKey = document.querySelector('.key-backspace');
    const deleteKey = document.querySelector('.key-del');
    const enterKey = document.querySelector('.key-enter');
    const spaceKey = document.querySelector('.key-space');

    if (e.code === 'Backspace') {
      backspaceKey.classList.add('key-active');
      let backspace = virtualScreen.textContent;
      text = backspace.split('').slice(0, -1).join('');
      virtualScreen.textContent = text;
    } else if (e.code === 'Delete') {
      deleteKey.classList.add('key-active');
      let del = virtualScreen.textContent;
      text = del.split('').slice(1).join('');
      virtualScreen.textContent = text;
    } else if (e.code === 'Enter') {
      enterKey.classList.add('key-active');
      text += '\n';
      virtualScreen.textContent = text;
    } else if (e.code === 'Space') {
      spaceKey.classList.add('key-active');
      text += ' ';
      virtualScreen.textContent = text;
    }

    document.addEventListener('keyup', (e) => {
      backspaceKey.classList.remove('key-active');
      enterKey.classList.remove('key-active');
      deleteKey.classList.remove('key-active');
      spaceKey.classList.remove('key-active');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'AltLeft') {
      document.querySelector('.key-l-alt').classList.add('key-active');
      text += document.querySelector('.key-l-alt').textContent;
      virtualScreen.textContent = text;
    }
    if (e.code === 'AltRight') {
      document.querySelector('.key-r-alt').classList.add('key-active');
      text += document.querySelector('.key-r-alt').textContent;
      virtualScreen.textContent = text;
    }

    document.addEventListener('keyup', (e) => {
      document.querySelector('.key-l-alt').classList.remove('key-active');
      document.querySelector('.key-r-alt').classList.remove('key-active');
    });
  });

  /* Mouse */

  virtualKeyboard.addEventListener('mousedown', (e) => {
    if (
      e.target.classList.contains('key-default') &&
      !e.target.classList.contains('key-backspace') &&
      !e.target.classList.contains('key-del') &&
      !e.target.classList.contains('key-caps') &&
      !e.target.classList.contains('key-enter') &&
      !e.target.classList.contains('key-l-shift') &&
      !e.target.classList.contains('key-r-shift') &&
      !e.target.classList.contains('key-func') &&
      !e.target.classList.contains('key-l-ctrl') &&
      !e.target.classList.contains('key-space') &&
      !e.target.classList.contains('key-r-ctrl') &&
      !e.target.classList.contains('key-r-func')
    ) {
      text += e.target.textContent;
      virtualScreen.textContent = text;
    } else if (e.target.classList.contains('key-enter')) {
      text += '\n';
      virtualScreen.textContent = text;
    } else if (e.target.classList.contains('key-space')) {
      text += ' ';
      virtualScreen.textContent = text;
    } else if (e.target.classList.contains('key-backspace')) {
      let backspace = virtualScreen.textContent;
      text = backspace.split('').slice(0, -1).join('');
      virtualScreen.textContent = text;
    } else if (e.target.classList.contains('key-del')) {
      let backspace = virtualScreen.textContent;
      text = backspace.split('').slice(1).join('');
      virtualScreen.textContent = text;
    } else if (e.target.classList.contains('key-caps')) {
      e.target.classList.toggle('key-active');
      {
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
      }
    } else if (
      e.target.classList.contains('key-l-ctrl') ||
      e.target.classList.contains('key-r-ctrl')
    ) {
      console.log(e.target);
      if (langKeyboard === en) {
        langKeyboard = ru;
        console.log(langKeyboard);
      } else {
        langKeyboard = en;
        console.log(langKeyboard);
      }
      renderSymbols(langKeyboard);
      localStorage.setItem('language', JSON.stringify(langKeyboard));
    } else if (
      e.target.classList.contains('key-l-shift') ||
      e.target.classList.contains('key-r-shift')
    ) {
      if (langKeyboard === enUp) {
        langKeyboard = enUp;
      } else if (langKeyboard === ruUp) {
        langKeyboard = ruUp;
      } else if (langKeyboard === en) {
        langKeyboard = enUp;
      } else {
        langKeyboard = ruUp;
      }
      renderSymbols(langKeyboard);
    }
  });

  virtualKeyboard.addEventListener('mouseup', (e) => {
    if (
      e.target.classList.contains('key-l-shift') ||
      e.target.classList.contains('key-r-shift')
    ) {
      if (langKeyboard === enUp) {
        langKeyboard = en;
        console.log(langKeyboard);
      } else if (langKeyboard === ruUp) {
        langKeyboard = ru;
        console.log(langKeyboard);
      }
      renderSymbols(langKeyboard);
    }
  });

  /*   const keyEsc = document.querySelector('.key-default');
  console.log(keyEsc);
  keyEsc.addEventListener('mousedown', (e) => {
    if (e.target === keyEsc) {
      virtualScreen.textContent = '';
    }
  }); */

  /* language Storage  */

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
