import React, {Component} from 'react';
import { Card } from 'antd';
import { TableTeam } from './TableTeam';

const API_KEY = '7a51512089c4475a827e9e1888683c76';
const { Meta } = Card;


export class CardTeam extends Component {
    state = {
        infoTeam: [],
        squad: [],
        isSearched: false
    }

    componentDidMount() {
            fetch(`https://api.football-data.org/v2/teams/${this.props.idTeam}`, {
                    headers: new Headers({
                        "X-Auth-Token": API_KEY
                })
            })
          .then(res => res.json())
          .then(data => {
                    console.log(data)
                    this.setState({infoTeam: data})
                    const {squad} = data
                    this.setState({squad, isSearched: true})
                    console.log('cardTeamProps',this.state.squad)
          })  
    }
    componentWillReceiveProps(nextProps) {
        fetch(`https://api.football-data.org/v2/teams/${nextProps.idTeam}`, {
                    headers: new Headers({
                        "X-Auth-Token": API_KEY
                })
            })
          .then(res => res.json())
          .then(data => {
                    console.log(data)
                    this.setState({infoTeam: data})
                    const {squad} = data
                    this.setState({squad})
          })  
    }

    

    _renderTeam() {
        const {infoTeam} = this.state
        console.log(infoTeam)
        return (
            <div className='card-team'>
               <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt={infoTeam.name} src={infoTeam.crestUrl} />}
                >
                    <Meta title={infoTeam.name} description={infoTeam.website} />
                </Card> 
            </div> 
        )
    }
    
    render() {
        return (
            <div className='info-team'>
                <div className='divCardTeam'>
                    {this._renderTeam()}
                </div>
                <div className='divTableTeam'>
                    {this.state.isSearched
                        ? <TableTeam squad={this.state.squad}/>
                        : null}
                </div>
            </div>
        )
    }
}
