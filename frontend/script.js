function injectHome() {
  const pageDiv = document.getElementById('page');
  pageDiv.innerHTML = home;
  getHomeDate();
  setInterval(getHomeDate, 1000); //this will be running in the background always AND resetting when going home
}

function getHomeDate() {
  if (window.location.pathname === '/') {
    let d = Date();
    const showH1 = document.getElementById('date');
    showH1.innerHTML = d;
  }
}

function injectBlog() {
  const pageDiv = document.getElementById('page');
  pageDiv.innerHTML = blog;
  getPostSummaries();
}

function getPostSummaries() {
  let blogGrid = document.getElementById('blog-grid')
  for (let i = 0; i < postSummaries.length; i++) {
    blogGrid.innerHTML += postSummaries[i];
  }
}

function injectPost(post) {
  const pageDiv = document.getElementById('page');
  pageDiv.innerHTML = post;
}

function injectAbout() {
  const pageDiv = document.getElementById('page');
  pageDiv.innerHTML = about;
}

function injectGallery() {
  const pageDiv = document.getElementById('page');
  pageDiv.innerHTML = gallery;
}

function pushWindowState(path) {
  let pagePath = window.location.pathname;
  if (pagePath.slice(1) === path.slice(1)) { // a reduced way of comparing these slightly different path formats 
    return;                                                     // relies on (''.slice(1) === '') being true
  }
  window.history.pushState(
    {},
    '',
    window.location.origin + path,
  );
}

window.onpopstate = () => {
  route();
}

function route() {
  let pagePath = window.location.pathname;
  let newPage = (pagePath === '/') ? 'home' : pagePath.slice(1); // remove leading /
  injectPage(newPage);
}

function injectPage(page) {
  const folders = page.split('/');
  if (page.startsWith('blog/') && folders[folders.length - 1] in posts) {
    injectPost(posts[folders[folders.length - 1]]);
    return;
  }
  switch(page) {
    case 'home':
      injectHome();
      break;
    case 'blog':
      injectBlog();
      break;
    case 'about':
      injectAbout();
      break;
    case 'gallery':
      injectGallery();
      break;
    default:
      console.log('WARNING: attempted nonexistent path in injectPage() => ' + page)
      alert("You sly dog! That path unfortunately does not exist (yet) so you've been routed home 😏. Have a nice day!")
      window.location.pathname = '/'
      injectHome();
  }
}
