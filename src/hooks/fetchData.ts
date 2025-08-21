export const getData = async (id: string) => {
  try {
    const res = await fetch(`https://www.gbdcbd.org/api/${id}`)
    if (!res.ok) {
      return id.includes('/') ? null : []
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.warn(`Failed to fetch data for ${id}:`, error)
    return id.includes('/') ? null : []
  }
}
export const getDataNoStore = async (id: string) => {
  try {
    const res = await fetch(`https://www.gbdcbd.org/api/${id}`, {
      cache: 'no-store',
    })
    if (!res.ok) {
      return id.includes('/') ? null : []
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.warn(`Failed to fetch data for ${id}:`, error)
    return id.includes('/') ? null : []
  }
}

export const getDataNoStoreLocal = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/${id}`, {
      cache: 'no-store',
    })
    if (!res.ok) {
      return id.includes('/') ? null : []
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.warn(`Failed to fetch data for ${id}:`, error)
    return id.includes('/') ? null : []
  }
}
