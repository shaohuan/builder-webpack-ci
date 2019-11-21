
import React from 'react';
import ReactDom from 'react-dom';
import './search.less'
import beauty from './images/beauty.jpeg'
import '../../common'
import { a } from './tree-shaking'

class Search extends React.Component { 
  constructor(props) {
    super(props);

    this.loadComponent = this.loadComponent.bind(this);
    this.state = {
      Text: null
    }
  }

  loadComponent() {
    import ('./text.js').then((text)=> {
      this.setState({
          Text: text.default
      })
    });
  }

  render() {
    const funcA = a;
    const { Text } = this.state;

    return (    
            <div className="search-text">
              {
                Text ? <Text /> : null
              }

              <h1 
                className="search-text-title  huan-text-title">{ funcA() }  毛主席 邓小平字体 非常漂亮 
              </h1>
              <img onClick={ this.loadComponent } src={ beauty } style={{cursor: 'pointer', width: '50px', height: '50px'}}/>
            </div>
    )
  }
}

ReactDom.render(
  <Search />,
  document.getElementById('root')
);