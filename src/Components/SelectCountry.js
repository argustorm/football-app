import React, {Component} from 'react';

import { Select } from 'antd';

const API_KEY = '7a51512089c4475a827e9e1888683c76';
const { Option } = Select;


export class SelectCountry extends Component {
    state = {
        areas: []
    }

    onChange = (value) => {
        console.log(`selected ${value}`);
        this.props.onSelected(value);
      }

    componentDidMount() {
        fetch(`https://api.football-data.org/v2/areas`, {
      headers: new Headers({
        "X-Auth-Token": API_KEY
      })
    })
      .then(res => res.json())
      .then(data => {
        const {areas} = data
        this.setState({areas})
      });
    }

    _renderCountries() {
        const {areas} = this.state
        return areas.map(country => {
            return (
                <Option value={country.id} key={country.id}>{country.name}</Option>
            )
        })
    }

    render() {
        return (
            <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a Country"
        optionFilterProp="children"
        onChange={this.onChange}
        filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
    >
       {this._renderCountries()}
    </Select>
        )
    }  
}