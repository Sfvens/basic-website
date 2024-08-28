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
  pagePath = (pageName === 'home') ? '' : '/' + pageName;
  window.history.pushState(
    {},
    '',
    window.location.origin + pagePath
  );
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

window.onpopstate = () => {
  pagePath = window.location.pathname;
  newPage = (pagePath === '/') ? 'home' : pagePath.slice(1); // remove leading /
  console.log(newPage);
  injectPage(newPage);
}
