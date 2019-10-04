const user = 'shaqash';
const url = `https://api.github.com/users/${user}`;

async function fetchProjects() {
  const projects = await fetch(url+'/starred')
    .then(data => data.json())                // Convert to JSON
    .then(json => json.filter(repoFilter))    // Filter by owner = me
    .then(filtered => filtered.map(repoMap)); // Map only required fields
  const list = makeList(projects);
  const section  = document.getElementById('github');
  section.insertAdjacentHTML('afterbegin', list);
}

repoMap = p => ({
  name: p.name,
  url: p.html_url,
  description: p.description,
  updated_at: p.updated_at,
  language: p.language,
})

repoFilter = p => p.owner.login === user;

async function fetchUserData() {
  const user = await fetch(url)
    .then(json => json.json());
    const repoCount = document.getElementById('github');
    repoCount.insertAdjacentHTML('beforeend', 
      makeTag('small', `Public repos count: ${makeBadge(user.public_repos)}`));
    repoCount.insertAdjacentHTML('beforeend', 
      makeTag('small', `Public gists count: ${makeBadge(user.public_gists)}`));
  }

fetchUserData();
fetchProjects();
