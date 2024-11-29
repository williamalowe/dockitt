// import Header from '@/components/Header'
import NewDockittModal from '@/components/NewDockittModal'
import Sidebar from '@/components/Sidebar'
import Welcome from '@/components/Welcome'
import React from 'react'

const layout = ({ children }: {
    children: React.ReactNode
}) => {
  return (
    <div className='min-h-screen flex flex-col py-24 px-12'>
        {/* <Header /> */}
        <Sidebar />
        {children}
        <NewDockittModal />
        <div className='absolute top-4 right-4'>
            <Welcome />
        </div>
    </div>
  )
}

export default layout