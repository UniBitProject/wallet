---?image=assets/image/blank.jpg&opacity=75

# Work In Progress 

### Join us on Discord

---?image=assets/image/blank.jpg&opacity=75

# Slide 2

---?image=assets/image/blank.jpg&opacity=75


## Tips!

<br>

@fa[arrows gp-tip](Press F to go Fullscreen)

@fa[microphone gp-tip](Press S for Speaker Notes)

---?image=assets/image/blank.jpg&opacity=75

## Template Features

- Code Presenting |
- Repo Source, Static Blocks, GIST |
- Custom CSS Styling |
- Slideshow Background Image |
- Slide-specific Background Images |
- Custom Logo, TOC, and Footnotes |

---?image=assets/image/blank.jpg&opacity=75

@title[JavaScript Code Block]

<p><span class="slide-title">JavaScript Code Block</span></p>

```javascript
// Include http module.
var http = require("http");

// Create the server. Function passed as parameter
// is called on every request made.
http.createServer(function (request, response) {
  // Attach listener on end event.  This event is
  // called when client sent, awaiting response.
  request.on("end", function () {
    // Write headers to the response.
    // HTTP 200 status, Content-Type text/plain.
    response.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    // Send data and end response.
    response.end('Hello HTTP!');
  });

// Listen on the 8080 port.
}).listen(8080);
```

@[1-17](You can present code inlined within your slide markdown too.)
@[18-20](Again, all of this without ever leaving your slideshow.)

---?image=assets/image/blank.jpg&opacity=75

## Template Help

- [Code Presenting](https://github.com/gitpitch/gitpitch/wiki/Code-Presenting)
  + [Repo Source](https://github.com/gitpitch/gitpitch/wiki/Code-Delimiter-Slides) 
- [Static Blocks](https://github.com/gitpitch/gitpitch/wiki/Code-Slides)
- [Footnotes](https://github.com/gitpitch/gitpitch/wiki/Footnote-Setting)

---?image=assets/image/blank.jpg&opacity=75

## Go Pro!

<br>
<div class="left">
    <i class="fa fa-user-secret fa-5x" aria-hidden="true"> </i><br>
    <a href="https://gitpitch.com/pro-features" class="pro-link">
    More details here.</a>
</div>
<div class="right">
    <ul>
        <li>Password-Protection</li>
        <li>Image Opacity</li>
        <li>SVG Image Support</li>
    </ul>
</div>

---?image=assets/image/blank.jpg&opacity=75

### Questions?

<br>

@fa[twitter gp-contact](@unibitlabs)

@fa[github gp-contact](unibitlabs)

@fa[medium gp-contact](@unibitlabs)

---?image=assets/image/blank.jpg&opacity=75

@title[Get Started!]

### Get your presentation started!
### [Get To Work On This @fa[gear gp-download]](#)


