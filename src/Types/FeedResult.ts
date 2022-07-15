import { TCategory } from '.'

export interface IFeed {
    title: string
    link: string
    guid: string
    description: string
    pubDate: string
    categories: TCategory[]
}
