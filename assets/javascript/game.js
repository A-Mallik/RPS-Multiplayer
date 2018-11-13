// Initialize Firebase

//Just to note: For some reason, if player two enters first, the other elements disappear and I cant seem to figure out why
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
database.ref().update({                //In general on refresh, reset stats
//
 PlayerStatus1: {
 Message: "Player One- Status: <strong style='color:red'>Not In</strong>",
 GameMessage: "<br/><strong>Button NOT Chosen Yet</strong>"
},
 PlayerStatus2: {

 Message: "Player Two- Status:<strong style='color:red'>Not In</strong>",
 GameMessage: "<br/><strong>Button NOT Chosen Yet</strong>"
},

Playerbuttons:{

}
});

database.ref().on("value", function(snapshot) { // shows latest child added in the console
        // storing the snapshot.val() in a variable for convenience
        var snap = snapshot.val();

        $("#updates").html(snap.PlayerStatus1.Message + snap.PlayerStatus1.GameMessage  + "<br/>" +  snap.PlayerStatus2.Message + ": " + snap.PlayerStatus2.GameMessage
                );

  //       // Handle the errors

      });


$("#pOneButton").on("click",function(event){
  database.ref().update({                //In general on refresh, reset stats
  //
   PlayerStatus1: {
     Message: " <strong style='color:Green'>Player One Has Entered</strong>",
     GameMessage: "<br> <strong>Has Not Chosen Yet</strong></br>"
 }
  });

  $("#pOneButton").css("visibility","hidden");
  $("#playerOneInput").css("visibility","hidden");
                      var ref = firebase.database().ref();
                      ref.update({PlayerOneStatus:{   //online status of Player
                      onlineState: true,
                     status: "I'm online.",
                }});


              event.preventDefault();

             console.log("hello");

             database.ref().update({                //In general on refresh, reset stats
            //
              PlayerOne: {
              Name: $("#playerOneInput").val(),
              Wins: 0,
              Losses : 0,
              Draws : 0,
             pOnechoice: "None"}

             });

             database.ref().on("value", function(snapshot) { // shows latest child added in the console
                 // storing the snapshot.val() in a variable for convenience
                 var snap = snapshot.val();
                console.log(snap.PlayerOne.pOnechoice);
                // $("#playerOne").empty();
                 $("#playerOne").empty();
                 $("#playerOne").html('Name: ' + snap.PlayerOne.Name + '<br />' +
                                      'Wins: ' + snap.PlayerOne.Wins + '<br />' +
                                      'Losses: ' + snap.PlayerOne.Losses + '<br />' +
                                       'Draws: ' + snap.PlayerOne.Draws + '<br />'+
                                     'Player One Choice: ' + snap.PlayerOne.pOnechoice + '<br />'
                     );

                     $("#playerOne").append(

                             "<button value='Rock' class = 'pOneBtns'>Rock</button>" + "<br />" +
                             "<button value='Paper' class = 'pOneBtns'>Paper</button>" + "<br />" +
                             "<button value='Scissors' class = 'pOneBtns'>Scissors</button>" + "<br />" +
                             "<button value='submit' class = 'pOneBtns'>Submit</button>" +
                             "<button value='playAgain' class = 'playAgain'>Play Again?</button>"
                         );
                 // Handle the errors
               }, function(errorObject) {
                 // console.log("Errors handled: " + errorObject.code);
               });
                var ref = firebase.database().ref();
                ref.onDisconnect().update({PlayerOneStatus:{   //closing browser or refreshing will set status to offline and reset stats as well.
                  onlineState: false,
                    status: "I'm offline.",

                   },
                   PlayerOne: {
                   Name: "",
                   Wins: 0,
                   Losses : 0,
                   Draws : 0,
                   pOnechoice: "None"}
                 });
});

// =======================================================================================================

