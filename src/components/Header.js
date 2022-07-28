import Button from './Button'
const Header = (props) => {
  return (
    <header className="header">
        <h1> {props.title}</h1>
        <Button color="red" text = "helloe"/>
    
    </header>
  )
}
Header.defaultProps = {
    title: "Hello tittle",
}
export default Header