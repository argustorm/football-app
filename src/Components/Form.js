import React, {Component} from 'react';
import { SelectCountry } from './SelectCountry';
import { SelectLeague } from './SelectLeague';
import { PointerTeams } from './PointerTeams';

export class FormComponent extends Component {
    

    state = {
        id: '',
        idCompetition: '',
        receiveIdCompetition: false,
        idTeam: ''
    }


    _handleSelected = (value) => {
        this.setState({id: value})      
    }

    _handleOnIdCompetition = (idCompetition) => {
        this.setState({idCompetition, receiveIdCompetition: true})
    }

    _handleIdTeam = (idTeam) => {
        this.setState({idTeam})
        console.log(this.state.idTeam)
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
                        ? <PointerTeams idCompetition={this.state.idCompetition} idTeam={this._handleIdTeam}/>
                        : null}
                </div>
            </form>
        )
    }
}