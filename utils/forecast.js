const request=require('request');
const forecast=({long,lat},callback)=>{ 
const url='https://api.darksky.net/forecast/771d879f57689057df6335d94f195f5a/'+lat+','+long+'?units=si';
request({url:url, json:true}, (error,response)=>{
    if(error)
    {
        callback('Please connect internet',undefined);
    }
    else if(response.body.error)
    {
       callback('Please enter correct location',undefined);
    }
    else
    {
        const summary=response.body.daily.data[0].summary ;
        const temp=response.body.currently.temperature;
        callback(undefined,{summary,temp});
    }
})
}
module.exports=forecast
