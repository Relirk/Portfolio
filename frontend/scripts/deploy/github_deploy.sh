echo
echo "$(tput setaf 6)Exiting the scripts directory$(tput sgr0)"
cd ../..

echo
echo "$(tput setaf 6)Starting React build$(tput sgr0)"
echo
yarn build

echo
echo "$(tput setaf 6)Starting Github Pages deploy to https://relirk.github.io/Portfolio/$(tput sgr0)"
echo
gh-pages -d build