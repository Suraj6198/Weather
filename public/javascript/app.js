console.log('SSSSSSSUUUUURRR')

const frm= document.querySelector('form');
const srch=document.querySelector('input');
const rslt1=document.querySelector('#cmnt1');
const rslt2=document.querySelector('#cmnt2');

frm.addEventListener('submit',(e)=>{
    e.preventDefault();
    rslt1.textContent='Loading...';
    rslt2.textContent='';
    fetch('http://localhost:3000/weather?search=' + srch.value).then((response)=>{
        response.json().then((data)=>{
           if(data.error)
           {
               rslt1.textContent='';
           rslt2.textContent=data.error;
           }
           else
           {
               rslt1.textContent=data.summary;
               rslt2.textContent='Temperatrure= '+data.temperature+ ' Degree Celsius';
           }
        })

})
})