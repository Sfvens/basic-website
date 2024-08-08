
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
      if (component !== 'page') {
        let componentFile = 'components/' + component + '.html';
        $(this).load(componentFile);
      }
    })
  });
}

function injectPage(pageName) {
  $(function() {
    let components = $("[data-include]");
    $.each(components, function() {
      let component = $(this).data('include');
      if (component === 'page') {
        let componentFile = pageName + '/' + pageName + '.html';
        $(this).load(componentFile);
      }
    })
  });
}
