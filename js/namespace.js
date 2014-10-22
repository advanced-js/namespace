function namespace(path){
    var names;
    var namespace = path.split('.');
    if(window[namespace[0]] === undefined) {
        window[namespace[0]] = {};
    }
    var names = window[namespace[0]];
    for(var i = 1; i < namespace.length; i++) {
        if(names[namespace[i]] === undefined){
            names[namespace[i]] = {};
        }
        names = names[namespace[i]];
    }
}
