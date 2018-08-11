import fakeResponse from './defaultResponse'

const APIENDPOINT = process.env.APIENDPOINT

const searchResponse = () => {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  async function getSearchResponse() {
    const response = await fetch(APIENDPOINT, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    if (!response.ok) {
      throw new Error(
        `searchResponse getSearchResponse failed, HTTP status ${
          response.status
        }`,
      )
    }
    const data = await response.json()
    return data
  }

  async function addToSavedService(id) {
    if (process.env.NODE_ENV === 'development') {
      return id
    }
    const sendData = {
      id,
      type: 'addToSaved',
    }
    const response = await fetch(APIENDPOINT, {
      body: JSON.stringify(sendData),
      credentials: 'same-origin',
      method: 'POST',
    })
    if (!response.ok) {
      throw new Error(
        `addToSavedResponse addToSavedService failed, HTTP status ${
          response.status
        }`,
      )
    }
    const responseData = await response.json()
    const addId = responseData.addId
    return addId
  }

  async function removeFromSavedService(id) {
    if (process.env.NODE_ENV === 'development') {
      return id
    }
    const sendData = {
      id,
      type: 'removeFromSaved',
    }
    const response = await fetch(APIENDPOINT, {
      body: JSON.stringify(sendData),
      credentials: 'same-origin',
      method: 'POST',
    })
    if (!response.ok) {
      throw new Error(
        `removeFromSavedResponse removeFromSavedService failed, HTTP status ${
          response.status
        }`,
      )
    }
    const responseData = await response.json()
    const removeId = responseData.removeId
    return removeId
  }

  return {
    getSearchResponse,
    addToSavedService,
    removeFromSavedService,
  }
}

export default searchResponse()