$("#pTwoButton").on("click",function(event){       //generally same logic for player two button
  database.ref().update({                //In general on refresh, reset stats
  //
   PlayerStatus2: {
     Message: " <strong style='color:Green'>Player Two Has Entered</strong>",
     GameMessage: "<br> <strong>Has Not Chosen Yet</strong></br>"
 }
  });

      $("#pTwoButton").css("visibility","hidden");
      $("#playerTwoInput").css("visibility","hidden");
      //$("#playerOne").hide();
      var ref = firebase.database().ref();
      ref.update({PlayerTwoStatus:{       //online status of Player
         onlineState: true,
           status: "I'm online.",

      }});

      event.preventDefault();

   console.log("hello");

   database.ref().update({
  //
    PlayerTwo: {
    Name: $("#playerTwoInput").val(),
    Wins: 0,
    Losses : 0,
    Draws : 0,
    pTwoChoice: "None" }

   });

   // ====================
   database.ref().on("value", function(snapshot) { // shows latest child added in the console
           // storing the snapshot.val() in a variable for convenience
           var snap = snapshot.val();
            console.log(snap.PlayerTwo.Wins);
          // $("#playerTwo").empty();
           $("#playerTwo").html('Name: ' + snap.PlayerTwo.Name + '<br />' +
                                'Wins: ' + snap.PlayerTwo.Wins + '<br />' +
                                'Losses: ' + snap.PlayerTwo.Losses + '<br />' +
                                 'Draws: ' + snap.PlayerTwo.Draws + '<br />'+
                               'Player Two Choice: ' + snap.PlayerTwo.pTwochoice + '<br />'
              +
                       "<button value='Rock' class = 'pTwoBtns'>Rock</button>" + "<br />" +
                       "<button value='Paper' class = 'pTwoBtns'>Paper</button>" + "<br />" +
                       "<button value='Scissors' class = 'pTwoBtns'>Scissors</button>" + "<br />" +
                       "<button value='submit' class = 'pTwoBtns'>Submit</button>" +
                       "<button value='playAgain' class = 'playAgain'>Play Again?</button>"
                   );

     //       // Handle the errors
         }, function(errorObject) {
           // console.log("Errors handled: " + errorObject.code);
         });

                 // ====================
                 var ref = firebase.database().ref();
                 ref.onDisconnect().update({
                   PlayerTwoStatus:{
                   onlineState: false,
                     status: "I'm offline.",
                },
                PlayerTwo: {
                Name: "",
                Wins: 0,
                Losses : 0,
                Draws : 0,
                pTwoChoice: "None" }
              });
});
// =====================Snapshot After Buttons=====================\
var pOneWins = 0;
var pTwoWins = 0;
var Draws = 0;

database.ref().on("child_removed", function(snapshot) { // shows latest child added in the console
   // storing the snapshot.val() in a variable for convenience
   var snap = snapshot.val();
   console.log(snap.PlayerOne.pOneChoice);
   $("#playerOne").empty();
   $("#playerTwo").empty();
   $("#playerTwoInput").empty();
   $("#playerOneInput").empty();
   $("#playerOne").html('Name: ' + snap.PlayerOne.Name + '<br />' +
                        'Wins: ' + snap.PlayerOne.Wins + '<br />' +
                        'Losses: ' + snap.PlayerOne.Losses + '<br />' +
                         'Draws: ' + snap.PlayerOne.Draws + '<br />'   +
                         //+
                       //'Player One Choice: ' + snap.PlayerOne.pOnechoice + '<br />' // Hiding this will only show the selected choice to current player

               "<button value='Rock' class = 'pOneBtns'>Rock</button>" + "<br />" +
               "<button value='Paper' class = 'pOneBtns'>Paper</button>" + "<br />" +
               "<button value='Scissors' class = 'pOneBtns'>Scissors</button>" + "<br />" +
               "<button value='submit' class = 'pOneBtns'>Submit</button>" +
               "<button value='playAgain' class = 'playAgain'>Play Again?</button>"
           );
 }, function(errorObject) {
 });

database.ref().on("value", function(snapshot) { // shows latest child added in the console
       // storing the snapshot.val() in a variable for convenience
       var snap = snapshot.val();
        console.log(snap.PlayerTwo.Wins);
       $("#playerTwo").empty();
       $("#playerTwo").html('Name: ' + snap.PlayerTwo.Name + '<br />' +
                            'Wins: ' + snap.PlayerTwo.Wins + '<br />' +
                            'Losses: ' + snap.PlayerTwo.Losses + '<br />' +
                             'Draws: ' + snap.PlayerTwo.Draws + '<br />'
                           //   +
                           // 'Player Two Choice: ' + snap.PlayerTwo.pTwochoice + '<br />'
           );
           $("#playerTwo").append(
                   "<button value='Rock' class = 'pTwoBtns'>Rock</button>" + "<br />" +
                   "<button value='Paper' class = 'pTwoBtns'>Paper</button>" + "<br />" +
                   "<button value='Scissors' class = 'pTwoBtns'>Scissors</button>" + "<br />" +
                   "<button value='submit' class = 'pTwoBtns'>Submit</button>" +
                   "<button value='playAgain' class = 'playAgain'>Play Again?</button>"
               );

     }, function(errorObject) {
     });

