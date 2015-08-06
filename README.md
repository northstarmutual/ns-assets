# Working with the ns-assets folder

You must have nodejs and npm installed as well as a version of ruby for this to work...

Clone the folder to your d: drive.. `d:\users\winne\node`

```
git clone git@gitlab.galaxy.local:onlinequoting/ns-assets.git
```

Switch into that folder

```
cd ns-assets
```

Install bower packages by running `bower install`

Install packages specified in *package.json* by running `npm install`

Once packages have been installed see if you can build it by running the `gulp` command in the `ns-assets` folder.

Once you're able to build you can set up livereload and monitor the files in realtime by running `gulp serve`



