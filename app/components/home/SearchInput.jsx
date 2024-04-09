import React from "react";
import { SearchBar } from "react-native-elements";
import datos from "../datos";

export const SearchInput = ({ setResults, setIsVisible }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  const search = (value) => {
    setIsVisible(true);
    const lowerCaseValue = value.toLowerCase();
    const results = datos.filter((item) => {
      const lowerCaseTitle = item.title.toLowerCase();
      return lowerCaseTitle.includes(lowerCaseValue);
    });
    if (results.length > 0) {
      setIsVisible(true);
      setResults(results);
    }
    if (value === "") {
      setResults([]);
    }
  };

  const handleChange = (value) => {
    setSearchQuery(value);
    search(value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <SearchBar
      placeholder="¿Que deseas aprender?"
      onChangeText={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={searchQuery}
      platform="android"
      containerStyle={{
        width: "100%",
        height: 35,
        // backgroundColor: "#D7F9FF",
        backgroundColor: isFocused ? "#D7F9FF" : "#FFFFFF",
        borderRadius: 50,
        justifyContent: "center",
        paddingHorizontal: 10,
      }}
    />
  );
};
