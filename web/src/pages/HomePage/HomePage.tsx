import { Button } from '@mantine/core'

import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className="text-red-500">HomePage</h1>
      <Button>test</Button>
    </>
  )
}

export default HomePage
