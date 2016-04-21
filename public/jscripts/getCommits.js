$(document).ready(function() {
  $("#getCommits").on("click", "a", function(e) {
    e.preventDefault();

    $.ajax({
      type: "GET",
      url: $(this).attr("href"),
      success: function(commits) {
        $("tbody").empty();
        for(var i = 0; i < commits.length; i++) {
          $("tbody").append(createTableRow(commits[i]));
          $("thead").removeClass('hidden');
        }
      },
    })
  });


  function createTableRow(commitData) {
    //var shaTd = $("<td>").append(commitData.sha);
    var authorTd = $("<td>").append(commitData.commit.author.name);
    var messsageTd = $("<td>").append(commitData.commit.message);
    var dateTd = $("<td>").append(commitData.commit.author.date);

    //the idea here is to create a link that displays commitData.html_url
    //and links to the page for the commit on GitHub, this link is then
    //appended to the table row
    var commitLink = $("<a>")
    //the url of the commit should be added to href attribute of the a tag
        .attr("href", commitData.html_url)
        .append(commitData.html_url);

    
        
    return $("<tr>").append(commitLink)
      .append(authorTd)
      .append(messsageTd)
      .append(dateTd);
  }
});





