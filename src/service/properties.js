const APIENDPOINT = ''

const properties = () => {
  
 async function getProperties() {
     const response = await fetch(APIENDPOINT, {
       method: 'GET',
       headers: {
         Accept: 'application/json'
       }
     });
     const data = await response.json();
     return data   
  }
   return {
     getProperties
   }
}

export default properties()