// ===============Button choices for Player One=========
$(document).on("click", ".pOneBtns", function() {

    if($(this).val() === "Rock"){
      database.ref("PlayerOne").update({
     pOnechoice: "Rock"
      });
      console.log('Rock');

      database.ref().on("value", function(snapshot) { // Remove the other buttons once a choice has been made
          var snap = snapshot.val();
          $(".pOneBtns").remove();  //remove buttons to hide other choices
        }, function(errorObject) {
          // console.log("Errors handled: " + errorObject.code);
        });
        // -----
          database.ref().update({
          //
           PlayerStatus1: {
            Message: " <strong style='color:Green'>Player One Has Chosen.</strong>",
             GameMessage: "<br> <strong>Choice Hidden</strong></br>"
         }
          });
    }
   // ------------------------------------------------
    if($(this).val() === "Paper"){
      database.ref("PlayerOne").update({
        pOnechoice: "Paper"

      });
      database.ref().on("value", function(snapshot) { // Remove the other buttons once a choice has been made
          var snap = snapshot.val();
          $(".pOneBtns").remove();
        }, function(errorObject) {
        });
        // -----
          database.ref().update({
          //
           PlayerStatus1: {
             Message: " <strong style='color:Green'>Player One Has Chosen.</strong>",
              GameMessage: "<br> <strong>Choice Hidden</strong></br>"
         }
          });

    }
   // ------------------------------------------------
    if($(this).val() === "Scissors"){
      database.ref("PlayerOne").update({
     pOnechoice: "Scissors"
      });
      database.ref().on("value", function(snapshot) { // Remove the other buttons once a choice has been made
          var snap = snapshot.val();
          $(".pOneBtns").remove();
        }, function(errorObject) {
        });
        // -----
          database.ref().update({
          //
           PlayerStatus1: {
             Message: " <strong style='color:Green'>Player One Has Chosen.</strong>",
              GameMessage: "<br> <strong>Choice Hidden</strong></br>"
         }
          });
    }

});

// ===============Button choices for Player Two=========

