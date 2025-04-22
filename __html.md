source https://sites.google.com/d/1d5qH_2hDXzyEMFW-hlQwrIIAQg8ekpnT/p/1urBHdUkq1ORagINyy9RRAA4zJF7r295p/edit

//-------------------------------------------------------//

# Developer Tool

Web Developer is a Firefox that adds various web developer tools to a browser.

This tool makes front end development much easier (debugging features, live HTML code modification, etc).

http://chrispederick.com/work/web-developer/

https://developers.google.com/chrome-developer-tools/

//-------------------------------------------------------//

# Force Browser to Refresh its Cache

When you change your HTML/CSS code your browser may not display the changes after refreshing the page. This is because it gets the page (or some of the page info) from its cache.

In this case you want to force the browser to refresh its cache using:
 - ctrl + reload button
 - ctrl + F5 : windows IE & windows chrome
 - ctrl + shift + r : Firefox

//-------------------------------------------------------//

# HTML validator

You need to validate your pages to make sure there is no incorrect/invalid HTML.

Official HTML validator: http://validator.w3.org/

Firefox extension - HTML validator (and also corrector): http://users.skynet.be/mgueury/mozilla/index.html

//-------------------------------------------------------//

# CSS validator

You also need to validate your CSS to make sure there is no incorrect/invalid CSS.
Official CSS validator: W3C CSS Validation Service

# HTML Doctype

Document Type Definition (or DTD) defines what tags, attributes and values are valid for a particular type of HTML.

If you want a web page to appear correctly and consistently across web browsers you must include a doctype declaration at the beginning of this page.

The doctype declaration must be the first line in the HTML file.

If the doctype is mistyped or incorrect, the web browsers reading your page will most probably put themselves in an altered state called quirks mode.

Quirks mode is when a browser puts itself in a mode where it'll interpret the HTML as if it was written years ago (circa 2005 for instance).

Read more about Quirks Mode and Strict mode on www.quirksmode.org - quirks mode and strict mode

Official DTD lists:

www.w3.org - Valid DTD list

# IE8 Compatibility View & Quirks mode

Quirks mode: In IE9 & earlier versions, quirks mode restricted the webpage to the features supported by Microsoft Internet Explorer 5.5

Compatibility view: For different reasons IE8 can put itself in a Compatibility View which will make IE pretend to be in IE7.

This can happen if:
 - the user browsing your site with IE8 clicks on "compatibility view" button (Tools >> Compatibility View)
 - Microsoft puts your website on their Compatibility View List

In IE8 you can see your "Browser Mode" and "Document Mode" in the top bar of the Developer Tools (F12 or "Tools" >> "Developer Tools")

Code to instruct IE8 to ignore Compatibility View and Compatibility View List

<meta http-equiv="X-UA-Compatible" content="IE=8" />

You want to put this in the <head> section of your HTML page (before the CSS and JavaScript includes?? as the first thing in the <head> element?? "non expected" code above the header tag could also jeopardise this instruction).

# IE9 Compatibility View & Quirks mode

Quirks mode: In IE9 & earlier versions, quirks mode restricted the webpage to the features supported by Microsoft Internet Explorer 5.5

Compatibility view: Similarly to its previous version, IE9 can also put itslef in a Compatibility View or Quirks Mode which will make IE pretend to be in IE8, IE7 or older.

Code to instruct IE9 to ignore Compatibility View & Quirks mode

To force to be in the latest version standard mode available

<meta http-equiv="X-UA-Compatible" content="IE=edge" >

To force to be in IE9 standard mode whatever the directive (not sure what this implies..!)

<meta http-equiv="X-UA-Compatible" content="IE=9" >

To force to be in IE8 standard mode (if avaibable??)

<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8" >

To force to be in IE8 standard mode whatever the directive (not sure what this implies..!)

<meta http-equiv="X-UA-Compatible" content="IE=8" >

You want to put this in the <head> section of your HTML page (before the CSS and JavaScript includes?? as the first thing in the <head> element?? "non expected" code above the header tag could also jeopardise this instruction).

Read more: 
 - http://stackoverflow.com/questions/6771258/whats-the-difference-if-meta-http-equiv-x-ua-compatible-content-ie-edge
 - http://www.mat-wright.com/2011/02/internet-explorer-9-compatibility-quick.html

Rendering engines

Displays the HTML and/or Flash and process the JavaScript.

Some rendering engines:
 - WebKit - Safari & used by Chrome was until version 27 (June 2013)
 - Blink - since July 2013: Google Chrome (version 28+), & Opera (15+). (Blink is forked from WebKit)
 - Gecko - Mozilla Firefox
 - Trident - Internet Explorer
 - KHTML - Konqueror web browser
 - Presto - used by Opera until version 14 (June 2013)

viewport: 

This is the display area of a web browser window.

HTML comments

<!-- ...some HTML code... -->

CSS comments
/* ...some CSS code... */

HTML special characters

These are the characters that need to be coded for HTML, such as "<", "&" and "©".

Read the official reference on www.w3.org - entities

Read more about HTML special characters on www.tedmontgomery.com

HTML most common tags

`<h1>` to `<h6>` to indicate keywords (not for styling "only")

`<div>`

`<a>`

`<span>`

`<dl>` along with its children `<dt>` and `<dd> `http://reference.sitepoint.com/html/dl

`<ul>` and `<ol>` along with their children `<li>`

`<strong>` & `<em>` also to indicate keywords (not for styling "only")

HTML IE conditional statement:

> <!--[if IE ]>
>   <link href="ie_stylesheet.css" rel="stylesheet" type="text/css">
> <![endif]-->

In this case we use it to import a stylesheet for specific browser.

more on msdn.microsoft.com

Styling "insertion" techniques

1. HTML Include CSS directly in the HTML page (Internal Style Sheet)

Add the following in the <head> element of your HTML page

For all type of media, these formats are valid:

> <style type="text/css">
>   ...some css here...
> </style>

/* Is equivalent to */

> <style type="text/css" media="all">
>   ...some css here...
> </style>

> @media all{
>   ...some css here...
> }

For a specific media type (print for instance), these 2 formats are valid:

> <style type="text/css" media="print">
>   ...some print specific style css here...
> </style>
> @media print{
>    ...some print specific style css here...
> }

2. HTML Include CSS file (External Style Sheet)

Add the following in the <head> element of your HTML page

> <link rel="stylesheet" type="text/css" href="classic.css" />
> @import url("myStyleSheet.css");
> @import "myStyleSheet.css";
> @import "./css/myPrintMediaStyleSheet.css" print;

3. CSS Include CSS file

> @import url("header.css");
> @import url("mainContainer.css");

Thanks to this method you can group all your (non conditional) css import in one css file

Read more on including Internal and External style sheets:
 - htmldog.com - atrules
 - w3.org - atrules

4. Include the style directly in the HTML (Inline styling)

> <span style="color:red; font:bold;">my text in bold red</span>

This allows you to style directly a specific element. It is recommended to avoid this technique.

It is quite handy to use this technique to quickly have a rough idea of the look of an element when styling it though. The styles used can then be moved to a style sheet.

CSS - Inheritance

Some CSS properties are inherited from a parent element. But many CSS properties don't pass down to descendant tags at all.

As a general rule, properties that affect the placement of elements on the page or the margins, background colors, and borders of elements aren't inherited.

In the case of any conflicts from inherited properties, the nearest ancestor wins.

You can force an element to inherit a property from his parent element by using inherit keyword

> em {
>   border: inherit;
> }

Read more on
 - www.w3.org - inheritance
 - www.dnncreative.com - CSS and inheritance

CSS - Styles priorities

CSS properties from the style attribute (called inline styling) always have priority on properties from any style sheet.
If two styles from a same style sheet apply to a same element (ie. the first specifies "font:10px" and the second "font:20px"), the one appearing the last in the style sheet wins ("font:20px" in our example).
If two styles from two different style sheets apply to a same element, the style that appears last will be applied. Which means, the style that is in the style sheet included last will have the priority.
For this reason, you should/must add your external style sheet first and insert your internal styles after.
Properties from a style specifically applied to a tag beat out any inherited properties.
If more than one style applies to a particular element, then a web browser combines the properties of all those styles, as long as they don't conflict.
CSS - Specifity
This is the way the "strength" or priority of a style is calculated.
An approximation to calculate it is to count:
+ 1 point for a tag selector
+ 10 points for a class selector
+ 100 points for an ID selector
+ add those points if a selector is a descendant selector (ie. ".my-class-name ul a" equals to 12 points)
Read more on coding.smashingmagazine.com - specificity
CSS - !important
Including !important after a property value means that specific property always wins (wherever your stylesheet is).
When two styles both have !important applied to the same property, the more specific style's !important rule wins.
It generally best to avoid this technique as you may want to override this property someday.
CSS - Reset Stylesheet
The reset stylesheet is very important. It is used to override browsers default styles of some elements to your own custom values. The aim is to reduce browsers inconsistencies.
www.cssreset.com - reset stylesheet
<style type="text/css">
  /* 
     from http://meyerweb.com/eric/tools/css/reset/ 
     2011/01/26 - License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
display: block;
  }
  body {
line-height: 1;
  }
  ol, ul {
list-style: none;
  }
  blockquote, q {
quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
content: '';
content: none;
  }
  table {
border-collapse: collapse;
border-spacing: 0;
  }
  *:focus {
        outline: none;
  }
</style>
HTML/CSS IDs and Classes
Allowed characters: must begin with a letter & cannot contain symbols like &, *, or !
Best practice is to never use IDs, but if you do, an ID must be applied to:
- an element appearing only once per page.
- link to a specific part of a page
- use JavaScript's getElementById() function
HTML element with an ID applied to it
<div id="unique-page-results">
</div>
CSS for the element of id "results"
#unique-page-results{
  border: 1px solid red;
}
Class can be applied to:
- several elements in the same page 
- an element appearing several times in the same page
HTML element with a class applied to it
<div class="massive-font">
</div>
CSS for the element of id "results"
.massive-font{
   font:35px;
}
Multiple classes assigned to an element
An element can have multiple class name to apply several styles "at the same time".
HTML div element
<div class="black-border grey-background">
</div>
css style for each class
.black-border {
   border: 1px solid black;
}
.grey-background {
   background-color: grey;
}
CSS selectors, pseudo classes & pseudo elements


<table xmlns="http://www.w3.org/1999/xhtml" border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px" data-table-local-id="table-2">
  <tbody>
    <tr>
      <td style="text-align:center;width:256px;height:15px">
        <font size="2">
          <b>Expression</b>
        </font>
      </td>
      <td style="text-align:center;width:463px;height:15px">
        <font size="2">
          <b>Returns</b>
        </font>
      </td>
    </tr>
    <tr>
      <td style="text-align:left;width:256px;height:15px">
        <font size="2">
           *
          <br />
        </font>
      </td>
      <td style="text-align:left;width:463px;height:15px">
        <font size="2"> all the elements</font>
      </td>
    </tr>
    <tr>
      <td style="text-align:left;width:256px;height:15px">
        <font size="2"> elem</font>
      </td>
      <td style="text-align:left;width:463px;height:15px">
        <font size="2"> elements called elem</font>
      </td>
    </tr>
    <tr>
      <td style="text-align:left;width:256px;height:15px">
        <font size="2"> #myId</font>
      </td>
      <td style="text-align:left;width:463px;height:15px">
        <font size="2"> element with id "myId"</font>
      </td>
    </tr>
    <tr>
      <td style="text-align:left;width:256px;height:15px">
        <font size="2"> .myClass</font>
      </td>
      <td style="text-align:left;width:463px;height:15px">
        <font size="2"> element with class "myClass"</font>
      </td>
    </tr>
    <tr>
      <td style="text-align:left;width:256px;height:23px">
        <font size="2"> elem[attr]</font>
      </td>
      <td style="text-align:left;width:463px;height:23px">
        <font size="2"> attribute selector: element called "elem" with attribute "attr" specified</font>
      </td>
    </tr>
    <tr>
      <td style="text-align:left;width:256px;height:31px">
        <font size="2"> elem[attr="myVal"]</font>
      </td>
      <td style="text-align:left;width:463px;height:31px">
        <font size="2">
           attribute selector: element called "elem" with attribute "attr" with value "myVal"
          <br />
          <br />
        </font>
      </td>
    </tr>
    <tr>
      <td style="width:256px;height:31px">
         
        <span style="font-size:small">elem </span>
        [
        <span style="font-size:small">attrOne</span>
        ="valOne"][attrTwo="valTwo"]
      </td>
      <td style="width:463px;height:31px">
         
        <span style="font-size:small">attribute selector: element called "elem" with attribute "attrOne" with value "valOne" AND </span>
        <span style="font-size:small">attribute "attrTwo" with value "valTwo"</span>
      </td>
    </tr>
    <tr>
      <td> div[class^="status-"], div[class*=" status-"]</td>
      <td>
         select all the divs having a class starting by "status-"
        <br />
         see 
        <a href="http://stackoverflow.com/a/8588532/759452" rel="nofollow" target="_blank">http://stackoverflow.com/a/8588532/759452</a>
      </td>
    </tr>
    <tr>
      <td style="text-align:left;width:256px;height:16px">
        <font size="2"> elem otherEl</font>
      </td>
      <td style="text-align:left;width:463px;height:16px">
        <font size="2"> element "otherEl" contained into element "elem"</font>
      </td>
    </tr>
    <tr>
      <td style="text-align:left;width:256px;height:16px">
        <font size="2"> elem &gt; otherEl</font>
      </td>
      <td style="text-align:left;width:463px;height:16px">
        <font size="2"> element "otherEl" direct child to element "elem"</font>
      </td>
    </tr>
    <tr>
      <td style="text-align:left;width:256px;height:18px">
        <font size="2"> elem + otherEl</font>
      </td>
      <td style="text-align:left;width:463px;height:18px">
        <font size="2"> element "otherEl" immediately following an element "elem"</font>
      </td>
    </tr>
    <tr>
      <td style="text-align:left;width:256px;height:15px">
        <font size="2"> elem ~ otherEl</font>
      </td>
      <td style="text-align:left;width:463px;height:15px">
        <font size="2">element "otherEl" following an element "elem" </font>
      </td>
    </tr>
  </tbody>
</table>


Pseudo classes (or pseudo elements) are used to select an element dynamically: in a specific state/position for instance.
.my-class-name:hover{
   background-color: green;
   color: white;
}
:hover let's you style an element differently when the user hovers his mouse on an element
.basket-items > li:first-child{
   border: solid grey 1px;
}
:first-child is a CSS2 selector (supported by IE8)
.basket-items :first-child{
   border: solid grey 1px;
}
In this case the first child can be of any type
.players-ranking li:last-child{
   background-color: red;
}
:last-child was added in the CSS3 specification (not supported by IE<9)
.bonus:before{
   content: "Bonus:";
}
:before let you add content preceding a given element
Examples of attribute selectors
.wicked-form input[type="text"]{
   width: 100px;
   min-width: 100px;
}
[type="text"] selects text boxes in form with class="wickedForm".
a[href^="http://"], a[href^="https://"] {
   background-color: red;
}
a[href^="http://"] and a[href^="https://"] selects all the links starting by "http://" or "https://", in other word: all the absolute links. "^=" means "starts with".
a[href$=".pdf"]{
   background: url(../img/pdf_icon.png) no-repeat 0 -10px;
}
a[href$=".pdf"] selects all links finishing by ".pdf". "$=" means "finish by".
More about attribute selectors on
     www.w3.org/TR/CSS2/selector.html#attribute-selectors
     http://css-tricks.com/5591-attribute-selectors/
     http://stackoverflow.com/questions/3338680/css-selector-by-class-prefix/
There are more pseudo classes such as: :first-line, :first-letter, :focus
Pseudo classes and pseudo elements are distinguished in CSS3 specification. Pseudo elements are selected using 2 semi-columns such as ::first-child
CSS Colors - Text, Background, Borders...
When adding/editing colors, you have the choice between 3 formats:
Hexadecimal  - supported by old IE browsers
RGBa            - supported by IE9+, see http://css-tricks.com/rgba-browser-support/
HSL & HSLa  - supported by IE9+, see caniuse.com/#search=hsl and browsersupport.net/CSS/hsl() and also css-tricks.com/yay-for-hsla
HSLa color pickers: 
css-tricks.com/examples/HSLaExplorer 
hslpicker.com 
mattgroeber.com/utilities/random-color-generator
mothereffinghsl.com
HSLa: As stated by CSS Tricks "The real appeal of HSLa is that it makes more intuitive sense what changing the values will do to the color. Increasing the second value will increase the saturation of that color. Decreasing the third value will decrease the lightness of that color. That makes creating your own color variations on the fly way easier. I would wager that most of us can't create nice and consistent color variations like this using the RGBa model. The HSLa model also makes changing color values programatically much easier."
CSS Shorthand properties
CSS Shorthand properties let you set the values of several other CSS properties simultaneously.
see https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties
CSS Font & Text Properties
Font shorthand property. 
font: italic small-caps normal 0.75em/1.50em Arial, Helvetica, sans-serif;
    font:      font-style font-variant    font-weight font-size/line-height font-family/ies
This shortcut declaration must separate each value by a space except for the font-size/line-height properties. 
This shortcut declaration must include at least font-size and font-family.
pxToEm.com - calculate the font size to apply in px/em to a text in order to get to a particular font size in px
Some more Font/Text related properties
color: black;
font-family: Arial;
font-size: 1.8em;
font-weight: 500;
font-weight: bold;
font-style: italic;
font-variant: small-caps;  /* slightly downsized capital letters */
text-transform: uppercase;
text-decoration: none;
text-align: justify;
vertical-align: top;
letter-spacing: 2px;    /* space between letters */
word-spacing: 2px;    /* space between words */
line-height: 140%;    /* adjusts space between lines of text (the leading), use % or em as it changes with the text's font-size property, default line-height is usually 120% */
text-indent: 20px;    /* adds a first-line indent. Best to use px */
white-space:nowrap;
:first-line{}    /* selector used to format the first line of a paragraph */
:first-letter{}   /* selector used to format the first letter of a paragraph */
Serif fonts have tiny "feet", these are mostly used for long passages of text.
Sans-Serif fonts haven't got those tiny "feet", these are often used for headlines.
Monospaced fonts has each letter with the same width., these are often used for computer code.
A font present in windows OS may not be present in Mac or Linux OS. W3C doesn't have a standard list simply because they aren't the ones who determine what fonts are installed on what computers/OS.
Some of the most common fonts: Verdana, Arial, Courier New, Georgia, Comic Sans MS, ...
Capitalize the 1st letter & lower case the rest: stackoverflow.com/questions/22566468/first-letter-capitalize-and-other-letters-in-lower-case-in-css
Read more:
   stackoverflow.com/questions/13198119/safe-fonts-all-browser-and-os
   webspaceworks.com/resources/fonts-web-typography/48/
