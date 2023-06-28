import Image from 'next/image';
import React from 'react'

interface CommentProps {
    userPic: string;
    user: string;
    description: string;
    id:number;
}

const Comment = ({ user, description, userPic, id }: CommentProps) => {

    return (
        <article key={id} className='flex p-3 my-3 trending__comment'>
            <Image className='rounded-full h-12 w-12 m-1' width={500} height={500} src={userPic} alt="img" />
            <div className="flex flex-col">
                <p>{user}</p>
                <p>{description}</p>
            </div>
        </article>
    )
}

export default Comment
