export interface ISpotifySearchResult {
  body: {
    tracks: ISpotifySearchResultTracks
  }
}

export interface ISpotifySearchResultTracks {
  href:     string;
  items:    ISpotifyTrack[];
  limit:    number;
  next:     string;
  offset:   number;
  previous: null;
  total:    number;
}

export interface ISpotifyTrack {
  album:             IAlbum;
  artists:           IArtist[];
  available_markets: string[];
  disc_number:       number;
  duration_ms:       number;
  explicit:          boolean;
  external_ids:      IExternalIDS;
  external_urls:     IExternalUrls;
  href:              string;
  id:                string;
  is_local:          boolean;
  name:              string;
  popularity:        number;
  preview_url:       null;
  track_number:      number;
  type:              ItemType;
  uri:               string;
}

export interface IAlbum {
  album_type:             AlbumTypeEnum;
  artists:                IArtist[];
  available_markets:      string[];
  external_urls:          IExternalUrls;
  href:                   string;
  id:                     string;
  images:                 IImage[];
  name:                   string;
  release_date:           Date;
  release_date_precision: ReleaseDatePrecision;
  total_tracks:           number;
  type:                   AlbumTypeEnum;
  uri:                    string;
}

export enum AlbumTypeEnum {

}

export interface IArtist {
  external_urls: IExternalUrls;
  href:          string;
  id:            ID;
  name:          string;
  type:          ArtistType;
  uri:           URI;
}

export interface IExternalUrls {
  spotify: string;
}

export enum ID {

}

export enum Name {

}

export enum ArtistType {

}

export enum URI {

}

export interface IImage {
  height: number;
  url:    string;
  width:  number;
}

export enum ReleaseDatePrecision {
}

export interface IExternalIDS {
  isrc: string;
}

export enum ItemType {

}
