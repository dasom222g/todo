import { Component } from 'react';

class CreateContent extends Component {
  render() {
    return (
      <section>
        <article>
          <h3>Create</h3>
          <form
            action="/create_process"
            method="post"
            onSubmit={e => {
              e.preventDefault()
              this.props.onSubmit(e.target.title.value, e.target.desc.value)
            }}
          >
            <div>
              <label htmlFor="title">title</label>
              <input id="title" name="title" type="text" placeholder="title.." />
            </div>
            <div>
              <label htmlFor="desc">description</label>
              <textarea id="desc" name="desc" placeholder="description.."></textarea>
            </div>
            <button type="submit">submit</button>
          </form>
        </article>
      </section>
    )
  }
}

export default CreateContent;