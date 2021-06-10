import { FC, useEffect, useRef } from "react"

type Props = {
  html: string
}

declare global {
  interface Window {
    _klarnaCheckout?: (cb: (api: any) => void) => void
  }
}

const KlarnaCheckout: FC<Props> = ({ html }) => {
  const ref = useRef(null)

  useEffect(() => {
    if(ref.current) {
      ref.current.innerHTML = html
      const scriptsTags = ref.current.getElementsByTagName("script")
      // This is necessary otherwise the scripts tags are not going to be evaluated
      for (let i = 0; i < scriptsTags.length; i++) {
        const parentNode = scriptsTags[i].parentNode
        const newScriptTag = document.createElement("script")
        newScriptTag.type = "text/javascript"
        newScriptTag.text = scriptsTags[i].text
        parentNode.removeChild(scriptsTags[i])
        parentNode.appendChild(newScriptTag)
      }
    }
  }, [html, ref])

  useEffect(() => {
    if(typeof window._klarnaCheckout === "function") {
      console.log("_klarnaCheckout defined");
      window._klarnaCheckout(function ({ on }) {
        console.log("registering listeners");
        on({
          load: (e) => {
            console.log("[Klarna Event]: 'load'", e)
          },
          shipping_address_change: (e) => {
            console.log("[Klarna Event]: 'shipping_address_change'", e)
          },
        })
      })
    } else {
      console.error('API not available');
    }
  }, [])

  return <div ref={ref}></div>
}

export default KlarnaCheckout
