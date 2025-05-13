1) npm create vite@latest
2) project name:App
3) React
4) javascript
5) npm install react-router-dom
6) npm install moment
7) npm run dev

8) To use Router :: for mounting pages
```
in main.jsx
<BrowserRouter><App /></BrowserRouter>

in App.jsx
<Routes>
        <Route path='/' element={<Home/>}/>
</Routes>
```

9)Moment.:: from how many hours ago

```
import moment from 'moment'; //impport statement
moment(..code).fromNow() //syntax for Moment
```

10) To create Api key:
```
Google new tab-> youtube data api key-> google developers console -> create project as youtube clone-> click on create button.

enable api & services->youtube data api version 3 -> click on enable button

create credential ->youtube data api version 3 ->select  public -> next

now we get API key click on done button & we can copy and paste in code.
```

11)to acess data:
```
go to youtube data api->reference ->
eg::list->linked list-> execute ->select account->
response in array multiple object ..
```

12) function to fetch data:: using Async & Await
```
//data take from API put to page
const [data,setData]=useState([]);  to store data in variable
const fetchdata= async ()=>{

        const videoList_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`//category ,APIKEY are props i.e they r in  {}


        await fetch(videoList_url).then(response=>response.json())
        .then(data=>setData(data.items))// to take data from variable and send to page where to display
    }
 
 // page Structure
    {data.map((item,index)=>{
                  return(
                      <Link/>//html structure code
                  )
              }
    )}
```

13) 