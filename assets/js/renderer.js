function makeItem(item) {
  return `
  <div class="card">
    <div class="content">
      <div class="header">${item.name}</div>
      <div class="meta">
        <span class="right floated time">
          ${formatDate(new Date(item.updated_at))}
        </span>
        <span class="category">
          <i class="${makeLanguageIcon(item.language)}"></i>
          ${item.language}
        </span>
      </div>
      <div class="description">
        ${item.description}
      </div>
    </div>
    <div class="extra content">
      <a
        href="${item.url}" 
        class="ui basic fluid button"
      >
        Check it out!
      </a>
    </div>
  </div>
  `
}

function makeLanguageIcon(language) {
  switch (language) {
    case 'JavaScript':
      return 'js yellow icon';
    case 'python':
      return 'python blue icon';
    case 'Shell':
      return 'terminal black icon';
    case 'Ruby':
      return 'gem red icon';
    default:
      return '';
  }
}

function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

function makeList(items) {
  const listArray = items.map(item => makeItem(item));
  return `<div class='ui two doubling cards'>${listArray.join('')}</div>`;
}

function makeBadge(item) {
  return `
  <span class='ui label'>${item}</span>
  `;
}

function makeElement(element, str, style) {
  return `
  <${element} class="${style}">${str}</${element}>
  `;
}

function makeHeader(header, subHeader) {
  return `
    <h2 class="ui header">
      ${header}
      ${makeElement('div', subHeader, 'sub header')}
    </h2>
  `;
}
