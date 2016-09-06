* fonts and weather icons - https://erikflowers.github.io/weather-icons/ 
*                         - https://github.com/erikflowers/weather-icons
* regarding styling - https://forum.ionicframework.com/t/where-should-i-put-images/41463/7Notes

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

## Gulp task to copy files to www/img folder, if needed.  You an also place your images into your css folder.
  gulp.task('watch', ['clean'], function(done){
  runSequence(
  ['sass', 'html', 'fonts', 'scripts', 'images'],
  
  and adding gulp task itself to the end of file
  
  gulp.task('images', function(){
  return gulp.src('app/img/**/*.+(jpg|png|svg)')
  .pipe(gulp.dest('www/build/img'));
  });

now files from app/img wil be stored in build/img

## handling image size on multiple device display

  the best way to handle multple image size requirements across different device displays is to render 
  an image for the highest density image/device and use that for all devices.  The browser should resize
  automagically.  Retnia images are a good place to start.  Once you have done this you can stretch
  it across the display with CSS similar to .scroll-bg {} above.
  see: https://forum.ionicframework.com/t/handleling-image-size-on-multiple-device-display/5798/6
  and see: https://bjango.com/articles/min-device-pixel-ratio/
  

# background colors:

## navbar title background
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

