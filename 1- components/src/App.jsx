import ErrorMessage from "./components/ErrorMessage";
import ListItems from "./components/ListItems";

export default function App() {

  // let listItems = []
  let listItems = ['react tutorial', 'construction website', 'client hunting series', 'linkedin post']
  return (
    <>
      <h1>Ramiz Malik - Fullstack dev</h1>
      <ErrorMessage listItems={listItems} />
      <ListItems listItems={listItems} />
    </>
  )
}