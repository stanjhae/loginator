import { ReactElement } from 'react';
import { PaginationAlignment } from '../Pagination/pagination.types';

export type ImageSectionTypes = {
  title?: string;
  description?: ReactElement;
  images?: { uri?: string; title?: string; category?: string }[];
  pagination?: boolean;
  headerTitle?: string;
  paginationAlignment?: PaginationAlignment;
};
