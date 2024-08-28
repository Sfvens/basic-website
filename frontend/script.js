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
    posts.innerHTML = 'wot';
    posts.id = '';
    posts = document.getElementById('post');
  }
}

function injectAbout() {
  const pageDiv = document.getElementById('page');
  pageDiv.innerHTML = about;
}

function injectGallery() {
  const pageDiv = document.getElementById('page');
  pageDiv.innerHTML = gallery;
}

function injectComponents() {
  $(function() {
    let components = $("[data-include]");
    $.each(components, function() {
      let component = $(this).data('include');
      let componentFile = '/pages/components/' + component + '.html';
      $(this).load(componentFile);
    })
  });
}
