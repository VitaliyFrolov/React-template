import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/App'
import './app/styles/index.scss'
import './app/i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback='loading..'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
)
