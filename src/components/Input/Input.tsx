import React from 'react';
import * as S from './Input.style';

interface InputProps {
  keyword: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ keyword, onChange }: InputProps) {
  return (
    <S.InputContainer>
      <S.Label>
        <S.Input
          type="text"
          name="search"
          placeholder="검색어를 입력하세요."
          value={keyword}
          onChange={onChange}
        />
      </S.Label>
    </S.InputContainer>
  );
}
