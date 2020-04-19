import React, {Component} from 'react';
import { SelectCountry } from '../Components/SelectCountry';
import { SelectLeague } from '../Components/SelectLeague';
import { PointerTeams } from '../Components/PointerTeams';
import { CardTeam } from '../Components/CardTeam';

export class FormComponent extends Component {
    

    state = {
        id: '', 
        idCompetition: '',
        receiveIdCompetition: false,
        idTeam: '',
        receiveIdTeam: false
    }


    _handleSelected = (value) => {
        this.setState({id: value})      
    }

    _handleOnIdCompetition = (idCompetition) => {
        this.setState({idCompetition, receiveIdCompetition: true})
    }

    _handleIdTeam = (idTeam) => {
        this.setState({idTeam, receiveIdTeam: true})
        console.log(this.state.idTeam)
    }

    render() {
        return (
            <div>
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

                    <div>
                        {this.state.receiveIdTeam
                            ? <CardTeam idTeam={this.state.idTeam}/>
                            : null}
                    </div>
                </form>
            </div>
            
            
        )
    }
}