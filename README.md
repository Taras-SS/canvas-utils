## Available utils

<ol>
    <li>renderGround</li>
    <li>renderPyramid</li>
    <li>renderSky</li>
    <li>renderSun</li>
</ol>

### renderGround:

renderGround(ctx, config)

<ul>
    <li>ctx - CanvasRenderingContext2D</li>
    <li>config:
    <ul>    
        <li>x - x coordinate(required)</li>
        <li>y - y coordinate(required)</li>
        <li>width(required)</li>
        <li>height(required)</li>
        <li>color - color of the ground(optional), #e9bf83 by default</li>
    </ul>
    </li>
</ul>

### renderSun:

renderSun(ctx, config)

<ul>
    <li>ctx - CanvasRenderingContext2D</li>
    <li>config:
    <ul>    
        <li>radius(required)</li>
        <li>x - x coordinate(required)</li>
        <li>y - y coordinate(required)</li>
        <li>color - color of the ground(optional), #fad797 by default</li>
        <li>shadowColor - color of the shadow(optional), #ebb44f by default</li>
        <li>blur - blur index for the shadow(optional), 200 by default</li>
    </ul>
    </li>
</ul>

### renderSky:

renderSky(ctx, config)

<ul>
    <li>ctx - CanvasRenderingContext2D</li>
    <li>width(required)</li>
    <li>height(required)</li>
</ul>

### renderPyramid:

renderPyramid(ctx, config)

<ul>
    <li>ctx - CanvasRenderingContext2D</li>
    <li>config:
    <ul>    
        <li>radius(required)</li>
        <li>x - beginning of the pyramid(required)</li>
        <li>yBottom - lowest point of the pyramid(required)</li>
        <li>yTop - highest point of the pyramid(required)</li>
        <li>primaryColor - front color(optional), #d49c5f by default</li>
        <li>secondaryColor - color of the back part of the pyramid(optional), #3b230b by default</li>
    </ul>
    </li>
</ul>
