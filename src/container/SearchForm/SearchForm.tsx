import * as S from './SearchForm.style';
import Input from 'components/Input';
import Button from 'components/Button';
import React from 'react';

interface SearchFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
}

export default function SearchForm({
  keyword,
  onSubmit,
  onChange,
}: SearchFormProps) {
  return (
    <S.Form onSubmit={onSubmit}>
      <Input keyword={keyword} onChange={onChange} />
      <Button>검색</Button>
    </S.Form>
  );
}
