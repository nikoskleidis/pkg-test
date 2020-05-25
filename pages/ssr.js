import Head from 'next/head'

function SSR() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      This is a Server side rendered page

    </div>
  )
}

SSR.getInitialProps = () => {
  return {}
}

export default SSR
