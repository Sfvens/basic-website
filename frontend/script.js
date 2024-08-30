function injectHome() {
  const pageDiv = document.getElementById('page');
  pageDiv.innerHTML = home;
  getDate();
}

function getDate() {
  let d = Date();
  const showH1 = document.getElementById('show');
  showH1.innerHTML = d;
}

function injectBlog() {
  const pageDiv = document.getElementById('page');
  pageDiv.innerHTML = blog;
  getPosts();
}

function getPosts() {
  let posts = document.getElementById('post');
  while (posts !== null) {
    posts.innerHTML = post;
    posts.id = '';
    posts = document.getElementById('post');
  }
}

function injectPost() {
  const pageDiv = document.getElementById('page');
  pageDiv.innerHTML = uniquePost;
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
  pagePath = window.location.pathname;
  if (window.location.pathname.slice(1) === path.slice(1)) { // a reduced way of comparing these slightly different path formats 
    return;                                                     // relies on (''.slice(1) === '') being true
  }
  window.history.pushState(
    {},
    '',
    window.location.origin + path,
  );
}

window.onpopstate = () => {
  pagePath = window.location.pathname;
  newPage = (pagePath === '/') ? 'home' : pagePath.slice(1); // remove leading /
  injectPage(newPage);
}

function injectPage(page) {
  switch(page) {
    case 'home':
      injectHome();
      break;
    case 'blog':
      injectBlog();
      break;
    case 'blog/uniquePost':
      injectPost();
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
      injectHome();
  }
}

const routes = ['home', 'blog', 'blog/uniquePost', 'about', 'gallery'];

function route() {
  pagePath = window.location.pathname;
  newPage = (pagePath === '/') ? 'home' : pagePath.slice(1); // remove leading /
  injectPage(newPage);
}