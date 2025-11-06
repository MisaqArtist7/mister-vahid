import { API_ENDPOINTS } from "../config/api"
export default async function getPosts(){
  let result = []
    try {
        const response = await fetch(API_ENDPOINTS.POSTS, {
            next: { revalidate: 60 }
            // cache: 'no-store'
            // cache: 'force-cache' 
        })
        if (!response.ok) throw new Error('Network response was not ok')
            result = await response.json()
            return result
    } catch (error) {
        console.log(error)
    }
}