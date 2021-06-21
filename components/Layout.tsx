import React, { createContext, ReactNode, useCallback, useEffect, useState } from "react"
import Link from "next/link"
import Head from "next/head"

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = "This is the default title" }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
        </nav>
      </header>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>{children}</div>
    </div>
  )
}

export default Layout
