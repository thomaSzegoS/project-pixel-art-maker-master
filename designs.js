function makeGrid() {
  // Select pixel canvas
  const canvas = $("#pixel_canvas");
  // Select size input
  var height = $("#input_height").val();
  var width = $("#input_width").val();
  // Reset the pixel canvas
  canvas.children().remove();
  //Create the the pixel canvas
  for (var i=0; i<height; i++) {
    canvas.append("<tr></tr>");
    for (var j=0; j<width; j++) {
      canvas.children().last().append("<td></td>");
    }
  }

  $("td").on("click", function() {
    // Remove color from a cell
    if ($(this).hasClass("filled")) {
      $(this).removeAttr("bgcolor");
      $(this).removeClass("filled" , false);
    }
    // Fill a cell with the chosen color
    else {
      var color = $("#colorPicker").val();
      $(this).attr("bgcolor", color);
      $(this).addClass("filled", true);
    }
  });
}

$("#sizePicker").on("submit", function(e) {
  e.preventDefault();
  makeGrid();
});
