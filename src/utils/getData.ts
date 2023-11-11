export const getData = async (id: string) => {
  const res = await fetch(`https://gbdc.vercel.app/api/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
export const getDataNoStore = async (id: string) => {
  const res = await fetch(`https://gbdc.vercel.app/api/${id}`, {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
