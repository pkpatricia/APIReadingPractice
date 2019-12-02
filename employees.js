const url = "http://localhost:8080/api/employees"; // Get
fetch(url)

    .then(result => result.json())

    .then(apiResult =>

      apiResult.map((obj) => {
        const fullName = obj.firstName + " " + obj.lastName;
        const emailAddress = obj.email;
        console.log(`${fullName}, has the email address of ${emailAddress}.`);
        const newString = `${fullName}, has the email address of ${emailAddress}.`;
        const node = document.createElement("li");
        const textnode = document.createTextNode(newString);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
        return `${obj.firstName} is my first name.`;
      }))
    .catch(function(error) {
      console.log(JSON.stringify(error));
    });
