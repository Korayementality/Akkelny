Parse.initialize("TWIH2A9ZHHLiN6nKcmFmQ8RUyBjebyrrIwI9B4pY", "yTMDTPKFe1QEIahTjgyRZrszK4F5qZcprm73EOx7");

var Target = Parse.Object.extend("Target");
var query = new Parse.Query(Target);

Start();

function Start() {
   
    query.get('vuUzdRs3B0', {
  success: function(object) {
    document.getElementById("status").innerHTML = object.get("Status");
  },

  error: function(object, error) {
    // error is an instance of Parse.Error.
  }
});
    
}

function Update() {

    query.get('vuUzdRs3B0', {
  success: function(object) {
  object.set("Status", document.getElementById("statusInput").value.toString());
      object.save();
      location.reload();
  },

  error: function(object, error) {
    // error is an instance of Parse.Error.
  }
});
    
}