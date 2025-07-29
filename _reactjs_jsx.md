
-------------------------------------------------------

# Docs

https://react.dev/learn/writing-markup-with-jsx

-------------------------------------------------------

# What is JSX —

JSX was invented by a team at Facebook/Meta, the same team that created React. 

JSX stands for JavaScript XML.
JSX is a syntax extension to JavaScript.
JSX lets you put markup into JavaScript. 

-------------------------------------------------------

# Curly braces for JSX

Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user.

```javascript
return (
  <h1>
    {user.name}
  </h1>
);

return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);
```

-------------------------------------------------------

# Double Curly braces for JSX

Not a special syntax, but a regular {} object inside the style={ } JSX curly braces.

```javascript
return (
  <img
    className="avatar"
    src={user.imageUrl}
    style={{
      width: user.imageSize,
      height: user.imageSize
    }}
  />
);
```

-------------------------------------------------------

# Conditions in JSX

"if" does not work in JSX.

if else

```javascript
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
```

if wo else

```javascript
<div>
  {isLoggedIn && <AdminPanel />}
</div>
```

-------------------------------------------------------

# Lists in JavaScript

```javascript
const products = [{ title: 'Cabbage', id: 1 },  { title: 'Garlic', id: 2 },  { title: 'Apple', id: 3 }];

const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);
```

-------------------------------------------------------
