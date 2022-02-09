export interface ISpotifyPlaylistResult {
  body:  ISpotifyPlaylist;
}


export interface ISpotifyPlaylist {
  collaborative: boolean;
  description:   string;
  external_urls: IExternalUrls;
  followers:     IFollowers;
  href:          string;
  id:            string;
  images:        IImage[];
  name:          string;
  owner:         IOwner;
  primary_color: null;
  public:        boolean;
  snapshot_id:   string;
  tracks:        ITracks;
  type:          string;
  uri:           string;
}

export interface IExternalUrls {
  spotify: string;
}

export interface IFollowers {
  href:  null;
  total: number;
}

export interface IImage {
  height: number;
  url:    string;
  width:  number;
}

export interface IOwner {
  display_name?: string;
  external_urls: IExternalUrls;
  href:          string;
  id:            string;
  type:          string;
  uri:           string;
  name?:         string;
}

export interface ITracks {
  href:     string;
  items:    IItem[];
  limit:    number;
  next:     null;
  offset:   number;
  previous: null;
  total:    number;
}

export interface IItem {
  added_at:        Date;
  added_by:        IOwner;
  is_local:        boolean;
  primary_color:   null;
  track:           ITrack;
  video_thumbnail: IVideoThumbnail;
}

export interface ITrack {
  album:             IAlbum;
  artists:           IOwner[];
  available_markets: string[];
  disc_number:       number;
  duration_ms:       number;
  episode:           boolean;
  explicit:          boolean;
  external_ids:      IExternalIDS;
  external_urls:     IExternalUrls;
  href:              string;
  id:                string;
  is_local:          boolean;
  name:              string;
  popularity:        number;
  preview_url:       string;
  track:             boolean;
  track_number:      number;
  type:              string;
  uri:               string;
}

export interface IAlbum {
  album_type:             string;
  artists:                IOwner[];
  available_markets:      string[];
  external_urls:          IExternalUrls;
  href:                   string;
  id:                     string;
  images:                 IImage[];
  name:                   string;
  release_date:           Date;
  release_date_precision: string;
  total_tracks:           number;
  type:                   string;
  uri:                    string;
}

export interface IExternalIDS {
  isrc: string;
}

export interface IVideoThumbnail {
  url: null;
}
