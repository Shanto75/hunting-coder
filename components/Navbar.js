import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
    return (
        <>
            <style jsx>
                {`
                    .navbar{
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-content: space-around;
                    }
                    ul {
                        list-style-type: none;
                        margin: 0;
                        padding: 0;
                      }
                      li {
                        display: block;
                        padding: 8px;
                      }
                `}
            </style>
            <nav className='nav'>
                <ul className='navbar'>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/about"><li>About</li></Link>
                    <Link href="/blogs"><li>Blogs</li></Link>
                </ul>
            </nav>
        </>
    )
}
