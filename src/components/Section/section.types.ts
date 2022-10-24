import { ReactElement } from 'react';
import { PaginationAlignment } from '../Pagination/pagination.types';

export type SectionTypes = {
  title?: string;
  description?: ReactElement;
  imageUris?: string[];
  pagination?: boolean;
  headerTitle?: string;
  paginationAlignment?: PaginationAlignment;
};
