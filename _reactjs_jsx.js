


JSX lets you put markup into JavaScript. 

Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user.


//-------------------------------------------------------//


— Curly braces for JSX —

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


Double curly braces: not a special syntax, but a regular {} object inside the style={ } JSX curly braces.

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


//-------------------------------------------------------//

  
— Conditions in JSX —

"if" does not work in JSX.

// if else
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>

// if wo else
<div>
  {isLoggedIn && <AdminPanel />}
</div>


//-------------------------------------------------------//


— Lists in JSX —

const products = [{ title: 'Cabbage', id: 1 },  { title: 'Garlic', id: 2 },  { title: 'Apple', id: 3 }];

const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);


//-------------------------------------------------------//



