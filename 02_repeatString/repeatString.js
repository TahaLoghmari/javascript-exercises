const repeatString = function( message , num ) {
    if ( num < 0 ) return "ERROR" ; 
    let Result = "";
    for ( let i = 0 ; i < num ; ++ i ) Result += message;
    return Result ; 
};

// Do not edit below this line
module.exports = repeatString;
