function makeItem (item) {
  return `
  <a href="${item.url}" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="w-100 justify-content-between">
      <h5 class="">${item.name}</h5>
      <small class="text-muted">updated: ${item.updated_at}</small>
    </div>
    <p class="mb-1">${item.description}</p>
    <span class="badge badge-warning">${item.language}</span>
  </a>
  `
}

function makeList (items) {
  const listArray = items.map(item => makeItem(item));
  return `<div class='list-group'>${listArray.join('')}</div>`;
}

function makeBadge (item) {
  return `
  <span class='badge badge-primary badge-pills'>${item}</span>
  `;
}

function makeTag (tag, str, style) {
  return `
  <${tag} class="${style}">${str}</${tag}>
  `;
}