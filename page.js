$(document).ready(function() {
    $(document).on('click', '#center-1 a', function(event) {
        history.pushState(null, null, event.target.href);
        $('#right-container-course2').load(location.href+' #right-container-course2>')
    })
})