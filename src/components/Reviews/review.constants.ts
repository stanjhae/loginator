import { ReviewItem } from './review.types';

const REVIEWS: ReviewItem[] = [
  {
    name: 'Jane Doe',
    avatar: '/images/avatars/jane.png',
    role: 'CEO at Company',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Julie Smith',
    avatar: '/images/avatars/julie.png',
    role: 'Manager at Company',
    comment:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  {
    name: 'John Snow',
    avatar: '/images/avatars/john.png',
    role: 'CEO at Company',
    comment:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export { REVIEWS };
