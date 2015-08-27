function person ( first_name, last_name, github_username){
	first_name: first_name,
	last_name: last_name,
	github_username: github_username,
};
console.log(person);

function model(name) {
    this.type = name;
    this.data = []; 
    //this will be acsesed bay all at least once
    this._id = 0;
};
console.log(object);

model.prototype =  {
	create: function (object, callback) {
		//object proamiter gois in oc
		var objectContainer = {};
		objectContainer._id = this._id;
		this._id += 1;
		objectContainer._ts = Date.now();
		objectContainer.ownObject = object;
		this.data.push(objectContainer);
		return objectContainer
	}
var User = new model("user");
var sakina = new person("sakina", "sheikh", "sakinasheikh");
var createdUser = User.create(sakina);
console.log(createdUser)
	// findById: function (objectId, callback){

	// }
	// update: function (objectId, updateObject, callback){

	// }
	// delete: function (objectId, callback){

	// }
}