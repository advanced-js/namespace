function namespace(path){
  var parts = path.split('.');
	var number_parts = parts.length;
	var parent = window;
	if (number_parts > 0) {
		var index = 0, part = '';
 
		for (index; index <= number_parts; index++) {
			part = parts[index];
			parent[part] = parent[part] || {};	
			parent = parent[part];
		}
	} 
	return parent;
}

namespace('drawingpad.pencil'); 
drawingpad.pencil.User = function(){}; 
