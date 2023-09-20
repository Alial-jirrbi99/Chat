import React from 'react'
import Card from '../../../../components/Card'

export function RegisterationCard({cardTitle, children}: {children: React.ReactElement, cardTitle: string}) {
  return (
    <Card className='max-w-lg md:max-w-3xl w-full mx-4'>
        <div className='flex gap-5'>
        <img src="https://img.freepik.com/free-vector/man-with-texting-receiving-messages_74855-7613.jpg?w=740&t=st=1685317635~exp=1685318235~hmac=ce7f7d810681e84e9b51a1e21418bef6838f9dffd11dc17d59941108c40c09e9"
         className='w-1/2 border-r-2 -m-4  hidden md:block' />
        <div className='flex flex-col px-10 w-full md:w-1/2 '>
            <div className='header'>
                <img src='https://img.freepik.com/free-vector/messenger-window-icon-vector-illustration-isolated-background_460848-8202.jpg?t=st=1685318370~exp=1685318970~hmac=7c8dbd82b183dc11b350db848e1201ffb311ed97306ad7d99de0080be42450fb' 
                className='w-40 mx-auto'
                />
            <h1 className='text-lg font-bold mb-3'>{cardTitle}</h1>
            </div>
            {children}
        </div>
        </div>
    </Card>
  )
}

export default RegisterationCard