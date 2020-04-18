import React, {Component} from 'react';
import { SelectCountry } from './SelectCountry';
import { SelectLeague } from './SelectLeague';
import { Content } from './Content';

export class FormComponent extends Component {
    

    state = {
        id: '',
        idCompetition: '',
        receiveIdCompetition: false
    }


    _handleSelected = (value) => {
        this.setState({id: value})      
    }

    _handleOnIdCompetition = (idCompetition) => {
        this.setState({idCompetition, receiveIdCompetition: true})
    }


    render() {
        return (
            <form>
                <div className='search'>
                    <div className='search-country'>
                        <SelectCountry onSelected={this._handleSelected}/>
                    </div>
                    <div className='search-league'>
                        <SelectLeague idCountry={this.state.id} idCompetition={this._handleOnIdCompetition}/>
                    </div>
                </div>

                <div>
                    {this.state.receiveIdCompetition
                        ? <Content idCompetition={this.state.idCompetition}/>
                        : null}
                </div>
            </form>
        )
    }
}