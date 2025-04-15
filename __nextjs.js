
//-------------------------------------------------------//

— Docs —

https://vercel.com/

https://nextjs.org/docs/

https://mongoosejs.com/docs/index.html

https://next-auth.js.org/

Course
https://www.udemy.com/course/nextjs-from-scratch/
https://github.com/bradtraversy/property-pulse-nextjs
Stopped coding at chapt 61

//-------------------------------------------------------//

— Commands —

npm run dev // Start Server

pkill -9 ^next-server // Kill Server

Why Restart Server
https://medium.com/@Sky_Hustle/mastering-next-js-development-when-and-why-to-restart-your-server-522a02c29730

//-------------------------------------------------------//

NextJS CONs:
 - If you want to use Next and get the full features, you're tied into using their own platform i.e. Vercel. https://www.epicweb.dev/why-i-wont-use-nextjs

//-------------------------------------------------------//

— Components: Client vs Server —

Server Components PROs:
 - Reduce Complexity i.e. do backend calls
 - Direct Access to ORM
 - Better SEO
 - Secret Values Not Exposed
 - Can nest Client Components

Client Components PROs:
 - More Interactive
 - Use React Hooks
 
Server Components CONs:
 - Cannot use React Hooks

//-------------------------------------------------------//

— Network Boundary —

Boundary between Client and Server components.

By defaut in NextJS, components are server components.

//-------------------------------------------------------//

— Client Components —

Syntax to add at the beginning of the file:
'use client';

//-------------------------------------------------------//

— Links —

import Link from 'next/link'

<Link rel="stylesheet" href="/properties" >Go To Properties</Link>

