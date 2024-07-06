var filenames;
var start = 0;
var picturesPerPage = 5;

function next() {
    displayPictures();
}

function displayPictures() {
    var tableText = "<div id='tableContent'>";
    for (var i = 0; i < picturesPerPage; i++) {
        tableText = tableText + "<div><a href='" + filenames[start] + "' target='_blank'>";
        tableText = tableText + "<img class='img1' alt='Image' id='Image" + i + "' src='" + filenames[start] + "'  />";
        tableText = tableText + "</a></div>";
        start++;
        if (start == filenames.length) {
            start = 0;
            break;
        }
    }
    tableText = tableText + "</div>";
    var table = document.getElementById("tableContent");
    table.innerHTML = tableText;
}

function getPictureFilenames() {
    $.ajax({
        type: 'post',
        url: getPicturesUrl,
        dataType: 'json',
        success: function (response) {
            filenames = response;
            displayPictures();
        },
        error: function (xhr, textStatus, errorThrown) {
            debugger;
        }
    });
}


