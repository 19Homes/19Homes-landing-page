export type FooterBlockBase = {
  blockTitle: string;
  items: string[];
};

export type FooterCategoriesTypes = FooterBlockBase & {
  path: string;
};

export type FooterServicesTypes = FooterBlockBase;

export type FooterContactTypes = FooterBlockBase & {
  icon: string;
};
