import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'chairs',
                    name: 'Стулья'
                },
                {
                    key: 'tables',
                    name: 'Столы'
                },
                {
                    key: 'beds',
                    name: 'Кровати'
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(element => (
            <div key={element.key} onClick={() => this.props.chooseCategory(element.key)}>{element.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories