import { TCategory } from '.'

export interface IFeed {
    /** Title of the news feed */
    title: string
    /** URL of the news feed */
    link: string
    /** URL of the news feed, but in short */
    guid: string
    /** Short description about the news feed */
    description: string
    /** The published date of the news feed */
    pubDate: string
    /** Categories of the news feed */
    categories: TCategory[]
}
