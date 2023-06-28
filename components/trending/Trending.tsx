import React from 'react'
import Comment from './Comment'

const comments = [
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@rafaquiroga",
        description: "I love hotels at home!",
        id:1,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@sergiopinzon",
        description: "random",
        id:2,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@Ariana Grande",
        description: "I absolutely love this! The colors are amazing, and the design is so eye-catching. Great job!",
        id:3,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@JohnDoe1987",
        description: "Wow, this is incredible! The attention to detail is mind-blowing. I'm truly impressed!",
        id:4,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@EmilySmith23",
        description: "This is pure art! I can't stop admiring it. You have a real talent!",
        id:5,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@JaneDoe",
        description: "Absolutely stunning! This piece speaks to my soul. I'm in awe!",
        id:6,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@LiamBrown",
        description: "I'm blown away by the beauty of this artwork. You have a true gift!",
        id:7,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@OliviaDavis",
        description: "Mesmerizing! The details and the colors are so harmonious. I can't take my eyes off it.",
        id:8,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@NoahWilson",
        description: "This artwork speaks to my soul. It evokes emotions I can't even put into words. Magnificent!",
        id:9,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@EmmaAnderson",
        description: "Absolutely mind-blowing! The creativity and talent displayed here are awe-inspiring.",
        id:10,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@Ariana Grande",
        description: "I absolutely love this! The colors are amazing, and the design is so eye-catching. Great job!",
        id:11,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@JohnDoe1987",
        description: "Wow, this is incredible! The attention to detail is mind-blowing. I'm truly impressed!",
        id:12,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@EmilySmith23",
        description: "This is pure art! I can't stop admiring it. You have a real talent!",
        id:13,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@JaneDoe",
        description: "Absolutely stunning! This piece speaks to my soul. I'm in awe!",
        id:14,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@LiamBrown",
        description: "I'm blown away by the beauty of this artwork. You have a true gift!",
        id:15,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@OliviaDavis",
        description: "Mesmerizing! The details and the colors are so harmonious. I can't take my eyes off it.",
        id:16,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@WilliamTaylor",
        description: "This piece is a true masterpiece. The level of detail and the emotions it evokes are extraordinary!",
        id:17,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@IsabellaMartinez",
        description: "I'm in love with this artwork! It's like stepping into a magical world. You are incredibly talented!",
        id:18,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@rafaquiroga",
        description: "I love hotels at home!",
        id:19,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@sergiopinzon",
        description: "random",
        id:20,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@Ariana Grande",
        description: "I absolutely love this! The colors are amazing, and the design is so eye-catching. Great job!",
        id:21,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@JohnDoe1987",
        description: "Wow, this is incredible! The attention to detail is mind-blowing. I'm truly impressed!",
        id:22,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@EmilySmith23",
        description: "This is pure art! I can't stop admiring it. You have a real talent!",
        id:23,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@JaneDoe",
        description: "Absolutely stunning! This piece speaks to my soul. I'm in awe!",
        id:24,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@LiamBrown",
        description: "I'm blown away by the beauty of this artwork. You have a true gift!",
        id:25,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@OliviaDavis",
        description: "Mesmerizing! The details and the colors are so harmonious. I can't take my eyes off it.",
        id:26,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@NoahWilson",
        description: "This artwork speaks to my soul. It evokes emotions I can't even put into words. Magnificent!",
        id:27,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@EmmaAnderson",
        description: "Absolutely mind-blowing! The creativity and talent displayed here are awe-inspiring.",
        id:28,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@Ariana Grande",
        description: "I absolutely love this! The colors are amazing, and the design is so eye-catching. Great job!",
        id:29,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@JohnDoe1987",
        description: "Wow, this is incredible! The attention to detail is mind-blowing. I'm truly impressed!",
        id:30,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@EmilySmith23",
        description: "This is pure art! I can't stop admiring it. You have a real talent!",
        id:31,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@JaneDoe",
        description: "Absolutely stunning! This piece speaks to my soul. I'm in awe!",
        id:32,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@LiamBrown",
        description: "I'm blown away by the beauty of this artwork. You have a true gift!",
        id:33,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@OliviaDavis",
        description: "Mesmerizing! The details and the colors are so harmonious. I can't take my eyes off it.",
        id:34,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@WilliamTaylor",
        description: "This piece is a true masterpiece. The level of detail and the emotions it evokes are extraordinary!",
        id:35,
    },
    {
        userPic: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        user: "@IsabellaMartinez",
        description: "I'm in love with this artwork! It's like stepping into a magical world. You are incredibly talented!",
        id:36,
    }
];

console.log(comments);



const Trending = () => {
    return (
        <section className='border-l-4 border-indigo-500'>
            <h2 className='trending__title'>What&apos;s trending on HaH</h2>
            <div className="slideshow__container">
                <section className="slideshow">
                    {comments.map(comment => <Comment key={comment.id} userPic={comment.userPic} user={comment.user} description={comment.description} id={comment.id} />)}
                </section>
            </div>

        </section>
    )
}

export default Trending