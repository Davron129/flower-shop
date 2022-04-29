import Styles from './FindMore.module.scss'
import React from 'react'
import Card from './Card'

function FindMore() {
  return (
    <section className={Styles.findMore}>
        <div className={Styles.container}>
            <Card />
            <Card />
        </div>
    </section>
  )
}

export default FindMore