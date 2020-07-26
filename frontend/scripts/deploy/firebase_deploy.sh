echo
echo "$(tput setaf 6)Exiting the scripts directory$(tput sgr0)"
echo
cd ../..

echo
echo "$(tput setaf 6)Starting React build$(tput sgr0)"
echo
yarn build

echo
echo "$(tput setaf 6)Starting Firebase deploy$(tput sgr0)"
echo
firebase deploy