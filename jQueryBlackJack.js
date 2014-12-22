if (Meteor.isClient) {
  SecondDealerCard = new Mongo.Collection("secondDealerCard");

      $(document).ready(function() {
          var score = 0;
          var scoreAsPlayer = 0;
          var scoreAsDealer = 0;
          $('.stop').hide();
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
              $('#yo').fadeOut();
              
              $('#yooo').fadeOut();
              $('#yoooo').fadeOut();
              var firstCard = Math.floor((Math.random() * (13-0) )+1);

              $('.stop').fadeIn('slow')
              $('.baobab').fadeOut('slow');
              $('.newCard').fadeIn('slow');
              if (firstCard == 1){
                 $('.fff').prepend('<img src="/img/a.png" />');
                 if (scoreAsPlayer + 11 > 21) {
                  scoreAsPlayer = scoreAsPlayer + 1;
                 }
                 else if (scoreAsPlayer + 11 < 21) {
                 
                  scoreAsPlayer = scoreAsPlayer + 11;
                 }
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              if (firstCard == 13){
                 $('.fff').prepend('<img src="/img/k.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (firstCard == 12){
                 $('.fff').prepend('<img src="/img/q.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (firstCard == 11){
                 $('.fff').prepend('<img src="/img/j.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (firstCard == 10){
                 $('.fff').prepend('<img src="/img/10.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (firstCard == 9){
                 $('.fff').prepend('<img src="/img/9.png" />');
                 scoreAsPlayer = scoreAsPlayer + 9;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (firstCard == 8){
                 $('.fff').prepend('<img src="/img/8.png" />');
                 scoreAsPlayer = scoreAsPlayer + 8;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (firstCard == 7){
                 $('.fff').prepend('<img src="/img/7.png" />');
                 scoreAsPlayer = scoreAsPlayer + 7;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (firstCard == 6){
                 $('.fff').prepend('<img src="/img/6.png" />');
                 scoreAsPlayer = scoreAsPlayer + 6;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (firstCard == 5){
                 $('.fff').prepend('<img src="/img/5.png" />');
                 scoreAsPlayer = scoreAsPlayer + 5;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (firstCard == 4){
                 $('.fff').prepend('<img src="/img/4.png" />');
                 scoreAsPlayer = scoreAsPlayer + 4;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (firstCard == 3){
                 $('.fff').prepend('<img src="/img/3.png" />');
                 scoreAsPlayer = scoreAsPlayer + 3;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (firstCard == 2){
                 $('.fff').prepend('<img src="/img/2.png" />');
                 scoreAsPlayer = scoreAsPlayer + 2;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }

              var secondCard = Math.floor((Math.random() * (13-0)+1 ));
              

              if (secondCard == 1){
                 $('.eee').prepend('<img src="/img/a.png" />');
                 if (scoreAsPlayer + 11 > 21) {
                  scoreAsPlayer = scoreAsPlayer + 1;
                 }
                 else if (scoreAsPlayer + 11 < 21) {
                  scoreAsPlayer = scoreAsPlayer + 11;
                 }
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 13){
                 $('.eee').prepend('<img src="/img/k.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 12){
                 $('.eee').prepend('<img src="/img/q.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 11){
                 $('.eee').prepend('<img src="/img/j.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 10){
                 $('.eee').prepend('<img src="/img/10.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 9){
                 $('.eee').prepend('<img src="/img/9.png" />');
                 scoreAsPlayer = scoreAsPlayer +9;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 8){
                 $('.eee').prepend('<img src="/img/8.png" />');
                 scoreAsPlayer = scoreAsPlayer + 8;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 7){
                 $('.eee').prepend('<img src="/img/7.png" />');
                 scoreAsPlayer = scoreAsPlayer + 7;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 6){
                 $('.eee').prepend('<img src="/img/6.png" />');
                 scoreAsPlayer = scoreAsPlayer + 6;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 5){
                 $('.eee').prepend('<img src="/img/5.png" />');
                 scoreAsPlayer = scoreAsPlayer + 5;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 4){
                 $('.eee').prepend('<img src="/img/4.png" />');
                 scoreAsPlayer = scoreAsPlayer + 4;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 3){
                 $('.eee').prepend('<img src="/img/3.png" />');
                 scoreAsPlayer = scoreAsPlayer + 3;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (secondCard == 2){
                 $('.eee').prepend('<img src="/img/2.png" />');
                 scoreAsPlayer = scoreAsPlayer + 2;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
            

            
              var firstDealerCard = Math.floor((Math.random() * (13-0) )+1);
              
              if (firstDealerCard == 1){
                 $('.ddd').prepend('<img src="/img/a.png" />');
                 if (scoreAsDealer + 11 > 21) {
                  scoreAsDealer = scoreAsDealer + 1;
                 }
                 else if (scoreAsDealer + 11 < 21) {
                  scoreAsDealer = scoreAsDealer + 11;
                 }
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              if (firstDealerCard == 13){
                 $('.ddd').prepend('<img src="/img/k.png" />');
                 scoreAsDealer = scoreAsDealer + 10;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (firstDealerCard == 12){
                 $('.ddd').prepend('<img src="/img/q.png" />');
                 scoreAsDealer = scoreAsDealer + 10;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (firstDealerCard == 11){
                 $('.ddd').prepend('<img src="/img/j.png" />');
                 scoreAsDealer = scoreAsDealer + 10;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (firstDealerCard == 10){
                 $('.ddd').prepend('<img src="/img/10.png" />');
                 scoreAsDealer = scoreAsDealer + 10;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (firstDealerCard == 9){
                 $('.ddd').prepend('<img src="/img/9.png" />');
                 scoreAsDealer = scoreAsDealer + 9;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (firstDealerCard == 8){
                 $('.ddd').prepend('<img src="/img/8.png" />');
                 scoreAsDealer = scoreAsDealer + 8;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (firstDealerCard == 7){
                 $('.ddd').prepend('<img src="/img/7.png" />');
                 scoreAsDealer = scoreAsDealer + 7;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (firstDealerCard == 6){
                 $('.ddd').prepend('<img src="/img/6.png" />');
                 scoreAsDealer = scoreAsDealer + 6;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (firstDealerCard == 5){
                 $('.ddd').prepend('<img src="/img/5.png" />');
                 scoreAsDealer = scoreAsDealer + 5;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (firstDealerCard == 4){
                 $('.ddd').prepend('<img src="/img/4.png" />');
                 scoreAsDealer = scoreAsDealer + 4;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (firstDealerCard == 3){
                 $('.ddd').prepend('<img src="/img/3.png" />');
                 scoreAsDealer = scoreAsDealer + 3;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (firstDealerCard == 2){
                 $('.ddd').prepend('<img src="/img/2.png" />');
                 scoreAsDealer = scoreAsDealer + 2;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }

            var secondDealerCard = Math.floor((Math.random() * (13-0)+1 ));
            

              if (secondDealerCard == 1){
                 
                 if (scoreAsDealer + 11 > 21) {
                  $('#yoo').prepend('<img src="img/191.png" />');
                  scoreAsDealer = scoreAsDealer + 1;
                 }
                 else if (scoreAsDealer + 11 < 21) {
                  $('#yoo').prepend('<img src="img/191.png" />');
                  scoreAsDealer = scoreAsDealer + 11;
                 }
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 13){
                 $('#yoo').prepend('<img src="img/191.png" />');
                 scoreAsDealer = scoreAsDealer + 10;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 12){
                 $('#yoo').prepend('<img src="img/191.png" />');
                 scoreAsDealer = scoreAsDealer + 10;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 11){
                 $('#yoo').prepend('<img src="img/191.png" />');
                 scoreAsDealer = scoreAsDealer + 10;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 10){
                 $('#yoo').prepend('<img src="img/191.png" />');
                 scoreAsDealer = scoreAsDealer + 10;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 9){
                 $('#yoo').prepend('<img src="img/191.png" />');
                 scoreAsDealer = scoreAsDealer + 9;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 8){
                 $('#yoo').prepend('<img src="img/191.png" />');
                 scoreAsDealer = scoreAsDealer + 8;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 7){
                 $('#yoo').prepend('<img src="img/191.png" />');
                 scoreAsDealer = scoreAsDealer + 7;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 6){
                 $('#yoo').prepend('<img src="img/191.png" />');
                 scoreAsDealer = scoreAsDealer + 6;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 5){
                 $('#yoo').prepend('<img src="img/191.png" />');
                 scoreAsDealer = scoreAsDealer + 5;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 4){
                 $('#yoo').prepend('<img src="img/191.png" />');
                 scoreAsDealer = scoreAsDealer + 4;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 3){
                 $('#yoo').prepend('<img src="img/191.png" />');
                 scoreAsDealer = scoreAsDealer + 3;
                 $('.scoreAsDealer').text(scoreAsDealer);
              }
              else if (secondDealerCard == 2){
                 $('#yoo').prepend('<img src="img/191.png" />');
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
              $('.newCard').hide();
              $('.newnewCard').fadeIn('slow');
              

              if (newCard == 1){
                 $('.nnn').prepend('<img src="/img/a.png" />');
                 if (scoreAsPlayer + 11 > 21) {
                  scoreAsPlayer = scoreAsPlayer + 1;
                 }
                 else if (scoreAsPlayer + 11 < 21) {
                  scoreAsPlayer = scoreAsPlayer + 11;
                 }
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 13){
                 $('.nnn').prepend('<img src="/img/k.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 12){
                 $('.nnn').prepend('<img src="/img/q.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 11){
                 $('.nnn').prepend('<img src="/img/j.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 10){
                 $('.nnn').prepend('<img src="/img/10.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 9){
                 $('.nnn').prepend('<img src="/img/9.png" />');
                 scoreAsPlayer = scoreAsPlayer + 9;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 8){
                 $('.nnn').prepend('<img src="/img/8.png" />');
                 scoreAsPlayer = scoreAsPlayer + 8;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 7){
                 $('.nnn').prepend('<img src="/img/7.png" />');
                 scoreAsPlayer = scoreAsPlayer + 7;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 6){
                 $('.nnn').prepend('<img src="/img/6.png" />');
                 scoreAsPlayer = scoreAsPlayer + 6;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 5){
                 $('.nnn').prepend('<img src="/img/5.png" />');
                 scoreAsPlayer = scoreAsPlayer + 5;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 4){
                 $('.nnn').prepend('<img src="/img/4.png" />');
                 scoreAsPlayer = scoreAsPlayer + 4;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 3){
                 $('.nnn').prepend('<img src="/img/3.png" />');
                 scoreAsPlayer = scoreAsPlayer + 3;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newCard == 2){
                 $('.nnn').prepend('<img src="/img/2.png" />');
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
              
              

              if (newnewCard == 1){
                 $('.bbb').prepend('<img src="/img/a.png" />');
                 if (scoreAsPlayer + 11 > 21) {
                  scoreAsPlayer = scoreAsPlayer + 1;
                 }
                 else if (scoreAsPlayer + 11 < 21) {
                  scoreAsPlayer = scoreAsPlayer + 11;
                 }
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 13){
                 $('.bbb').prepend('<img src="/img/k.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').prepend(scoreAsPlayer);
              }
              else if (newnewCard == 12){
                 $('.bbb').prepend('<img src="/img/q.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 11){
                 $('.bbb').prepend('<img src="/img/j.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 10){
                 $('.bbb').prepend('<img src="/img/10.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 9){
                 $('.bbb').prepend('<img src="/img/9.png" />');
                 scoreAsPlayer = scoreAsPlayer + 9;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 8){
                 $('.bbb').prepend('<img src="/img/8.png" />');
                 scoreAsPlayer = scoreAsPlayer + 8;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 7){
                 $('.bbb').prepend('<img src="/img/7.png" />');
                 scoreAsPlayer = scoreAsPlayer + 7;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 6){
                 $('.bbb').prepend('<img src="/img/6.png" />');
                 scoreAsPlayer = scoreAsPlayer + 6;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 5){
                 $('.bbb').prepend('<img src="/img/5.png" />');
                 scoreAsPlayer = scoreAsPlayer + 5;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 4){
                 $('.bbb').prepend('<img src="/img/4.png" />');
                 scoreAsPlayer = scoreAsPlayer + 4;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 3){
                 $('.bbb').prepend('<img src="/img/3.png" />');
                 scoreAsPlayer = scoreAsPlayer + 3;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewCard == 2){
                 $('.bbb').prepend('<img src="/img/2.png" />');
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
              
              

              if (newnewnewCard == 1){
                 $('.jjj').prepend('<img src="/img/a.png" />');
                 if (scoreAsPlayer + 11 > 21) {
                  scoreAsPlayer = scoreAsPlayer + 1;
                 }
                 else if (scoreAsPlayer + 11 < 21) {
                  scoreAsPlayer = scoreAsPlayer + 11;
                 }
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 13){
                 $('.jjj').prepend('<img src="/img/k.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 12){
                 $('.jjj').prepend('<img src="/img/q.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 11){
                 $('.jjj').prepend('<img src="/img/j.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 10){
                 $('.jjj').prepend('<img src="/img/10.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 9){
                 $('.jjj').prepend('<img src="/img/9.png" />');
                 scoreAsPlayer = scoreAsPlayer + 9;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 8){
                 $('.jjj').prepend('<img src="/img/8.png" />');
                 scoreAsPlayer = scoreAsPlayer + 8;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 7){
                 $('.jjj').prepend('<img src="/img/7.png" />');
                 scoreAsPlayer = scoreAsPlayer + 7;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 6){
                 $('.jjj').prepend('<img src="/img/6.png" />');
                 scoreAsPlayer = scoreAsPlayer + 6;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 5){
                 $('.jjj').prepend('<img src="/img/5.png" />');
                 scoreAsPlayer = scoreAsPlayer + 5;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 4){
                 $('.jjj').prepend('<img src="/img/4.png" />');
                 scoreAsPlayer = scoreAsPlayer + 4;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 3){
                 $('.jjj').prepend('<img src="/img/3.png" />');
                 scoreAsPlayer = scoreAsPlayer + 3;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (newnewnewCard == 2){
                 $('.jjj').prepend('<img src="/img/2.png" />');
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
      

          $('.omgCard').click(function() {
              
              var omgCard = Math.floor((Math.random() * (13-0)+1 ));
              $('.kkk').fadeIn('slow');
              

              if (omgCard == 1){
                 $('.kkk').prepend('<img src="/img/a.png" />');
                 if (scoreAsPlayer + 11 > 21) {
                  scoreAsPlayer = scoreAsPlayer + 1;
                 }
                 else if (scoreAsPlayer + 11 < 21) {
                  scoreAsPlayer = scoreAsPlayer + 11;
                 }
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 13){
                 $('.kkk').prepend('<img src="/img/k.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 12){
                 $('.kkk').prepend('<img src="/img/q.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 11){
                 $('.kkk').prepend('<img src="/img/j.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 10){
                 $('.kkk').prepend('<img src="/img/10.png" />');
                 scoreAsPlayer = scoreAsPlayer + 10;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 9){
                 $('.kkk').prepend('<img src="/img/9.png" />');
                 scoreAsPlayer = scoreAsPlayer + 9;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 8){
                 $('.kkk').prepend('<img src="/img/8.png" />');
                 scoreAsPlayer = scoreAsPlayer + 8;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 7){
                 $('.kkk').prepend('<img src="/img/7.png" />');
                 scoreAsPlayer = scoreAsPlayer + 7;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 6){
                 $('.kkk').prepend('<img src="/img/6.png" />');
                 scoreAsPlayer = scoreAsPlayer + 6;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 5){
                 $('.kkk').prepend('<img src="/img/5.png" />');
                 scoreAsPlayer = scoreAsPlayer + 5;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 4){
                 $('.kkk').prepend('<img src="/img/4.png" />');
                 scoreAsPlayer = scoreAsPlayer + 4;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 3){
                 $('.kkk').prepend('<img src="/img/3.png" />');
                 scoreAsPlayer = scoreAsPlayer + 3;
                 $('.scoreAsPlayer').text(scoreAsPlayer);
              }
              else if (omgCard == 2){
                 $('.kkk').prepend('<img src="/img/2.png" />');
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
              
              $('.newCard').hide();
              $('.newnewCard').hide();
              $('.newnewnewCard').hide();
              $('.omgCard').hide();
              $('.stop').hide();
              $('#yoo').fadeOut();

              if (scoreAsDealer < scoreAsPlayer) {
                  if (secondDealerCard == 1){
                     $('#yoo').prepend('<img src="/img/a.png" />');
                  }
                  else if (secondDealerCard == 13){
                     $('#yoo').prepend('<img src="/img/k.png" />');
                  }
                  else if (secondDealerCard == 12){
                     $('#yoo').prepend('<img src="/img/q.png" />');
                  }
                  else if (secondDealerCard == 11){
                     $('#yoo').prepend('<img src="/img/j.png" />');
                  }
                  else if (secondDealerCard == 10){
                     $('#yoo').prepend('<img src="/img/10.png" />');
                  }
                  else if (secondDealerCard == 9){
                     $('#yoo').prepend('<img src="/img/9.png" />');
                  }
                  else if (secondDealerCard == 8){
                     $('#yoo').prepend('<img src="/img/8.png" />');
                  }
                  else if (secondDealerCard == 7){
                     $('#yoo').prepend('<img src="/img/7.png" />');
                  }
                  else if (secondDealerCard == 6){
                     $('#yoo').prepend('<img src="/img/6.png" />');
                  }
                  else if (secondDealerCard == 5){
                     $('#yoo').prepend('<img src="/img/5.png" />');
                  }
                  else if (secondDealerCard == 4){
                     $('#yoo').prepend('<img src="/img/4.png" />');
                  }
                  else if (secondDealerCard == 3){
                     $('#yoo').prepend('<img src="/img/3.png" />');
                  }
                  else if (secondDealerCard == 2){
                     $('#yoo').prepend('<img src="/img/2.png" />');
                  }
              }


              
          });
      });
}

if (Meteor.isServer) {
  
  
}
