import { useState } from "react"

import ThemeToggle from "../functions/theme-toggle"
import GridLayout from "../components/GridLayout"
import Background from "../template/background"

const PageUser: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <Background>
            <section className={darkMode ? "dark" : ""}>
                <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
                    <GridLayout />
                </div>
                <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </section>
        </Background>
    )
}

export default PageUser

