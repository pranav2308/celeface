import React from 'react';


const generateRandomColor = () => {
	return ("#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);}));
}

const calculateFaceLocations = (clarifaiFaces) => {
  
  let width, height;
  
  //If image exist on the page then get its dimensions else make it 0.
  try{
  	const image = document.getElementById('inputImage');
	width = Number(image.width);
	height = Number(image.height);
  }catch(err){
  	width = 0;
  	height = 0;
  }
 
 //Magnify clarify output by the image's dimension.
  return clarifaiFaces.map((element) => {
      const squarePercentages = element.region_info.bounding_box;
      return (
        {
          leftCol : squarePercentages.left_col * width,
          rightCol  : (1 - squarePercentages.right_col) * width,
          topRow : squarePercentages.top_row * height,
          bottomRow : (1 - squarePercentages.bottom_row) * height,
        }
      ); 
    });
  }

const generateTable = (tableEntries) => {
	return(
		<div className="pa4">
			<div className="overflow-auto">
	    		<table className="f6 w-100 mw8 center" cellSpacing="0">
		      		<tbody className = "lh-copy pa3 ml-auto mr-auto">
		      			<tr>
		      				<td className="fw6 f3 bb b--black-20 tl pa3 pr3 ">Sr.No.</td>
		      				<td className="fw6 f3 bb b--black-20 tl pa3 pr3 ">Celebrity Name</td>
				        	<td className="fw6 f3 bb b--black-20 tl pa3 pr3 ">Probability (%)</td>
				        </tr>
			        	{tableEntries}
		      		</tbody>
	    		</table>
			</div>
		</div>
	);
}

const generateResult = (clarifaiFaces) => {
	
	const faceBoxBoundries = calculateFaceLocations(clarifaiFaces);
	const noOfCelebrities = clarifaiFaces.length;
	let tableEntries = [];
	let faceBoxElement = [];

	//For each celebrity, add the table entry and bounding box with same color.
	for(let index = 0; index < noOfCelebrities; index++){
		let color = generateRandomColor();


		let celebrity = clarifaiFaces[index].data.concepts[0];
		tableEntries.push(<tr key = {index}>
				<td style = {{color : color}} className="fw6 pv3 f4 pr3 bb">{index + 1}</td>
				<td style = {{color : color}} className="fw6 pv3 f4 pr3 bb">{celebrity.name}</td>
				<td style = {{color : color}} className="fw6 pv3 f4 pr3 bb">{Math.round(celebrity.value * 100).toString().concat('%')}</td>
			</tr>);

		let box = faceBoxBoundries[index];
		let style = {top : box.topRow, bottom : box.bottomRow, left : box.leftCol, right : box.rightCol, boxShadow: `0 0 0 3px ${color} inset`};
		faceBoxElement.push(<div className = "celeb-bounding-box" style = {style} key = {index}></div>);
	}

	return (
		{
			tableElement : generateTable(tableEntries),
			faceBoxElement : faceBoxElement	
		}
	);
}

export { generateResult };