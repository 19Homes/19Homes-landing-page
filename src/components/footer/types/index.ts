export type FooterBlockBase = {
  blockTitle: string;
  items: string[];
};

type FooterCategoryItem = {
  name: string;
  path: string;
};

type FooterContactItem = {
  name: string;
  icon: string;
};

export type FooterCategoriesTypes = FooterBlockBase & {
  items: FooterCategoryItem[];
};

export type FooterServicesTypes = FooterBlockBase;

export type FooterContactTypes = FooterBlockBase & {
  items: FooterContactItem[];
};
