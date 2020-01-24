const user = 'shaqash';
const url = `https://api.github.com/users/${user}`;

async function fetchProjects() {
  let projects = sessionStorage.getItem('shaq.starred');
  if (!projects) {
    projects = await fetch(url + '/starred')
      .then(data => data.json())                // Convert to JSON
      .then(json => json.filter(repoFilter))    // Filter by owner = me
      .then(filtered => filtered.map(repoMap)); // Map only required fields
    sessionStorage.setItem('shaq.starred', JSON.stringify(projects))
  } else {
    projects = JSON.parse(projects);
  }
  return projects;
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
  let user = sessionStorage.getItem('shaq.userdata');
  if (!user) {
    user = await fetch(url)
      .then(json => json.json());
    sessionStorage.setItem('shaq.userdata', JSON.stringify(user))
  } else {
    user = JSON.parse(user);
  }
  return user;
}

async function renderGithub() {
  const section = document.getElementById('github');
  const loader = document.getElementById('githubLoader');
  const userdata = await fetchUserData();
  const header = makeHeader('GITHUB', `
    <b>${userdata.public_repos}</b> <small>REPOS</small>
    <b>${userdata.public_gists}</b> <small>GISTS</small>
  `);
  const projects = await fetchProjects();
  const list = makeList(projects);
  section.insertAdjacentHTML('beforebegin', header);
  section.insertAdjacentHTML('afterbegin', list);
  loader.classList.remove('active');
}

renderGithub();
