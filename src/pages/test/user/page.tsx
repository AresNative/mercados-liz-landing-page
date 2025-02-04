import { IonApp, IonPage, IonContent } from "@ionic/react"
import type React from "react"
import { useState } from "react"
import ThemeToggle from "../functions/theme-toggle"
import Header from "../components/Header"
import GridLayout from "../components/GridLayout"
import Hero from "../components/Hero"

const PageUser: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <IonApp className={darkMode ? "dark" : ""}>
            <IonPage>
                <Header />
                <IonContent fullscreen>
                    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Hero />
                        <GridLayout />
                    </div>
                    <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </IonContent>
            </IonPage>
        </IonApp>
    )
}

export default PageUser

