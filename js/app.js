
var modalContent = 
    '<div class="row">' +
        '<div class="col-md-2"><img src="%imagepath%" width="100px"></div>' +
        '<div class="col-md-2" style="margin-top: 10%"><p3>%name%</p3></div>' +
        '<div class="col-md-2" style="margin-top: 10%"><p3>%description% EGP</p3></div>' +
        '<div class="col-md-2" style="margin-top: 10%"><button type="button" class="btn-confirm"><p2>Add</p2></button></div>' +
        '<div class="col-md-3" style="margin-top: 10%"><button type="button" class="btn-confirm"><p2>Remove</p2></button></div>' +
       '<div class="col-md-1" style="margin-top: 10%"><div id="%counter_id%"><p3>0</p3></div></div>' +
    '</div>'; 


var pageElement =   
        '<div class="col-md-2">' +
        '<div onclick="displayModal()" data-toggle="modal" data-target="#modal" class="col-md-10" style="background color: white; margin:1%;">' +
        '<img src="%imagepath%" alt="" class="img-responsive" style="max-height:300px; width:100%"> '+
        '<span class="hover-text"><div style="height: 80%"></div><p2>%name%</p2></span>' +
        '</div>'+
        '<div class="col-md-2 col-md-offset-4"></div>';



var itemArray = [
        {name: "Big Tasty", desc:"30", imagepath:"../images/items/mcdonalds-Big-Tasty.png"}
    ];

var restaurantArray = [
        {name: "McDonald's", imagepath:"../images/Pizza-Hut-is-Back-in-SA.png"},
        {name: "McDonald's", imagepath:"../images/McDonalds logo.jpg"},
        {name: "hihihi", imagepath:"../images/McDonalds logo.jpg"},
        {name: "hihihi", imagepath:"../images/McDonalds logo.jpg"},
        {name: "hihihi", imagepath:"../images/McDonalds logo.jpg"}
    
    ];


function displayModal() {
    
    $(currentModal).empty();
    
    for(var i = 0; i < itemArray.length; i++)
    {
        var item = makeItem(modalContent, itemArray[i].imagepath, itemArray[i].name, itemArray[i].counter_id, itemArray[i].desc);
        $(currentModal).append(item);
    }
}

function displayPage() {
    
    $(pageContent).empty();
    for(var i = 0; i < restaurantArray.length; i++)
    {
        var item = makePage(pageElement, restaurantArray[i].name, restaurantArray[i].imagepath);
        //document.getElementById('pageContent').innerHTML += item;
        $(pageContent).append(item);
    }
    
}

function makeItem(content, imagepath, name, counter_id, description){
    
    var currentContent = content;
          
    currentContent = currentContent.replace("%imagepath%", imagepath);
    currentContent = currentContent.replace("%name%", name);
    currentContent = currentContent.replace("%description%", description);
    currentContent = currentContent.replace("%counter_id%", counter_id);
    
    return currentContent;
    
}

function makePage(content, name, imagepath) {
    
    var currentContent = content;
          
    currentContent = currentContent.replace("%imagepath%", imagepath);
    currentContent = currentContent.replace("%name%", name);

    return currentContent;
    
}

function Search() {
 
    return document.getElementById("search").value;
    
}