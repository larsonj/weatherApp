https://forum.ionicframework.com/t/where-should-i-put-images/41463/7Notes regarding styling

[TOC]#

# background images

image resources should be stored under the www directory.  in the following example they are located in www/build/img.

  .scroll-bg{
    background: url('../../build/img/fon-listya-37401.png') no-repeat center center fixed;
    background-size: 100%;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size:contain;
  }

# background colors:

The navbar background color can be set in SCCS variables file app.variables.sccs

app.variables.sccs:
  $colors: (
    primary:    #387ef5, // #387ef5,
    secondary:  #32db64,
    danger:     #f53d3d,
    light:      #f4f4f4,
    dark:       #222,
    favorite:   #69BB7B,
    ionNavBarBkgndColor: #228b22
  );

page.html
 add the $colors sass map as follows
 ...
  <ion-navbar ionNavBarBkgndColor>
 ...

It may be helpful to set up a gulp task to move the files at build time.  see [Where should I put images?](https://forum.ionicframework.com/t/where-should-i-put-images/41463/7)
