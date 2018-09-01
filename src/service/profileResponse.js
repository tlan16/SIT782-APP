const { API_ENDPOINT } = process.env

async function updateProfile(token, oldPassword, newPassword) {
  const response = await fetch(`${API_ENDPOINT}/api/admin/changePassword`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ oldPassword, newPassword }),
  })

  const data = await response.json()
  if (!response.ok) { throw new Error(data.message) }
  return data
}

const profileResponse = () => ({
  updateProfile,
})

export default profileResponse()
