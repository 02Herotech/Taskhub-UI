import React from 'react'
import layoutStyle from './Layout.module.css'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className={layoutStyle.layout}>
            <main className={layoutStyle.main}>
                {children}
            </main>
        </div>
    )
}

export default Layout