
import axios from 'axios';
import React,{useState,useEffect} from 'react' 


function Data(){
  const [dataVar,setDataVar] = useState({})
  useEffect(()=>{ 
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15')
  // props = response   
.then(response=>{
 setDataVar(response.data)
console.log(response.data)
})
},[])
  


return(
  <div>
    {dataVar.title}
  </div>
)
}
export default Data






// export default function data(){
//   useEffect(() => {
//     axios
//       .get('https://api.nasa.gov/planetary/apodyour&date=2012-03-14`_')
//       .then(response => {
//         console.log(response)
//       }
//       )
//     }
//     )
//     return(<div></div>)
//   }