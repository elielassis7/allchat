export type User = {
  id?: number;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer" | string;
};

export type AuthResponse = {
  token: string;
  user: User;
};

export type Stats = {
  users: number;
  posts: number;
  visits: number;
  conversions: number;
};

export type SiteSettings = {
  siteName: string;
  tagline: string;
  theme: "light" | "dark";
};

export type ContentItem = {
  id: number;
  title: string;
};

export type UserRecord = {
  id: number;
  name: string;
  email: string;
};
