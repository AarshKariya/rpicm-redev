export interface FooterItem {
  id: number;
  footerItemTitle?: string;
  footerItemRedirectURL: string;
  isFooterItemLogo?: boolean;
  footerItemLogoPath?: string | undefined;
}

export interface FooterConfig {
  footerTitle?: string | null;
  footerItems: FooterItem[];
}

export const config: FooterConfig[] = [
  {
    footerTitle: "",
    footerItems: [
      {
        id: 2,
        footerItemTitle: "",
        footerItemRedirectURL: "some url",
        isFooterItemLogo: true,
        footerItemLogoPath: "/rpicmlogo.svg",
      },
    ],
  },
  {
    footerTitle: "",
    footerItems: [
      {
        id: 1,
        footerItemTitle: "About",
        footerItemRedirectURL: "/about",
        isFooterItemLogo: false,
      },
      {
        id: 1,
        footerItemTitle: "Blog",
        footerItemRedirectURL: "/blogs",
        isFooterItemLogo: false,
      },
      {
        id: 1,
        footerItemTitle: "Gallery",
        footerItemRedirectURL: "/gallery",
        isFooterItemLogo: false,
      },
    ],
  },
  {
    footerTitle: "Courses",
    footerItems: [
      {
        id: 1,
        footerItemTitle: "Communication",
        footerItemRedirectURL: "some URL",
        isFooterItemLogo: false,
      },
      {
        id: 2,
        footerItemTitle: "Management",
        footerItemRedirectURL: "some URL",
        isFooterItemLogo: false,
      },
      {
        id: 2,
        footerItemTitle: "Cultural Heritage of India",
        footerItemRedirectURL: "some URL",
        isFooterItemLogo: false,
      },
      {
        id: 2,
        footerItemTitle: "1 year courses",
        footerItemRedirectURL: "some URL",
        isFooterItemLogo: false,
      },
      {
        id: 2,
        footerItemTitle: "4 month courses",
        footerItemRedirectURL: "some URL",
        isFooterItemLogo: false,
      },
    ],
  },
  {
    footerTitle: "Centers",
    footerItems: [
      {
        id: 1,
        footerItemTitle: "Ahmedabad",
        footerItemRedirectURL: "some URL",
        isFooterItemLogo: false,
      },
      {
        id: 2,
        footerItemTitle: "Kerela",
        footerItemRedirectURL: "some URL",
        isFooterItemLogo: false,
      },
      {
        id: 3,
        footerItemTitle: "Karnataka",
        footerItemRedirectURL: "some URL",
        isFooterItemLogo: false,
      },
      {
        id: 4,
        footerItemTitle: "West Bengal",
        footerItemRedirectURL: "some URL",
        isFooterItemLogo: false,
      },
      {
        id: 5,
        footerItemTitle: "Haryana",
        footerItemRedirectURL: "some URL",
        isFooterItemLogo: false,
      },
      {
        id: 6,
        footerItemTitle: "Andhra Pradesh",
        footerItemRedirectURL: "some URL",
        isFooterItemLogo: false,
      },
    ],
  },
  {
    footerTitle: "",
    footerItems: [
      {
        id: 1,
        footerItemTitle: "Himachal Pradesh",
        footerItemRedirectURL: "some URL",
        isFooterItemLogo: false,
      },
      {
        id: 2,
        footerItemTitle: "Chandigarh",
        footerItemRedirectURL: "some URL",
        isFooterItemLogo: false,
      },
      {
        id: 3,
        footerItemTitle: "Gujarat",
        footerItemRedirectURL: "some URL",
        isFooterItemLogo: false,
      },
      {
        id: 4,
        footerItemTitle: "Maharastra",
        footerItemRedirectURL: "some URL",
        isFooterItemLogo: false,
      },
      {
        id: 5,
        footerItemTitle: "New Delhi",
        footerItemRedirectURL: "some URL",
        isFooterItemLogo: false,
      },
      {
        id: 6,
        footerItemTitle: "Rajasthan",
        footerItemRedirectURL: "some URL",
        isFooterItemLogo: false,
      },
    ],
  },
  {
    footerTitle: "",
    footerItems: [
      {
        id: 1,
        footerItemTitle: "Uttar Pradesh",
        footerItemRedirectURL: "some URL",
        isFooterItemLogo: false,
      },
      {
        id: 2,
        footerItemTitle: "Madhya Pradesh",
        footerItemRedirectURL: "some URL",
        isFooterItemLogo: false,
      },
    ],
  },
];
