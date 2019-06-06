# Profile Timesheet 2.0

Profile timesheet page reworked with ReactJS and Redux.

## npm instructions

* **run application**
  * Due to the development environment, running the app in development mode is not an option. To see the changes, you must run a build after every change. Type `sudo npm run lazy-build`.

* **build application with code verification**
  * If you run `sudo npm run build`, the script will run some additional commands to verify code integrity. 
  * First it will run eslint to check, if there is any problem with the code styling.
  * Then it will run the unit test to see, if any recent change broke the rendering of the components.

* **run watcher**
  * Whenever you want to start working on the project, run `sudo npm run watch` from the server. Then with every save the code will be builded with the changes to `/public/react/timesheet.js`
  * the `timesheet.js` is connected to the `timesheet/dev` twig, so it will update with refresh

* **build documentation**
  * you can generate ESDoc documentation with `npm run docs`, then find it in the react/docs folder

