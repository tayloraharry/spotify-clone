export interface Track {
  album:         Album;
  artists:       Artist[];
  disc_number:   number;
  duration_ms:   number;
  explicit:      boolean;
  external_ids:  ExternalIDS;
  external_urls: ExternalUrls;
  href:          string;
  id:            string;
  is_local:      boolean;
  is_playable:   boolean;
  name:          string;
  popularity:    number;
  preview_url:   string;
  track_number:  number;
  type:          TrackType;
  uri:           string;
}

export interface Album {
  album_type:             AlbumTypeEnum;
  artists:                Artist[];
  external_urls:          ExternalUrls;
  href:                   string;
  id:                     string;
  images:                 Image[];
  name:                   string;
  release_date:           Date;
  release_date_precision: ReleaseDatePrecision;
  total_tracks:           number;
  type:                   AlbumTypeEnum;
  uri:                    string;
}

export enum AlbumTypeEnum {
  Album = "album",
  Single = "single",
}

export interface Artist {
  external_urls: ExternalUrls;
  href:          string;
  id:            ID;
  name:          Name;
  type:          ArtistType;
  uri:           URI;
}

export interface ExternalUrls {
  spotify: string;
}

export enum ID {
  The3FuxStOqQv8TiytHeuGiE8 = "3fuxStOqQv8TiytHeuGiE8",
  The3Uobr6LgQpBbk6K4QGAb3V = "3Uobr6LgQpBbk6k4QGAb3V",
  The45ENHdiiabvmbp4Erw26Rg = "45eNHdiiabvmbp4erw26rg",
  The5FKchcZpQOkqFvXBj1ACvb = "5FKchcZpQOkqFvXBj1aCvb",
  The5Vu87J6VCvfwc7FNVGnBwk = "5Vu87j6vCvfwc7FNVGnBwk",
}

export enum Name {
  DelaneyJane = "Delaney Jane",
  Excision = "Excision",
  IPrevail = "I Prevail",
  Illenium = "ILLENIUM",
  JustinStone = "Justin Stone",
}

export enum ArtistType {
  Artist = "artist",
}

export enum URI {
  SpotifyArtist3FuxStOqQv8TiytHeuGiE8 = "spotify:artist:3fuxStOqQv8TiytHeuGiE8",
  SpotifyArtist3Uobr6LgQpBbk6K4QGAb3V = "spotify:artist:3Uobr6LgQpBbk6k4QGAb3V",
  SpotifyArtist45ENHdiiabvmbp4Erw26Rg = "spotify:artist:45eNHdiiabvmbp4erw26rg",
  SpotifyArtist5FKchcZpQOkqFvXBj1ACvb = "spotify:artist:5FKchcZpQOkqFvXBj1aCvb",
  SpotifyArtist5Vu87J6VCvfwc7FNVGnBwk = "spotify:artist:5Vu87j6vCvfwc7FNVGnBwk",
}

export interface Image {
  height: number;
  url:    string;
  width:  number;
}

export enum ReleaseDatePrecision {
  Day = "day",
}

export interface ExternalIDS {
  isrc: string;
}

export enum TrackType {
  Track = "track",
}
