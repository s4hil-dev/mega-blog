import React from 'react'
import {Container, Postform} from "../components"
const AddPost = () => {
  return (
    <section className='py-10 sm:py-14'>
        <Container>
            <div className='mb-8'>
                <p className='text-xs font-semibold uppercase tracking-[0.34em] text-[var(--muted)]'>Create</p>
                <h1 className='hero-title mt-3 text-5xl font-bold leading-none text-[var(--text)] sm:text-6xl'>Publish something worth rereading</h1>
            </div>
            <Postform />
        </Container>
    </section>
  )
}

export default AddPost
