function doWork(){
    //throw error that say 'unable to do work'
    throw new Error('Error: unable to do work!');
}

try{
    //throw new Error('Error Unable to retrieve DB data');
    //call do work
    doWork();
}
catch(e){
    console.log(e.message);
}
finally{
    console.log ('Finally log executed!')
}

console.log('Try catch ended!');