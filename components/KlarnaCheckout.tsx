import { FC, useCallback, useContext, useEffect, useRef } from "react"

declare global {
  interface Window {
    _klarnaCheckout?: (cb: (api: any) => void) => void
  }
}

type Props = {
  html: string
}

const KlarnaCheckout: FC<Props> = ({ html }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
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

  return <div ref={ref}></div>
}

export default KlarnaCheckout
