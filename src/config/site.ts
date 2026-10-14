export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Pokemon Uranium Wiki",
  shortName: "Pokemon Uranium",
  logoText: "PU",
  tagline: "Pokedex, Tandor Maps, Nuclear-type Guides & Walkthroughs",
  description: "Your ultimate Pokemon Uranium guide - explore the Tandor region, discover 150+ original Pokemon, master Nuclear-type battles, and follow Pokedex, evolution, gym and post-game walkthroughs.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://pokemon-uranium.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://pokemon-uranium.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://pokemonuranium.co/",
  heroVideoId: "NUSwpUtPn74", // Pokemon Uranium gameplay walkthrough
  social: {
    discord: "https://discord.gg/uranium",
    youtube: "https://www.youtube.com/results?search_query=Pokemon+Uranium",
    twitter: "https://twitter.com/pokeuranium",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
