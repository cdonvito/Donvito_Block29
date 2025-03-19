function SearchBar(props) {
  return (
    <section>
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
