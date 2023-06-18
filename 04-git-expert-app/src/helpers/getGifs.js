export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Wc3exLPBWmrClZVRt2XW9VAEhIzxaYiR&q=${ category }&limit=3`
    const resp = await fetch( url )
    const { data } = await resp.json();

    // console.log(data)

    const gifs = data.map(img => ({
        id:img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));


    //se regresa un arreglo de gifs
    return gifs;
}