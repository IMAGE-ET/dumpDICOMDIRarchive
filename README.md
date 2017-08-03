### dumpDICOMDIRarchive  ![logo](https://www.radiologic.fr/demos/radiologic-32x32.png) 

DICOMDIR is a file which is used when medical images are saved on CD-R, DVD-R, USB flash drives or other external storage devices.
DICOMDIR records patients and examinations information, and others, as tags of nested structure.   
The name of the DICOMDIR file is _DICOMDIR_, without any extension.    
DICOMDIR is part of DICOM [Digital Imaging and Communications in Medicine](http://dicom.nema.org/medical/dicom/current/output/html/part03.html#sect_F.2.2.2), a standard (ISO 12052) for storing and transmitting medical images.   
DICOM is managed by the [Medical Imaging &amp; Technology Alliance](http://www.medicalimaging.org/) (MITA), a division of the american [National Electrical Manufacturers Association](https://www.nema.org) (NEMA), now called the Association of Electrical Equipment and Medical Imaging Manufacturers.   

The present apps dump the content of a DICOMDIR file in a browser web page. Public demos are available at my website :   
* load a DICOMDIR file from a remote server : [loadDICOMDIR.html](https://www.radiologic.fr/demos/loadDICOMDIR.html)
* read a DICOMDIR file from a local folder : [readDICOMDIR.html](https://www.radiologic.fr/demos/readDICOMDIR.html)

![screenshot](https://github.com/mbarnig/dumpDICOMDIRarchive/blob/master/loadDICOMDIR.png)

The dicomParser library of the outstanding open-source cornerstone framework, developed by Chris Hafey, is used to parse the DICOMDIR file. The related javascript file [dicomParser.min.js](https://raw.githubusercontent.com/chafey/dicomParser/master/dist/dicomParser.min.js) is not included in this project, please download it from the [cornerstone GitHub](https://github.com/chafey).

The present repository is related to the medical project [RadioLogic](https://www.radiologic.fr/index.html).   
The demos and the related documentation have been created for my own needs.   
The files have been validated with the [W3C Markup Validation Service](https://validator.w3.org/) and with [JSHint](http://jshint.com/), a Javascript Code Quality Tool.   
The code has been tested with the following browsers :   
* Safari 10
* Safari iOS 10.3.1
* Firefox 54
* Chrome 60
* IE 11
* Edge 38   

I think the code may be of interest to other developers.
If you find it useful, you are welcome.
