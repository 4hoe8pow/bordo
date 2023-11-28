import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { IconMoonFilled, IconSun } from '@tabler/icons-react'
const ThemeChange = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <ActionIcon
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? (
        <IconSun style={{ width: 18, height: 18 }} />
      ) : (
        <IconMoonFilled style={{ width: 18, height: 18 }} />
      )}
    </ActionIcon>
  )
}
export default ThemeChange
