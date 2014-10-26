function namespace(path) {
    var allparts = path.split('.'),
        parent = window,
        currentPart = '';    
        
    for(var i = 0, length = allparts.length; i < length; i++) {
        currentPart = allparts[i];
        parent[currentPart] = parent[currentPart] || {};
        parent = parent[currentPart];
    }
    
    return parent;
}
