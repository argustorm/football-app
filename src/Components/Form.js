import React, {Component} from 'react';
import { SelectCountry } from './SelectCountry';
import { SelectLeague } from './SelectLeague';

export class FormComponent extends Component {
    state = {
        id: ''
    }

    _handleSelected = (value) => {
        this.setState({id: value})      
        console.log(this.state.id)
    }


    render() {
        return (
            <form>
                <div>
                    <SelectCountry onSelected={this._handleSelected}/>
                </div>
                <div>
                    
                    <SelectLeague idCountry={this.state.id}/>
                </div>
            </form>
        )
    }
}