text-shadow is a property from CSS3 that adds shadows to your text
     Read more on mozilla.org - text-shadow
CSS Fonts imported
@font-face{
  font-family: ca_bndboldweb;
  src: local(ca_bndboldweb), url('../css/fonts/ca_bndboldweb.otf');
}
@font-face allows you to host your font on the server side, the client's browser will download it when visiting your website if it does not already has it on the computer.
Read more about @font-face on
     fonts available for @font-face embedding
     SixRevisions.com/css/font-face-guide
     www.FontSpring.com/blog/the-new-bulletproof-font-face-syntax
     www.FontSpring.com/blog/further-hardening-of-the-bulletproof-syntax
     Cufon - Fast text replacement with canvas and VML (no Flash or images required: JavaScript based solution)
     TypeKit - javascript based solution for fancy fonts 
     www.myfonts.com/WhatTheFont/ - find out what font is used by submitting an image
CSS Align text horizontally
text-align:center;
text-align:left;
text-align:right;
text-align:justify;
Stretches the lines so that each line has equal width (like in newspapers)
text-align:inherit;
Value should be inherited from the parent element
CSS Lists
list-style: disc url(/css/img/myCoolBullet.png) inside;  /* shorthand declaration */
    list-style:   list-style-type     list-style-image     list-style-position ;
The list-style-type specified will only be displayed if the the list-style-image specified can't be found.
The above shorthand declaration is the same as:
list-style-type: disc;
list-style-position: inside;
list-style-image: url(/css/img/myCoolBullet.png);
Read more:
    http://css-tricks.com/almanac/properties/l/list-style/
    http://stackoverflow.com/questions/4098195/can-ordered-list-produce-result-that-looks-like-1-1-1-2-1-3-instead-of-just-1
    http://stackoverflow.com/questions/10877/how-can-you-customize-the-numbers-in-an-ordered-list
