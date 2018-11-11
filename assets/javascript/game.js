
  <!-- ============Firebase Authentication==================== -->

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAq-2e_HExZ9tmixdKwAjK2AD4l-H98T-o",
    authDomain: "rock-paper-scissors-6da24.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-6da24.firebaseio.com",
    projectId: "rock-paper-scissors-6da24",
    storageBucket: "rock-paper-scissors-6da24.appspot.com",
    messagingSenderId: "416436021142"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  database.ref().update({
 //
   PlayerOne: {
   Wins: 0,
   Losses : 0,
   Draws : 0,
  }

  });

         var ref = firebase.database().ref();
         ref.update({
            onlineState: true,
            status: "I'm online.",

         });

         ref.onDisconnect().update({  // on disconnect, reset the scores.
           onlineState: false,
           status: "I'm offline.",

             PlayerOne: {
             Wins: 0,
             Losses : 0,
             Draws : 0,
           },


              PlayerTwo: {
              Wins: 0,
              Losses : 0,
              Draws : 0,
             }


         });

      $("#pOneButton").on("click",function(event){ //Intended function: This was going to be a button that changed the element
        //to show the user the game room once they clicked as a log in


        event.preventDefault();

     console.log("hello");

     database.ref().update({
    //
      PlayerOne: {
      Wins: 0,
      Losses : 0,
      Draws : 0,
     pOnechoice: ""}

     });

     database.ref().on("child_added", function(snapshot) { // shows latest child added in the console
         // storing the snapshot.val() in a variable for convenience
         var snap = snapshot.val();

         $("#playerOne").empty();
         $("#playerOne").html('Name: ' + snap.name + '<br />' +
                              'Wins: ' + snap.Wins + '<br />' +
                              'Losses: ' + snap.Losses + '<br />' +
                               'Draws: ' + snap.Draws + '<br />'
             );


             $("#playerOne").append(

                     "<button value='Rock' class = 'pOneBtns'>Rock</button>" + "<br />" +
                     "<button value='Paper' class = 'pOneBtns'>Paper</button>" + "<br />" +
                     "<button value='Scissors' class = 'pOneBtns'>Scissors</button>" + "<br />" +
                     "<button value='submit' class = 'pOneBtns'>Submit</button>"
                 );



   //

   //
   //       // Handle the errors
       }, function(errorObject) {
         // console.log("Errors handled: " + errorObject.code);
       });


});


      $("#pTwoButton").on("click",function(event){   //Intended function: This was going to be a button that changed the element
        //to show the user the game room once they clicked as a log in

        event.preventDefault();

     console.log("hello");

     database.ref().update({
    //
      PlayerTwo: {
      Wins: 0,
      Losses : 0,
      Draws : 0 }

     });

     // ====================
     database.ref().on("child_added", function(snapshot) { // shows latest child added in the console
         // storing the snapshot.val() in a variable for convenience
         var snap = snapshot.val();

         $("#playerTwo").empty();
         $("#playerTwo").html('Name: ' + snap.name + '<br />' +
                              'Wins: ' + snap.Wins + '<br />' +
                              'Losses: ' + snap.Losses + '<br />' +
                               'Draws: ' + snap.Draws + '<br />'
             );


             $("#playerTwo").append(

                     "<button value='Rock' class = 'pTwoBtns'>Rock</button>" + "<br />" +
                     "<button value='Paper' class = 'pTwoBtns'>Paper</button>" + "<br />" +
                     "<button value='Scissors' class = 'pTwoBtns'>Scissors</button>" + "<br />" +
                     "<button value='submit' class = 'pTwoBtns'>Submit</button>"
                 );
         // ====================

   //       // Handle the errors
       }, function(errorObject) {
         // console.log("Errors handled: " + errorObject.code);
       });

               // ====================

});


// =================================
//Snapshot function to display the current scores for players before Disconnect
// ====================
database.ref().on("child_added", function(snapshot) { // shows latest child added for player One
    // storing the snapshot.val() in a variable for convenience
    var snap = snapshot.val();

    $("#playerOne").empty();
    $("#playerOne").html('Name: ' + snap.name + '<br />' +
                         'Wins: ' + snap.Wins + '<br />' +
                         'Losses: ' + snap.Losses + '<br />' +
                          'Draws: ' + snap.Draws + '<br />'
        );


        $("#playerOne").append(

                "<button value='Rock' class = 'pOneBtns'>Rock</button>" + "<br />" +
                "<button value='Paper' class = 'pOneBtns'>Paper</button>" + "<br />" +
                "<button value='Scissors' class = 'pOneBtns'>Scissors</button>" + "<br />" +
                "<button value='submit' class = 'pOneBtns'>Submit</button>"
            );



//

//
//       // Handle the errors
  }, function(errorObject) {
    // console.log("Errors handled: " + errorObject.code);
  });

database.ref().on("child_added", function(snapshot) { // shows latest child added for player Two
    // storing the snapshot.val() in a variable for convenience
    var snap = snapshot.val();

    $("#playerTwo").empty();
    $("#playerTwo").html('Name: ' + snap.name + '<br />' +
                         'Wins: ' + snap.Wins + '<br />' +
                         'Losses: ' + snap.Losses + '<br />' +
                          'Draws: ' + snap.Draws + '<br />'
        );


        $("#playerTwo").append(

                "<button value='Rock' class = 'pTwoBtns'>Rock</button>" + "<br />" +
                "<button value='Paper' class = 'pTwoBtns'>Paper</button>" + "<br />" +
                "<button value='Scissors' class = 'pTwoBtns'>Scissors</button>" + "<br />" +
                "<button value='submit' class = 'pTwoBtns'>Submit</button>"
            );
    // ====================


//

//
//       // Handle the errors
  }, function(errorObject) {
    // console.log("Errors handled: " + errorObject.code);
  });

          // ====================
// =================================
//This following section is to set the choices the user clicks on depending on what button that they clicks
//Intended Use(Not yet working or if even possible): Once player one and player two selects a button
// the choices are then compared to see if its a  win or draw or indicate loss per individual player.
// =================================
$(document).on("click", ".pOneBtns", function() {




      if($(this).val() === "Rock"){
        database.ref().update({
       //
       PlayerOneChoice: {

       pOnechoice: "Rock"}



        });
        console.log('Rock');
      }

      if($(this).val() === "Paper"){
        console.log('Paper');
        database.ref().update({
       //
       PlayerOneChoice: {

       pOnechoice: "Paper"}



        });
      }

      if($(this).val() === "Scissors"){
        database.ref().update({
       //
       PlayerOneChoice: {

       pOnechoice: "Scissors"}



        });
      }


});

// =================================
$(document).on("click", ".pTwoBtns", function() {




      if($(this).val() === "Rock"){
        database.ref().update({
       //
       PlayerTwoChoice: {

       pTwochoice: "Rock"}



        });
        console.log('Rock');
      }

      if($(this).val() === "Paper"){
        console.log('Paper');
        database.ref().update({
       //
       PlayerTwoChoice: {

       pTwochoice: "Paper"}



        });
      }

      if($(this).val() === "Scissors"){
        database.ref().update({
       //
       PlayerTwoChoice: {

       pTwochoice: "Scissors"}



        });
      }


});
