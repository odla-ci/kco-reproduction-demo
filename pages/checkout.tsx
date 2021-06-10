import KlarnaCheckout from '../components/KlarnaCheckout';
import Layout from '../components/Layout'

// Add html_snippe here
const HTML_SNIPPET = "";

const CheckoutPage = () => {
  return (
    <Layout title="Checkout">
      <h1>Checkout</h1>
      {HTML_SNIPPET ? (
        <KlarnaCheckout html={HTML_SNIPPET} />
      ) : <div>No <code>html_snippet</code> found - Add snippet to <code>pages/checkout.tsx</code></div>}
    </Layout>
  )
}

export default CheckoutPage
