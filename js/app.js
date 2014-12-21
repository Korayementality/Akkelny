
var modalContent =  '<div class="row text-center">'+
                      '<div class="col-xs-2"><img src="%imagepath%" class="img-responsive" ></div>'+
                      '<div class="col-xs-3" style="margin-top: 2%"><p3>%name%</p3></div>'+
                      '<div class="col-xs-2" style="margin-top: 2%"><p3>%description% EGP</p3></div>'+
                      '<div class="col-xs-2" style="margin-top: 2%;"><button type="button" class="btn-confirm"><p2>Add</p2></button></div>'+
                      '<div class="col-md-3 col-sm-3 col-xs-3" style="margin-top: 2%"><button type="button" class="btn-confirm"><p2>Remove</p2></button></div>'+
                  '</div>';
var pageElement =   '<div id="%id%" data-toggle="modal" data-target="#modal" class="col-xs-5" style="margin:1%;">'+
                        '<img src="%imagepath%" alt="" class="img-responsive" style="max-height:300px; width:100%">'+ 
                        '<span class="hover-text"><div style="height: 75%"></div><p2>%name%</p2></span>'+
                    '</div>';

                    



//restaurants array
var restaurants_array = [];

$(document).ready(
    function () {
        //AJAX call to fetch random restaurants
        
        //search text field
        var search_text = $('#search-text');
        
        //search button listener
        $('#search-button').click(function () {
            var search_val = search_text.val();
            
            restaurants_array = [];
            var restaurantUrl = "http://azizapp.eu5.org/Akkelny/fetch_restaurants.php?search=" + search_val;
            displayPage(restaurantUrl, function (restaurants_array) {
                $(pageContent).empty();
                for (var i = 0; i < restaurants_array.length; i++)
                {
                    var item = makePage(pageElement, i, restaurants_array[i].name, restaurants_array[i].imagepath);
                    $(pageContent).append(item);
                    
                    $('#'+i).data('modalData', {array: restaurants_array[i].food, name: restaurants_array[i].name});
                    $('#'+i).click(function(){
                        var data = $(this).data('modalData');
                        $('#myModalLabel').text(data.name);
                        displayModal(data.array);
                    });
                }
            });
        });

    });

function displayModal() {
    
    //$(currentModal).empty();
    var array = [];
    if(arguments.length == 1){
        array = arguments[0];
    }
    for(var i = 0; i < array.length; i++)
    {
        var item = makeItem(modalContent, array[i].imagepath, array[i].name ,array[i].description);
        $(currentModal).append(item);
    }
}

function displayPage(restaurantUrl, callback) {
    //AJAX call to fetch search restaurant
    $.getJSON(restaurantUrl, function (data){

        for(var i=0 ; i<data.length ; i++){
            restaurants_array[i] = {id: data[i].id, name: data[i].name, imagepath: data[i].imagepath, food: data[i].food};
        }
        callback(restaurants_array);
    }); 
}

function makeItem(content, imagepath, name, description){
    
    var currentContent = content;
      
    currentContent = currentContent.replace("%imagepath%", imagepath);
    currentContent = currentContent.replace("%name%", name);
    currentContent = currentContent.replace("%description%", description);
    
    return currentContent;
    
}

function makePage(content, id, name, imagepath) {
    
    var currentContent = content;
    
    currentContent = currentContent.replace("%id%", id);      
    currentContent = currentContent.replace("%imagepath%", imagepath);
    currentContent = currentContent.replace("%name%", name);

    return currentContent;
    
}