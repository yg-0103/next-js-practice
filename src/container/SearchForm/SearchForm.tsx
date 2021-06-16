import * as S from './SearchForm.style';
import Input from 'components/Input';
import Button from 'components/Button';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getYoutube } from 'modules/youtube/slice';

export default function SearchForm() {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();
  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getYoutube(keyword));
    setKeyword('');
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <Input keyword={keyword} onChange={handleChangeKeyword} />
      <Button>검색</Button>
    </S.Form>
  );
}
