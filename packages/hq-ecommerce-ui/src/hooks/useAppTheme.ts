import { useTheme } from 'react-native-paper'
import { AppTheme } from "../components/ThemeProvider/Theme"

export const useAppTheme = () => useTheme<AppTheme>()
