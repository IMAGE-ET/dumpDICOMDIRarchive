 function readDICOMDIR(event) {
    var file = event.target; 
    var reader = new FileReader();
    reader.onload = function(event) {
        var arrayBuffer = reader.result; 
        var byteArray = new Uint8Array(arrayBuffer);
            dumpDICOMDIR(byteArray);
    }; // end onload
    reader.onerror = function(event) {
        alert("Reading Error");
    };  // end onerror
    reader.readAsArrayBuffer(file.files[0]);
}  // end function dragDICOMDIR()            