CSS Margins and Paddings
The padding sets the space between the content, border & edge of the background.
padding: 2px 4px 2px 4px;
   padding: padding-top padding-right padding-bottom padding-left ;
This declaration shortcut defines the padding on each side of our element "clockwise".
The margin sets the space between an element's border and another.
margin: 10px 4px 0px 4px;
   padding: margin-top margin-right margin-bottom margin-left ;
Like the padding declaration shortcut, we define the margin on each side of our element "clockwise".
CSS Box Model

Vertical margin can collapse
A browser could only be using the top or bottom margin of one of two elements when vertical margins touch, even when one element is inside another, instead of adding the two margins. A browser would apply the larger margin of the two.
You can use top/bottom padding to avoid this.
CSS Display property - inline & block elements
HTML elements have a default value for their display property to either block or inline.
display: inline;
Inline elements are displayed one after another. Inline elements do not create a line break before or after them.
Width on inline elements have no effect.
Top & bottom margin & padding have no "regular" effect on inline elements. Instead of "moving" itself & elements around the inline element, that top & bottom padding/margin just causes borders and background to overlap elements above and below the inline element.
display: block;
Block elements create a line break before and after them.
default block elements' width is 100% (of their parent element)??
display: inline-block;
Leaves the element inline, but paddings, margins, borders, width and height are applied.
display: none;
htmldog.com - display property
Block level elements
CSS - Remove Whitespace Between Inline-Block Elements
css-tricks.com/fighting-the-space-between-inline-block-elements
davidwalsh.name/remove-whitespace-inline-block
stackoverflow.com/questions/5078239/how-to-remove-the-space-between-inline-block-elements
CSS - hide/remove element from page
visibility: hidden;
This technic just hides the element but leaves a hole in the space it woul normally appear
display: none;
This technic removes the element completely from the page
CSS Width and Heights
width: 200px;
min-width: 150px;
max-width: 300px;
height: 40px;
min-height: 30px;
max-height:60px
You might want to use the min/max properties to make sure an element does not "collapse" or become too big.
A box (the total space taken by an element) "actual" or "total" width and height is the total of the widths of the margin, borders, padding and width/height properties.
However, you can use Box-sizing to force the "element width + padding width" to be equal to the width you defined for your element.
-moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
box-sizing: border-box;
see www.paulirish.com/2012/box-sizing-border-box-ftw and css-tricks.com/box-sizing
warning: min-width & max-width do not work with box-sizing: border-box is a known bug in IE8 and Firefox 16&below. see http://stackoverflow.com/questions/9508262/min-height-min-width-doesnt-respect-box-sizing-in-some-browsers and http://stackoverflow.com/questions/11608291/box-sizing-border-box-for-ie8
CSS Position property
Unlike with float-based layout, CSS gives no way to clear the bottom of a positioned column.
position: static;
This is the default positioning of all HTML elements.
position: relative;
TBC: When you set an element's position to relative and then place it (maybe using the left and top properties), it moves relative to its current position and leaves a big hole where it would've been if you hadn't positioned it at all.
You want to set an element's position property to relative if you need to place (absolutely positioned?) elements relatively to it. These children-elements will have their position property set to absolute.
position: absolute;
Absolutely positioned elements are removed from the flow of the HTML.
Absolutely positioned elements put themselves above any other elements. Unless this element is a sub-element of a relatively/absolutely/fixed positioned element.
Absolute positioning let you place elements on a page regardless of their HTML order.
When an element is absolutely positioned, it is positioned relative to the viewport if it is not in any other element that is absolutely, relatively or fixed positioned. 
If 2 absolutely positioned elements are not positioned specifically (as in, using px for instance), the one that appear latest in the HTML will be on top of the other.
Specify an absolutely positioned element's location using left, right, top or bottom (pixels, em, or percentages)
position: fixed;
Like absolute positioning, fixed positioned elements are removed from the flow of the HTML. It floats above other parts of the page.
Like absolute positioning, fixed positioning let you place elements on a page regardless of their HTML order.
Unlike absolute positioning, fixed positioning is always relative to the browser window.
How to keep a footer at the bottom of the page
ryanfait.com/html5-sticky-footer
matthewjamestaylor.com - keeping footers at the bottom of the page
css-tricks.com/snippets/css/sticky-footer
jsbin.com/gawuqejaqugu/6
CSS z-index property
z-index only effects elements that have a position value other than static (the default)
z-index: 10;
position: relative; /* anything but static */
The z-index property in CSS controls the vertical stacking order of elements that overlap.
see http://css-tricks.com/almanac/properties/z/z-index/
CSS Float property
The float property moves an element to either the left or right. The content below the floated element (in the document) moves up & wraps around the floated element.
The float property can be applied to all types of positioning (static, absolute, relative & fixed).
Possible float values:
float:left;
float:right;
float:none;
Floating any element makes it a block-level element (because it needs a set width).
The width property should be set on an element that is floated. This allow control on how much space is left to the content below it to move up and wrap around it.
The clear property should be set on an element so that it does not wrap around a preceding floated element.
clear:left;
drop the element if wrapping around a left-floated elements
clear:right;
drop the element if wrapping around a right-floated elements
clear:both;
drop the element if wrapping around a left-floated or right-floated elements
clear:none;
turns off clearing, wraps the element around left-floated or right-floated elements
more about float on guistuff.com - floating elements
clear fix hacks:
This is to make sure that the height of a parent element is the total of its children elements height, even if these are floating.
http://www.quirksmode.org/css/clearing.html - clear fix hack (cross-browser) using overflow:hidden on parent
NicolasGallagher.com/micro-clearfix-hack - clear fix hack (cross-browser) using clear:both after last child
CSS Overflow property
overflow: visible;
Browser's default value
overflow: scroll;
Add scroll bars.
overflow: auto;
Adds scroll bars only if needed.
overflow: hidden;
Hides any content that extends outside the box.
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;     /** IE6+, Firefox 7+, Opera 11+, Chrome, Safari **/
-o-text-overflow: ellipsis;  /** Opera 9 & 10 **/
Hides any content that extends outside the box on the X axis. When this content is text, it adds 3 dots "..."
Read more:
css-tricks.com/the-css-overflow-property
stackoverflow.com/questions/802175/truncating-long-strings-with-css-feasible-yet (text-overflow x-browser support)
http://css-tricks.com/line-clampin/ - ellipsis on several lines
HTML/CSS Dynamically (not a set width) Center (horizontally) a Div within a Div
<div class="outer">
  <div class="inner">
  </div>
