function dumpDICOMDIR(byteArray) {
    var dataSet;
    var output = "<h2>DICOMDIR Archive</h2><ul>";
    try {
        dataSet = dicomParser.parseDicom(byteArray);
        output += "<li>FileSetID : " + dataSet.string('x00041130') + "</li>";
        output += "<li>Implementation Version Name : " + dataSet.string('x00020013') + "</li>";
        for (var j in dataSet.elements) {
			if (dataSet.elements.hasOwnProperty(j)) {
				var element = dataSet.elements[j];  
				if(element.tag == "x00041220") {
					for (var item in element.items) {
						if (element.items.hasOwnProperty(item)) {
							for (var k in element.items[item].dataSet.elements) {
								if (element.items[item].dataSet.elements.hasOwnProperty(k)) {
									if (element.items[item].dataSet.elements[k].tag == 'x00041430') {  
										var type = element.items[item].dataSet.string('x00041430');
										switch(type) {
											case "PATIENT" :
											var patient = element.items[item].dataSet.string('x00100010');
											var id = element.items[item].dataSet.string('x00100020');
											output += "<li>Clinical Case Name (PatientName) : " +  patient + "</li>"; 
											output += "<li>Clinical Case ID : " +  id + "</li>"; 
											break;
											case "STUDY" :
											var study = element.items[item].dataSet.string('x00081030');
											output += "<li>STUDY : " + study + "</li>";
											break;
											case "SERIES" :
											var modality = element.items[item].dataSet.string('x00080060');
											output += "<li>SERIES MODALITY: " + modality + "</li>";
											break;
											case "IMAGE" :
											var path = element.items[item].dataSet.string('x00041500');
											var instance = element.items[item].dataSet.string('x00200013');   
											output += "<li>IMAGE REFERENCES : " + path + " - INSTANCE : " + instance + "</li>";
											break;
											default :
											output += "<li>TYPE : " + type + "</li>";
											break;
										} // end switch
									} // end if tag 
								}  // end if hasOwnProperty(k)
							}  // end for k  
						}  // end if hasOwnProperty(item)	
					}  // end for item 	
				} // end if tag 
			}  // end if hasOwnProperty(j)	
        }  // end for j
        output += "</ul>";
        var content = document.getElementById("dicomdirContent");
        content.innerHTML = output;
    }  // end try
    catch(err) {
        alert("DicomParsing Error");
    }  // end catch          
}  // end function dumpDICOMDIR(byteArray)