import React, {Component} from 'react';
import { Select } from 'antd';

const API_KEY = '7a51512089c4475a827e9e1888683c76';
const { Option } = Select;



export class SelectLeague extends Component {
    
    
    state = {
        competitions: []
    }
    
    onChange = (value) => {
        console.log(`selected ${value}`);
        this.props.idCompetition(value)
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
        const mapeo = competitions.map
            (competition => {
                if(competition.area.id === this.props.idCountry) 
                {
                    return (
                            <Option value={competition.id} key={competition.id}>
                                {competition.name}
                            </Option>
                            
                            )
                } else {
                    return null
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
                    placeholder="Select a League"
                    optionFilterProp="children"
                    onChange={this.onChange}
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {this._renderCompetitions()}
                </Select>
            </div>
                
        )
    }
}
