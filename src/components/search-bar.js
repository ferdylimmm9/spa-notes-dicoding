import * as React from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
export default function SearchBarWrapper() {
  const [, setSearchParams] = useSearchParams();
  const setSearchParamsHandler = (title) => setSearchParams({ title });
  return <SearchBar setSearchParams={setSearchParamsHandler} />;
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  render() {
    const { setSearchParams } = this.props;
    return (
      <>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSearchParams(this.state.title);
          }}
        >
          <input
            type="text"
            placeholder="Cari judul catatan..."
            onChange={(event) => this.setState({ title: event.target.value })}
          />
          <input type="submit" value="Cari" />
        </form>
      </>
    );
  }
}

SearchBar.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
};
