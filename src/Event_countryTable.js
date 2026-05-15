import React from "react";

class CountryTable extends React.Component {
  render() {
    const { countries } = this.props;

    return (
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>#</th>
            <th>Country</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key={`${country.name}-${country.region}-${index}`}>
              <td>{index + 1}</td>
              <td>{country.name}</td>
              <td>{country.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default CountryTable;
