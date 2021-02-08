# angular-2svhsh-w6hoiv

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-2svhsh-w6hoiv)


---------------------------------------- =***= ----------------------------------------------
Notes:
======

Pre-requisites & make sure you all have the access to install these software.

1. Visual Studio Code Editor: https://code.visualstudio.com/download
2. Angular Latest Version (This is also covered in Training as a Hands-on by the trainer in case the team is not able to do it)
3. Angular CLI (This is also covered in Training as a Hands-on by the trainer in case the team is not able to do it)
4. Node Latest Version: https://nodejs.org/en/download/
5. NPM (This will be downloaded and installed when Node Latest Version is installed. This is also covered in Training as a Hands-on by the trainer in case the team is not able to do it)
6. TypeScript (This is also covered in Training as a Hands-on by the trainer in case the team is not able to do it. This is also covered in Training as a Hands-on by the trainer in case the team is not able to do it)
7. NodeJS Command Prompt for Windows (This will be downloaded and installed when Node Latest Version is installed. This is also covered in Training as a Hands-on by the trainer in case the team is not able to do it)
8. Working Mic and Audio Jack


Day 1:
=================

GitLab

===================

https://demo.firepad.io/#fa8jPVw2qs

https://nodejs.org/en/download/

After node installation

node -v

npm -v

You must have node and npm versions.

npm install -g @angular/cli

added 237 packages from 183 contributors in 137.958s

Type > ng v

Stackblitz

https://stackblitz.com/angular/vbrxvkjxykx?file=src%2Fapp%2Fapp.component.ts

After accessing stack blitz, click on sign in button (top right). Now sign in to github account

Next click on FORK button to link the projects with your github account

=====

https://www.typescriptlang.org/play

Put below code

class Car { 
   //field 
   engine:string; 
 
   //constructor 
   constructor(engine:string) { 
      this.engine = engine 
   }  

   //function 
   disp():void { 
      console.log("Engine is  :   "+this.engine) 
   } 
}


To install type script transpiler:
npm install -g typescript

-----

Lint errors
=========================

Day 2:
==============

ng new my-first-project
Ng serve
ng generate component my-first-component

ng g c my-second-component --dry-run

ng g s my-first-service --dry-run
ng g s my-first-service

ng g d my-first-directive --dry-run
ng g d my-first-directive


======

Day 3:

https://stackblitz.com/edit/angular-2svhsh?file=src%2Fapp%2Fproduct-list%2Fproduct-list.component.html

https://stackblitz.com/edit/angular-zzkfow?file=src%2Fapp%2Fapp.component.html

Pipes
https://www.javatpoint.com/angular-7-pipes


Day 5:

https://stackblitz.com/edit/angular-wnvlrx?file=src%2Fapp%2Fapp.component.html

https://www.npmjs.com/



ngx-webstorage-service ==>> Install this only in stackblitz - just type the package name under Dependence tree and hit enter, it will install package… same as npm install on cmd

npm install ngx-webstorage-service ==>> This is for your local ng command prompt

-------------
Observable:

Example 1:
import { interval } from 'rxjs';

const observable = interval(1000);

observable.subscribe(x=>{
  console.log(x);
})

Ex 2:
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

map(x => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));


https://rxjs-dev.firebaseapp.com/operator-decision-tree

Reacive forms:
https://stackblitz.com/edit/angular-pgzxsq?file=src%2Fapp%2Fprofile-editor%2Fprofile-editor.component.html

Checkbox:
https://jasonwatmore.com/post/2020/07/12/angular-reactive-forms-required-checkbox-example


https://angular.io/resources?category=development


https://material.angular.io/


https://protractor.angular.io/

------

Ng serve -o

------

To run so far developed app on stack blace on localhost:

First access below link
https://stackblitz.com/edit/angular-2svhsh?file=src%2Fapp%2Fproduct-details%2Fproduct-details.component.ts

Second download the project

Now in your local machine navigate to first-project….
There rename the src to src-old
Then take scr content of downlaoded project into first-project/src

Now start the server (ng serve -o)

Here if you get any dependeny error, install those dependency on your local using npm install cmd


-------------------

To build:

Cmd> ng build

Now dist/ folder will get created

This builded folder which can used for deployment

Cmd> ng build --prod

This cmd will minifies much more

The files will minimized and it will be hashed (filenames)

---------------------------------------- =***= ----------------------------------------------
