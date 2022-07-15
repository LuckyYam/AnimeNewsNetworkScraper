# AnimeNewsNetworkScraper

[![NPM](https://img.shields.io/badge/Available%20On-NPM-lightgrey.svg?logo=npm&logoColor=339933&labelColor=white&style=flat-square)](https://www.npmjs.com/package/@shineiichijo/anime-news-network-scraper)

Get news feed and news from [Anime News Network](https://www.animenewsnetwork.com/)

---

## Installation
```
yarn add @shineiichijo/anime-news-network-scraper
```

## Usage
## Get News feeds
```ts
import { client } from '@shineiichijo/anime-news-network-scraper'
;(async () => {
    const data = await client.getNewsFeeds()
    console.log(data)
})()
```
### Output
```JSON
[
    {
        "title": "4-Nin wa Sorezore Uso o Tsuku Comedy Anime's Teaser Reveals Cast, Staff, October Debut",
        "categories": [
            "Anime"
        ],
        "link": "https://www.animenewsnetwork.com/news/2022-07-14/4-nin-wa-sorezore-uso-o-tsuku-comedy-anime-teaser-reveals-cast-staff-october-debut/.187674",
        "guid": "https://www.animenewsnetwork.com/cms/.187674",
        "description": "Chiemi Tanaka, Natsumi Murakami, Ayane Sakura, Megumi Han star as schoolgirls with double life",
        "pubDate": "Thu, 14 Jul 2022 23:59:16 -0400"
    }
]
```

## Get News contents from the URL

```ts
import { client } from '@shineiichijo/anime-news-network-scraper'
;(async () => {
    const feeds = await client.getNewsFeeds()
    const url = feeds[0].link //provide any valid news URL from Anime News Network to scrap
    const data = await client.getNewsContents(url)
    console.log(data)
})()
```

### Output
```JSON
{
    "title": "Aikatsu! ~Mirai e no Starway~ Anime Film Spawns Another New Film in Early 2023",
    "intro": "1st film opened alongside Gekijō-ban Aikatsu Planet! film on Friday",
    "description": "The official website for the Aikatsu! idol franchise announced on Friday that Aikatsu! 10th Story ~Mirai e no Starway~, the franchise's 10th anniversary film that accompanied the opening....",
    "images": [
        "https://cdn.animenewsnetwork.com/thumbnails/max400x400/cms/news.5/184604/202204132125126693.jpg"
    ]
}
```