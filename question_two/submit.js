 function submitForm(event) {
            event.preventDefault();

            var firstName = document.getElementById("firstName").value;
            var lastName = document.getElementById("lastName").value;

            alert("Congratulations " + firstName + " " + lastName + ", you are now signed up!");
        }
        