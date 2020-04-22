// Instruction 


// Print to DOM Function

const printToDom = (selector, textToPrint) => {
  console.log('in printToDOM', selector, textToPrint);
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

// Dinos Array

const dinos = [
  {
    dinoType: 't-rex',
    name: 'Tommy',
    age: 100
  },
  {
    dinoType: 'stegosaurus',
    name: 'Steve',
    age: 10
  },
  {
    dinoType: 'velociraptor',
    name: 'Ian',
    age: 23
  },
];

// Dino Card Function

const buildDinoCards = (dinoCollection) => {
  let domString = '';

  for (let i = 0; i < dinoCollection.length; i++) {
    domString += '<div class="dino">';
    domString += `<h3>${dinoCollection[i].name}</h3>`;
    domString += `<p>This dino is a ${dinoCollection[i].dinoType} and is ${dinoCollection[i].age} years old.</p>`;
    domString += '</div>';
  }

  printToDom('#dino-pen', domString);
}


// Exercise 2:
// create an assignments array, which has several assignment objects in it
// assignment should have: title, dueDate, topic, notes
// loop over assignments array, and create 'cards' for each assignment
// bonus points for using printToDom to print them to the dom
// hint: create a div for the assignment cards to go to


// Assignments Array

const assignments = [
  {
    title: 'Loops',
    dueDate: '04/23/2020',
    topic: 'Looping and the DOM.',
    notes: 'Showing us how to create HTML through JavaScript.'
  },
  {
    title: 'Objects',
    dueDate: '04/18/2020',
    topic: 'Creating Basic Objects',
    notes: 'Showing us how to make Objects from scratch.'
  },
  {
    title: 'Functions',
    dueDate: '03/10/2020',
    topic: 'Creating Basic Functions',
    notes: 'Showing us how to make short, basic Functions.'
  },
];

// Assignments Card Function

const assignmentCards = (assignCard) => {
  let domString = '';

  for (let i = 0; i < assignCard.length; i++) {
    domString += `<div class="cards">`;
    domString += `<h3>${assignCard[i].title}</h3>`;
    domString += `<h5>${assignCard[i].dueDate}</h5>`;
    domString += `<p>${assignCard[i].topic}</p>`;
    domString += `<p>${assignCard[i].notes}</p>`;
    domString += `</div>`;
  }

  printToDom('#assignment-cards', domString);
}

// Initial Function

const init = () => {
  buildDinoCards(dinos);
  assignmentCards(assignments);
}

init();
