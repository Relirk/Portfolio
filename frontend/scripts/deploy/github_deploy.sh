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

echo
echo "$(tput setaf 6)Launch Github url https://relirk.github.io/Portfolio/$(tput sgr0)"
echo
sleep 3s
unameOut="$(uname -s)"
case "${unameOut}" in
    Linux*)     machine=Linux;;
    Darwin*)    machine=Mac;;
    CYGWIN*)    machine=Cygwin;;
    MINGW*)     machine=MinGw;;
    *)          machine="UNKNOWN:${unameOut}"
esac
echo "You are using a ${machine} machine"
if [ ${machine} = "Linux" ]; then
    xdg-open https://relirk.github.io/Portfolio/
else
    open -n -a "Google Chrome" --args "--new-window" "https://relirk.github.io/Portfolio/"
fi