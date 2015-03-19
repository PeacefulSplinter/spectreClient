var dup = function(collection){
  var result = [];
  for(var i = 0; i < collection.length; i++){
    result.push(collection[i]);
  }
  return collection.concat(result);
}
