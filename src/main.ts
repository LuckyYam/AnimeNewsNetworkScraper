import { getNewsFeeds, getNewsContents } from './Helpers'

/**
 * Client for the scraper
 */
export const client = {
    /**
     * Gets news feed from Anime News Network
     * @returns {IFeed[]} Array of news feed
     */
    getNewsContents,
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
    getNewsFeeds
}
