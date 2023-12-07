  
  let tatleName ='اذهب الي الموقع'
  const PROJECT_JAVASCRIPT =[
		{
			name:' randomColor  || لون عشوائي للصفحة ',
			title:tatleName,
			img:'',
			url:'https://m21wx.github.io/Project-1-RandomColor/',
		},
		{
			name:' counterNumber  ||  عداد رقم',
			title:tatleName,
			img:'',
			url:'https://m21wx.github.io/Project-2-Counter/',
		},
		{
			name:' Carousel  ||  شريط التمرير',
			title:tatleName,
			img:'',
			url:'https://m21wx.github.io/-Project-3-Carousel/',
		},
		{
			name:' Navbar  ||  شريط التنقل',
			title:tatleName,
			img:'',
			url:'https://m21wx.github.io/Project-4-ResponsiveNavbar/',
		},
		
		{
			name:' sliderbar  ||  شريط التمرير',
			title:tatleName,
			img:'',
			url:'https://m21wx.github.io/Project-5-Slidebar/',
		},
		{
			name:' Modal  ||  مشروط ',
			title:tatleName,
			img:'',
			url:'https://m21wx.github.io/Project-6-Modal/',
		},
		{
			name:' tab  ||  قائمة  ',
			title:tatleName,
			img:'',
			url:'https://m21wx.github.io/Project-7-FAQ-Page/',
		},
		{
			name:' video   ||  فيديو ',
			title:tatleName,
			img:'',
			url:'https://m21wx.github.io/Project-9-video/',
		},
		{
			name:' scroll   ||  شريط التنقل ',
			title:tatleName,
			img:'',
			url:'https://m21wx.github.io/Project-10-scroll/',
		},
		{
			name:' Tabs   ||  صفحات ',
			title:tatleName,
			img:'',
			url:'https://m21wx.github.io/Project-11-Tabs/',
		},
		{
			name:' clock   ||  ساعة ',
			title:tatleName,
			img:'',
			url:'https://m21wx.github.io/Project-12-clock/',
		},
		{
			name:' Lorem   ||  النص البديل ',
			title:tatleName,
			img:'',
			url:'https://m21wx.github.io/Project-13-Lorem/',
		},
		{
			name:' List   ||  أنشاء قائمة مهامي',
			title:tatleName,
			img:'',
			url:'https://m21wx.github.io/Project-14-List/',
		},
		{
			name:' SliderImg   ||  تمرير صور ',
			title:tatleName,
			img:'',
			url:'https://m21wx.github.io/Project-15-Slider/',
		},
		{
			name:' مجموعه من التمارين',
			title:tatleName,
			img:'',
			url:'https://m21wx.github.io/design-1/',
		},
  
  ];
  
   for(let i= 0; i <PROJECT_JAVASCRIPT.length ; i++){
	    let divs=`
		<div>
				<h3> ${PROJECT_JAVASCRIPT[i].name} </h3>
				
				<a href =${PROJECT_JAVASCRIPT[i].url} target="_blank" > ${PROJECT_JAVASCRIPT[i].title} </a>
		
		</div>
	   `;
	   document.querySelector('section').innerHTML += divs;
	
   }
   
