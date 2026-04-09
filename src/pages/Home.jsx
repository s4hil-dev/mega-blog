import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import appwriteService from "../appwrite/config";
import {Button, Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [isLoaded, setIsLoaded] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const authStatus = useSelector((state) => state.auth.status)
    const postsPerPage = 6

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
            setIsLoaded(true)
            setLoading(false)
        })
    }, [])

    const totalPages = Math.max(1, Math.ceil(posts.length / postsPerPage))
    const startIndex = (currentPage - 1) * postsPerPage
    const currentPosts = posts.slice(startIndex, startIndex + postsPerPage)

    const changePage = (page) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    if (loading) {
        return (
            <section className="w-full py-12 sm:py-16">
                <Container>
                    <div className="glass-panel rounded-[34px] px-6 py-14 text-center sm:px-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">MegaBlog</p>
                        <h1 className="hero-title mt-4 text-5xl font-bold leading-none text-[var(--text)] sm:text-6xl">
                            Loading stories...
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
                            Pulling together the latest posts for your reading room.
                        </p>
                    </div>
                </Container>
            </section>
        )
    }
  
    if (posts.length === 0) {
        return (
            <section className="w-full py-12 sm:py-16">
                <Container>
                    <div className="glass-panel rounded-[34px] px-6 py-14 text-center sm:px-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">MegaBlog</p>
                        <h1 className="hero-title mt-4 text-5xl font-bold leading-none text-[var(--text)] sm:text-6xl">
                            {authStatus ? "Your journal is ready for its first post" : "Login to unlock the reading room"}
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
                            {authStatus
                                ? "Start with one thoughtful article and the homepage will turn into a living library."
                                : "Sign in to browse published stories, open full articles, and begin publishing your own work."}
                        </p>
                    </div>
                </Container>
            </section>
        )
    }

    return (
        <section className='w-full py-10 sm:py-14'>
            <Container>
                <div className='mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
                    <div>
                        <p className='text-xs font-semibold uppercase tracking-[0.34em] text-[var(--muted)]'>Published Stories</p>
                        <h1 className='hero-title mt-3 text-5xl font-bold leading-none text-[var(--text)] sm:text-6xl'>A warmer home for long-form writing</h1>
                    </div>
                    <p className='max-w-xl text-base leading-8 text-[var(--muted)]'>
                        Browse recent articles with calmer spacing, stronger hierarchy, and more readable cards.
                    </p>
                </div>

                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
                    {currentPosts.map((post, index) => (
                        <div
                            key={post.$id}
                            className={isLoaded ? 'post-reveal post-reveal-visible' : 'post-reveal'}
                            style={{ animationDelay: `${index * 90}ms` }}
                        >
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>

                <div className='mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between'>
                    <p className='text-sm font-medium text-[var(--muted)]'>
                        Showing {startIndex + 1}-{Math.min(startIndex + postsPerPage, posts.length)} of {posts.length} posts
                    </p>
                    <div className='flex flex-wrap items-center justify-center gap-2'>
                        <Button
                            bgColor=''
                            textColor=''
                            className='border border-[rgba(93,64,55,0.14)] bg-[rgba(255,250,242,0.96)] text-[var(--text)] shadow-[0_10px_22px_rgba(36,23,17,0.08)] disabled:cursor-not-allowed disabled:opacity-50'
                            disabled={currentPage === 1}
                            onClick={() => changePage(currentPage - 1)}
                        >
                            Previous
                        </Button>
                        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                            <Button
                                key={page}
                                bgColor={page === currentPage ? 'bg-[var(--accent)]' : ''}
                                textColor={page === currentPage ? 'text-white' : ''}
                                className={page === currentPage
                                    ? 'min-w-11 shadow-[0_10px_22px_rgba(191,109,58,0.24)]'
                                    : 'min-w-11 border border-[rgba(93,64,55,0.14)] bg-[rgba(255,250,242,0.96)] text-[var(--text)] shadow-[0_10px_22px_rgba(36,23,17,0.08)]'}
                                onClick={() => changePage(page)}
                            >
                                {page}
                            </Button>
                        ))}
                        <Button
                            bgColor=''
                            textColor=''
                            className='border border-[rgba(93,64,55,0.14)] bg-[rgba(255,250,242,0.96)] text-[var(--text)] shadow-[0_10px_22px_rgba(36,23,17,0.08)] disabled:cursor-not-allowed disabled:opacity-50'
                            disabled={currentPage === totalPages}
                            onClick={() => changePage(currentPage + 1)}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Home
