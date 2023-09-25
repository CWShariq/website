$(document).ready(function(){
    $('#subscribeBtn').on('click', function(){
        // Remove previous status message
        $('.status').html('');
        
        // Email and name regex
        var regEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        var regName = /^(?:[a-zA-Z]+ ?)+$/;
        
        // Get input values
        var name = $('#name').val();
        var email = $('#email').val();

        // Check if the "agree" checkbox is checked
         
        
        // Validate input fields
        if(name.trim() == '' ){
            alert('Please enter your name.');
            $('#name').removeClass('dark:border-gray-700').addClass('error-border Dark:error-border');
            $('#name').focus();
            return false;
        }else if (!regName.test(name)){
            alert('Please enter a valid name.');
            $('#name').removeClass('dark:border-gray-700 error-border').addClass('error-border Dark:error-border');
            $('#name').focus();
            return false;
        }else if(email.trim() == '' ){
            alert('Please enter your email.');
            $('#name').removeClass('error-border Dark:error-border').addClass('dark:border-gray-700');
            $('#email').removeClass('dark:border-gray-700').addClass('error-border Dark:error-border');
            $('#email').focus();
            return false;
        }else if(email.trim() != '' && !regEmail.test(email)){
            alert('Please enter a valid email.');
            $('#name').removeClass('error-border Dark:error-border').addClass('dark:border-gray-700');
            $('#email').removeClass('dark:border-gray-700').addClass('error-border Dark:error-border');
            $('#email').focus();
            return false;
        }else if (!$('#agree').prop('checked')) {
            alert('Please agree to the terms and conditions.');
            $('#name').removeClass('error-border Dark:error-border').addClass('dark:border-gray-700');
            $('#email').removeClass('error-border Dark:error-border').addClass('dark:border-gray-700');
            $('#agree').removeClass('dark:border-gray-700').addClass('error-border Dark:error-border');
            $('#agree').focus();
            return false;
        }else{
            // Post subscription form via Ajax
            $('#name').removeClass('error-border Dark:error-border').addClass('dark:border-gray-700');
            $('#email').removeClass('error-border Dark:error-border').addClass('dark:border-gray-700');
            $('#agree').removeClass('error-border Dark:error-border').addClass('dark:border-gray-700');
            $.ajax({
                type:'POST',
                url:'./subscriber/subscription_handler.php',
                dataType: "json",
                data:{subscribe:1,name:name,email:email},
                beforeSend: function () {
                    $('#progload').show();
                    $('#subscribeBtn').attr("disabled", "disabled");
                    $('.content-frm').css('opacity', '.5');
                },
                success:function(data){
                    $('#progload').hide();
                    if(data.status == 1){
                        $('#subsFrm')[0].reset();
                        $('.status').html('<p class="success success-border border mb-3 py-3 px-4 w-full shadow-sm rounded-md text-gray-600 dark:bg-slate-900 dark:text-gray-400">'+data.msg+'</p>');
                    }else{
                        $('.status').html('<p class="error error-border border mb-3 py-3 px-4 w-full shadow-sm rounded-md text-gray-600 dark:bg-slate-900 dark:text-gray-400">'+data.msg+'</p>');
                    }
                    $('#subscribeBtn').removeAttr("disabled");
                    $('.content-frm').css('opacity', '');
                }
            });
        }
    });
});