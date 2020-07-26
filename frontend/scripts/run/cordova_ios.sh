echo
echo "$(tput setaf 6)Starting setup cordova$(tput sgr0)"
echo
. ./setup_cordova.sh

echo
echo "$(tput setaf 6)Starting cordova build - IOS$(tput sgr0)"
echo
cordova build ios --verbose

echo
echo "$(tput setaf 6)Trying to start the application$(tput sgr0)"
echo
cordova run ios
