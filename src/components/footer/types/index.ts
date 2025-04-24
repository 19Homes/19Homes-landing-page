export type FooterBlockBase = {
  blockTitle: string;
  items: string[];
};

type FooterCategoryItem = {
  name: string;
  path: string;
};

type FooterContactItem = {
  detail: string;
  icon: string;
};

export type FooterCategoriesTypes = {
  blockTitle: string;
  items: FooterCategoryItem[];
};

export type FooterServicesTypes = FooterBlockBase;

export type FooterContactTypes = {
  blockTitle: string;
  items: FooterContactItem[];
};
