function loadDICOMDIR() {
    var request = new XMLHttpRequest();
    var url = "https://d26p4r394lk457.cloudfront.net/dicom/DICOMDIR";
    try {
		document.getElementById("dicomdirContent").style.display = "block";
        request.open("get", url, true);
    }  // end try
    catch(err) {
        alert("XMLHttpRequest Error : " + err);
    } // end catch
    request.responseType = "arraybuffer";
    request.onreadystatechange = function(event) {
		if(request.readyState === 4) {
			if(request.status === 200) {
				var byteArray = new Uint8Array(request.response);
				dumpDICOMDIR(byteArray);
			} else {
				alert("XMLHttpRequest Error : " + request.status);
			}  // end if else status 200
		}  // end if state 4
    }; // end onreadystatechange
    request.send();
}  // end loadDICOMDIR     

       