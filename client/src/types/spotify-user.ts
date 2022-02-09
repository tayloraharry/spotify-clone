export interface ISpotifyUserResult {
  body:  ISpotifyUser;
}


export interface ISpotifyUser {
  country:          string;
  display_name:     string;
  email:            string;
  explicit_content: IExplicitContent;
  external_urls:    IExternalUrls;
  followers:        IFollowers;
  href:             string;
  id:               string;
  images:           IImage[];
  product:          string;
  type:             string;
  uri:              string;
}

export interface IExplicitContent {
  filter_enabled: boolean;
  filter_locked:  boolean;
}

export interface IExternalUrls {
  spotify: string;
}

export interface IFollowers {
  href:  null;
  total: number;
}

export interface IImage {
  height: null;
  url:    string;
  width:  null;
}
