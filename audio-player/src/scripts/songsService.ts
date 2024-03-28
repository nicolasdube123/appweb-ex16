import axios from 'axios'

const SONGS_PATH = '/songs'
const AUTHORS_PATH = '/artists'

export interface Song {
  id: Number;
  fileName: String;
  songName: String;
  desc: String;
  infosUrl: String;
  artistId: Number;
}
export const DEFAULT_SONG: Song = {
  id: 0,
  fileName: "fileName",
  songName: "songName",
  desc: "descripion",
  infosUrl: "infoUrl",
  artistId: 0
}
export class SongService {
  API_URL: String

  constructor () {
    this.API_URL = 'http://localhost:3000'
  }

  async getSongs(): Promise<Array<Song>> {
    const { data } = await axios.get(this.API_URL + SONGS_PATH)
    return data
  }

  async getSong (songId: Number):Promise<Song> {
    const { data } = await axios.get(this.API_URL + SONGS_PATH + '/' + songId)
    return data
  }
}

export interface Author {
  id: Number,
  name: String,
  desc: String
}
export const DEFAULT_AUTHOR: Author = {
  id: 0,
  name: "name",
  desc: "description"
}
export class AuthorsService {
  API_URL: String

  constructor () {
    this.API_URL = 'http://localhost:3000'
  }

  async getAuthors(): Promise<Array<Author>> {
    const { data } = await axios.get(this.API_URL + AUTHORS_PATH)
    return data
  }

  async getAuthor (authorsId: Number) {
    const { data } = await axios.get(this.API_URL + AUTHORS_PATH + '/' + authorsId)
    return data
  }
}