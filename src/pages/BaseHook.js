import React, { useState, useEffect } from 'react'
import { Component } from 'react'

function BaseHook () {
  const [type, setType] = useState('class')
  return (
    <div className="container">
      <h1>Hello World</h1>
      <button
        type="button"
        onClick={() => setType(type === 'class' ? 'func' : 'class')}
      >
        컴포넌트 타입 변경
      </button>
      {type === 'class' ?
        (<ClassComp initNumber={2} />) : (<FuncComp initNumber={2} />)
      }

    </div>
  )
}

const red = 'color: red'
const blue = 'color: blue'

function FuncComp(props) {
  //로직부분
  const numberState = useState(props.initNumber)
  const number = numberState[0]
  const setNumber = numberState[1]
  const [date, setDate] = useState((new Date()).toString())
  // hook의 lifecyc
  // useEffect는 여러번 호출될수 있음
  useEffect(() => { //rendering 후에 실행되는 부분 (componentDidMount, componentDidUpdate와 동일)
    console.log('%cuseEffect componentDidMount && componentDidUpdate render', red)
    document.title = number
    return  () => { //use state가 업데이트 되었을때 render 바로 후에 실행(render -> useEffect return (cleanup) -> useEffect(return 위로))
      console.log('%cuseEffect componentDidMount && componentDidUpdate return render', red)
    }
  }, [number])

  //두번째 인자로 빈배열을 주면 mount될때 한번만 실행하고 끝
  useEffect(() => {
    console.log('%cuseEffect componentDidMount render', blue)
    return () => { // componentWillUnmount 일 경우에만 실행
      console.log('%cuseEffect componentWillUnmount render', blue)
    }
  }, [])
  console.log('render')
  //화면 부분
  return (
    <div className="container">
      <h2>function style component</h2>
      {/* <div>{props.initNumber}</div> */}
      <div>Number : {number}</div>
      <div>Date : {date}</div>
      <button
        type="button"
        onClick={() => {
          // useState로 state를 변경하려면 set함수의 인자값으로 바꿀 값을 넘김
          setNumber(Math.floor(Math.random()*100))
        }}
      >
        random
      </button>
      <button
        type="button"
        onClick={() => {
          setDate((new Date()).toString())
        }}
      >
        Date
      </button>
    </div>
  )
}

class ClassComp extends Component {
  state= {
    number: this.props.initNumber,
    date: (new Date()).toString()
  }
  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        <div>Number : {this.state.number}</div>
        <div>Date : {this.state.date}</div>
        <button
          type="button"
          onClick={() => {
            this.setState({number: Math.floor(Math.random()*100)})
          }}
        >
          random
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({date: (new Date()).toString()})
          }}
        >
          Date
        </button>
      </div>
    )
  }
}

export default BaseHook;
