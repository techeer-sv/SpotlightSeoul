import { atom } from 'recoil';

export type PostCardData = {
  id: number;
  org_name: string;
  main_img: string;
  strt_date: string;
  end_date: string;
  title: string;
  category: string;
};

export const searchResultsState = atom<PostCardData[]>({
  key: 'searchResultsState',
  default: [],
});
