export default function App() {

  let listItems = ['react tutorial', 'construction website', 'client hunting series', 'linkedin post']

  return (
    <>
      <h1>Ramiz Malik - Fullstack dev</h1>
      <ul>
        {listItems.map((item, index) => {
          return <li key={index}>
            {item}
          </li>
        })}
      </ul>
    </>
  )
}