const url = "http://localhost:8080/api/employees"; // Get
fetch(url)

    .then(result => result.json())

    .then(apiResult =>

      apiResult.map((obj) => {
        const fullName = obj.firstName + " " + obj.lastName;
        const emailAddress = obj.email;
        const newString = `${fullName}, has the email address of ${emailAddress}.`;
        var node = document.createElement("li");
        document.getElementById("myList").append(node, newString);
      }))
    .catch(function(error) {
      console.log(JSON.stringify(error));
    });