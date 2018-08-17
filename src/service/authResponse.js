const { API_ENDPOINT } = process.env

const authResponse = () => {
  async function login(emailId, password) {
    const response = await fetch(`${API_ENDPOINT}/api/admin/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emailId, password }),
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

  return {
    login,
  }
}

export default authResponse()
