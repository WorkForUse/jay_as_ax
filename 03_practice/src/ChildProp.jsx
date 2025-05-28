import './styles/style.css'

// const ChildProp = (props) => {
//   return (
//     <div id='container'>{props.children}</div>
//   )
// }

const ChildProp = ({children}) => {
  return (
    <div id='container'>{children}</div>
  )
}

export default ChildProp