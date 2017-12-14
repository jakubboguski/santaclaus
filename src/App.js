import React, { Component } from 'react'
import './index.css'
import santa from './assets/mikolaj.svg'

const colors = {
  backgroundColor: '#9fd4db',
  secondBackgroundColor: '#6db3bc',
  snowColor: '#fafafa',
  headerColor: '#5a868c',
  secondHeaderColor: '#7c6d7c',
  textColor: '#212121',
}

const style = {
  body: {
    position: 'relative',
    'background-color': colors.backgroundColor,
    height: '100vh',
    display: 'flex',
    'flex-direction': 'column',
  },
}

class App extends Component {
  render() {
    return (
      <body>
        <div className="header">
          <div className="text">
            <h1>Akcja <strong>Kierowcy Dzieciom</strong></h1>
            <p>Duis sapien erat, dictum at neque et, pharetra posuere velit. Praesent sit amet magna ex. Mauris sed ipsum sed nibh congue tempor non in velit. Phasellus tempus vulputate est eget ullamcorper.</p>
          </div>
          <div className="santa">
            <img src={santa} />
          </div>
        </div>
        <div className="container">
          <div className="containerText">
            <h2>Lorem Ipsum</h2>
            <p>In vulputate venenatis justo sit amet dictum. In feugiat bibendum ligula, vitae vehicula velit facilisis euismod. Fusce et euismod felis, nec pulvinar nunc. In aliquet eget nisl ac pulvinar. Mauris luctus purus in lorem molestie congue. Duis massa justo, auctor vel pharetra ac, vestibulum vel lectus. Cras commodo est sed velit placerat, id pharetra nulla condimentum. Vivamus nec eros finibus, auctor orci eget, venenatis libero. Duis sapien erat, dictum at neque et, pharetra posuere velit. Praesent sit amet magna ex. Mauris sed ipsum sed nibh congue tempor non in velit. Phasellus tempus vulputate est eget ullamcorper. Nullam risus nisl, eleifend non tristique ac, sollicitudin vitae lorem. Nunc eget velit ac velit molestie suscipit a a massa. Sed pellentesque aliquam sapien, fermentum consectetur nibh volutpat eget. Nam ut mauris convallis, posuere orci eu, sagittis magna.</p>
          </div>
          <div className="containerVideo">
            video
          </div>
        </div>
      </body>
    )
  }
}

export default App
