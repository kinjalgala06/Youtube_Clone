import React,{ useState,useEffect } from 'react'

const Practice = () => {

  const [country,setCountry]=useState([]);

  const fetchCountry=async()=>{
    try{
      // const res=await fetch("https://api.frankfurter.app/currencies")
      // const res=await fetch('https://restcountries.com/v3.1/all')
      const res = await fetch('https://restcountries.com/v3.1/all?fields=name,cca2');

      const data=await res.json();

            // setCountry(Object.keys(data))
            setCountry(data)
        }catch(error){
            console.log("Error Fetching",error);
            
            console.log("Sample country:", country[0]);
        }
    }

    useEffect(()=>{
        fetchCountry();
    },[])

    console.log(country);


  return(
    <>
    <h1>Contries namesss....</h1>
        <select name="" id="">
          <option value="">plz Select</option>{
            country.map((country)=>(
              // <option className="bg-gray-200" value={country} key={country} >{country} </option>
            <option
            className="bg-gray-200"
            value={country.cca2}
            key={country.cca2}
          >
            {country.name.common}
          </option>
            ))
          }
        </select>
    </>
  )
 
}

export default Practice

