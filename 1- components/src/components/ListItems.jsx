
export default function ListItems({ listItems }) {

    // let listItems = []
    // let listItems = ['react tutorial', 'construction website', 'client hunting series', 'linkedin post']

    return (
        <>
           
            <ul>
                {listItems && listItems.map((item, index) => {
                    return <li key={index}>
                        {item}
                    </li>
                })}
            </ul>

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
