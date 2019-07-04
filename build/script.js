document.body.addEventListener('click', clickHandler);

/**
* Обработчик клик-ивентов
* @param    {MouseEvent} event
*/
function clickHandler(event) {
  const target = event.target;
  let node;

  if ((node = targetContains(target, 'onoffswitch'))) {
    switchThemes(node.firstElementChild);
  } else if ((node = targetContains(target, 'history__show'))) {
    node.nextElementSibling.classList.toggle('history__hide');
  }
}

/**
* Функция для поиска ноды, содержащей нужный класс, в пути ивента
* @param    {Node} target - Цель поиска
* @param    {string} name - Название искомого класса
* @return {Node | boolean} - Первая подходящая нода, если существует, иначе false
*/
function targetContains(target, name) {
  if (target.classList.contains(name)) {
    return target;
  }

  if (target.parentNode.nodeName !== 'BODY') {
    return targetContains(target.parentNode, name);
  }

  return false;
}

/**
* Переключает темы project-default и project-inverse между собой и изменяет отображение кнопки
* @param    {Node} button - Нода .onoffswitch__button
*/
function switchThemes(button) {
  const def = Array.from(
    document.querySelectorAll('.theme_color_project-default')
  );
  const inv = Array.from(
    document.querySelectorAll('.theme_color_project-inverse')
  );

  for (const entry of def) {
    entry.classList.remove('theme_color_project-default');
    entry.classList.add('theme_color_project-inverse');
  }
  for (const entry of inv) {
    entry.classList.remove('theme_color_project-inverse');
    entry.classList.add('theme_color_project-default');
  }

  button.classList.toggle('onoffswitch__button_toggled');
}
