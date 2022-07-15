export interface IParsedXML {
    '?xml': string
    rss: IRss
}

interface IRss {
    channel: {
        title: string
        link: string
        description: string
        language: 'en-US'
        copyright: string
        lastBuildDate: string
        item: IItem[]
    }
}

interface IItem {
    title: string
    link: string
    guid: string
    description: string
    pubDate: string
    category: TCategory | TCategory[]
}

export type TCategory = 'Anime' | 'Manga' | 'Games' | 'Industry' | 'Novels'
