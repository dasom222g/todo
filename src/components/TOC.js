import { Component } from 'react';

class TOC extends Component {
  render() {
    const lists = []
    const data = this.props.data
    for(let i = 0; i < data.length; i++) {
      lists.push(<li key={`data__${data[i].id}`}><a href={`/content/${data[i].id}.html`}>{data[i].title}</a></li>)
    }
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    )
  }
}

export default TOC;