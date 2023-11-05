// import { useSWR } from 'swr';

// export function useUser(id) {
//   const fetcher = (...args) => fetch(...args).then((res) => res.json());
//   const { data, error, isLoading } = useSWR(`/api/${id}`, fetcher, {
//     revalidateOnMount: false,
//   });

//   return {
//     data: data,
//     isLoading,
//     isError: error,
//   };
// }
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
