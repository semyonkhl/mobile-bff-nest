export interface Production {
  id: number;
  localDate: string;
  utcDate: string;
  name: string;
  venue: Venue;
  minPrice: number;
  maxPrice: number;
  listingCount?: number;
  ticketCount?: number;
  categoryId: number;
  subCategoryId: number;
  dateTbd: boolean;
  timeTbd: boolean;
  ifNecessary: boolean;
  organicUrl: string;
  webPath?: string;
  performers: Performer[];
  hidden: boolean;
}

export type CatalogAssetResponse = Pagination<Asset>;

export type CatalogProductionsResponse = Pagination<Production>;

export interface Performer {
  id: number;
  name: string;
  category: CatalogCategory;
  master?: boolean;
  parkingId?: number;
  organicUrl?: string;
}

export interface SearchSuggestionPerformer extends Performer {
  images?: Image[];
}

export interface Resource {
  id: number;
  type: string;
  images?: Image[];
}

export type PerformerResponse = Pagination<Performer>;

export interface Asset extends Resource {
  relatedResources?: Resource[];
}

export interface Image {
  dataModelName: string;
  path: string;
  size: string;
}

interface Pagination<TItem> {
  page: number;
  total: number;
  numberOfPages: number;
  items: TItem[];
}

export interface CmsMetadata {
  title: string | null;
  description: string | null;
  keywords: string | null;
}

interface CatalogCategory {
  id: number;
  name: string;
  organicUrl?: string;
  subCategories?: CatalogSubCategory[];
}

export interface CmsCategory {
  /** Category Id as string: '2' for Concerts, '3' for Sports, '4' for Theater */
  catalogId: string;
  title: string;
  shortName: string | null;
  longName: string | null;
  webPath: string;
  mobileImageUrl: string | null;
  desktopImageUrl: string | null;
  externalImageFilePath: string | null;
  article: string | null;
  meta: CmsMetadata;
}

export type CmsCategoriesResponse = CmsCategory[];

interface CatalogSubCategory {
  id: number;
  name: string;
  organicUrl: string;
}

export interface CmsSubCategory {
  /** Category Id as string: '2' for Concerts, '3' for Sports, '4' for Theater */
  parentCatalogId: string;
  /** Sub-category Id as string, e.g. '21' */
  catalogId: string;
  title: string;
  shortName: string | null;
  longName: string | null;
  webPath: string;
  mobileImageUrl: string | null;
  desktopImageUrl: string | null;
  externalImageFilePath: string | null;
  article: string | null;
  article_template_performer: string | null;
  article_template_production: string | null;
  meta: CmsMetadata;
}

export type CmsSubCategoriesResponse = CmsSubCategory[];

export interface Venue {
  id: number;
  name: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
  countryCode: string;
  regionId: number;
  timezone: string;
  organicUrl?: string;
  latitude: number;
  longitude: number;
  productionCount: number;
}

export interface Ticket {
  productionId: number;
  s: string;
  r: string;
  q: string;
  p: string;
  i: string;
  d: string;
  n: string;
  f: string;
  l: string;
  g: string;
  e: string;
  h: string;
  t: string;
  v: string;
  m: string;
  c: string;
  z: string;
  rhdn: string;
  ind: string;
  et: string;
  instantElectronicTransfer: string;
  instantFlashSeats: string;
  st: string;
  fs: string;
  msc: string;
  vs: string;
  sd: string;
  stp: string;
  bsv: string;
  aip?: string;
  mar: boolean;
  integrated: boolean;
  edd: string;
  bid: string;
  bcst: string;
  ncst: string;
  bnm: string;
  dsc: string;
  frsh: string;
  os: string;
  mrc: string;
  ls: string;
  hs: string;
  msm: string;
  prb: string;
  faceValue: string;
}

export interface ObjectWithKeyIteration {
  [property: string]: any;
}
