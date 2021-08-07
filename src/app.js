

const gallery = document.querySelector(".gallery");
const changeButton = document.querySelector(".change-button");



/*
    changeButton.addEventListener("click",function (e) {
        const f = likes[0].like + 1;
        likes = f;
        likes = JSON.parse(localStorage.getItem("likes"));
        console.log(likes);

    })
    



*/
gallery.childNodes.forEach(element => {
    if(element.nodeName !=  "#text") {
        element.childNodes.forEach(elementv=>{
            if(elementv.nodeName != "#text") {
                

            }

        })
    }
});
new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});

/*
//methods
var myFullpage = new fullpage('#fullpage', {
	//Navigation
	menu: '#menu',
	lockAnchors: false,
	anchors:['firstPage', 'secondPage'],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	//Scrolling
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	//Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Design
	controlArrows: true,
	verticalCentered: true,
	sectionsColor : ['#ccc', '#fff'],
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	dropEffect: false,
	dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
	waterEffect: false,
	waterEffectOptions: { animateContent: true, animateOnMouseMove: true},
	cards: false,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

	//Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,

	//events
	onLeave: function(origin, destination, direction){},
	afterLoad: function(origin, destination, direction){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
});
*/

const liketime = document.getElementById("likestime");


;


let alem = parseInt(localStorage.getItem("deneme"));

(alem == NaN || alem == null) ? 0:parseInt(localStorage.getItem("deneme")); 

(liketime.textContent == 0) ? liketime.innerHTML = alem : false;


  changeButton.addEventListener("click",function (e) 
  {
        alem = alem + 1;

        localStorage.setItem("deneme",parseInt(alem))   ;
        liketime.textContent = alem;
    })






    let savedImage = 
    [
        {
            imgSoruce:"./img/889aee30df2445be2b8c7af0b56b9fd1.jpg",
            date:new Date().toLocaleDateString()
        },    
    ]

    savedImage = JSON.parse(localStorage.getItem("saveImage"));

    function saved(e) { 
        const savedDiv = document.createElement("div");
        savedDiv.innerHTML="SAVED";
        savedDiv.classList.add("conf");

        document.body.appendChild(savedDiv);

        setTimeout(() => {
            document.body.removeChild(savedDiv);

        }, 500);
        let val = e.target.attributes.src.value;
      /*
         e.target.attributes.src.value;
      
      */
     savedImage.push({imgSoruce:val,date:new Date().toLocaleDateString()});
        

    localStorage.setItem("saveImage",JSON.stringify(savedImage));


    }

    const savedImageList = document.querySelector(".savedImageList");
    
    savedImage.forEach(element => {
        const addImg = document.createElement("img");
        addImg.classList.add("addImage");
        addImg.setAttribute("src",element.imgSoruce);
        savedImageList.appendChild(addImg);
    })


