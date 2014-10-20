function namespace(path){

    //SPLIT ARGUMENT INTO AN ARRAY SEPARATED BY EACH PERIOD
    var path_array = path.split('.');

    //ADD ARRAY INDEX 0 VALUE TO GLOBAL WINDOW OBJECT
    window[path_array[0]] = window[path_array[0]] || {};

    //STORE POINTER TO THE LOWEST LEVEL OF THE OBJECT DURING FOR LOOP ITERATIONS
    var lowest_level_object = window[path_array[0]];

    //LOOP THROUGH PATH ARRAY
    for (var i=1; i < path_array.length; i++) {

        //CREATE NEW EMPTY OBJECT
        var new_object = {};

        //IF THE NAMESPACE IS UNDEFINED, ADD NAMESPACE TO OBJECT
        if ( lowest_level_object[ path_array[i] ] === undefined ) {

            //SET LOWEST LEVEL NAMESPACE TO AN EMPTY OBJECT
            lowest_level_object[ path_array[i] ] = new_object;

            //POINT TO NEW LOWEST LEVEL
            lowest_level_object = lowest_level_object[ path_array[i] ];

        }

        else {
            //POINT TO NEW LOWEST LEVEL
            lowest_level_object = lowest_level_object[ path_array[i] ];
        }

    }

}

//namespace('app.models');
