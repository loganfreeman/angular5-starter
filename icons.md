[How to register and sanitize svg icons globally for use by all components?](https://github.com/angular/material2/issues/2610)
---
## Bug, feature request, or proposal: Feature request

- What is the expected behavior?

A way to register and sanitize svg icons globally for use by all components.

- Each component needs 2 imports:

```
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';
```

- and constructor code for each icon:

```
constructor(mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    mdIconRegistry.addSvgIcon('icon1',sanitizer.bypassSecurityTrustResourceUrl('assets/icon1.svg'));
    mdIconRegistry.addSvgIcon('icon2',sanitizer.bypassSecurityTrustResourceUrl('assets/icon2.svg'));
}
```

#### example code

```
import {Component, ViewEncapsulation} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'mat-icon-demo',
  templateUrl: 'icon-demo.html',
  styleUrls: ['icon-demo.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class IconDemo {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry
        .addSvgIcon('thumb-up',
            sanitizer.bypassSecurityTrustResourceUrl('/icon/assets/thumbup-icon.svg'))
        .addSvgIconSetInNamespace('core',
            sanitizer.bypassSecurityTrustResourceUrl('/icon/assets/core-icon-set.svg'))
        .registerFontClassAlias('fontawesome', 'fa');
  }
}
```

registerFontClassAlias
---
```
export class AppModule {
    constructor(
        ...public matIconRegistry: MatIconRegistry) {
        matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
```

Then you can use anywhere in your project like so:

```
<mat-icon fontSet="fa" fontIcon="fa-times-circle"></mat-icon>
```


You'll need to include fontawesome in your project somewhere. I use angular-cli so adding the font-awesome npm package:

```
npm install font-awesome --save
```

and including it in styles list in angular-cli.json file works for me:

```
"styles": [
    ...
    "../node_modules/font-awesome/scss/font-awesome.scss",
  ],
```

Include Font Awesome
---

Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS.

Create a new project and navigate into the project...

```
ng new my-app
cd my-app
```

Install the font-awesome library and add the dependency to package.json...

```
npm install --save font-awesome
```

## Using CSS

To add Font Awesome CSS icons to your app...

// in .angular-cli.json

```
"styles": [
  "styles.css",
  "../node_modules/font-awesome/css/font-awesome.css"
]
```

## Using SASS

Create an empty file _variables.scss in src/.

Add the following to _variables.scss:

```
$fa-font-path : '../node_modules/font-awesome/fonts';
```

In styles.scss add the following:

```
@import 'variables';
@import '../node_modules/font-awesome/scss/font-awesome';
```

How to use Material Design Icons In Angular 4?
---
1. Download mdi.svg from [here](https://materialdesignicons.com/getting-started) under Angular Material section and place it under your assets folder: 
2. In your app.module.ts, add the following lines:

```
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
...
export class AppModule {
    constructor(private mdIconRegistry: MdIconRegistry, private domSanitizer: DomSanitizer){
        mdIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityResourceUrl('/assets/mdi.svg'));
    }
}
```
3. Make sure to include assets folder under .angular-cli.json in assets (Although by default, it will be there):
```
{
     "apps": [
         {
              ...
              "assets": [
                  "assets"
              ]
         }
     ]
}
```
4. finally use the mat-icon directive
```
<!-- Icon by itself -->
<mat-icon svgIcon="android"></mat-icon>
<!-- Icon button -->
<button mat-icon-button>
  <mat-icon svgIcon="android"></mat-icon>
</button>
<!-- You can also combine an icon and text together -->
<button mat-button>
  <mat-icon svgIcon="code-tags"></mat-icon>
  View source
</button>
```

5. Please also add the following class to your styles (styles.css) to solve the problem where an icon isn't aligned properly when used in a menu item:
```
button.mat-menu-item {
  line-height: 24px !important;
}
a.mat-menu-item > mat-icon {
  margin-bottom: 14px;
}
.mat-icon svg {
  height: 24px;
  width: 24px;
}
```

flat-icons
---
[632,500 vector icons grouped in 11,945 packs](https://www.flaticon.com/)

## free to download, you must credit the author

Build your own collection with svg-icon
---
An ultimate svg icons collection DONE RIGHT, with over 10,000 SVG icons out of the box. 

[svg-icon github](https://leungwensen.github.io/svg-icon/)

Download

```
npm install svg-icon --save
```

Usage

```
<svg-icon url="http://leungwensen.github.io/svg-icon/dist/sprite/symbol/logos.svg" type="si-logos-javascript"></svg-icon>
```

## Build your own collection

1. Install svg-icon via npm:
```
npm install svg-icon -g
```
2. Define a collection file (JSON format, [demo json](https://github.com/leungwensen/svg-icon/blob/master/src/collection/zfinder.json))
3. Build it:
```
svg-icon build --source $path/to/icons.json --target $path/to/dest --name wow
```
4. Now you have a SVG sprite file and a demo page.
```
$path/to/dest/wow/
    ├── index.html
    └── svg-symbols.svg
```

