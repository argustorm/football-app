import React, {Component} from 'react';
import { Select } from 'antd';

const API_KEY = '7a51512089c4475a827e9e1888683c76';
const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}



export class SelectLeague extends Component {
    
    
    state = {
        competitions: []
    }
    
    componentDidMount() {
        fetch(`https://api.football-data.org/v2/competitions`, {
                headers: new Headers({
                    "X-Auth-Token": API_KEY
            })
        })
      .then(res => res.json())
      .then(data => {
                const{competitions} = (data)
                this.setState({competitions})
      })
    }

    _renderCompetitions = () => {
        const {competitions} = this.state
        console.log(competitions)
        console.log('CountryId: '+this.props.idCountry)
        const mapeo = competitions.map
            (competition => {
                if(competition.area.id === this.props.idCountry) 
                {
                    return (
                            <Option key={competition.id}>
                                {competition.name}
                            </Option>
                            )
                }
                    
                })
                return mapeo
        }


    render() {
        return (
            <div>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {this._renderCompetitions()}
                </Select>
                <p>{this.props.idCountry}</p>
            </div>
                
        )
    }
}
