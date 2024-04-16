/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: noah robinson
      Date: 4/10/2024

      Filename: js02.js
 */

      const EMP_COST = 100;
      const BOOK_COST = 350;
      const REPRO_COST = 1250;
      const TRAVEL_COST = 2;


      window.addEventListener("load", setupForm);

      function setupForm() {
            document.getElemtById("photoNum").value = 1;
            document.getElemtById("photoHrs").value = 2;
    
            document.getElemtById("makeBook").checked = false;
            document.getElemtById("photoRights").checked = false;
            document.getElemtById("photoDist").value = 0;
    
           getEstimate();
           

           document.getElemtById("photoNum").onchange = getEstimate;
           document.getElemtById("photoHrs").onchange = getEstimate;
           document.getElemtById("makeBook").onchange = getEstimate;
           document.getElemtById("photoRights").onchange = getEstimate;
           document.getElemtById("photoDist").onchange = getEstimate;

          }
          function getEstimate() {
            let totalCost = 0;
            let photographers = document.getElementById("photoNum").value;
            let hours = document.getElementById("photoHrs").value;
            let distance = document.getElementById("photoDist").value;
            let buyBook = document.getElementById("makeBook").checked;
            let buyRights = document.getElemtnById("photoRights").checked;

            totalCost += photographers * hours * EMP_COST;

            totalCost += photographers * distance * TRAVEL_COST;

            totalCost += buyBook ? BOOK_COST : 0;

            totalCost += buyRights ? REPRO_COST : 0;

            document.getElemtnByID("estimate").innerHTML = "$" + totalCost;

            

          }
          

      