<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <title>Notes</title>
  <link rel="stylesheet" href="design.css">
</head>

<body>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vision and lens</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          </li>
         
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search Posts" aria-label="Search" id="searchTxt">
          <button type="button" class="btn btn-outline-secondary" type="submit">Search</button>
            <div class="form-check form-switch mx-3">
              <label class="form-check-label  "  for="flexSwitchCheckDefault">Dark</label>
              <input class="form-check-input dark-mode-toggle" type="checkbox" id="dark-mode-toggle" role="switch" id="flexSwitchCheckDefault">
              
            </div>
        </form>
      </div>
    </div>
  </nav>
  <div class="card">
    <div class="card-header">
      Comment section
    </div>
    <div class="card-body">
      <h5 class="card-title">Add your comments</h5>
        <div class="form-floating">
        <textarea class="form-control my-2" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
        <label for="floatingTextarea2" class="textplaceholder">Type here!</label>
      </div>
      <a href="#" class="btn btn-primary btn-warning" id="addBtn">POST</a>
        <button type="button" class="btn btn-danger" id="deletecom">Clear all</button>
         

    </div>
  </div>




  <div id="notesDOM" class="row container-fluid"></div>
   
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
    integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
    integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
    crossorigin="anonymous"></script>
<script src="server.js"></script>
</body>

</html>
