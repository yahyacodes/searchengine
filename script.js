$("#search-bar").keyup(function () {
  let value = $(this).val().toLowerCase();
  $("#list li").each(function () {
    let search = $(this).text().toLowerCase();
    if (search.indexOf(value) > -1) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});
