import React, { useState } from 'react';

export const PlacesSearch = () => {
  const [InputText, setInputText] = useState('');
  const [Place, setPlace] = useState('');

  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText('');
  };
  return (
    <div>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          placeholder="검색어를 입력하세요"
          onChange={onChange}
          value={InputText}
        />
        <button type="submit">검색</button>
      </form>
    </div>
  );
};
