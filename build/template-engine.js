/**
* @param  {object} obj — Структура блоков интерфейса в формате BEMJSON
* @return {string} HTML разметка страницы
*/
export default function parseBEMJSON(obj) {
  // returning text
  if (typeof obj === 'string') return obj;

  // preparing
  let tagName = 'div';
  if (obj.hasOwnProperty('tag') && obj.tag !== false && obj.tag !== '') {
    tagName = obj.tag;
  }
  const body = document.createElement('body');
  const block = document.createElement(tagName);

  // assigning block classes
  const blockClasses = parseClassName(obj);

  for (const entry of blockClasses) {
    block.classList.add(entry);
  }

  // handling mixes
  if (obj.hasOwnProperty('mix')) {
    const classes =
      obj.mix.length !== undefined
        ? parseClasses(obj.mix)
        : parseClassName(obj.mix);

    for (const str of classes) {
      block.classList.add(str);
    }
  }

  // handling content
  if (obj.hasOwnProperty('content')) {
    const content = obj.content;
    let str = '';

    if (content.length !== undefined && content.length > 0) {
      for (const block of content) {
        str += parseBEMJSON(block);
      }
    } else if (content.length === undefined) {
      str += parseBEMJSON(content);
    }

    block.innerHTML = str;
  }

  // returning html string
  body.appendChild(block);
  return body.innerHTML;
}

/**
* @param  {object[]} arr - Объекты классов
* @return {string[]} Строки классов по БЕМу
*/
function parseClasses(arr) {
  const classes = [];

  for (const entry of arr) {
    classes.push(...parseClassName(entry));
  }

  return classes;
}

/**
* @param  {object} obj - Объект класса
* @return {string[]} Строки классов по БЕМу
*/
function parseClassName(obj) {
  const classes = [];
  let baseStr = obj.block;

  if (obj.hasOwnProperty('elem')) {
    baseStr = `${baseStr}__${obj.elem}`;

    classes.push(baseStr);

    if (obj.hasOwnProperty('elemMods')) {
      classes.push(...parseMods(obj.elemMods, baseStr));
    }
  } else if (obj.hasOwnProperty('mods')) {
    classes.push(obj.block);
    classes.push(...parseMods(obj.mods, baseStr));
  } else {
    classes.push(obj.block);
  }

  return classes;
}

/**
* @param  {object} obj - Объект модификаторов
* @param  {string} str - Префикс создаваемой строки
* @return {string[]} Строки классов по БЕМу
*/
function parseMods(obj, str) {
  const result = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] !== 'string' && obj[key] === true) {
        result.push(`${str}_${key}`);
      } else {
        result.push(`${str}_${key}_${obj[key]}`);
      }
    }
  }

  return result;
}
