import { Component } from 'react';
import { Link } from 'react-router-dom';
import { GrFormPrevious } from 'react-icons/gr'

class TodoDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.updateData,
      input: ''
    }
  }
  //로직 부분
  handlePrev = () => {
    this.props.onChangeMode('create')
  }
  handleChange = (e) => {
    this.setState({input: e.target.value})
  }
  render() {
    return (
      <section className="todo__detail">
        <Link to="/todo" className="button-prev" onClick={this.handlePrev}>
          <GrFormPrevious className="icon icon-prev" />
        </Link>
        {this.props.updateData ? 
          (
            <>
              <h3 className="todo__content green">
                <span className="todo__content-text">{this.state.data.title}</span>
              </h3>
              <div className="todo__detail-desc">
                <textarea
                  placeholder="Write a note.."
                  value={this.state.input}
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <div className="button-area">
                <button type="button" className="button-base">Confirm</button>
              </div>
            </>
          ) :
          (<h3 className="todo__detail-title">선택된 값이 없습니다</h3>)
        }
        
      </section>
    )
  }
}

export default TodoDetail;