</div>
.outer {
  text-align: center;
  width:100%
  background-color: red;
}
.inner {
  display: inline-block;
  background-color: blue;
}
inline elements can be centered with text-align ;)
read more about "centering the unknown"
css-tricks.com/centering-css-complete-guide
Centering horizontally & vertically
coding.smashingmagazine.com/2013/08/09/absolute-horizontal-vertical-centering-css
css-tricks.com/centering-css-complete-guide
Make several div positioned one next to another be of the same height
This is normally only achievable using tables. Hence you must declare in CSS display:table-cell;
read more:
http://stackoverflow.com/questions/1056212/how-do-i-achieve-equal-height-divs-positioned-side-by-side-with-html-css
http://stackoverflow.com/questions/2715360/html-css-set-div-to-height-of-sibling
http://stackoverflow.com/questions/22253122/make-variable-number-of-divs-positioned-side-by-side-of-equal-height-with-html-c
css-tricks.com/equal-height-blocks-in-rows (js solution)
Make a div fill up the remaining width
<style>
    /*
     * This solution handles fluid layout !
     *
     * Created by: Adrien Berthou
     *
     * [1] & [3] "floats" makes the 2 divs align themselves respectively right & left
     * [2] "overflow: auto;" makes this div take the remaining width
     */
    .content { 
        width: 100%; 
    }
    .content__left { 
        width: 20%; 
        max-width: 170px;  
        min-width: 40px;  
        float: left; /* [1] */
        background-color: #fcc; 
     }
    .content__middle { 
        background-color: #cfc; 
        overflow: auto; /* [2] */
    }
    .content__right { 
        width: 20%; 
        max-width: 250px; 
        min-width: 80px; 
        float: right; /* [3] */
        background-color: #ccf; 
    }
</style>
<div class="content">
    <div class="content__left">
        max-width of 170px & min-width of 40px<br/>
        left div<br/>left div<br/>left div<br/>left div<br/>left div<br/>left div<br/>
    </div>
    <div class="content__right">
        max-width of 250px & min-width of 80px<br/>
        right div<br/>right div<br/>right div<br/>right div<br/>
    </div>
    <div class="content__middle">
        middle div<br/>middle div<br/>middle div<br/>middle div<br/>middle div<br/>middle div<br/>middle div<br/>middle div<br/>middle div<br />bit taller
    </div>
