export interface INewsResponse {
    /** Title of the news */
    title: string
    /** Intro of the news */
    intro: string
    /** Detailed description about the news */
    description: string
    /** Images of the news */
    images: string[]
    /** The YouTube URL of the trailer in the news (can be undefined) */
    trailer?: string
}
