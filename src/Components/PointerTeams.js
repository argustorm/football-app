import React, {Component} from 'react';
const API_KEY = '7a51512089c4475a827e9e1888683c76';

export class PointerTeams extends Component {
    state = {
        teams: []
    }
    
    componentDidMount() {
        if (this.props.idCompetition !== undefined ) 
        {
            fetch(`https://api.football-data.org/v2/competitions/${this.props.idCompetition}/teams`, {
                headers: new Headers({
                    "X-Auth-Token": API_KEY
            })
        })
        .then(res => res.json())
        .then(data => {
                    const {teams} = data
                    this.setState({teams})
                    console.log(teams)
        })
        }
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('NextProps: '+nextProps.idCompetition)
        if (nextProps.idCompetition !== undefined ) 
        {
            fetch(`https://api.football-data.org/v2/competitions/${nextProps.idCompetition}/teams`, {
                headers: new Headers({
                    "X-Auth-Token": API_KEY
            })
        })
        .then(res => res.json())
        .then(data => {
                    const {teams} = data
                    this.setState({teams})
                    console.log(teams)
        })
        }
    }

    _renderTeams() {
        const {teams} = this.state
        if(teams !== undefined) {
            return(
                <div className='equipos-list'>
                    {
                         teams.map(team => {
                            return (
                                <div key={team.id}
                                     className='equipos'>
                                    <img className='teams-icons'
                                         onClick={() =>this.props.idTeam(team.id)}
                                         alt={team.name}
                                         src={team.crestUrl}
                                    />     
                                </div>
                            )
                        })
                    }
                </div>
            )
           
        }
    }
    
    render() {
        return (
            <div className='content-div'>
                {this._renderTeams()}
            </div>
        )
    }
}