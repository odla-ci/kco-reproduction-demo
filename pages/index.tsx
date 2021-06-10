import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home">
    <h1>Home</h1>
    <p>Demo application to reproduce load event behaviour</p>
      <Link href="/checkout">
        <a>Go to Checkout</a>
      </Link>
  </Layout>
)

export default IndexPage
