export default function ErrorMessage({ listItems }) {
    return (
        <>
            {listItems.length === 0 && <h3>Need list to render</h3>}
        </>
    )
}
