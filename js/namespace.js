function namespace(path){
  if(path.length){
    var context;
    
    try {
      path = path.split('.');
      window[path[0]] = window[path[0]] || {};
      context = window[path[0]];
    } catch(err) {
      this[path[0]] = this[path[0]] || {};
      context  = this[path[0]] || {};
    }

    path.shift();
    namespace.call(context, path);
  }
}
