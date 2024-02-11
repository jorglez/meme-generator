import axios from "axios"
import trending from "../dummy/trending.json"
import memes from "../dummy/list.json"
export interface TrendingMeme {
  created_utc: number;
  title: string;
  url: string;
  subreddit: string;
}
export interface Meme {
  name: string;
  image: string;
}
const key = import.meta.env.VITE_RAPIDAPI_KEY;
const host = import.meta.env.VITE_RAPIDAPI_HOST;
const useApi = () => {
  const getTrending = async () => {
    return new Promise<TrendingMeme[]>((res, rej) => {
      setTimeout(() => {
        res(trending)
      }, 2000);
    })

  }

  const getMemes = () => {
    return new Promise<Meme[]>((res, rej) => {
      setTimeout(() => {
        const result = memes.map(meme => {
          return {
            name: meme,
            image: `/img/${meme}.jpeg`
          }
        })
        res(result)
      }, 500);
    })
  }

  const createMeme = async (top: string, bottom: string, meme: string): Promise<any> => {
    const result = await axios.get('https://ronreiter-meme-generator.p.rapidapi.com/meme', {
      params: {
        top,
        bottom,
        meme,
        font_size: '50',
        font: 'Impact'
      },
      headers: {
        'X-RapidAPI-Key': key,
        'X-RapidAPI-Host': host
      },
      responseType: "blob"
    })

    console.log("after call: ", result)
    return URL.createObjectURL(result.data)
    return
  }

  return { getTrending, getMemes, createMeme }
}

export default useApi;