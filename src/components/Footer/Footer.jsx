import React from 'react'

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__tag'>
        Created by{' '}
        <a
          href='https://joelborofsky.com'
          target='_blank'
          className='footer__link'
        >
          BorofskyDev
        </a>
      </p>
      <div className='footer__attr'>
        <a target='_blank' href='https://icons8.com/icon/rR430TkIyuJu/food'>
          Food
        </a>{' '}
        icon by{' '}
        <a target='_blank' href='https://icons8.com'>
          Icons8
        </a>
      </div>
    </footer>
  )
}
