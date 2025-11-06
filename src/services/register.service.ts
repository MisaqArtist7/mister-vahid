'use server'

export async function registerAction(data: { username: string; password: string }) {
  try {
    const res = await fetch('https://api.example.com/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!res.ok) throw new Error('Something went wrong')
    return res.json()
  } catch (error) {
    console.error(error)
  }
}
