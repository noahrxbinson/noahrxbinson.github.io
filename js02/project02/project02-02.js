/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: 
      Date:   

      Filename: project02-02.js
 */
 
function verifyForm() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;

      if (name && email && phone == true)
             window.alert("Thank you!");

             
      else

      window.alert("please fill in all fields");

      
}
submit.addEventListener("click", verifyForm());
      
     

