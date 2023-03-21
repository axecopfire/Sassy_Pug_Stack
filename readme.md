# Sassy Pug Stack

**Pit stop on the way to a JS framework**

![Sassy Pug](https://res.cloudinary.com/practicaldev/image/fetch/s--AYj_k3vy--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/o90f6znxtm3fbywbprpt.jpeg)

## Background

- [Introduction: The Blog](https://dev.to/schusterbraun/introducing-the-sassy-pug-stack-a-case-for-a-pit-stop-on-the-way-to-a-js-framework-12pf)
- [Introduction: The Powerpoint](https://docs.google.com/presentation/d/13CHY-28xVY1oHovsC9Pb-C4AheToUrbXRAZH7lXGAVg/edit?usp=sharing)

Sassy Pug Stack is for developers who have learned the basics of web dev fundamentals and understand the basics of vanilla html, css, and js but feel like they have plateaued. This project is built to help you learn about how to start building your own professional workflows by using html/css/js preprocessors and using a task automation tool. 

## Note
This meant solely for education! Don't use this as a project starter. I don't maintain this project. Please use something better like [ParcelJS](https://parceljs.org/docs/), which has support for all these preprocessors.

## Technologies

#### The Preprocessors
- [PugJS](https://pugjs.org/api/getting-started.html) makes writing html super easy by templating and preprocessing HTML.
- [Sass](https://sass-lang.com/) makes writiing CSS super easy by preprocessing css.
- [Babel](https://babeljs.io/) makes writing JS super great because now you can write ES6!
- [Gulp](https://gulpjs.com/) to automate the task of compiling all that preprocessor stuff

## Get Started
*note: do not input the `$` character. This just means put the below into a command line prompt*
```Shell
$git clone https://github.com/axecopfire/Sassy_Pug_Stack
$cd Sassy_Pug_Stack
$npm install
$npm run dev
```

You should start to see pug spinning up and watching your files. Now whenever you make a change in the `src` folder and save it, `Gulp`  will run and compile that code you changed. The new compiled code will show up in the `public` folder.

The next thing you need to do is make a change in a file in the `src` folder and save it. When you do that watch your `Sassy_Pug_Stack` folder and see that a `public` folder should show up and in there should be your compiled code. Open the html up in a browser.

## Folder Structure
As the developer you will work out of the `src` directory. `Gulp` will take your files, compile them down into vanilla code and place them in a `public` directory. 

The `src` directory looks like
```
src/
	|- views/
	|-- Pug files
	|- sass/
	|-- Sass files
	|- js/
	|-- Javascript files
```