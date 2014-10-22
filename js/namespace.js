function namespace(path){
  
  if(path.length){
    var context = this;
    try {
      path = path.split('.');
      context = this[path[0]] = {};
    } catch(err) {
      context = this[path[0]] = {};
    };
    path.shift();
    namespace.call(context, path);
  }
}
