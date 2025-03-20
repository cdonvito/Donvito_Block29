function SearchBar(props) {
  return (
    <section id="searchBar">
      <label htmlFor="searchBar">
        Search:
        <input
          type="text"
          placeholder="Search Puppies"
          onChange={(event) => props.setSearchParameter(event.target.value)}
        ></input>
      </label>
    </section>
  );
}

export default SearchBar;
