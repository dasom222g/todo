import { Component } from 'react';

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    // console.log('shouldComponentUpdate 렌더링')
    // console.log('newProps', newProps.data, 'props', this.props.data)
    return newProps.data !== this.props.data
  }
  render() {
    // console.log('Toc 렌더링')
    return (
      <nav>
        <ul>
          {this.props.data.map((item) => {
            return <li key={`data__${item.id}`}>
              <a
                href={`/content/${item.id}.html`}
                data-id={item.id}
                onClick={(e) => {
                  e.preventDefault()
                  this.props.onChangePage(e.target.dataset.id)
                }}
              >
                {item.title}
              </a>
          </li>
          })}
        </ul>
      </nav>
    )
  }
}

export default TOC;