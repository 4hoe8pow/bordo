import { Grid } from '@mantine/core'

import NavHead from 'src/components/NavHead/NavHead'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Grid>
      <Grid.Col span={12}>
        <NavHead />
      </Grid.Col>
      <Grid.Col span={9.6} offset={1.2}>
        <main>{children}</main>
      </Grid.Col>
    </Grid>
  )
}

export default MainLayout
