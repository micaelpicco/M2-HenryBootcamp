var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ

  if (matchFunc(startEl)) resultSet.push(startEl);
  for (let i = 0; i < startEl.children.length; i++) {
    resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc, startEl.children[i]));
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] === "#") return "id";
  if (selector[0] === ".") return "class";
  else
    for (let i = 1; i < selector.length; i++) {
      if (selector[i] === ".") return "tag.class";
    }
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id")
    matchFunction = (element) => "#" + element.id === selector;
  if (selectorType === "class") {
    matchFunction = (element) => {
      for (let i = 0; i < element.classList.length; i++) {
        if ("." + element.classList[i] === selector) return true;
      }
      return false;
    };
  }
  if (selectorType === "tag.class") {
    matchFunction = (element) => {
      let [t, c] = selector.split(".");
      return (
        matchFunctionMaker(t)(element) && matchFunctionMaker("." + c)(element)
      );
    };
  }
  if (selectorType === "tag") {
    matchFunction = (element) => element.tagName === selector.toUpperCase();
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
