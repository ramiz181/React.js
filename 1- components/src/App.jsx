export default function App() {

  // let listItems = []
  let listItems = ['react tutorial', 'construction website', 'client hunting series', 'linkedin post']

  return (
    <>
      <h1>Ramiz Malik - Fullstack dev</h1>
      {listItems.length === 0 ? <h3>Need list to render</h3> :
        <ul>
          {listItems.map((item, index) => {
            return <li key={index}>
              {item}
            </li>
          })}
        </ul>}

      {/* OR */}

      {/* {listItems.length === 0  <h3>Need list to render</h3>}
      <ul>
        {listItems.map((item, index) => {
          return <li key={index}>
            {item}
          </li>
        })}
      </ul> */}
    </>
  )
}