export type PaginationType = {
  page: number;
  perPage: number;
  prevPage: string | null;
  order: string;
  sort: string;
  nextPage: string | null;
};
