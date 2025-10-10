// Sample code of Fetch API

// function FetchData(){
//     fetch("www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
//     .then(res=>res.json())
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err,"Error Data Not fetched"))
    
// }

// FetchData()




// Fetching Pikachu data 
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(res=>res.json())
.then(data=>console.log(data.name))
.catch(err=>console.log(err,"Error Founded Check Url Again"))


// Fetch data using asycn/await and try catch {}

const FetchData = async()=>{
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
       
        if(!response.ok){
            throw new Error(console.log("Could not fetch data")) // if condition satisfys then new error prints 
            
        }
         const data = await response.json() // always convert json after the condtion if you convert json before the condtion if any error comes then new error cant shows, shows only catch error 
        console.log(data.name)

    }
    catch (error){
        console.error(error,"Check url again")
    }
}

FetchData()