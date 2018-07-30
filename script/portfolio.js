    $(document).ready(function(){

    $("#home_tab").click(function(){
        $(".home").show();
        $(".resume").hide();
        $(".projects").hide();
        $(".contact").hide();
        $("#home_tab").css('color', ' rgba(255, 153, 0, 0.678)');
        $("#resume_tab").css('color', '#fff');
        $("#projects_tab").css('color', '#fff');
        $("#contact_tab").css('color', '#fff');

    });

    $("#resume_tab").click(function(){
        $(".home").hide();
        $(".resume").show();
        $(".projects").hide();
        $(".contact").hide();
        $("#home_tab").css('color', '#fff ');
        $("#resume_tab").css('color', 'rgba(255, 153, 0, 0.678)');
        $("#projects_tab").css('color', '#fff');
        $("#contact_tab").css('color', '#fff');
    });

    $("#projects_tab").click(function(){
        $(".home").hide();
        $(".resume").hide();
        $(".projects").show();
        $(".contact").hide();
        $("#home_tab").css('color', '#fff ');
        $("#resume_tab").css('color', '#fff');
        $("#projects_tab").css('color', 'rgba(255, 153, 0, 0.678)');
        $("#contact_tab").css('color', '#fff');
        
    });

    $("#contact_tab").click(function(){
        $(".home").hide();
        $(".resume").hide();
        $(".projects").hide();
        $(".contact").show();
        $("#home_tab").css('color', '#fff ');
        $("#resume_tab").css('color', '#fff'); 
        $("#projects_tab").css('color', '#fff');
        $("#contact_tab").css('color', 'rgba(255, 153, 0, 0.678)');
    });

        // $(".header_component2").click(function(){
        //     $(".header_component2").removeClass("active");
        //     $("this").addClass("active");
        // });

    // ----------------------home-------------------------

    $("#circle_aboutme").click(function(){
        $("#aboutme_text").fadeIn(1500);
        $("#circle_aboutme").css('background-color', 'rgba(255, 153, 0, 0.678)');
        $("#circle_aboutme").css('color', ' rgb(197, 14, 14)');
        $("#circle_family").css('background-color', ' rgba(0, 162, 255, 0.671)');
        $("#circle_hobbies").css('background-color', ' rgba(0, 162, 255, 0.671)');
        $("#family").hide();
        $("#hobbies").hide();

    });
    

    $("#circle_family").click(function(){
        $("#circle_family").css('background-color', 'rgba(255, 153, 0, 0.678)');
        $("#circle_family").css('color', ' rgb(197, 14, 14)');
        $("#circle_aboutme").css('background-color', ' rgba(0, 162, 255, 0.671)');
        $("#circle_hobbies").css('background-color', ' rgba(0, 162, 255, 0.671)');
        $("#aboutme_text").hide();
        $("#family").fadeIn(1500);
        $("#hobbies").hide();

    });
   
    $("#circle_hobbies").click(function(){
        $("#circle_hobbies").css('background-color', 'rgba(255, 153, 0, 0.678)');
        $("#circle_hobbies").css('color', ' rgb(197, 14, 14)');
        $("#circle_aboutme").css('background-color', ' rgba(0, 162, 255, 0.671)');
        $("#circle_family").css('background-color', ' rgba(0, 162, 255, 0.671)');
        $("#aboutme_text").hide();
        $("#family").hide();
        $("#hobbies").fadeIn(1500);

    });
// ---------------------------------------------resume---------------------------------
    $("#circle_graduation").click(function(){
        $("#circle_graduation").animate({
        left :'30px',
        }, "slow");
        $("#circle_graduation").css('color', ' rgb(197, 14, 14)');
        $("#circle_graduation").css('background-color', 'rgba(97, 208, 212, 1)');
        $("#graduation").fadeIn(1500);
    });



    $("#circle_hse").click(function(){
        $("#circle_hse").animate({
        left :'30px',
        }, "slow");
        $("#circle_hse").css('color', ' rgb(197, 14, 14)');
        $("#circle_hse").css('background-color', 'rgba(97, 208, 212, 1)');
        $("#hse").fadeIn(1500);
    });

    $("#circle_hs").click(function(){
        $("#circle_hs").animate({
        left :'30px',
        }, "slow");
        $("#circle_hs").css('color', ' rgb(197, 14, 14)');
        $("#circle_hs").css('background-color', 'rgba(97, 208, 212, 1)');
        $("#hs").fadeIn(1500);
    });

    $( function() {
        $( "#accordion" ).accordion();
      } );
    $("#resizable").resizable();
// ---------------projects----------------------------------

$("#circle_mainproject").click(function(){
    $("#circle_mainproject").animate({
    left :'30px',
    }, "slow");
    $("#circle_mainproject").css('color', ' rgb(197, 14, 14)');
    $("#circle_mainproject").css('background-color', 'rgba(255, 153, 0, 0.678)');
    $("#Main_Project").fadeIn(1500);
    

});

$("#circle_miniproject").click(function(){
    $("#circle_miniproject").animate({
    left :'30px',
    }, "slow");
    $("#circle_miniproject").css('color', ' rgb(197, 14, 14)');
    $("#circle_miniproject").css('background-color', 'rgba(255, 153, 0, 0.678)');
    $("#Mini_Project").fadeIn(1500);
});

});
