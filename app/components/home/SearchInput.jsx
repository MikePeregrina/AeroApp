import { GlobalContext } from "@/context/GlobalProvider";
import React from "react";
import { SearchBar } from "react-native-elements";

export const SearchInput = ({ setResults, setIsVisible }) => {
  const { cursos } = React.useContext(GlobalContext);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  const search = (value) => {
    setIsVisible(true);
    const lowerCaseValue = value.toLowerCase();
    const results = cursos.filter((item) => {
      const lowerCaseTitle = item.nombre.toLowerCase();
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
        backgroundColor: isFocused ? "#D7F9FF" : "#FFFFFF",
        borderRadius: 50,
        justifyContent: "center",
        paddingHorizontal: 10,
      }}
    />
  );
};
