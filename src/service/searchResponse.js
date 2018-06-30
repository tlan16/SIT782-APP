import fakeResponse from './defaultResponse';
const APIENDPOINT = ''
const searchResponse = () => {
  
 async function getSearchResponse() {
     if(process.env.NODE_ENV === 'development'){
       return fakeResponse
     }
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