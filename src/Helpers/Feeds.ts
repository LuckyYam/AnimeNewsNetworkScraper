import { XMLParser } from 'fast-xml-parser'
import axios from 'axios'
import { IParsedXML, TCategory, IFeed } from '../types'

const fixCategory = (category: TCategory | TCategory[]): TCategory[] => {
    if (typeof category === 'string') return [category]
    return category
}

export const getNewsFeeds = async (): Promise<IFeed[]> =>
    await axios
        .get<string>('https://www.animenewsnetwork.com/news/rss.xml?ann-edition=us')
        .then(({ data }) => {
            const json = new XMLParser().parse(data) as IParsedXML
            const { item } = json.rss.channel
            const result: IFeed[] = []
            item.forEach((x) => {
                const categories = fixCategory(x.category)
                result.push({
                    title: x.title,
                    categories,
                    link: x.link,
                    guid: x.guid,
                    description: x.description,
                    pubDate: x.pubDate
                })
            })
            return result
        })
        .catch((err) => {
            throw new Error(err.message)
        })
