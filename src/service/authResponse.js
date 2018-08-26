const { API_ENDPOINT } = process.env

async function login(emailId, password) {
  const response = await fetch(`${API_ENDPOINT}/api/admin/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ emailId, password }),
  })

  const data = await response.json()
  if (!response.ok) { throw new Error(data.message) }
  return data
}

// eslint-disable-next-line camelcase
async function signUp(first_name, last_name, emailId, password) {
  const response = await fetch(`${API_ENDPOINT}/api/admin/register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name, last_name, emailId, password,
    }),
  })

  const data = await response.json()
  if (!response.ok) { throw new Error(data.message) }
  return data
}

const authResponse = () => ({
  login,
  signUp,
})

export default authResponse()
