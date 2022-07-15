import axios from 'axios'
import { parse } from './NewsParser'
import { INewsResponse } from '../Types'

/**
 * Gets the contents of a news page from a URL of Anime News Network
 * @param {string} url The URL of the news from Anime News Network
 * @returns {INewsResponse} Contents of the news
 */
export const getNewsContents = async (url: string): Promise<INewsResponse> =>
    await axios
        .get<string>(url)
        .then(({ data }) => parse(data))
        .catch((err) => {
            throw new Error(err.message)
        })
