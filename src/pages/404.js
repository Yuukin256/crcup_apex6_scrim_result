import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404 Not found" />
    <h1>404 Not Found</h1>
    <p>おっと、存在しないページにアクセスしたようです。</p>
  </Layout>
)

export default NotFoundPage
