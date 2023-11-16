import { Card, Text, Metric } from '@tremor/react'

import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className="text-red">HomePage</h1>
      <Card className="mx-auto max-w-xs">
        <Text>Sales</Text>
        <Metric>$ 34,743</Metric>
      </Card>
    </>
  )
}

export default HomePage
