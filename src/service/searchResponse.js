const APIENDPOINT = ''

const searchResponse = () => {
  
 async function getSearchResponse() {
     const response = await fetch(APIENDPOINT, {
       method: 'GET',
       headers: {
         Accept: 'application/json'
       }
     });
     if(!response.ok){
       throw new Error(`searchResponse getSearchResponse failed, HTTP status ${response.status}`)
     }
     const data = await response.json();
     return data   
  }
   return {
     getSearchResponse
   }
}

export default searchResponse()