[How to register and sanitize svg icons globally for use by all components?](https://github.com/angular/material2/issues/2610)
---
Bug, feature request, or proposal:
Feature request

What is the expected behavior?

A way to register and sanitize svg icons globally for use by all components.

What is the current behavior?

Currently following the demo at:
https://github.com/angular/material2/tree/master/src/demo-app/icon

Each component needs 2 imports:

```
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';
```
and constructor code for each icon:
```
constructor(mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    mdIconRegistry.addSvgIcon('icon1',sanitizer.bypassSecurityTrustResourceUrl('assets/icon1.svg'));
    mdIconRegistry.addSvgIcon('icon2',sanitizer.bypassSecurityTrustResourceUrl('assets/icon2.svg'));
}
```
example code
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

ng new my-app
cd my-app
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
