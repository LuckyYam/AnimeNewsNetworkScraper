import { load } from 'cheerio'
import { INewsResponse } from '../Types'

export const parse = (data: string): INewsResponse => {
    const $ = load(data)
    const title = $('#page_header').text().replace('News', '').trim()
    const intro = $('#content-zone > div > div.text-zone.easyread-width > div > div.intro').text().trim()
    const description = $('#content-zone > div > div.text-zone.easyread-width > div > div.meat')
        .text()
        .trim()
        .split('\n\n\n\n')
        .join('\n\n')
    const images: string[] = []
    $('img').each((i, element) => {
        const id = $(element).attr('data-src')
        if (id && id.includes('thumbnails')) images.push(`https://cdn.animenewsnetwork.com${id}`)
    })
    const trailer = $(
        '#content-zone > div > div.text-zone.easyread-width > div > div.meat > p:nth-child(2) > span > span > iframe'
    ).attr('src')
    return {
        title,
        intro,
        description,
        images,
        trailer
    }
}
