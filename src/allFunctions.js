const functions = (() => {
  //  TESTER
  const greet = () => 'Hello from functions city';
  // ELEMENT MAKER
  const elMaker = (type, parent, text = '', className1, className2) => {
    const el = document.createElement(type);
    if (className1 !== undefined && className2 !== undefined) {
      el.classList.add(className1, className2);
    } else if (className1 !== undefined && className2 === undefined) {
      el.classList.add(className1);
    }
    el.innerText = text;
    parent.appendChild(el);
    return el;
  };
  return { elMaker, greet };
})();



// const addInput = (parent) => {
//   const container = elMaker('div', parent, 'add new', 'input-container');
//   const form = elMaker('form', container);
//   const labelTitle = elMaker('label', form, 'Title');
//   const inputTitle = elMaker('input', form);
//   const labelContent = elMaker('label', form, 'Content');
//   const inputContent = elMaker('input', form);
// };
// addInput(content);


export { functions };
