import { useEffect, useState } from 'react'

import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { Navigate,Route, Routes } from 'react-router-dom'
import { animated,useSpring } from 'react-spring'

import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'

import { Loader } from '@common/Loader/Loader'

import HomePage from '@pages/HomePage'
import NotFound from '@pages/NotFountPage/NotFound'

import i18n from '@/i18n.ts'
import { store } from '@/store/store.ts'


function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Имитация задержки загрузки
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)

        // Очистка таймера при размонтировании компонента
        return () => clearTimeout(timer)
    }, [])

    const loaderAnimation = useSpring({
        opacity: loading ? 1 : 0,
        from: { opacity: 1 },
        config: { duration: 500 },
    })

    const contentAnimation = useSpring({
        opacity: loading ? 0 : 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
    })


    return (
        <I18nextProvider i18n={i18n}>
            <Provider store={store}>
                <>
                    <animated.div style={loaderAnimation}>
                        {loading && <Loader />}
                    </animated.div>
                    <animated.div style={contentAnimation}>
                        {!loading && (
                            <>
                                <Header />
                                <Routes>
                                    <Route path="/" element={<Navigate to="/eng" replace />} />
                                    <Route path="/eng/*" element={<HomePage lang="eng" />} />
                                    <Route path="/ru/*" element={<HomePage lang="ru" />} />
                                    <Route path="/pol/*" element={<HomePage lang="pol" />} />
                                    <Route path="*" element={<NotFound />} />
                                </Routes>
                                <Footer />
                            </>
                        )}
                    </animated.div>
                </>
            </Provider>
        </I18nextProvider>
    )
}

export default App