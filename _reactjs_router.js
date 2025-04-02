
—Docs—


//-------------------------------------------------------//

—— Router : Problem Statement ——

We wanna build single page apps with ReactJS. What to do?

—> Use RouteJS: library for SPA with client-side routing made easy

—> A library that provides navigational components for React Developers to create single-page applications (SPAs) with dynamic, client-side routing.
 
//-------------------------------------------------------//

—— Router : Basics ——

import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root/> }></Route>
));

//-------------------------------------------------------//

—— Router : Links ——

// Replace <a> tags with <Link> and <NavLink> components so the web browser does NOT reload the page

<Link to={`${article.slug}`}>{article.title}</Link>
<NavLink to="/about">About</NavLink>

// Difference between <Link> and <NavLink> ??

<NavLink> is a special version of the <Link>
Adds styling attributes to the rendered element when it matches the current URL.

//-------------------------------------------------------//

—— Router : Route w Param ——

// Example 1 Param, i.e. /Articles/todayinbarcelona

// App.js
<Route path="Articles/:title" element={ <Article /> } />

// Article Component
import { useParams, Link } from 'react-router-dom';
const { title } = useParams()
...


// Example 2 Params, i.e. /Articles/todayinbarcelona/weather

// App.js
<Route path="Articles/:title/:subtitle" element={ <Article /> } />

// Article Component
import { useParams, Link } from 'react-router-dom';
const { title , subtitle} = useParams()
...


//-------------------------------------------------------//

—— Nested Routes ——

They render both the component AND the subcomponent

// This ONLY renders Secret component
<Route path='/about/secret' element={ <Secret/> }>  />

// This renders MyIndexComponent alongside MyComponent on /somepath ("index" keyword)
<Route path="/somepath" element={ <MyComponent /> }>  /* Renders MyComponent on /somepath */
  <Route index element={ <MyIndexComponent /> }/>  /* Renders MyIndexComponent alongside MyComponent on /somepath */
</Route>
// MyIndexComponent.js must add to the returned JSX (import the element first)
<Outlet />

// This BOTH renders About and Secret components — path is /about/secret
<Route path='/about' element={ <About/> }> {
  <Route path='secret' element={ <Secret/> }>  /> /* Renders for /about/secret */
</Route> 

//-------------------------------------------------------//

—— Index Routes ——

An index route is a special type of nested route that renders on its parent's path using the `index` attribute. 

???

//-------------------------------------------------------//

—— Conditional Nav ——

if (!loggedIn) {
  return (
    <Navigate to='/Sign-Up' />
  )
}

//-------------------------------------------------------//

—— useNavigate() hook ——

useNavigate() hook: imperatively updates the browser location

Why? 
—> allows you to respond immediately to user input without having to wait  (think <a href>)
—> programmatically navigate our users through their history stack

navigate(-1) // navigate to the previous URL in the history stack.
navigate(1) // navigate to the next URL in the history stack.
navigate(-3) // navigate 3 URLs back in the history stack.

What is the diff between navigate('/') and <Navigate /> ? 
One creates an react component, whereas the other programmatically redirects the page.
 
// Example
import { useNavigate } from "react-router-dom";
const navigate = useNavigate()
const handleSubmit = e => {
  e.preventDefault();
  navigate('/');
}
return (
  <form onSubmit={handleSubmit}>
    {/* form elements */ }
  </form>
)

// Example
import { useNavigate } from "react-router-dom";
export const BackButton = () => {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate(-1)}>
      Go Back
    </button>
  )
}

//-------------------------------------------------------//

—— Query Parameters: useSearchParams() hook ——

useSearchParams() hook: grabbing query parameter values
—> returns a URLSearchParams object and a function we can use to update it

import { useSearchParams } from 'react-router-dom'

// Example — Conditional render
import { useSearchParams } from 'react-router-dom';
export const SortedList = (numberList) => {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const sortOrder = searchParams.get('order');
  if (sortOrder === 'ASC') {
    // render the numberList in ascending order
  } else if (sortOrder === 'DESC') {
    // render the numberList in descending order
  } else {
    // render the numberList as is
  }
}

// Example — update the URL to /list?order=ASC
import { useSearchParams } from 'react-router-dom';
// Rendered when a user visits "/list"
export const List = (numberList) => {
  const [ searchParams, setSearchParams ] = useSearchParams();
  <button click={ () => setSearchParams( {order: 'ASC'} ) }> Sort </button>
}

//-------------------------------------------------------//

—— Query Parameters: createSearchParams() ——

createSearchParams(): navigate to a path and include query parameters too

// Example
import { useNavigate, createSearchParams } from 'react-router-dom';
const navigate = useNavigate();
const searchQueryParams = {
  order: 'ASC'
}
const searchQueryString = createSearchParams(searchQueryParams);
navigate({
  pathname:'/list',
  search: `?${searchQueryString}`
})
