$("#search-bar").keyup(() => {
  let value = $(this).val();
  $("#list li").each(() => {
    let search = $(this).text();
    if (search.indexOf(value) > -1) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});
