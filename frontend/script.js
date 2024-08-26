
function getDate() {
  $(document).ready(
    function() {
      setInterval(function() {
        let d = Date();
        $("#show").text("Today's date is: " + d);
      }, 100);
    }
  );
}

function importComponents() {
  $(function() {
    let components = $("[data-include]");
    $.each(components, function() {
      let component = $(this).data('include');
      let componentFile = '/pages/components/' + component + '.html';
      if (component === 'page') {
        componentFile = '/pages/home/home.html';
      }
      $(this).load(componentFile);
    })
  });
}

function injectPage(pageName) {
  $(function() {
    let components = $("[data-include]");
    $.each(components, function() {
      let component = $(this).data('include');
      if (component === 'page') {
        let componentFile = '/pages/' + pageName + '/' + pageName + '.html';
        $(this).load(componentFile);
      }
    });
  });
  
  pagePath = (pageName === 'home') ? '' : '/' + pageName;
  window.history.pushState(
    {},
    '',
    window.location.origin + pagePath
  );
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

function injectPageComponents() {
  $(function() {
    let components = $("[data-include]");
    $.each(components, function() {
      let component = $(this).data('include');
      if (component !== 'page') {
        let componentFile = '/pages/components/' + component + '.html';
        $(this).load(componentFile);
      }
    })
  });
}

function injectPost(postName) {
  $(function() {
    let components = $("[data-include]");
    $.each(components, function() {
      let component = $(this).data('include');
      if (component === 'page') {
        let componentFile = '/pages/blog/posts/' + postName + '.html';
        $(this).load(componentFile);
      }
    })
  });
}

window.onpopstate = () => {
  pagePath = window.location.pathname;
  newPage = (pagePath === '/') ? 'home' : pagePath.slice(1); // remove leading /
  console.log(newPage);
  injectPage(newPage);
}
