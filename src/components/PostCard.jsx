import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  const imageUrl = featuredImage ? appwriteService.getFileView(featuredImage).toString() : ''
    
  return (
    <Link to={`/post/${$id}`}>
        <article className='glass-panel group h-full overflow-hidden rounded-[28px] p-4 transition duration-300 hover:-translate-y-1'>
            <div className='relative mb-5 aspect-[4/3] overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,#eadbc8,#f7efe6)]'>
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={title}
                        className='h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]'
                    />
                ) : (
                    <div className='flex h-full items-center justify-center text-sm font-semibold uppercase tracking-[0.24em] text-[var(--muted)]'>
                        No image
                    </div>
                )}
            </div>
            <p className='mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]'>Story</p>
            <h2 className='section-title text-3xl font-semibold leading-none text-[var(--text)]'>{title}</h2>
        </article>
    </Link>
  )
}


export default PostCard
