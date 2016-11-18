//use jquery for grabbing the storage.
    $(document).ready(function () {
    function textin() {
        if (localStorage["name"]) {
        	//if there's something in local storage
            $('#name').val(localStorage["name"]);
            //then grab and put it in the value
        }
        if (localStorage["MythBeast"]) {
            $('#MythBeast').val(localStorage["MythBeast"]);
        }
        if (localStorage["FruityFruit"]) {
            $('#FruityFruit').val(localStorage["FruityFruit"]);
        }
    }
    //create a function, we'll call it textin. We're instantiating the function too be called like a constructor call. 
    textin();
});

//if something has been keyed into a value, then save it with every keystroke. the function calls the last function called. $ defines jquery, while selecting and calling an action.
$('.stored').keyup(function () {
    localStorage[$(this).attr('name')] = $(this).val();
});

//clear the local storage when submitting.
$('#localStorageTest').submit(function() {
    localStorage.clear();
});