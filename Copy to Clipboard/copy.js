function myfunction(){
    $(document).ready(function(){
        $('#bttn').click(function(){
            $('#input').select()
            document.execCommand("copy");
        });
    });
    

}
