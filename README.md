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

# Building and moving the assets for development (Arthur3)

To build the assets you simply run `gulp`.  When doing this it will build the files for DEV purposes leaving them unminified and not concatenated.

To move the files to just run `gulp move`.

By default the commands `gulp` and `gulp move` command are meant for development.

# Building and moving the assets for test (Arthur2)

When moving test it's a good idea to have the files like you'd want them in production so for this we'll build them like so `gulp --production`.

To move un minified files to Arthur2 run `gulp move --server=Arthur2`
To move minified files to Arthur2 run `gulp move --production --server=Arthur2`

# Building and moving the assets for production (Arthur)

If you just built the files for production using `gulp --production` you won't need to do this again.

To move them to the production machine run `gulp move --production --server=Arthur`

# Combining the two

To build the files and move them in one shot run the command below

`gulp --production && gulp move --production --server=Arthur2`




