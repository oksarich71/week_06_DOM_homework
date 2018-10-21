document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const button = document.querySelector('#button');
    button.addEventListener('click', handleButtonClick);
  });

  const handleButtonClick = function () {
    const result = document.querySelector('#places-to-visit-list');
    result.textContent = '';
  }

  const handleFormSubmit = function(event) {
    event.preventDefault();

  const newListItem = document.createElement('ul');
    newListItem.textContent = `${this.name.value}, ${this.country.value}, ${this.continent.value}`

  const placesToVisitList = document.querySelector ('#places-to-visit-list');
  placesToVisitList.appendChild(newListItem);


const form = document.querySelector('#new-item-form');
form.reset()
};
