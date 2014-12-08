if (Meteor.isClient) {
      $(document).ready(function() {
          var score = 0;
          var scoreAsPlayer = 0;
          var scoreAsDealer = 0;
          $('.newCard').hide();
          $('.newnewCard').hide();
          $('.newnewnewCard').hide();
          $('.omgCard').hide();
          $('.nnn').hide();
          $('.bbb').hide();
          $('.jjj').hide();
          $('.kkk').hide();
          $('.hhh').hide();
          $('.lll').hide();
          $('.ppp').hide();

          $('.baobab').click(function() {
             
              var firstCard = Math.floor((Math.random() * (13-0) )+1);
              $('.fff').text(firstCard);
              $('.baobab').fadeOut('slow');
              $('.newCard').fadeIn('slow');
              if (firstCard == 1){
                 $('.fff').text("As");
                 if (scoreAsPlayer + 11 > 21) {
                  scoreAsPlayer = scoreAsPlayer + 1;
                 }
                 else if (scoreAsPlayer + 11 < 21) {
                 
                  scoreAsPlayer = scoreAsPlayer + 11;
                 }
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              if (firstCard == 13){
                 $('.fff').text("King");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (firstCard == 12){
                 $('.fff').text("Queen");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (firstCard == 11){
                 $('.fff').text("Jack");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (firstCard == 10){
                 $('.fff').text("Ten");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (firstCard == 9){
                 $('.fff').text("Neuf");
                 scoreAsPlayer = scoreAsPlayer + 9;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (firstCard == 8){
                 $('.fff').text("Eight");
                 scoreAsPlayer = scoreAsPlayer + 8;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (firstCard == 7){
                 $('.fff').text("Seven");
                 scoreAsPlayer = scoreAsPlayer + 7;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (firstCard == 6){
                 $('.fff').text("Six");
                 scoreAsPlayer = scoreAsPlayer + 6;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (firstCard == 5){
                 $('.fff').text("Five");
                 scoreAsPlayer = scoreAsPlayer + 5;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (firstCard == 4){
                 $('.fff').text("Four");
                 scoreAsPlayer = scoreAsPlayer + 4;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (firstCard == 3){
                 $('.fff').text("Three");
                 scoreAsPlayer = scoreAsPlayer + 3;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (firstCard == 2){
                 $('.fff').text("Two");
                 scoreAsPlayer = scoreAsPlayer + 2;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }

            var secondCard = Math.floor((Math.random() * (13-0)+1 ));
              $('.eee').text(secondCard);

              if (secondCard == 1){
                 $('.eee').text("As");
                 if (scoreAsPlayer + 11 > 21) {
                  scoreAsPlayer = scoreAsPlayer + 1;
                 }
                 else if (scoreAsPlayer + 11 < 21) {
                  scoreAsPlayer = scoreAsPlayer + 11;
                 }
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 13){
                 $('.eee').text("King");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 12){
                 $('.eee').text("Queen");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 11){
                 $('.eee').text("Jack");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 10){
                 $('.eee').text("Ten");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 9){
                 $('.eee').text("Neuf");
                 scoreAsPlayer = scoreAsPlayer +9;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 8){
                 $('.eee').text("Eight");
                 scoreAsPlayer = scoreAsPlayer + 8;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 7){
                 $('.eee').text("Seven");
                 scoreAsPlayer = scoreAsPlayer + 7;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 6){
                 $('.eee').text("Six");
                 scoreAsPlayer = scoreAsPlayer + 6;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 5){
                 $('.eee').text("Five");
                 scoreAsPlayer = scoreAsPlayer + 5;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 4){
                 $('.eee').text("Four");
                 scoreAsPlayer = scoreAsPlayer + 4;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 3){
                 $('.eee').text("Three");
                 scoreAsPlayer = scoreAsPlayer + 3;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 2){
                 $('.eee').text("Two");
                 scoreAsPlayer = scoreAsPlayer + 2;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
            

            
              var firstDealerCard = Math.floor((Math.random() * (13-0) )+1);
              $('.ddd').text(firstDealerCard);
              if (firstDealerCard == 1){
                 $('.ddd').text("As");
                 if (scoreAsDealer + 11 > 21) {
                  scoreAsDealer = scoreAsDealer + 1;
                 }
                 else if (scoreAsDealer + 11 < 21) {
                  scoreAsDealer = scoreAsDealer + 11;
                 }
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              if (firstDealerCard == 13){
                 $('.ddd').text("King");
                 scoreAsDealer = scoreAsDealer + 10;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (firstDealerCard == 12){
                 $('.ddd').text("Queen");
                 scoreAsDealer = scoreAsDealer + 10;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (firstDealerCard == 11){
                 $('.ddd').text("Jack");
                 scoreAsDealer = scoreAsDealer + 10;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (firstDealerCard == 10){
                 $('.ddd').text("Ten");
                 scoreAsDealer = scoreAsDealer + 10;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (firstDealerCard == 9){
                 $('.ddd').text("Neuf");
                 scoreAsDealer = scoreAsDealer + 9;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (firstDealerCard == 8){
                 $('.ddd').text("Eight");
                 scoreAsDealer = scoreAsDealer + 8;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (firstDealerCard == 7){
                 $('.ddd').text("Seven");
                 scoreAsDealer = scoreAsDealer + 7;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (firstDealerCard == 6){
                 $('.ddd').text("Six");
                 scoreAsDealer = scoreAsDealer + 6;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (firstDealerCard == 5){
                 $('.ddd').text("Five");
                 scoreAsDealer = scoreAsDealer + 5;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (firstDealerCard == 4){
                 $('.ddd').text("Four");
                 scoreAsDealer = scoreAsDealer + 4;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (firstDealerCard == 3){
                 $('.ddd').text("Three");
                 scoreAsDealer = scoreAsDealer + 3;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (firstDealerCard == 2){
                 $('.ddd').text("Two");
                 scoreAsDealer = scoreAsDealer + 2;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }

            var secondDealerCard = Math.floor((Math.random() * (13-0)+1 ));

              if (secondDealerCard == 1){
                 
                 if (scoreAsDealer + 11 > 21) {
                  $('.aaa').text('*');
                  scoreAsDealer = scoreAsDealer + 1;
                 }
                 else if (scoreAsDealer + 11 < 21) {
                  $('.aaa').text('*');
                  scoreAsDealer = scoreAsDealer + 11;
                 }
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 13){
                 $('.aaa').text('*');
                 scoreAsDealer = scoreAsDealer + 10;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 12){
                 $('.aaa').text('*');
                 scoreAsDealer = scoreAsDealer + 10;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 11){
                 $('.aaa').text('*');
                 scoreAsDealer = scoreAsDealer + 10;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 10){
                 $('.aaa').text('*');
                 scoreAsDealer = scoreAsDealer + 10;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 9){
                 $('.aaa').text('*');
                 scoreAsDealer = scoreAsDealer + 9;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 8){
                 $('.aaa').text('*');
                 scoreAsDealer = scoreAsDealer + 8;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 7){
                 $('.aaa').text('*');
                 scoreAsDealer = scoreAsDealer + 7;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 6){
                 $('.aaa').text('*');
                 scoreAsDealer = scoreAsDealer + 6;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 5){
                 $('.aaa').text('*');
                 scoreAsDealer = scoreAsDealer + 5;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 4){
                 $('.aaa').text('*');
                 scoreAsDealer = scoreAsDealer + 4;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 3){
                 $('.aaa').text('*');
                 scoreAsDealer = scoreAsDealer + 3;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 2){
                 $('.aaa').text('*');
                 scoreAsDealer = scoreAsDealer + 2;
                 $('.scoreAsDealer').text(scoreAsDealer);
              };
              if (scoreAsPlayer == 21){
                $('.newCard').hide();
                $('.newnewCard').hide();
                $('.newnewnewCard').hide();
                alert("Black Jack !!")
              }

          });

          $('.newCard').click(function() {
              
              var newCard = Math.floor((Math.random() * (13-0)+1 ));
              $('.nnn').fadeIn('slow');
              $('.nnn').text(newCard);
              $('.newCard').hide();
              $('.newnewCard').fadeIn('slow');
              

              if (newCard == 1){
                 $('.nnn').text("As");
                 if (scoreAsPlayer + 11 > 21) {
                  scoreAsPlayer = scoreAsPlayer + 1;
                 }
                 else if (scoreAsPlayer + 11 < 21) {
                  scoreAsPlayer = scoreAsPlayer + 11;
                 }
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 13){
                 $('.nnn').text("King");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 12){
                 $('.nnn').text("Queen");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 11){
                 $('.nnn').text("Jack");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 10){
                 $('.nnn').text("Ten");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 9){
                 $('.nnn').text("Neuf");
                 scoreAsPlayer = scoreAsPlayer + 9;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 8){
                 $('.nnn').text("Eight");
                 scoreAsPlayer = scoreAsPlayer + 8;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 7){
                 $('.nnn').text("Seven");
                 scoreAsPlayer = scoreAsPlayer + 7;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 6){
                 $('.nnn').text("Six");
                 scoreAsPlayer = scoreAsPlayer + 6;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 5){
                 $('.nnn').text("Five");
                 scoreAsPlayer = scoreAsPlayer + 5;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 4){
                 $('.nnn').text("Four");
                 scoreAsPlayer = scoreAsPlayer + 4;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 3){
                 $('.nnn').text("Three");
                 scoreAsPlayer = scoreAsPlayer + 3;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 2){
                 $('.nnn').text("Two");
                 scoreAsPlayer = scoreAsPlayer + 2;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              if (scoreAsPlayer > 21){
                $('.newCard').hide();
                $('.newnewCard').hide();
                $('.newnewnewCard').hide();
                alert("La Banque remporte la mise !");
                
              }
              else if (scoreAsPlayer == 21){
                $('.newCard').hide();
                $('.newnewCard').hide();
                $('.newnewnewCard').hide();
                alert("Black Jack !!")
              }
          });

          $('.newnewCard').click(function() {
              
              var newnewCard = Math.floor((Math.random() * (13-0)+1 ));
              $('.newnewCard').hide('slow');
              $('.newnewnewCard').fadeIn('slow');
              $('.bbb').fadeIn('slow');
              $('.bbb').text(newnewCard);
              

              if (newnewCard == 1){
                 $('.bbb').text("As");
                 if (scoreAsPlayer + 11 > 21) {
                  scoreAsPlayer = scoreAsPlayer + 1;
                 }
                 else if (scoreAsPlayer + 11 < 21) {
                  scoreAsPlayer = scoreAsPlayer + 11;
                 }
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 13){
                 $('.bbb').text("King");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 12){
                 $('.bbb').text("Queen");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 11){
                 $('.bbb').text("Jack");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 10){
                 $('.bbb').text("Ten");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 9){
                 $('.bbb').text("Neuf");
                 scoreAsPlayer = scoreAsPlayer + 9;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 8){
                 $('.bbb').text("Eight");
                 scoreAsPlayer = scoreAsPlayer + 8;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 7){
                 $('.bbb').text("Seven");
                 scoreAsPlayer = scoreAsPlayer + 7;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 6){
                 $('.bbb').text("Six");
                 scoreAsPlayer = scoreAsPlayer + 6;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 5){
                 $('.bbb').text("Five");
                 scoreAsPlayer = scoreAsPlayer + 5;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 4){
                 $('.bbb').text("Four");
                 scoreAsPlayer = scoreAsPlayer + 4;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 3){
                 $('.bbb').text("Three");
                 scoreAsPlayer = scoreAsPlayer + 3;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 2){
                 $('.bbb').text("Two");
                 scoreAsPlayer = scoreAsPlayer + 2;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              if (scoreAsPlayer > 21){
                $('.newnewCard').hide();
                $('.newnewnewCard').hide();
                alert("La Banque remporte la mise !");
                
              }
              else if (scoreAsPlayer == 21){
                $('.newnewCard').hide();
                $('.newnewnewCard').hide();
                $('.omgCard').fadeIn('slow');
                alert("Black Jack !!")
              }
          });

          $('.newnewnewCard').click(function() {
              
              var newnewnewCard = Math.floor((Math.random() * (13-0)+1 ));
              $('.jjj').fadeIn('slow');
              $('.jjj').text(newnewnewCard);
              

              if (newnewnewCard == 1){
                 $('.jjj').text("As");
                 if (scoreAsPlayer + 11 > 21) {
                  scoreAsPlayer = scoreAsPlayer + 1;
                 }
                 else if (scoreAsPlayer + 11 < 21) {
                  scoreAsPlayer = scoreAsPlayer + 11;
                 }
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 13){
                 $('.jjj').text("King");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 12){
                 $('.jjj').text("Queen");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 11){
                 $('.jjj').text("Jack");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 10){
                 $('.jjj').text("Ten");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 9){
                 $('.jjj').text("Neuf");
                 scoreAsPlayer = scoreAsPlayer + 9;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 8){
                 $('.jjj').text("Eight");
                 scoreAsPlayer = scoreAsPlayer + 8;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 7){
                 $('.jjj').text("Seven");
                 scoreAsPlayer = scoreAsPlayer + 7;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 6){
                 $('.jjj').text("Six");
                 scoreAsPlayer = scoreAsPlayer + 6;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 5){
                 $('.jjj').text("Five");
                 scoreAsPlayer = scoreAsPlayer + 5;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 4){
                 $('.jjj').text("Four");
                 scoreAsPlayer = scoreAsPlayer + 4;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 3){
                 $('.jjj').text("Three");
                 scoreAsPlayer = scoreAsPlayer + 3;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 2){
                 $('.jjj').text("Two");
                 scoreAsPlayer = scoreAsPlayer + 2;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              if (scoreAsPlayer > 21){
                $('.newnewnewCard').hide();
                alert("La Banque remporte la mise !");
                
              }
              else if (scoreAsPlayer == 21){
                $('.newnewnewCard').hide();
                alert("Black Jack !!")
              }
          });
      });

          $('.omgCard').click(function() {
              
              var omgCard = Math.floor((Math.random() * (13-0)+1 ));
              $('.kkk').fadeIn('slow');
              $('.kkk').text(omgCard);

              if (omgCard == 1){
                 $('.kkk').text("As");
                 if (scoreAsPlayer + 11 > 21) {
                  scoreAsPlayer = scoreAsPlayer + 1;
                 }
                 else if (scoreAsPlayer + 11 < 21) {
                  scoreAsPlayer = scoreAsPlayer + 11;
                 }
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 13){
                 $('.kkk').text("King");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 12){
                 $('.kkk').text("Queen");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 11){
                 $('.kkk').text("Jack");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 10){
                 $('.kkk').text("Ten");
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 9){
                 $('.kkk').text("Neuf");
                 scoreAsPlayer = scoreAsPlayer + 9;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 8){
                 $('.kkk').text("Eight");
                 scoreAsPlayer = scoreAsPlayer + 8;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 7){
                 $('.kkk').text("Seven");
                 scoreAsPlayer = scoreAsPlayer + 7;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 6){
                 $('.kkk').text("Six");
                 scoreAsPlayer = scoreAsPlayer + 6;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 5){
                 $('.kkk').text("Five");
                 scoreAsPlayer = scoreAsPlayer + 5;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 4){
                 $('.kkk').text("Four");
                 scoreAsPlayer = scoreAsPlayer + 4;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 3){
                 $('.kkk').text("Three");
                 scoreAsPlayer = scoreAsPlayer + 3;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 2){
                 $('.kkk').text("Two");
                 scoreAsPlayer = scoreAsPlayer + 2;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              if (scoreAsPlayer > 21){
                $('.omgCard').hide();
                alert("La Banque remporte la mise !");
                
              }
              else if (scoreAsPlayer == 21){
                $('.omgCard').hide();
                alert("Black Jack !!")
              }
          });

          $('.stop').click(function() {
            if (scoreAsDealer < scoreAsPlayer) {

            };
          })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
