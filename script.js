const dropDownBtn = document.querySelector(".material-icons.menu-icon");
const dropDownMenu = document.querySelector(".menu-icon-container .show-dropdown");

dropDownBtn.addEventListener('click', function(){
    const dropDownMenuStyle = getComputedStyle(dropDownMenu);
    console.log('style', dropDownMenuStyle);
    const menuVisibility = dropDownMenuStyle.getPropertyValue('visibility');
    console.log('css visibility proprety is:', menuVisibility);

    if(menuVisibility === 'hidden'){
        dropDownMenu.style.visibility = 'visible';
    }
    else{
        dropDownMenu.style.visibility = 'hidden';
    }
});