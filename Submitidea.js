        // Get the box1
        var box1 = document.getElementById("SubmitBox");
        
        // Get the button that opens the box1
        var btn = document.getElementById("myBtn");
        
        // Get the <span> element that closes the box1
        var span = document.getElementsByClassName("closeX")[0];
        
        // When the user clicks the button, open the box1 
        btn.onclick = function() {
          box1.style.display = "block";
        }
        
        // When the user clicks on <span> (x), close the box1
        span.onclick = function() {
          box1.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the box1, close it
        window.onclick = function(event) {
          if (event.target == box1) {
            box1.style.display = "none";
          }
        }


        window.onload = function(){
          document.getElementById('close').onclick = function(){
          this.parentNode.parentNode.parentNode
          .removeChild(this.parentNode.parentNode);
          return false;
          };
          };