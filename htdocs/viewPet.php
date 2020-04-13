<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" />

  <title>PHP and database</title>
</head>
<body>

  <div class="container">

    <table class="table table-striped table-bordered">
      <tr>
        <th>Pet Type</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Breed</th>
        <th>Age</th>
      </tr>
      <?php foreach ($pets as $pet): ?>
      <tr>
        <td>
          <?php echo $pet['type']; // refer to column name in the table ?>
        </td>
        <td>
          <?php echo $pet['name']; ?>
        </td>
        <td>
          <?php echo $pet['gender']; ?>
        </td>
        <td>
          <?php echo $pet['breed']; ?>
        </td>
        <td>
          <?php echo $pet['age']; ?>
        </td>
      </tr>
      <?php endforeach; ?>
    </table>

  </div>


</body>
</html>
