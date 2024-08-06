
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
