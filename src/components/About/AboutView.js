import React from 'react';

const AboutView = () => {

	return (

		<div className = "v-mid ma4">
			<p className = "f1 lh-title">Welcome to Celeface App!</p>
			<p className = "fw6 mw-100 tc">
				CeleFace detects over 10,000 celebrities from their faces in the picture that you submit. 
				If the submitted picture that does not contain any celebrities, it can detect human faces in it too! 
				Just give us link of the picture and see the magic. Moreover, more the pictures you submit, higher the image entries you get! 
				You can compete with the people from all over the world to submit highest image entries ever. 
				Then what are you waiting for? Just read the instructions and start CeleFacing!
			</p>

			<p className="f5 lh-copy i tl">
					Instructions for using CeleFace webapp:
					<ul>
						<li>
							After signing-in (or registering if you are a new user), navigate to the home page by using ‘Home’ link on the navigation bar.  
						</li>
						<li>
							Paste the image link in text box from which you want to detect celebrities or faces. 
							(Tip: If you are having hard time to get the link of the image you found online, search the image on <a href="https://finance.bing.com/" classname="no-underline">bing</a>. Yes, you read that right. it's bing and not google! 
								Click on the image you want and click on ‘More’ button. You will see option of ‘View Image’ popping up. Click on it and copy-paste its url in the searchbox).
						</li>
						<li>
							If you want to detect celebrities in the picture, click on ‘Detect Celebrities’ button. CeleFace will then provide you color-coded celebrity list (same color for entry in the list and box around his/her face) along with probability of detection.
						</li>
						<li>
							If you want to detect human faces in the picture, then click on ‘Detect Faces’ button and CeleFace will provide you boxes around the faces it has detected.
						</li>
					</ul>
				</p>
		</div>
	);
}

export default AboutView;