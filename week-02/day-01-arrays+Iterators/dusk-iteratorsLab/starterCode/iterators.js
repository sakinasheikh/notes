//where our iterators live
var o_o = {
  each: function(list, callback) {
    //code here...
  for(var i = 0; i < list.length; i++) {
    var element = list[i];
    callback(element);
  }
  },
  map: function(list, callback){
    //code here...
  for(var i = 0; i< list.length; i++) {
    var element = list.map(function(list) {
      return (list - 1);
      callback(element);
    });
  }
  },

  filter: function(list, callback) {
    //code here...
  }
};

//expose our iterators to other files
//such as our assertions
module.exports = o_o;
<<<<<<< HEAD



    // var output = [];
    //   for (var i = 0; i < list.length; i++) {
    //     if (callback(list[i])) {
    //       output.push(list[i]);
    //     }
    //   }
    //   return output;
=======
>>>>>>> 378a232692cc09b7562c65b71751abb72ace4793
