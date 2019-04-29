$(document).ready(function () {

    $("#add").click(function () {
        var text = $("#addtolist").val();
        if (text.length > 0) {
            if ($("input:radio:checked").length > 0) {
                var color = $("input:radio:checked").val();
                var random = Math.random();
                $("#todolist").append(`<div id=${color} class=${random} ><input type='checkbox' id='box' value=${random} class='divvv'>` +text+ ` </div><br>`);
                $("input:radio").prop('checked', false);
                $("#addtolist").val('');
            } else {
                var random = Math.random();
                list = ["red", "blue", "green", "orange", "aqua", "violet"];
                 get_random = function (list) {
                    return list[Math.floor((Math.random() * list.length))];
                 };
                $("#todolist").append(`<div id=${get_random(list)} class=${random} ><input type='checkbox' id='box' value=${random} class='divvv'>` +text+  `</div><br>`);
                $("input:radio").prop('checked', false);
                $("#addtolist").val('');
            }
        }
    });


    // $('#todolist').on('click', 'input:checkbox', function () {
    //     var value = $('input:checkbox:checked').val();
    //     var count = $(':checkbox:checked').lengt
    //     $("input:radio").click(function () {    
    //         if(value==true){
    //          var div = document.getElementsByClassName(`${value}`);
    //          for(var i=0;count>i;i++){
    //          console.log(i)
    //          div[i].id = $("input:radio:checked").val();
    //         $("input:checkbox").prop('checked', false);
            
    //       }
    //     }
        
    //     });
    
    // });

    $('#todolist').on('click', 'input:checkbox', function () {
        var value = $('input:checkbox:checked').val();
        $("input:radio").click(function () {     
             var div = document.getElementsByClassName(`${value}`);
             div[0].id = $("input:radio:checked").val();
            $("input:checkbox").prop('checked', false); 
        });
    
    });

});