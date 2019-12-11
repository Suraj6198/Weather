const express=require('express');
const path=require('path')
const hbs=require('hbs')
const geocode=require('./utils/geocode');
const forecast=require('./utils/forecast');
const app=express();

const port=process.env.PORT || 3000 
const pp=path.join(__dirname,'/public' );
app.use(express.static(path.join(__dirname,'/public' )));
app.set('view engine','hbs');
app.set('views',path.join(__dirname ,'/public/templates/views' ));
hbs.registerPartials(path.join(__dirname,'/public/templates/partials'));
app.get('',(req,res)=>{
    res.render('index',{
          title:'Weather'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
          title:'About'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
          title:'Help'
    })
})
app.get('/weather',(req,res)=>
{
  if(!req.query.search)
  {
      res.send({error:'Enter the location'})
  }
  else
  {
      geocode(req.query.search ,(error, {long,lat}={})=>{
          if(error!='undefined')
          {
              res.send({error:error});
          }
          else
          {
              forecast({long,lat},(error,{summary,temp})=>{
                  if(error)
                  {
                      res.send({error:error});
                  }
                  else
                  {
                      res.send({
                          summary:summary,
                          temperature:temp
                      })
                  }
              })
          }

      })
  }
})
app.listen(port,()=>{
    console.log('Running');
})