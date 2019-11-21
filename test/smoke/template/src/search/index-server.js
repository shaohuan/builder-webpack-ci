
const React = require('react');
const ReactDom = require('react-dom');
require('./search.less')
const beauty = require('./images/beauty.jpeg')
require ('../../common')

class Search extends React.Component { 
  constructor(props) {
    super(props);
  }

  render() {
    return (    
            <div className="search-text">
              <h1 
                className="search-text-title  huan-text-title"> 邓小平字体 非常漂亮 
              </h1>
              <img src={ beauty }/>
            </div>
    )
  }
}

module.exports = <Search />;

