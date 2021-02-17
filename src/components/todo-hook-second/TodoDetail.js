import React from 'react'
import { Link } from 'react-router-dom';
import { GrFormPrevious } from 'react-icons/gr'

function TodoDetail({selectedItem, changeMode}) {

  // 화면 부분
  console.log('TodoDetail render')
  return (
    <section className="todo__detail">
        <Link to="/todo-hook-second" className="button-prev" onClick={() => changeMode('create')}>
          <GrFormPrevious className="icon icon-prev" />
        </Link>
        {selectedItem ?
          (
            <>
              <h3 className="todo__content green">
                <span className="todo__content-text">{selectedItem.title}</span>
              </h3>
              <div className="todo__detail-desc">
                <textarea
                  placeholder="Write a note.."
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

export default TodoDetail
