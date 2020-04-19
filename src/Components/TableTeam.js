import React, {Component} from 'react';
import { Table, Tag } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Nationality',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Postition',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
];




export class TableTeam extends Component {
    state = {
        squad: []
    }

    componentDidMount() {
        console.log('hola',this.props.squad)
        this.setState({squad: this.props.squad})
    }

    componentWillReceiveProps(nextProps) {
        console.log('NextProps',nextProps.squad)
        this.setState({squad: nextProps.squad})
    }

    _renderInfoSquad() {
        const {squad} = this.state
        return squad.map(player => {
            return(
                {
                    key: player.id,
                    name: player.name,
                    age: player.nationality,
                    address: player.position,
                    tags: [player.role],
                }
            )
                
            
        })
    }

    render() {
        return (
            <Table columns={columns} dataSource={this._renderInfoSquad()} />
        )
    }
}