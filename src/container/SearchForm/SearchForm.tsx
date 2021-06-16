import * as S from './SearchForm.style';
import Input from 'components/Input';
import Button from 'components/Button';
import React, { useState } from 'react';

export default function SearchForm() {
  const [keyword, setKeyword] = useState('');

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setKeyword('');
    console.log(keyword);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <Input keyword={keyword} onChange={handleChangeKeyword} />
      <Button>검색</Button>
    </S.Form>
  );
}
