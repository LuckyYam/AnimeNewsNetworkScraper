import axios from 'axios'
import { parse } from './NewsParser'
import { INewsResponse } from '../Types'

export const getNewsContents = async (url: string): Promise<INewsResponse> => {
    if (!url) throw new TypeError("The 'url' parameter shouldn't be undefined")
    if (!url.includes('animenewsnetwork.com/news/')) throw new TypeError('Invalid News URL for Anime News Network')
    return await axios
        .get<string>(url)
        .then(({ data }) => parse(data))
        .catch((err) => {
            throw new Error(err.message)
        })
}
