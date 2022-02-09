export interface ISpotifyUserPlaylists {
  href:     string;
  items:    ISpotifyUserPlaylist[];
  limit:    number;
  next:     null;
  offset:   number;
  previous: null;
  total:    number;
}

export interface ISpotifyUserPlaylist {
  collaborative: boolean;
  description:   string;
  external_urls: IExternalUrls;
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

export interface IImage {
  height: number | null;
  url:    string;
  width:  number | null;
}

export interface IOwner {
  display_name:  string;
  external_urls: IExternalUrls;
  href:          string;
  id:            string;
  type:          string;
  uri:           string;
}

export interface ITracks {
  href:  string;
  total: number;
}
