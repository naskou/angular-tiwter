# Tiwter

This is my project made with Angular, it has problem with chat component and picture upload component for now but it will be fixed in the future. The project was made for the course Angular SoftUni-2020.
###### Used: Express, Mongoose, cors, socket-io-client, CookieService, cookieParser, Lodash, JWT, Bcrypt, HttpStatus, Moment, Joi, Cloudinary, Observables

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## The project has two parts:
### No-authentication part:
#### Register - where you can register a user
#### Login - where you login an existing user
#### Simple validations for the input fields

### Authentiction part:
#### All streams(posts) tab and top streams(posts) tab for these which has more than 3 likes
#### Create post - it creates a post in the main Streams page
#### Add comment - can add comment right below the post
#### Like post - you can like posts but only one time
#### See other registered users - also shows who is online right now
#### Your profile - your posts and bio for your profile
#### Followers - people who follows you
#### Following - those who you follow
#### Notifications page - display all private notifications, can be marked as read and deleted
#### Photos page - shows your uploaded pictures (still in development)
#### Chat page - you can have a provate conversation with a another registered user (problem with displaying the message, but it's sent to the db)
#### Hover dropdowns for easy notification access and provate conversations



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README]s(https://github.com/angular/angular-cli/blob/master/README.md).
