function namespace(path){
	//split path on period
 	var splitPath = path.split('.');

	window[splitPath[0]] = window[splitPath[0]] || {};

	var globalOb = window[splitPath[0]];

	for (var i = 1; i < splitPath.length; i++) {
		var nestedOb= {};

		if (globalOb[splitPath[i]] === undefined) {
			globalOb[splitPath[i]] = nestedOb;
		} 

		globalOb = globalOb[splitPath[i]];
		
	}

}
