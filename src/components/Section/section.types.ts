import { ReactElement } from 'react';

export type SectionTypes = {
  title?: string;
  description?: ReactElement;
  imageUris?: string[];
  pagination?: boolean;
  headerTitle?: string;
};
