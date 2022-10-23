export type ReviewItem = {
  name?: string;
  avatar?: string;
  role?: string;
  comment?: string;
};

export type ReviewType = {
  reviews?: ReviewItem[];
};
