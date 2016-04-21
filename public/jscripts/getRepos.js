$(document).ready(function(){
  $("#getRepos").on("click", "a", function(e) {
    e.preventDefault();

    $.ajax({
      type: "GET",
      url: "https://api.github.com/users/stvbuller/repos?sort='pushed'",
      success: function(repos){
        for (var i = 0; i < repos.length; i++) {
          var newListItem = createListGroup(repos[i]);
          //if the link id == the name of the repo
          //append the item to .list-group
          //console.log(newListItem.text())
          //if ($(this).text() == newListItem.text())
            $(".list-group").append(newListItem);     
            $("#repoHeader").removeClass('hidden');     
        }
      },    
        error: function(jqXHR, textStatus, errorThrown) {
          alert("There is a problem");
          }
    });
  });


  function createListGroup(repoData){
    var commitsGitHubUrl = "https://api.github.com/repos/";
    commitsGitHubUrl += repoData.owner.login + "/";
    commitsGitHubUrl += repoData.name + "/commits";

    var newLink = $("<a>")
     .attr("href", commitsGitHubUrl)
     .addClass("list-group-item")
     .append(repoData.full_name);

    return newLink;
  }
});