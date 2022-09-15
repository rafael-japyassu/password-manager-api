export type Pagination<T> = {
  data: T[];
  page: number;
  totalElements: number;
  elementsInPage: number;
  elementsPerPage: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
};
