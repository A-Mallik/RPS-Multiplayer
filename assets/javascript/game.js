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


// // ==On Load==  I can't use this or it will reload every time someone enters or reloads the page
// database.ref().update({
// //
//  PlayerTwo: {
//  Name: "None",
//  Wins: 0,
//  Losses : 0,
//  Draws : 0,
//  pTwoChoice: "None" }
//
// ,
//
//
// PlayerOne: {
// Name: "None",
// Wins: 0,
// Losses : 0,
// Draws : 0,
// pOneChoice: "None" }
//
// });
// // ==On Load==


       // var ref = firebase.database().ref();
       // ref.update({
       //    onlineState: true,
       //    status: "I'm online.",
       //
       // });
       //
       // ref.onDisconnect().update({
       //   onlineState: false,
       //   status: "I'm offline.",
       //
       //
       // });

    $("#pOneButton").on("click",function(event){
      $(".enterBoxP1").hide();
      var ref = firebase.database().ref();
      ref.update({PlayerOneStatus:{
         onlineState: true,
           status: "I'm online.",

      }});


      event.preventDefault();

   console.log("hello");

   database.ref().update({
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
       $("#playerOne").empty();
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
                   "<button value='submit' class = 'pOneBtns'>Submit</button>"
               );



 //

 //
 //       // Handle the errors
     }, function(errorObject) {
       // console.log("Errors handled: " + errorObject.code);
     });
      var ref = firebase.database().ref();
      ref.onDisconnect().update({PlayerOneStatus:{
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


    $("#pTwoButton").on("click",function(event){
      $(".enterBoxP2").hide();
      var ref = firebase.database().ref();
      ref.update({PlayerTwoStatus:{
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
       $("#playerTwo").empty();
       $("#playerTwo").html('Name: ' + snap.PlayerTwo.Name + '<br />' +
                            'Wins: ' + snap.PlayerTwo.Wins + '<br />' +
                            'Losses: ' + snap.PlayerTwo.Losses + '<br />' +
                             'Draws: ' + snap.PlayerTwo.Draws + '<br />'+
                           'Player Two Choice: ' + snap.PlayerTwo.pTwochoice + '<br />'
           );


           $("#playerTwo").append(

                   "<button value='Rock' class = 'pTwoBtns'>Rock</button>" + "<br />" +
                   "<button value='Paper' class = 'pTwoBtns'>Paper</button>" + "<br />" +
                   "<button value='Scissors' class = 'pTwoBtns'>Scissors</button>" + "<br />" +
                   "<button value='submit' class = 'pTwoBtns'>Submit</button>"
               );
       // ====================
       // On Disconect
       // ref.onDisconnect().update({
       //   onlineState: false,
       //   status: "I'm offline.",
       //
       //
       // });
       // ====================
       // ====================
       // ====================


 //

 //
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

//
//     // Firebase watcher .on("child_added"

// =====================Snapshot After Buttons=====================

database.ref().on("value", function(snapshot) { // shows latest child added in the console
   // storing the snapshot.val() in a variable for convenience
   var snap = snapshot.val();
   console.log(snap.PlayerOne.pOneChoice);
   $("#playerOne").empty();
   $("#playerTwo").empty();
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
               "<button value='submit' class = 'pOneBtns'>Submit</button>"
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
                   "<button value='submit' class = 'pTwoBtns'>Submit</button>"
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

          $(".pOneBtns").remove();

        }, function(errorObject) {
          // console.log("Errors handled: " + errorObject.code);
        });
    }

    if($(this).val() === "Paper"){
      database.ref("PlayerOne").update({
        pOnechoice: "Paper"

      });
      database.ref().on("value", function(snapshot) { // Remove the other buttons once a choice has been made
          var snap = snapshot.val();

          $(".pOneBtns").remove();

        }, function(errorObject) {
          // console.log("Errors handled: " + errorObject.code);
        });
    }

    if($(this).val() === "Scissors"){
      database.ref("PlayerOne").update({
     pOnechoice: "Scissors"

      });
      database.ref().on("value", function(snapshot) { // Remove the other buttons once a choice has been made
          var snap = snapshot.val();

          $(".pOneBtns").remove();

        }, function(errorObject) {
          // console.log("Errors handled: " + errorObject.code);
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

          $(".pOneBtns").remove();

        }, function(errorObject) {
          // console.log("Errors handled: " + errorObject.code);
        });
    }

    if($(this).val() === "Paper"){
      database.ref("PlayerTwo").update({
        pTwochoice: "Paper"

      });
      database.ref().on("value", function(snapshot) { // Remove the other buttons once a choice has been made
          var snap = snapshot.val();

          $(".pOneBtns").remove();

        }, function(errorObject) {
          // console.log("Errors handled: " + errorObject.code);
        });
    }

    if($(this).val() === "Scissors"){
      database.ref("PlayerTwo").update({
     pTwochoice: "Scissors"

      });
      database.ref().on("value", function(snapshot) { // Remove the other buttons once a choice has been made
          var snap = snapshot.val();

          $(".pOneBtns").remove();

        }, function(errorObject) {
          // console.log("Errors handled: " + errorObject.code);
        });
    }
});
// =======================RPS Game Logic========================