$(document).on("click", ".pTwoBtns", function() {

    if($(this).val() === "Rock"){
      database.ref("PlayerTwo").update({
     pTwochoice: "Rock"
      });
      console.log('Rock');
      database.ref().on("value", function(snapshot) { // Remove the other buttons once a choice has been made
          var snap = snapshot.val();

          $(".pTwoBtns").remove();

        }, function(errorObject) {
          // console.log("Errors handled: " + errorObject.code);
        });
        // -----
          database.ref().update({
          //
           PlayerStatus2: {
             Message: " <strong style='color:Green'>Player Two Has Chosen.</strong>",
              GameMessage: "<br> <strong>Choice Hidden</strong></br>"
         }
          });
    }
   // ------------------------------------------------
    if($(this).val() === "Paper"){
      database.ref("PlayerTwo").update({
        pTwochoice: "Paper"

      });
      database.ref().on("value", function(snapshot) { // Remove the other buttons once a choice has been made
          var snap = snapshot.val();

          $(".pTwoBtns").remove();

        }, function(errorObject) {
          // console.log("Errors handled: " + errorObject.code);
        });
        // -----
          database.ref().update({
          //
           PlayerStatus2: {
             Message: " <strong style='color:Green'>Player Two Has Chosen.</strong>",
              GameMessage: "<br> <strong>Choice Hidden</strong></br>"
         }
          });
    }
     // ------------------------------------------------
    if($(this).val() === "Scissors"){
      database.ref("PlayerTwo").update({
     pTwochoice: "Scissors"

      });
      database.ref().on("value", function(snapshot) { // Remove the other buttons once a choice has been made
          var snap = snapshot.val();

          $(".pTwoBtns").remove();

        }, function(errorObject) {
          // console.log("Errors handled: " + errorObject.code);
        });
        // -----
          database.ref().update({
          //
           PlayerStatus2: {
             Message: " <strong style='color:Green'>Player Two Has Chosen.</strong>",
              GameMessage: "<br> <strong>Choice Hidden</strong></br>"
         }
          });
    }
});
// =======================RPS Game Logic========================
database.ref().on("value", function(snapshot) {
    var snap = snapshot.val();
    // ---------------------------------------------------------------------------------------------------------
    if ((snap.PlayerOne.pOnechoice === "Rock") && (snap.PlayerTwo.pTwochoice === "Scissors")) {

      console.log("Player One Wins!");
      pOneWins = pOneWins + 1;
      database.ref("PlayerOne").update({          //upon choices selected, reset choices back to none so that logic can continue
        pOnechoice: "none",
        Wins: pOneWins,                           //updates wins for player one
      });
      database.ref("PlayerTwo").update({
        pTwochoice: "none",
        Wins: pTwoWins,
      });

      console.log("Player One Wins" + snap.PlayerOne.Wins);
      // -----
        database.ref().update({
        //
         PlayerStatus1: {
           Message: " <strong style='color:Green, font-size: 25px;'>Player One Wins!.</strong>",
            GameMessage: "<br> <strong>Rock</strong></br>"
       }
        });
    }
      // ---------------------------------------------------------------------------------------------------------
      if ((snap.PlayerOne.pOnechoice === "Rock") && (snap.PlayerTwo.pTwochoice === "Paper")) {

       console.log("Player Two Wins!");
       pTwoWins = pTwoWins + 1;
       database.ref("PlayerTwo").update({
         pTwochoice: "none",

         Wins: pTwoWins,
       });
       database.ref("PlayerOne").update({
         pOnechoice: "none",


       });

       console.log("Player Two Wins" + snap.PlayerTwo.Wins);
       // -----
         database.ref().update({
         //
          PlayerStatus2: {
            Message: " <strong style='color:Green, font-size: 25px;'>Player Two Wins!.</strong>",
             GameMessage: "<br> <strong>Paper</strong></br>"
        }
         });
     }
    // ---------------------------------------------------------------------------------------------------------
     if ((snap.PlayerOne.pOnechoice === "Scissors") && (snap.PlayerTwo.pTwochoice === "Rock")) {
          console.log("Player Two Wins!");
          pTwoWins = pTwoWins + 1;
          database.ref("PlayerTwo").update({
            pTwochoice: "none",
            Wins: pTwoWins,
      });

      database.ref("PlayerOne").update({
          pOnechoice: "none",
      });

      console.log("Player Two Wins" + snap.PlayerTwo.Wins);
      // -----
        database.ref().update({
        //
         PlayerStatus2: {
           Message: " <strong style='color:Green, font-size: 25px;'>Player Two Wins!.</strong>",
            GameMessage: "<br> <strong>Rock</strong></br>"
       }
        });
    }
   //  // ---------------------------------------------------------------------------------------------------------
     if ((snap.PlayerOne.pOnechoice === "Scissors") && (snap.PlayerTwo.pTwochoice === "Paper")) {

      console.log("Player Two Wins!");
      pOneWins = pOneWins + 1;
      database.ref("PlayerOne").update({
        pOnechoice: "none",

        Wins: pOneWins,
      });
      database.ref("PlayerOne").update({
        pTwochoice: "none",


      });

      console.log("Player One Wins " + snap.PlayerOne.Wins);
      // -----
        database.ref().update({
        //
         PlayerStatus1: {
           Message: " <strong style='color:Green, font-size: 25px;'>Player One Wins!.</strong>",
            GameMessage: "<br> <strong>Scissors</strong></br>"
       }
        });

   //   losses++;
    }
   //  // ---------------------------------------------------------------------------------------------------------
     if ((snap.PlayerOne.pOnechoice === "Paper") && (snap.PlayerTwo.pTwochoice === "Rock")) {

      console.log("Player Two Wins!");
      pOneWins = pOneWins + 1;
      database.ref("PlayerOne").update({
        pOnechoice: "none",

        Wins: pOneWins,
      });
      database.ref("PlayerOne").update({
        pTwochoice: "none",


      });

      console.log("Player One Wins " + snap.PlayerOne.Wins);
      // -----
        database.ref().update({
        //
         PlayerStatus1: {
           Message: " <strong style='color:Green, font-size: 25px;'>Player One Wins!.</strong>",
            GameMessage: "<br> <strong>Paper</strong></br>"
       }
        });
   //   losses++;
    }
   //  // ---------------------------------------------------------------------------------------------------------
     if ((snap.PlayerOne.pOnechoice === "Paper") && (snap.PlayerTwo.pTwochoice === "Scissors")) {

      console.log("Player Two Wins!");
      pTwoWins = pTwoWins + 1;
      database.ref("PlayerTwo").update({
        pTwochoice: "none",

        Wins: pTwoWins,
      });
      database.ref("PlayerOne").update({
        pOnechoice: "none",


      });

      console.log("Player Two Wins" + snap.PlayerTwo.Wins);
      // -----
        database.ref().update({
        //
         PlayerStatus2: {
           Message: " <strong style='color:Green, font-size: 25px;'>Player Two Wins!.</strong>",
            GameMessage: "<br> <strong>Scissors</strong></br>"
       }
        });
   //   losses++;
    }
   //  // ---------------------------------------------------------------------------------------------------------
     if ((snap.PlayerOne.pOnechoice === "Rock" && snap.PlayerTwo.pTwochoice  === "Rock" ) || (snap.PlayerOne.pOnechoice === "Paper" && snap.PlayerTwo.pTwochoice  === "Paper" ) || (snap.PlayerOne.pOnechoice === "Scissors" && snap.PlayerTwo.pTwochoice  === "Scissors" )) {

      console.log("Player Two Wins!");
      Draws = Draws + 1;
      database.ref("PlayerTwo").update({
        pTwochoice: "Draw",   //different names of 'draw' on purpose otherwise run into issue, bandaid fix to problem
        Draws: Draws,
        Wins: pTwoWins,
      });
      database.ref("PlayerOne").update({
        pOnechoice: "Drew",
        Draws: Draws,
        Wins: pOneWins,
      });

      console.log("Draw");
      // -----
        database.ref().update({
        //
         PlayerStatus1: {
           Message: " <strong style='color:Green, font-size: 25px;'>Player One Draws!.</strong>",
            GameMessage: "<br> <strong> </strong></br>"
       },
       PlayerStatus2: {
         Message: " <strong style='color:Green, font-size: 25px;'>Player Two Draws!.</strong>",
          GameMessage: "<br> <strong> </strong></br>"
     }
        });
    }
    // ---------------------------------------------------------------------------------------------------------

  }, function(errorObject) {
    // console.log("Errors handled: " + errorObject.code);
  });

  // ==================Play Again Logic===============================
