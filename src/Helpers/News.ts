import axios from 'axios'
import { parse } from './NewsParser'
import { INewsResponse } from '../Types'

/**
 * Gets the contents of a news page from a URL of Anime News Network
 * @param {string} url The URL of the news from Anime News Network
 * @returns {INewsResponse} Contents of the news
 * @example
 * import { client } from '@shineiichijo/anime-news-network-scraper'
 * (async () => {
 *    const feeds = await client.getNewsFeeds()
 *    const url = feeds[0].link //provide any valid news URL from Anime News Network
 *    await client.getNewsContents(url)
 * })()
 */
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