</div>
my 2 cents: http://stackoverflow.com/questions/4873832/make-a-div-fill-up-the-remaining-width/22719552#22719552
Browser Support
Tested on BrowserStack.com on the following web browsers: IE7 to IE11, Ff 20, Ff 28, Safari 4.0 (windows XP), Safari 5.1 (windows XP), Chrome 20, Chrome 25, Chrome 30, Chrome 33, and Opera 20
see http://stackoverflow.com/questions/4873832/make-a-div-fill-up-the-remaining-width
or maybe even better http://stackoverflow.com/a/22719552/759452 and http://stackoverflow.com/questions/7189608/how-do-i-make-an-input-element-occupy-all-remaining-horizontal-space/7190310#7190310
iframe - styling
$('iframe').load( function() {
    $('iframe').contents().find("head")
      .append($("<style type='text/css'>  .my-class{display:none;}  </style>"));
});
stackoverflow.com/a/13959836/759452
Link - Redirect to top of the page
<a href="#">Click me!</a>
Links - <a> element
Ideally, you want your links to be right clickable (to be able to: open in a new window, copy link, & so on), hence you will you the <a> element. This will also help an easier crawling (SEO) of your website.
For links which are not in the text (ie. a link in a menu), you ideally want your link to take the whole space it is allocated, that is, whether your clic on the text or on the hover-styled part next to it it should open the relevant page. This is usually achieved by making the link a block.
The following code snipet can be taken as a base (note: nice border effect). see http://jsfiddle.net/eWGY3/1/
<a class="nice-link" href="#">Flights 1</a>
<a class="nice-link" href="#">Flights 2</a>
<a class="nice-link" href="#">Flights 3</a>
<a class="nice-link" href="#">Flights 4</a>
.nice-link {
    display: block;
    font-weight: bold;
    text-decoration: none;
    border-style: solid;
    border-width: 1px 0;
    border-color: #16c98d;
    padding: 12px;
    color: #fff;
    background-color: #16c98d;
}
.nice-link:hover {
    background-color: #10b47d;
    border-color: #0ea270 #000 #45d4a4 #000;
}
Links have pseudo-class selectors (matching states):
a:link{}
unvisited link
a:visited{}
visited link
a:hover{}
when mouse over link
a:active{}
when clicking on link
a:focus{}
when using the keyboard to tab on link
You must specify the different link-state styles in specific order (otherwise some will override others)
a:link { color: red }
a:visited { color: yellow }
a:hover { color: pink }
a:active { color: black }
You might want to apply a different type of cursor when user hovers your link (notice you don't need the ":hover")
a { cursor: hand; cursor: pointer }
Shading effect on links when over or focussed
a:focus, a:focus, a:hover {
  outline: 1px solid rgba(68, 112, 158, .25);
  -webkit-box-shadow: 0 0 4px #447099;
  -moz-box-shadow: 0 0 4px #447099;
  box-shadow: 0 0 4px #447099;
}
You generally want to use CSS sprite when adding background images to links
CSS Cursors
.my-class-name {
   cursor:pointer;
   cursor:hand;
}
more on
stackoverflow.com/questions/2076468/cross-browser-cursorpointer
quirksmode.org - cursor
htmlgoodies.com - Cursors
caniuse.com/#search=cursor
online custom cursor editor www.cursor.cc
CSS Element Opacity
Opacity: can be used as some kind of filter
-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";    /* IE 8 */
filter: alpha(opacity=50);  /* IE 5-7 */
-moz-opacity: 0.5;          /* Netscape */
-khtml-opacity: 0.5;        /* Safari 1.x */
opacity: 0.5;               /* Good browsers */
see http://css-tricks.com/snippets/css/cross-browser-opacity/
The opacity is not inherited the same way on different browsers and different browser versions.
When applied on images, different effect can be achieved depending on the:
  - image being transparent (png, gif) or not (jpg)
  - image being colored or greyscaled (black & white)
  - background color of the element "around" the image (it must match the size of the image)
Opacity on colored image (transparent or not) without background for surrounding element: this render the image more or less transparent. see http://jsfiddle.net/KDtAX/2249/
<div>
<img class="transparent-on-hover" src="myImage.jpg"/>
</div>
.transparent-on-hover:hover {
    cursor: pointer;
    cursor: hand;    
    opacity : .5;    /* all other browsers */
    -ms-filter : "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";   /* IE8 */
    filter: alpha(opacity=50);   /* IE5-7 */
}
Opacity on greyscale (B&W) image (transparent or not) without background for surrounding element: this render the image in grey if your image is black & simply in lighter grey if your image is already grey. see http://jsfiddle.net/KDtAX/2250/
<img class="grayscale-on-hover" src="http://www-archive.mozilla.org/foundation/identity-guidelines/mozilla-foundation-bw.png"/>
img.grayscale-on-hover:hover {
    cursor: pointer;
    cursor: hand;    
    opacity : .3;    /* all other browsers */
    -ms-filter : "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)";   /* IE8 */
    filter: alpha(opacity=30);   /* IE5-7 */
}
Opacity on non-transparent (jpg) colored image with red background for surrounding element: this renders the image with some kind of colored filter. see http://jsfiddle.net/KDtAX/2248/
<div class="transparent-on-hover-filter">
    <img class="transparent-on-hover-img" src="myImage.jpg"/>
</div>
.transparent-on-hover-filter {
    background-color: red;
    display: inline-block;
}
.transparent-on-hover-img:hover {
    cursor: pointer;
    cursor: hand;    
    opacity : .5;    /* all other browsers */
    -ms-filter : "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";   /* IE8 */
    filter: alpha(opacity=50);   /* IE5-7 */
}
<a href="#">
   <img src="../your/image/path/yourImage.png">
</a>
a {
    display: inline-block;
    background-color: black;
    line-height: 0;
}
a:hover,
img,
a:hover img {
    border: none;
}
a:hover img,
a:hover img {
    opacity: .8;  /* all other browsers */
    -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";  /* IE8 */
    filter: alpha(opacity=80);  /* IE5-7 */
}
Colour opacity when hovering on image contained in link.
You can use this jQuery code to solve this inheritance discrepancy issues (in IE8 for instance)
$('.my-class-name').css({
  '-ms-filter' : '"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)"',
  'opacity': '.5'
});
//added for IE8 - you may consider using find() instead
$('.my-class-name').children().css({
  '-ms-filter' : '"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)"',
  'opacity': '.5'
});
more on quirksmode.org - opacity
CSS Background color opacity
RGBa property solution:
background-color: rgba(95,156,140,.75);
The .75 defines the opacity of the background color. Compatible with IE9+, Firefox 3+, Safari 3+, Chrome.
css3pie, a JS library, provides this feature for IE older browsers. You will then write your CSS such as:
background:rgb(0,0,0);           /* fallback */
background:rgba(0,0,0,0.5);      /* regular CSS3 */
-pie-background:rgba(0,0,0,0.5); /* css3pie for IE8 - but be careful http://css3pie.com/forum/viewtopic.php?f=3&t=406 */
behavior: url(/path/to/pie/PIE.htc);
http://css-tricks.com/rgba-browser-support/
http://stackoverflow.com/questions/806000/transparent-background-but-not-the-content-text-images-inside-it-in-css-on
Opacity property solution:
Have an additional absolutely positioned child element (in a relatively or absolutely positioned parent) that is only there to contain the colored background. Then you can use the opacity property to make this element transparent. Since this element has no children, the opacity will not affect any other element.
http://stackoverflow.com/a/21984546/759452
http://stackoverflow.com/questions/3222961/how-to-make-a-transparent-background-without-background-image/21984546#21984546
CSS Background properties
Background images are not used to be only in the background. This is because there are things you can only do with background images that you can't do with the usual <img> element.
You want to use CSS sprites technique if you use many background images on your website.
SpriteMe.org - generates sprite images for you
A background image never extends outside its element.
Any element's background appears on top of its parent elements' background.
An element's background image cannot be placed relatively (according) to its right or bottom edges. A solution can be to create the background image with the empty space needed (at the bottom or right) and then place the image on the right or/and bottom edge of the element.
background shorthand property:
background: url(../img/sprite_arrow.gif) scroll   no-repeat 0 -116px;
   background:       imageLocation                              regularBehavior  repeatOrNot  HPos VPos
Mind the issue with GIF background image in Chrome.
You usually also define the background color:
background: url(../img/_sideBanners.png) scroll no-repeat left top;
background-color: red;
Background related properties
background-image: url(../img/_sideBanners-01.png);
background-color: red;
background-position: 0px 0px;
background-repeat: no-repeat ;
background-attachment: fixed ;
Background properties: https://developer.mozilla.org/en-US/docs/Web/CSS/background
Perfect full page background image: http://css-tricks.com/perfect-full-page-background-image/
Full width background image + below plain background color:
/* add a div with "class="bg-img"" just below the opening body tag */
/* Then add this in the CSS */
.bg-img {
   position: fixed;
   z-index: -1;
   width: 100%;
   height: 100%;
   background: url("../img/my-background.jpg") no-repeat scroll center top;
   background-color: blue;
}
Multiple backgrounds: http://stackoverflow.com/questions/423172/can-i-have-multiple-background-images-using-css
CSS2 Multiple background images: dense13.com - multiple background images with CSS2 
CSS3 Multiple background images
css3.info - multiple backgrounds images with CSS3
Multiple background images are specified using a comma-separated list of values for the background-image property, with each value generating a separate ‘background layer’. The the first value in the list represents the top layer (closest to the user), with subsequent layers rendered behind successively.
background-image: url(img/_sideBanners-01.png), url(img/bg_footer.png);
background-position: 0px 0px, bottom left;
background: url(sheep.png) center bottom no-repeat, url(sky.png) left top no-repeat;
Firefox has supported multiple backgrounds since version 3.6 (Gecko 1.9.2), Safari since version 1.3, Chrome since version 10, Opera since version 10.50 (Presto 2.5) and Internet Explorer since version 9.0.
CSS Border
border shorthand property:
border: 1px solid black;
Basic Border
The above can also be written:
border-width: 1px;
border-style: solid;
border-color: black;
.pic-border {
   padding: 3px;
   border: 1px solid #999;   /* #999 is light grey */
}
   Simple nice border for picture or other
.picborder {
   padding: 3px;
   border: 1px solid #999; /* #999 is light grey */
   -moz-box-shadow: 1px 1px 10px #999;
   -webkit-box-shadow: 1px 1px 10px #999;
   box-shadow: 1px 1px 10px #999;
}
   Creates a border with a nice outer shadow on each side (IE8 cannot display the shadow though).
You can usually add "-top", "-bottom", "-left", "-right" in the border related properties, see:
border-top: 4px solid orange;
border-left-color: red;
border-right-style: dashed;
border-bottom-width: 0.5px;
You can turn off the display of a single border using the none keyword
border-left: none;
CSS Rounded Border cross-browser work around
Supported in IE8 and a lot of other poor browsers as well as all the modern ones.
.my-wicked-class {
  padding: 0 5px 0 0;
  background: #F7D358 url(../img/roundedCorner_right.png) top right no-repeat scroll;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  font: normal 11px Verdana, Helvetica, sans-serif;
  color: #A4A4A4;
}
.my-wicked-class > .my-cool-item:first-child {
  padding-left: 6px;
  background: #F7D358 url(../img/roundedCorner_left.png) 0px 0px no-repeat scroll;
}
.my-wicked-class > .my-cool-item {
  padding-right: 5px;
}
<div class="my-wicked-class">
  <span class="my-cool-item">Some text</span> <span class="my-cool-item">Some text</span> <span class="my-cool-item"> Some text</span> <span class="my-cool-item">Some text</span>
</div>
You need to create both roundedCorner_right.png and roundedCorner_left.png
CSS3 Rounded Border
Supported in IE9+, Firefox 4+, Chrome, Safari 5+, and Opera
border-radius shorthand property:
border: 1px solid black;
-moz-border-radius: 4px;
-webkit-border-radius: 4px;
border-radius: 4px;
If you want to give different "roundings" to each corner
border-top-left-radius: 7px;
-moz-border-radius-topleft: 7px;
-webkit-border-top-left-radius: 7px;
border-bottom-left-radius: 5px;
-moz-border-radius-bottomleft: 5px;
-webkit-border-bottom-left-radius: 5px;
 
border-top-right-radius: 5px;
-moz-border-radius-topright: 5px;
-webkit-border-top-right-radius: 5px;
border-bottom-right-radius: 7px;
-moz-border-radius-bottomright: 7px;
-webkit-border-bottom-right-radius: 7px;
see http://stackoverflow.com/questions/1083755/webkit-border-radius-sometimes-take-effect
Read more on
css3.info - CSS3 border radius
mozilla - border radius
CSS3 Shadow boxing
Support IE9+, Firefox 4, Chrome, and Opera. CSS3PIE adds support for IE8.
/* x-browser box-shadow css3pie.com/documentation/supported-css3-features/#box-shadow */
-moz-box-shadow: 1px 1px 4px #999;
-webkit-box-shadow: 1px 1px 4px #999;
box-shadow: 1px 1px 4px #999;
-pie-box-shadow: 1px 1px 4px #999;  /* support for IE8 */
behavior: url(/estore/_ui/desktop/common/js/PIE/PIE.htc);
   Box-shadow with IE8 & below support (css3pie)
box-shadow: 1px 1px 10px #888;
   Outer shadow on all sides
box-shadow: inset 1px 1px 10px #888;
   Inner shadow on all sides
box-shadow: inset 0 20px 20px -20px #000000;
   Top inner shadow - see stackoverflow.com/q/4756316
box-shadow: inset 0 -15px 15px -15px #000000;
   Bottom inner shadow
box-shadow: inset 15px 0 15px -15px #000000;
   Left inner shadow
box-shadow: inset -15px 0 15px -15px #000000;
   Right inner shadow
Lateral rounded shadows example: jsfiddle.net/hz8WD/
Horizontal rounded shadows example: jsfiddle.net/hz8WD/1/
Read more on
hacks.mozilla.org - moz-box-shadow
developer.mozilla.org - box-shadow
css3.info/preview/box-shadow
css-tricks.com/snippets/css/css-box-shadow
stackoverflow.com/questions/6671375/css-box-shadow-top-and-bottom-only
stackoverflow.com/questions/11997032/how-to-get-box-shadow-on-left-right-sides-only
HTML/CSS Tables
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align can be applied to table, th and td elements
text-align is an inherited property
tip: since text-align is inherited, if you apply a style to table, it'll be applied to all cells of the table
vertical-align: top;
vertical-align: middle;
vertical-align: baseline;
vertical-align: bottom;
vertical-align can be applied to th and td elements
vertical-align is not an inherited property
"vertical-align: baseline;" is almost the same as "vertical-align: top;". see mozilla: vertical-align
vertical align (center vertically) a single line of text
<style type="text/css">
    .my-cool-class { line-height: 34px; }
</style>
<p class="my-cool-class">
    This single line of text is vertically centered
</p>
more on how to align vertically:
phrogz.net/CSS/vertical-align/index.html 
css-tricks.com/vertically-center-multi-lined-text
css-tricks.com/centering-css-complete-guide
rowspan & colspan:
htmldog.com/guides/html/intermediate/tables
borders:
Applying borders to a table element outlines just the table, not the cells themselves.
Clean "single" borders solution
Apply borders to the td element to outline all the cells.
By default, browsers usually separate tables cells by 2px. Use table element's cellspacing attribute to reduce it to 0.
Another issue arise: borders applied to cells double up, use table element's border-collapse property to fix this.
HTML of solution
<table cellspacing="0">
</table>
CSS of solution
table {
  border-collapse: collapse;
}
see also (cf. CSS reset):  table{ border-spacing: 0; }
and also (so layout does not break):  table{ table-layout: fixed; }
Images, Tables, and Mysterious Gaps
Cross browser table row styling
http://coding.smashingmagazine.com/2008/08/13/top-10-css-table-designs/
Example of nice table design:
.nice-table,
.nice-table th,
.nice-table td {
border: none;
}
.nice-table {
table-layout: fixed;
border-collapse: collapse;
border-spacing: 0;
width: 100%;
}
.nice-table thead tr th {
width: auto;
padding: 10px 0;
}
.nice-table tbody tr td {
width: auto;
padding: 10px;
border-top: 1px dashed #fff;
}
.nice-table thead tr th.colOne {
    width: 35%;
}
.nice-table thead tr th.colTwo {
    width: 15%;
}
.nice-table tbody {
background-color: #EFF1F0;
}
.nice-table tbody tr:hover td {
background: #d0dafd;
}
<table class="nice-table">
    <thead>
        <tr>
            <th class="colOne">Col One</th>
            <th class="colTwo">Col Two</th>
            <th class="colThree">Col Three</th>
            <th class="colFour">Col Four</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
<td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
<td></td>
            <td></td>
            <td></td>
        </tr>
</tbody>
</table>
Setting all th and td's to "width: auto", then only specify the width for the columns you want (using th only). You can then let the browser calculate the width for the rest of the columns.
TODO: To be improved (check it is x-browser)
see also:
http://stackoverflow.com/questions/6140993/table-column-width-and-overflow-settings-are-not-working
http://stackoverflow.com/questions/4457506/css-how-to-set-the-table-column-width-constant-regardless-of-the-amount-of-text/4457905#4457905
http://stackoverflow.com/questions/1258416/word-wrap-in-a-html-table
HTML/CSS Forms
Form's action attribute
action is the only required attibute for the <form> tag. It specifies where to send the form-data when a form is submitted.
Form tags
<label> tag defines a label for an input element. If the user clicks on the text within the label element, it toggles the control. The for attribute of the <label> tag should be equal to the id attribute of the related element to bind them together.
      select label "for=”email“" in CSS: label [for=email] { .. }
      htmldog.com/guides/htmladvanced/forms/
      alexking.org/blog/2005/07/18/css-checkbox-label-positioning     (label positioning)
      bytes.com/topic/html-css/answers/99329-nicely-wrapped-checkboxes-labels   (wrap label on multiple lines)
button vs input type="submit" vs input type="button"
button: has open & close tag, hence can have other tags inside
type="submit": no closing tag, submits the form
type="button": no closing tag, no default behavior
button: default to type="submit" so submits the form when clicked on
button type="button": allows you to prevent the default form submit behavior
developer.mozilla.org/en-US/docs/Web/HTML/Element/button
developer.mozilla.org/en-US/docs/Web/HTML/Element/input
stackoverflow.com/questions/469059/button-vs-input-type-button-which-to-use
<input type="text">  expanding on focus
Given size when not focussed - then bigger size when focussed.
.search-input {
  width: 80px;
}
.search-input:focus {
  width: 130px;
  -webkit-transition: width .2s ease-in;
  -moz-transition: width .2s ease-in;
  -o-transition: width .2s ease-in;
  -ms-transition: width .2s ease-in;
  transition: width .2s ease-in;
}
jsfiddle.net/sDTfS/
<input> tag is used to select user information. An input field can be a text field, a checkbox, a password field, a radio button, a button, and more.
input tag's optional attributes
type specifies the type of input element
type="checkbox"  let a user select several choices. The value setting defines what will be submitted if checked. Read more on how to align checkboxes and their label consistently across browsers
type="radio button"  let a user select only one of a limited number of choices. The value setting defines what will be submitted if checked.
etc...
maxlength specifies the maximum length (in characters) of an input field (for type="text" or type="password")
readonly elements are not editable, but DO get sent on submit, & can be focused (ie. when "tabbing" through a form).
Warning: radiobuttons & checkboxes do NOT support the "readonly" attribute!
disabled elements are NOT editable, are NOT sent on submit, & CANNOT be focused
Read more:
  readonly & disabled http://www.w3.org/TR/html4/interact/forms.html#h-17.12
  readonly vs disabled on http://stackoverflow.com/questions/7730695/whats-the-difference-between-disabled-disabled-and-readonly-readonly-for-te
  Radio button : read-only http://stackoverflow.com/questions/1953017/why-cant-radio-buttons-be-readonly
  Radio buttons & checkboxes : read-only https://bugzilla.mozilla.org/show_bug.cgi?id=88512
  Checkboxes : read-only http://stackoverflow.com/questions/155291/can-html-checkboxes-be-set-to-readonly 
  Radio button : read-only http://www.sitepoint.com/forums/showthread.php?963049-Read-only-Radio-Buttons
<textarea>
You might want to set the max-width & max-height (line height?) for this element. Otherwise the user might be able to expend it infinitely & mess up your design.
<textarea class="long-comment" name="longComment" rows="3" cols="40" placeholder="Write your message here"></textarea>
developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
reference.sitepoint.com/html/textarea
w3.org/TR/REC-html40/interact/forms.html#h-17.7
placeholder (IE10+): stackoverflow.com/q/4004087 and stackoverflow.com/q/2610497 and css-tricks.com/snippets/css/style-placeholder-text 
<input> element rounded border styling:
  - use "border-radius" property: "supported in IE9+, Firefox, Chrome, Safari, and Opera".
border: 1px solid black;
-moz-border-radius: 4px;
-webkit-border-radius: 4px;
border-radius: 4px;
  - input element rounded corners compatible with IE8+. see  http://stackoverflow.com/questions/2654745/rounded-corners-of-input-elements-in-ie  and  https://code.google.com/p/curvycorners/
<input> element width filling 100% of remaining space:
  - wrap the input field in an element of display:block; & overflow: hidden;
see http://stackoverflow.com/questions/7189608/how-do-i-make-an-input-element-occupy-all-remaining-horizontal-space/7190310#7190310 and http://stackoverflow.com/questions/4873832/make-a-div-fill-up-the-remaining-width
<input type="checkbox"> element styling: http://stackoverflow.com/questions/16352864/how-to-display-image-in-place-of-checkbox/16353624#16353624 and http://stackoverflow.com/questions/4148499/how-to-style-checkbox-using-css . note that "prettyCheckable.js" is not "compatible" with this technique "how to align checkboxes and their label consistently across browsers" use the "data-label" option instead.
<select> element styling: http://stackoverflow.com/questions/1895476/how-to-style-a-select-dropdown-with-css-only-without-javascript and my solution http://stackoverflow.com/a/21623118/759452
<select> element styling using js plugin: github.com/harvesthq/chosen and harvesthq.github.io/chosen - better select box (drop down)
hack for chrome autofill bg issue http://stackoverflow.com/a/14205994/759452
Read more about forms on www.htmldog.com/guides/htmlbeginner/forms
"Honeypot" Anti spam bot protection technique
1. First you add the fields in the form
<tr>
<th class="first-name" >
<label for="firstName" ><span class="hidden">first Name </span>first Name *:</label>
</th>
<th class="first-name" >
<input name="firstName" value="" tabindex="-1"  >
</th>
</tr>
2. Then hide the fields using CSS
<style type="text/css">
    .first-name {
display: none;    
    }
</style>
3. Finally check if one the fields got filled when validating form (via javascript or JSP for instance)
if(document.getElementsByName(formname)[0].firstName.value != "" || document.getElementsByName(formname )[0].familyName.value != ""){
alert("Bot issue.")
}
if(myForm.firstName.value != "" || myForm.familyName.value != ""){
alert("Bot issue.")
}
<%-- JSP validation: fooling robots --%>
<c:if test="${param.familyName != '' || param.firstName != ''}">
<c:set var="error" value="true"/>
</c:if>
Anti spam bot protection technique for HTML forms: ustrem.org/en/articles/html-form-anti-spam-en/
CSS - Printing a page
Guidelines
Use percentages on main elements's width so that the page can be printed in different formats (portrait, horizontal, A3, and so on).
Remove margins & paddings as much as possible (try to use % if you use these, for vertical values you can only use px though).
Use page breaks when needed (warning: mind the limitations linked to page breaks, ie. not applicable on element located in floating elements)
Use when needed page-break-inside:avoid;
Print in B&W if needed (eco-friendly).
Remove background images (eco-friendly).
Display links' url in plain text if needed.
Use different unit of measurement than px:
  - point (pt)
  - centimetre (cm)
Page margin can be set using @page , this may not be cross browser though. see http://stackoverflow.com/questions/1542320/margin-while-printing-html-page
Tech links
page-break-before
page-break-after
page-break-inside
Print styling - how to
Find the stylesheets applied when in print view (ie. in Chrome)
Then comment out all the other stylesheets
Finally, on the stylesheets normally applied for print view, change the attribute media to media="all"
Reload the page and do the styling changes required
CSS3 Disable selection on elements
CSS only (works in Chrome 13.0.782.218 and Firefox 3.6.6, this does not work on IE8 and below)
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-o-user-select: none;
user-select: none;
This is the cross browser solution (so that it works on IE8 for instance)
$.fn.disableSelection = function () {
  return this.each(function () {
    if (typeof this.onselectstart != 'undefined') {
        this.onselectstart = function() { return false; };
    } else if (typeof this.style.MozUserSelect != 'undefined') {
this.style.MozUserSelect = 'none';
    } else {
this.onmousedown = function() { return false; };
    }
  });
}
Read more on
stackoverflow.com - how to make html element unselectable
developer.mozilla.org -moz-user-select
CSS3 Transition
Does not work on IE (even IE9).
Works on Firefox 4, Chrome, Opera, and Safari
-moz-transition: all 0.5s ease-out; 
-o-transition: all 0.5s ease-out; 
-webkit-transition: all 0.5s ease-out; 
-ms-transition: all 0.5s ease-out; 
transition: all 0.5s ease-out;
Read more on
net.tutsplus.com - CSS3 Transitions

