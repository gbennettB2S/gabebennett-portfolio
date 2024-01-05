import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)

    return (
        <div id="error-page">
            <h1 style={{ mt: 4 }}>Oh no!</h1>
            <h2>Something bad happened.</h2>

            <p style={{ maxWidth: '800px', fontSize: '18px' }}>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}
