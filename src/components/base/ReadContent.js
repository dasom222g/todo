import { Component } from 'react';

class ReadContent extends Component {
  render() {
    return (
      <section>
        <article>
          <h3>{this.props.title}</h3>
          <strong>{this.props.desc}</strong>
        </article>
      </section>
    )
  }
}

export default ReadContent;