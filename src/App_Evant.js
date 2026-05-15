import "./App_Country.css";
import React from "react";
import CountryAdd from "./Event_countrAdd";
import CountryFilter from "./Event_countryFilter";
import CountryTable from "./Event_countryTable";


class App extends React.Component {

    constructor() {
        super();

        this.state = {
            countries: [
                { name: "India", region: "Asia" },
                { name: "USA", region: "North America" },
                { name: "Japan", region: "Asia" },
            ],
            filterText: ""
        };
    }

    addCountry = (newCountry) => {
        this.setState({
            countries: [...this.state.countries, newCountry]
        });
    }

    setFilterText = (text) => {
        this.setState({
            filterText: text
        });
    }

    render() {

        const filteredCountries = this.state.countries.filter(country =>
            country.name.toLowerCase().includes(
                this.state.filterText.toLowerCase()
            )
        );

        return (
            <div className="App">
                <h1>Country Management</h1>

                <CountryAdd addCountry={this.addCountry} />

                <CountryFilter setFilterText={this.setFilterText} />

                <CountryTable countries={filteredCountries} />
            </div>
        );
    }
}

export default App;

        
