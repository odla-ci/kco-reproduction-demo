import React from "react"
import Layout from "../components/Layout"
import dynamic from "next/dynamic"

// Add html_snippe here
const HTML_SNIPPET = ""

const KlarnaCheckout = dynamic(() => import("../components/KlarnaCheckout"), { ssr: false })

const CheckoutPage = () => {
  return (
    <Layout title="Checkout">
      <h1>Checkout</h1>
      {HTML_SNIPPET ? (
        <div style={{ display: "grid", gap: "20px" }}>
          <div style={{ minHeight: "400px" }}>
            <h2>Betalning</h2>
            <KlarnaCheckout html={HTML_SNIPPET} />
          </div>
        </div>
      ) : (
        <div>
          No <code>html_snippet</code> found - Add snippet to <code>pages/checkout.tsx</code>
        </div>
      )}
    </Layout>
  )
}

export default CheckoutPage
