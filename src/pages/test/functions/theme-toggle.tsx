import type React from "react"
import { IonToggle } from "@ionic/react"

interface ThemeToggleProps {
    darkMode: boolean
    setDarkMode: (darkMode: boolean) => void
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, setDarkMode }) => {
    return (
        <div className="fixed bottom-4 right-4">
            <IonToggle
                checked={darkMode}
                onIonChange={(e) => setDarkMode(e.detail.checked)}
                mode="ios"
                color="dark"
            />
        </div>
    )
}

export default ThemeToggle

