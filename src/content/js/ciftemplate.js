document.getElementById("template").innerHTML = `
<html lang="en" style="min-width:600px;">
    <head>
        <meta charset="utf-8">
        <title>
          ` + document.getElementById("title").innerHTML + `
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">

        <link rel="stylesheet" href="../css/datatables.css">
        <link rel="stylesheet" href="../css/bootstrap-3.3.2.min.css">
        <link rel="stylesheet" href="../css/bootstrap-theme-3.2.2.min.css">
        <link rel="stylesheet" href="../css/anchor.css">
        <script src="../js/common.js"></script>
        <script src="../js/contextmenus.js"></script>
        <script src="../js/browserDependent_functions.js"></script>
        <script src="../js/search.js"></script>


    </head>
    <body>
        <nav class="navbar navbar-inverse" style="margin-bottom:0px;">
            <div class="navbar-header">
                <a class="navbar-brand" href="/content/html/home.html" ` + document.getElementById("target").innerHTML + `>
                  <image src="../images/favicon_4.ico" height="25px" width="32px" style="margin-top:-3px">
                </a>
            </div>
            <div id="navbar" class="navbar-collapse">
                <ul class="nav navbar-nav" style="display:inline;">
                    <li><a href="submit.html"` + document.getElementById("target").innerHTML + `>Submit</a></li>
                    <li><a href="search.html"` + document.getElementById("target").innerHTML + `>Search</a><li>
                    <li><a href="settings.html"` + document.getElementById("target").innerHTML + `>Settings</a></li>
                    <li> ` + document.getElementById("searchnav").innerHTML + ` </li>
                </ul>
            </div>
        </nav>
        <div class="container-fluid">
        ` + document.getElementById("content").innerHTML + `
        </div>
    </body>
</html>

`
