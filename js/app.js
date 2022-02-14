/*
I removed the given comments as they confused me
*/

// creating navbar by specifying the id 'navbar__list' from the html file in the ul tag,it's a constant as its only one navigation bar
const navBar = document.getElementById("navbar__list");

/*
creating list items 
first line is inserting the navBar inside the html file by using 'innerHTML' then I used the querySelectorAll in order to select all the 
sections then used a for loop in order to create a list item for each section then the navBar is inserted into the HTML

*/
const createNavItems = () => {
  navBar.innerHTML = "";
  sections.forEach((section) => {
    const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
   navBar.insertAdjacentHTML("beforeend", listItem);
  });
};

//selecting all sections
const sections = document.querySelectorAll('section');

// making the activation function to make each current section active (the background shadow and floating balls) &implementating the actual function

const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffset = section.getBoundingClientRect().top;

        inviewport = () => elementOffset < 150 && elementOffset >= -150;

        section.classList.remove('your-active-class');
        if(inviewport()){
        section.classList.add('your-active-class');

    }
    });
};

window.addEventListener('scroll' ,sectionActivation);


//calling the function that creates list items
//note: we need to create the navLinks first before selecting them
for (let i = 1; i < 5; i++) 
createNavItems();

//smooth scrolling
const navLinks = document.querySelectorAll("#navbar__list a");
const navLinksArr = Array.prototype.slice.call(navLinks);
console.log(navLinksArr);

navLinksArr.forEach((link) => {

    link.addEventListener('click', (event) => {
        event.preventDefault();  // prevent the page from reloading (a default behavior when a link is clicked)

       
        //here we get the section id
        const sectionId = event.target.dataset.nav;
        const targetSection = document.querySelector(`#${sectionId}`);// use `.querySelector(id)` to select the corresponding section
        console.log(targetSection);

        // add smooth scrolling feature like this-
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
    })

});


//return to top button
const button = document.querySelector("#btn");

button.addEventListener("click",function(){
  window.scrollTo({top:0,left:0,behavior: 'smooth'});
});