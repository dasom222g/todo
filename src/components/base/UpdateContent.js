import { Component } from 'react';

class UpdateContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.id, this.state.title, this.state.desc)
  }
  render() {
    return (
      <section>
        <article>
          <h3>Update</h3>
          <form
            action="/create_process"
            method="post"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" value={this.state.id} />
            <div>
              <label htmlFor="title">title</label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="title.."
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="desc">description</label>
              <textarea
                id="desc"
                name="desc"
                placeholder="description.."
                value={this.state.desc}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <button type="submit">submit</button>
          </form>
        </article>
      </section>
    )
  }
}

export default UpdateContent;