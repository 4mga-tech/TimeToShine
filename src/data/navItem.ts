export interface NavItem {
  name: string;
  link: string;
  subMenu?: SubMenuItem[];
}

export interface SubMenuItem {
  subName: string;
  subLink: string;
}

export const navItems: NavItem[] = [
  { name: "Features", link: "features" },
  { name: "How to use", link: "howToUse" },
  { name: "Pricing", link: "pricing" },
  { name: "FAQs", link: "FAQs" },
];

export const navItems2: NavItem[] = [
  { name: "Нүүр", link: "/" },
  { name: "Бүтээгдэхүүн", link: "blog" },
  {
    name: "Хуудас",
    link: "",
    subMenu: [
      { subName: "Бидний тухай", subLink: "about-us" },
      { subName: "Түгээмэл асуултууд", subLink: "faq" },
      { subName: "Гэрээт IT", subLink: "pricing" },
      //   { subName: "Хэрэглэх заавар", subLink: "use-case" },
      //   { subName: "Дэлгүүр", subLink: "use-case-detail" },
    ],
  },
  { name: "Бидэнтэй холбогдох", link: "contact-us" },
];
