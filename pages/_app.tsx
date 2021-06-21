import type { AppProps } from "next/app"
import { useCallback, useEffect } from "react"

type KlarnaShippingAddress = {
  country: string
  postal_code: string
  email?: string
  family_name?: string
  given_name?: string
}

type KlarnaLoadEvent = {
  shipping_address: KlarnaShippingAddress
}

function CustomApp({ Component, pageProps }: AppProps) {
  const onLoad = useCallback((e: KlarnaLoadEvent) => {
    console.log('[DEBUG]: "load" fired', e.shipping_address)
  }, [])

  useEffect(() => {
    function tryRegister() {
      console.log("[DEBUG]: waiting for Klarna API...")

      if (typeof window._klarnaCheckout === "function") {
        window._klarnaCheckout(function ({ on }) {
          on({
            load: onLoad,
          })

          console.log('[DEBUG]: "load" registered')
        })
      } else {
        setTimeout(() => {
          tryRegister()
        }, 200)
      }
    }

    tryRegister()
  }, [])

  return <Component {...pageProps} />
}

export default CustomApp
