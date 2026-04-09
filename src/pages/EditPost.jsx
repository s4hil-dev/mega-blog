import React, {useEffect, useState} from 'react'
import {Container, Postform} from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((fetchedPost) => {
                if (fetchedPost) {
                    setPost(fetchedPost)
                } else {
                    navigate('/')
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    return post ? (
        <section className='py-10 sm:py-14'>
            <Container>
                <div className='mb-8'>
                    <p className='text-xs font-semibold uppercase tracking-[0.34em] text-[var(--muted)]'>Editor</p>
                    <h1 className='hero-title mt-3 text-5xl font-bold leading-none text-[var(--text)] sm:text-6xl'>Refine your story</h1>
                </div>
                <Postform post={post} />
            </Container>
        </section>
    ) : null
}

export default EditPost
