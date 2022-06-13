$("#search-bar").keyup(() => {
  let value = $(this).val().toLowerCase();
  $("#list li").each(() => {
    let search = $(this).text().toLowerCase();
    if (search.indexOf(value) > -1) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});
