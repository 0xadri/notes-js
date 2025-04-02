
— Docs —

https://vercel.com/

https://nextjs.org/docs/

https://mongoosejs.com/docs/index.html

https://www.udemy.com/course/nextjs-from-scratch/ —AND— https://github.com/bradtraversy/property-pulse-nextjs
stopped at chapt 20

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

— Backticks —

ES6 feature, called template literals.

Use Cases: 
 - interpolate values into strings dynamically
 - JSX syntax to inject values dynamically into the render method of the component
 - allowed to split across multiple lines

Notice the extra $ Sign:

<div className={`${backgroundColor} p-6 rounded-lg shadow-md`}></div>

<img src={`/images/properties/${property.images[0]}`} />

//-------------------------------------------------------//

— Links —

import Link from 'next/link'

<Link rel="stylesheet" href="/properties" >Go To Properties</Link>

