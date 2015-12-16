ssh gitlab.galaxy.local "mkdir -p /var/www/docs/styleguide"
ssh gitlab.galaxy.local "rm /var/www/docs/styleguide/*"
scp -r ${PWD}/_site/* gitlab.galaxy.local:/var/www/docs/styleguide