$(document).on("click", ".playAgain", function() {

    database.ref().on("value", function(snapshot) { // shows latest child added in the console
       // storing the snapshot.val() in a variable for convenience
       var snap = snapshot.val();
       console.log(snap.PlayerOne.pOneChoice);
       $("#playerOne").empty();
       $("#playerTwo").empty();
       $("#playerTwoInput").empty();
       $("#playerOneInput").empty();
       // ------------------------------ Recreate the buttons with updated values if Play Again is clicked
       $("#playerOne").html('Name: ' + snap.PlayerOne.Name + '<br />' +
                            'Wins: ' + snap.PlayerOne.Wins + '<br />' +
                            'Losses: ' + snap.PlayerOne.Losses + '<br />' +
                             'Draws: ' + snap.PlayerOne.Draws + '<br />'
                             //+
                           //'Player One Choice: ' + snap.PlayerOne.pOnechoice + '<br />' // Hiding this will only show the selected choice to current player
           );
           $("#playerOne").append(
                   "<button value='Rock' class = 'pOneBtns'>Rock</button>" + "<br />" +
                   "<button value='Paper' class = 'pOneBtns'>Paper</button>" + "<br />" +
                   "<button value='Scissors' class = 'pOneBtns'>Scissors</button>" + "<br />" +
                   "<button value='submit' class = 'pOneBtns'>Submit</button>" +
                   "<button value='playAgain' class = 'playAgain'>Play Again?</button>"
               );
      //-------------------------------===========================
      $("#playerTwo").html('Name: ' + snap.PlayerTwo.Name + '<br />' +
                           'Wins: ' + snap.PlayerTwo.Wins + '<br />' +
                           'Losses: ' + snap.PlayerTwo.Losses + '<br />' +
                            'Draws: ' + snap.PlayerTwo.Draws + '<br />'
                            //+
                          //'Player One Choice: ' + snap.PlayerOne.pOnechoice + '<br />' // Hiding this will only show the selected choice to current player
          );
          $("#playerTwo").append(
                  "<button value='Rock' class = 'pTwoBtns'>Rock</button>" + "<br />" +
                  "<button value='Paper' class = 'pTwoBtns'>Paper</button>" + "<br />" +
                  "<button value='Scissors' class = 'pTwoBtns'>Scissors</button>" + "<br />" +
                  "<button value='submit' class = 'pTwoBtns'>Submit</button>" +
                  "<button value='playAgain' class = 'playAgain'>Play Again?</button>"
              );
      //-------------------------------
     }, function(errorObject) {
     });


});

// ==================On Disconnect to Reset View =====================

  // <div class="row" >
  //
  //   <div class="col-6 " id="playerOne">
  //     <h1 class="display-4">Player One</h1>
  //         <div class="playerBox">
  //
  //         </div>
  //   </div>
  // <!-- ============Player Boxes==================== -->
  //   <div class="col-6 " id="playerTwo">
  //     <h1 class="display-4">Player Two</h1>
  //         <div class="playerBox">
  //
  //         </div>
  //   </div>
  //
  //
  // </div>
//=====================================================================
