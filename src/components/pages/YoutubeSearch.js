import React, { useRef } from "react";

function YoutubeSearch({ search }) {
  console.log(search);
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    search(value);
  };

  const onClick = () => {
    //console.log("onclick");
    handleSearch();
  };
  const onKeyPress = (event) => {
    //console.log("onKeyPress");
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="youtube__search">
      <h2>검색하기</h2>
      <input
        ref={inputRef}
        type="search"
        placeholder="검색하세요."
        onKeyPress={onKeyPress}
      />
      <button type="submit" onClick={onClick}>
        검색
      </button>
    </div>
  );
}

export default YoutubeSearch;
