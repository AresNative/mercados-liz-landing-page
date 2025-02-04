import type React from "react"
import { IonToggle } from "@ionic/react"
import { moon } from "ionicons/icons"

interface ThemeToggleProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, setDarkMode }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg">
      <IonToggle
        checked={darkMode}
        onIonChange={(e) => setDarkMode(e.detail.checked)}
        mode="ios"
        color="dark"
        icon={moon}
      />
    </div>
  )
}

export default ThemeToggle

