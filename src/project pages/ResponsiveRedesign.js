const ResponsiveRedesign = () => {
    return (

  <div class="main-content">
    
    <section id="opener" >
        <div>
        <h6>The Belgian American Embassy</h6>
	        <h1>The Original Site</h1>
        	<p class="intro">
            This project addresses <a href="https://unitedstates.diplomatie.belgium.be/en">the website</a> for the Belgian Embassy and Consulates in the United States. The current website is disorganized and difficult to view on a mobile device.  
            </p>
            <div style="margin:10%">
           
           <img style="width: 105%" src="assets/annotated-mobile.jpg"/>
           <img  style="width: 105%"  src="assets/annotated-laptop.jpg"/>
           </div>

         <h3>Accessibility</h3>
            <p>There are several fundamental issues with this site which make it inaccessible to the target users:</p>
                <li>The page is full of small text with low contrast against its background</li>
                <li>The images included don't have alt text, so they can't be interpreted by a screenreader</li>
                <li>On the mobile version of the site, the buttons are too small for even the most dextrous fingers to reach them on a touchscreen.</li>
                <li>The language bar gets lost in the corner, allowing for users to be trapped in a version of the site that's in a language they don't understand. In combination with the small buttons, users with less mobility aren't able to access the language change feature.</li>
         
          
    	</div>
    </section>


    <section id="opener" >
      <div>
        <h1>The Redesign</h1>
        <div>
        <h3 style="margin-top:5%">Low-Fi Prototyping</h3>
        <img  style="width: 105%" src="assets/annotated lowfi mobile.png"/> 
        <img  style="width: 105%" src="assets/annotated-lowfi-laptop.png"/> 


        <h3>Style Guide</h3>
        <p>The style guide outlines major visual design choices for the main colors, typography, and reusable components’ different states.</p>
        <img  style="width: 105%" src="assets/Style Guide.png"/> 
        </div>

        <div>
          <h3>Hi-Fi Prototyping</h3>
          <img  style="width: 105%" src="assets/annotated-hifi-laptop.png"/>
          <img  style="width: 105%" src="assets/annotated-hifi-mobile.png"/> 
         
        </div>

        <div style="padding-bottom: 40%">
          <h1 style="margin-top: 15%">The site </h1>
          <p><a href="https://sdpy695.github.io/Responsive-Redesign/" target="_blank">The final design</a> is a dummy page made using html and css which is displayed in a more accessible way and can responsively adapt to screen resizing.</p>
         
        </div>

      </div> 


  </section>
 


</div>



    )
}

export default ResponsiveRedesign;