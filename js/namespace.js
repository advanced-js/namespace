function namespace(path){
	var pathArray = path.split('.');
	var namespace = '';
	for(var i =0, max = pathArray.length; i<max; i++) {
		if(i == 0) {
			eval(pathArray[0]+" = window."+pathArray[i]+" || {};");
			namespace+= pathArray[0];
		} else {
			eval(namespace+"."+pathArray[i]+" = "+namespace+"."+pathArray[i]+" || {};");
			namespace+= '.'+pathArray[i];
		}
	}
}
