document.getElementById('hamburger').addEventListener('click',drawer, false);
         function  drawer(){
        	document.getElementById('drawer').classList.toggle('drawer_left');
        }

       document.getElementById('header_right').addEventListener('click',drawer2, false);
            function  drawer2(){
            document.getElementById('drawer2').classList.toggle('drawer_right');
            }