import React, {useEffect, useState} from 'react'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import appwriteService from "../appwrite/config"
import { Button, Container } from '../components'

function Post() {
    const [post, setPost] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)

    const isAuthor = post && userData ? post.userId === userData.$id : false
    const imageUrl = post?.featuredImage ? appwriteService.getFileView(post.featuredImage).toString() : ''

    useEffect(() => {
        if (!slug) {
            navigate('/')
            return
        }

        appwriteService.getPost(slug).then((fetchedPost) => {
            if (fetchedPost) {
                setPost(fetchedPost)
            } else {
                navigate('/')
            }
        })
    }, [slug, navigate])

    const deletePost = async () => {
        const status = await appwriteService.deletePost(post.$id)

        if (status) {
            await appwriteService.deleteFile(post.featuredImage)
            navigate('/')
        }
    }

    return post ? (
        <section className='py-10 sm:py-14'>
            <Container>
                <div className='glass-panel overflow-hidden rounded-[36px]'>
                    <div className='relative px-5 pt-5 sm:px-8 sm:pt-8'>
                        <div className='relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#eadbc8,#f7efe6)]'>
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt={post.title}
                                    className='h-[280px] w-full object-cover sm:h-[420px] lg:h-[520px]'
                                />
                            ) : (
                                <div className='flex h-[280px] items-center justify-center text-sm font-semibold uppercase tracking-[0.24em] text-[var(--muted)] sm:h-[420px] lg:h-[520px]'>
                                    No image available
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='px-5 py-8 sm:px-8 lg:px-14 lg:py-12'>
                        <p className='text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)]'>Feature Story</p>
                        <div className='mt-4 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between'>
                            <h1 className='hero-title text-5xl font-bold leading-none text-[var(--text)] sm:text-6xl lg:text-7xl'>
                                {post.title}
                            </h1>
                            {isAuthor && (
                                <div className='flex flex-wrap gap-3 lg:justify-end'>
                                    <Link to={`/edit-post/${post.$id}`}>
                                        <Button
                                            className='border border-[rgba(93,64,55,0.14)] bg-[rgba(255,250,242,0.96)] text-[var(--text)] shadow-[0_12px_24px_rgba(36,23,17,0.08)] hover:bg-[rgba(191,109,58,0.12)]'
                                            bgColor=''
                                            textColor=''
                                        >
                                            Edit story
                                        </Button>
                                    </Link>
                                    <Button
                                        className='border border-[rgba(164,63,50,0.14)] bg-[rgba(164,63,50,0.08)] text-[#8f3429] shadow-[0_12px_24px_rgba(36,23,17,0.08)] hover:bg-[rgba(164,63,50,0.14)]'
                                        bgColor=''
                                        textColor=''
                                        onClick={deletePost}
                                    >
                                        Delete story
                                    </Button>
                                </div>
                            )}
                        </div>
                        <div className='mt-8 border-t border-[rgba(93,64,55,0.12)] pt-8'>
                            <div className='rich-content'>
                                {parse(post.content)}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    ) : null
}

export default Post
