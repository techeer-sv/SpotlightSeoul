import { atom } from 'recoil';

export type PostCardData = {
  id: number;
  org_name: string;
  main_img: string;
  strt_date: string;
  end_date: string;
  title: string;
  major_code_name: string;
  date: string;
};

export const searchResultsState = atom<PostCardData[]>({
  key: 'searchResultsState',
  default: [],
});

const nicknameState = atom<string>({
  key: 'nicknameState',
  default: '',
});

const idState = atom<string>({
  key: 'idState',
  default: '',
});

const passwordState = atom<string>({
  key: 'passwordState',
  default: '',
});

export { nicknameState, idState, passwordState };
