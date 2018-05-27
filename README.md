# Zeiterfassung

This is a basic app I've created for a friend so he can easily type in his working hours and export it as an Excel-file. Needless to say, 
he loves *Dr. Who*. 

## How to use

Fill in the red input fields with your data and click the :heavy_check_mark: **Check Button**. It will fill in the fields in the coresponding hidden table we will export later and change the color to green to let you know you provided the needed input. Click the  
:x: **Delete Button** to delete your data or type in new ones and click the :heavy_check_mark: **Check Button** again.

Values for Auto (car) and Datum (date) are by default 1, respectively the current date. You can change them, if you don't they remain on default and will be exported as such.

Since material and costs therefore are optional they're marked orange. You can fill them with data or you can leave them empty. You can add up to 5 more fields for material and their costs using the  :heavy_plus_sign: **Addition Button** and you can delete them again by clicking on the  :recycle: **Garbage Button**. This will delete the values in the hidden table as well. Right now, it is only possible to delete the last two fields but none in between. I.e., if you've filled out 3 material input field you can delete the 3rd, but not the 1st or 2nd. You can "replace" them by adding empty values, though this will leave an empty row in your exported table. 

## To Do
There are still some things I'd like to change:
- [ ] Export Umlaute such as ä, ö and ü correctly to the Excel-file

*It still needs to import images provided as a link as well*
- [ ] Loop through the Material(-kosten) divs more efficiently

*First I just waned to get it to work so he can use it*
- [ ] Use regex to prevent formatting issues

- [ ] Whatever else B.K. wishes for after testing the app

 :octopus: Any input is welcome  :octopus:
