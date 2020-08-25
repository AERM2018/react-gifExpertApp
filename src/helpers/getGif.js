export const getGifs = async(categoria) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Esj8Irv3dmowXGtfawNO4YNo2Gvivmfz&q=${encodeURI(categoria)}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img  =>{
        return {
            id : img.id,
            title : img.title,
            url : img.images.downsized_medium.url
        }
    });
    // console.log(gifs);
   return gifs
}