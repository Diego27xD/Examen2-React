
export const get = async (url) => {
    try {
        const result = await fetch(url)
        return result.json()
    } catch (error) {
        console.log(error)
    }
    
}