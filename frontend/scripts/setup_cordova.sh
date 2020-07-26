echo
echo "$(tput setaf 6)Exiting the scripts directory$(tput sgr0)"
echo
cd ..

echo
echo "$(tput setaf 6)Removing build / and www / directories$(tput sgr0)"
echo
rm -rf ./build ./www

echo
echo "$(tput setaf 6)Starting React build$(tput sgr0)"
echo
yarn build 

echo
echo "$(tput setaf 6)Running cordova configuration script$(tput sgr0)"
echo
node __script.js 

echo
echo "$(tput setaf 6)Copying all the build files / to the www / directory (Log verbally)$(tput sgr0)"
echo
cp -av ./build ./www

echo
echo "$(tput setaf 6)Moving build / to www /$(tput sgr0)"
echo
mv build www