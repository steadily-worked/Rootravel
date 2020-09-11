$(function() {
    $('#center-2').click(function() {
        $.ajax({
            type: "GET",
            url: "/course2-2.html",
            dataType : "html",
            success: function(data) {
                $('#center-2').html(data);
            }
        });
    })
})