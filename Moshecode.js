define(['pipAPI', 'https://cdn.jsdelivr.net/gh/jspeer1/testing/touchscreen.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();
	var global = API.getGlobal();
	var postraits = API.getGlobal().alltraits[0];
	var negtraits = API.getGlobal().alltraits[1];

	
	return iatExtension({
		canvas : {
				maxWidth: 850,
				proportions : 0.8,
				background: '#ffffff',
				borderWidth: 5,
				canvasBackground: '#ffffff',
				borderColor: 'lightblue'
		},
		
		randomAttSide : false, //If false attribute 1 on Left
		randomBlockOrder : false, //If false category 1 on Left
		nBlocks : 5, //Can be 5 or 7.
			////In each block, we can include a number of mini-blocks, to reduce repetition of same group/response.
			blockAttributes_nTrials : 20,
			blockAttributes_nMiniBlocks : 5,
			blockCategories_nTrials : 20,
			blockCategories_nMiniBlocks : 5,
			blockFirstCombined_nTrials : 40,
			blockFirstCombined_nMiniBlocks : 10,
			blockSecondCombined_nTrials : 40, //Not used if nBlocks=5.
			blockSecondCombined_nMiniBlocks : 10, //Not used if nBlocks=5.
			blockSwitch_nTrials : 20,
			blockSwitch_nMiniBlocks : 5,
			
        category1 : {
            name : 'Black faces', //Will appear in the data.
            title : {
                media : {image : global.targetTestPos[7]+'.jpg'}, //Name of the category presented in the task.
                css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
				{image: global.targetTestPos[0]+'.jpg'},
				{image: global.targetTestPos[1]+'.jpg'},
				{image: global.targetTestPos[2]+'.jpg'},
				{image: global.targetTestPos[3]+'.jpg'},
				{image: global.targetTestPos[4]+'.jpg'},
				{image: global.targetTestPos[5]+'.jpg'}
            ], 
			//Stimulus css
			stimulusCss : {"height":"60%", "margin-bottom":"5%"} 
        },    
        category2 :    {
            name : 'White faces', //Will appear in the data.
            title : {
                media : {image : global.targetTestNeg[7]+'.jpg'}, //Name of the category presented in the task.
                css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
				{image: global.targetTestNeg[0]+'.jpg'},
				{image: global.targetTestNeg[1]+'.jpg'},
				{image: global.targetTestNeg[2]+'.jpg'},
				{image: global.targetTestNeg[3]+'.jpg'},
				{image: global.targetTestNeg[4]+'.jpg'},
				{image: global.targetTestNeg[5]+'.jpg'}
            ],
            //Stimulus css
			stimulusCss : {"height":"60%", "margin-bottom":"5%"} 
        }, attribute1 : 
			{
				name : 'Good', 
				title : {
					media : {word : 'Good'}, 
					css : {color:'#000000','font-size':'2em'}, 
					height : 4 //Used to position the "Or" in the combined block.
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: postraits[0]},
					{word: postraits[1]},
					{word: postraits[2]},
					{word: postraits[3]},					
					{word: postraits[4]},
					{word: postraits[5]}
				], 
				//Stimulus css
				stimulusCss : {color:'#000000','font-size':'2em'} 
			},
			attribute2 : 
			{
				name : 'Bad', 
				title : {
					media : {word : 'Bad'}, 
					css : {color:'#000000','font-size':'2em'}, 
					height : 4 //Used to position the "Or" in the combined block.
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: negtraits[0]},
					{word: negtraits[1]},
					{word: negtraits[2]},
					{word: negtraits[3]},					
					{word: negtraits[4]},
					{word: negtraits[5]}
				], 
				//Stimulus css
				stimulusCss : {color:'#000000','font-size':'2em'}
			},	
			
			instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
			'Put a left finger on the <b>E</b> key when you see a face from the left category. ' +
			'Put a left finger on the <b>I</b> key when you see a face from the right category. ' +
			'The images will appear one at a time.<br/><br/>' +
			'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
			'Press the other key to continue.<br/>' +
			'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>'+
			'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',

			instAttributePractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
			'Put a left finger on the <b>E</b> key for items that belong to the category <font color="#000000">leftAttribute.</font>' +
			'<br/>Put a right finger on the <b>I</b> key for items that belong to the category <font color="#000000">rightAttribute</font>.<br/><br/>' +
			'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
			'Press the other key to continue.<br/>' +
			'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>'+
			'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',

			instFirstCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
			'Use the <b>E</b> key for an image of a face from the left category and for <font color="#000000">leftAttribute</font>.<br/>' +
			'Use the <b>I</b> key for an image of a face from the right category and for  <font color="#000000">rightAttribute</font>.<br/>' +
			'Each item belongs to only one category.<br/><br/>' +
			'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
			'Press the other key to continue.<br/>' + 
			'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +
			'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',

			instSecondCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
			'This is the same as the previous part.<br/>' +
			'Use the <b>E</b> key for an image of a face from the left category and for <font color="#000000">leftAttribute</font>.<br/>' +
			'Use the <b>I</b> key for an image of a face from the right category and for  <font color="#000000">rightAttribute</font>.<br/>' +
			'Each item belongs to only one category.<br/><br/>' +
			'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +
			'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',

			instSwitchCategories : '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
			'<b>Watch out, the faces have changed position!</b><br/>' +
			'Use the left finger on the <b>E</b> key when you see a face from the left category.<br/>' +
			'Use the right finger on the <b>I</b> key when you see a face from the right category.<br/><br/>' +
			'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +
			'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',

		
			fb_strong_Att1WithCatA_Att2WithCatB : 'Your data suggest a strong automatic preference for categoryA over categoryB.',
			fb_moderate_Att1WithCatA_Att2WithCatB : 'Your data suggest a moderate automatic preference for categoryA over categoryB.',
			fb_slight_Att1WithCatA_Att2WithCatB : 'Your data suggest a slight automatic preference for categoryA over categoryB.',
			fb_equal_CatAvsCatB : 'Your data suggest no automatic preference between categoryA and categoryB.',
			
        base_url : {//Where are your images at?
            image : '/implicit/user/mpoliak/testing11/images/'
        } 
        
        
    });
    
    
});
