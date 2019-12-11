const request  =require('request');
const geocode=(locatn,callback)=>{
const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+locatn+'.json?access_token=pk.eyJ1Ijoic3VyYWo2MTk4IiwiYSI6ImNrM3pyMTFzMDB4dDYzbHA2NWZ3NGVkYXMifQ.UyJnxF-YYPDxT3BBHNIMsQ&limit=1';
request({url:url,json:true},(error,response)=>{
    if(error){
        callback('Please connect internet',undefined);
    }
    else if(response.body.features.length==0)
    {
        callback('Please enter correct location',undefined);
    }
    else
    {
        const long=(response.body.features[0].geometry.coordinates[0]);
        const lat= (response.body.features[0].geometry.coordinates[1]);
        callback('undefined', { long ,lat });
    }
})
}
module.exports =geocode