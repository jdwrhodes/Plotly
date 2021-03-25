d3.selectAll("body").on("change", updatePage); // this is the event listener which runs the updatePage function when something Changes

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;
  var

  console.log(dropdownMenuID);
  console.log(selectedOption.text());
};