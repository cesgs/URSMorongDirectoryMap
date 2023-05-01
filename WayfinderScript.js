
    function populate(s1,s2){
        var s1 = document.getElementById(s1);
        var s2 = document.getElementById(s2);
        s2.innerHTML = "";

        if(s1.value == "CashierBuilding"){
            var optionArray =["Cashier|Cashier",
            "Office of the President|Office of the President",
            "Office of the Administration and Finance|Office of the Administration and Finance",
            "Office of the Academic Affairs|Office of the Academic Affairs",
            "Office of the Research Development Extension and Production|Office of the Research Development Extension and Production"];
            
        }

        else if(s1.value == "Others"){
            var optionArray =["Main Gate|Main Gate",
            "UPFDU|UPFDU",
            "EARTS|EARTS",
            "Gymnasium|Gymnasium",
            "Function Hall|Function Hall"];
        }

        else if(s1.value == "OSDSBuilding"){
            var optionArray=["OSDS Director|OSDS Director",
            "Student Activities Unit|Student Activities Unit",
            "Conseling Unit|Conseling Unit",
            "Student Admission Unit|Student Admission Unit",
            "Scholarship Unit|Scholarship Unit",
            "ID Production Unit|ID Production Unit",];
        }
        else if(s1.value == "BusinessandResourceGeneration"){

            var optionArray =["Water Refilling Station|Water Refilling Station",
            "CBA Morong Stock Room|CBA Morong Stock Room",
            "Campus Corporate Business Affairs|Campus Corporate Business Affairs",
            "University Corporate Business Affairs Office|University Corporate Business Affairs Office",
            "Printing Services|Printing Services",
            "Tarpaulin Section|Tarpaulin Section",
            "URS Provident Fund|URS Provident Fund",
            "Food Testing Laboratory|Food Testing Laboratory"];
        }
        else if(s1.value == "AmangHall"){

            var optionArray =["Amang Hall Room 1|Amang Hall Room 1",
            "Amang Hall Room 2|Amang Hall Room 2",
            "Amang Hall Room 3|Amang Hall Room 3",
            "Amang Hall Room 4|Amang Hall Room 4",
            "Science Laboratory|Science Laboratory",
            "Office of the Principal Laboratory School|Office of the Principal Laboratory School",
            "Laboratory School Coordinator's Office|Laboratory School Coordinator's Office",
            "Laboratory School Faculty Office|Laboratory School Faculty Office",
            "Amang Hall Room 11|Amang Hall Room 11",
            "Senior High School Registrar|Senior High School Registrar",
            "Amang Hall Room 13|Amang Hall Room 13"];
        }
        else if(s1.value == "IsidroSRodriguezBuilding"){

            var optionArray =["Medical Clinic|Medical Clinic",
            "Dental Clinic|Dental Clinic",
            "ISR 113|ISR 113",
            "ISR 114|ISR 114",
            "ISR 115|ISR 115",
            "ISR 116|ISR 116",
            "ISR 117|ISR 117",
            "COE Dean's Office|COE Dean's Office",
            "Office of the Campus Director|Office of the Campus Director",
            "Campus HRMO|Campus HRMO",
            "COA Office|COA Office",
            "University GAR Center|University GAR Center",
            "Office of the Director Administrative Services|Office of the Director Administrative Services",
            "Budget Office|Budget Office",
            "Audio Visual Education Center|Audio Visual Education Center",
            "Office of the University Public and Alumni Affairs|Office of the University Public and Alumni Affairs",
            "PREVAT|PREVAT",
            "University HRMO|University HRMO",
            "Office of the Dean Graduate School|Office of the Dean Graduate School",
            "Admission Office Graduate School|Admission Office Graduate School",
            "Graduate School Accreditation Center|Graduate School Accreditation Center",
            "ISR 204|ISR 204",
            "ISR 205|ISR 205",
            "ISR 206|ISR 206",
            "ISR 207|ISR 207",
            "ISR 208|ISR 208",
            "ISR 209|ISR 209",
            "ISR 210|ISR 210",
            "ISR 211|ISR 211",
            "College of Education Faculty Room|College of Education Faculty Room",
            "ISR 214|ISR 214",
            "ISR 215|ISR 215",
            "ISR 216 (Physics Laboratory)|ISR 216 (Physics Laboratory)",
            "ISR 217 (Chemistry Laboratory)|ISR 217 (Chemistry Laboratory)",
            "ISR 218 (Science Stock Room)|ISR 218 (Science Stock Room)",
            "ISR 219|ISR 219",
            "ISR 220|ISR 220",
            "ISR 221|ISR 221",
            "ISR 222|ISR 222",
            "ISR 223|ISR 223",
            "ISR 224|ISR 224",
            "ISR 225|ISR 225",
            "ISR 226|ISR 226",
            "ISR 227|ISR 227",
            "ISR 228|ISR 228",
            "ISR 229|ISR 229",
            "ISR 230|ISR 230",
            "ISR 231|ISR 231",
            "ISR 232|ISR 232",
            "ISR 301|ISR 301",
            "ISR 302|ISR 302",
            "ISR 303|ISR 303",
            "ISR 304|ISR 304",
            "ISR 305|ISR 305",
            "ISR 306|ISR 306",
            "ISR 307|ISR 307",
            "ISR 308|ISR 308",
            "ISR 309|ISR 309",
            "ISR 310 (Chemical Stock Room)|ISR 310 (Chemical Stock Room)",
            "ISR 311|ISR 311",
            "ISR 312|ISR 312",
            "ISR 313|ISR 313"];
        }
        else if(s1.value == "ScienceandTechnologyBuilding"){

            var optionArray =["SNT 1A|SNT 1A",
            "SNT 1B|SNT 1B",
            "SNT 1C|SNT 1C",
            "SNT Dean's Office (College of Engineering)|SNT Dean's Office (College of Engineering)",
            "SNT Faculty (College of Engineering)|SNT Faculty (College of Engineering)",
            "SNT 2A|SNT 2A",
            "SNT 2B|SNT 2B",
            "SNT 2C|SNT 2C",
            "SNT 2D|SNT 2D",
            "SNT 3A|SNT 3A",
            "SNT 3B|SNT 3B",
            "SNT 3C|SNT 3C",
            "SNT 3D|SNT 3D",
            "SNT 3E|SNT 3E"];
        }
        else if(s1.value == "CollegeofScienceBuilding"){

            var optionArray =["COS Dean's Office (College of Science)|COS Dean's Office (College of Science)",
            "COS Faculty (College of Science)|COS Faculty (College of Science)",
            "COS Computer Laboratory|COS Computer Laboratory",
            "COS BS Math Laboratory|COS BS Math Laboratory",
            "COS NCB1|COS NCB1",
            "COS NCB2|COS NCB2",
            "COS NCB3|COS NCB3",
            "COS Lab1(Botany Laboratory)|COS Lab1(Botany Laboratory)",
            "COS Lab2 (Bio Laboratory & Research Center)|COS Lab2 (Bio Laboratory & Research Center)",
            "COS Lab3 (Microbio Laboratory)|COS Lab3 (Microbio Laboratory)",
            "COS Lab4 (Chem Laboratory)|COS Lab4 (Chem Laboratory)"];
        }
        else if(s1.value == "CITShopA"){

            var optionArray =["CIT Shop A Tool Room|CIT Shop A Tool Room",
            "CIT Shop A Machine Room|CIT Shop A Machine Room",
            "CIT Shop A Machine Area|CIT Shop A Machine Area",
            "CIT Shop A Machine Area (Automotive Technology)|CIT Shop A Machine Area (Automotive Technology)",
            "CIT Shop A Machine Area (Civil Technology)|CIT Shop A Machine Area (Civil Technology)",
            "CIT Shop A Micro-Hydro Power Turbine Testing Center|CIT Shop A Micro-Hydro Power Turbine Testing Center",
            "CIT Shop A Supply and Property Management Office|CIT Shop A Supply and Property Management Office",
            "CIT Shop A Lecture Room 1|CIT Shop A Lecture Room 1",
            "CIT Shop A Lecture Room 2|CIT Shop A Lecture Room 2",
            "CIT Shop A Lecture Room 3|CIT Shop A Lecture Room 3",
            "CIT Shop A Lecture Room 4|CIT Shop A Lecture Room 4",
            "CIT Shop A Lecture Room 5|CIT Shop A Lecture Room 5",
            "CIT Shop A Lecture Room 6|CIT Shop A Lecture Room 6",
            "CIT Shop A Lecture Room 7|CIT Shop A Lecture Room 7",
            "CIT Shop A Faculy Room|CIT Shop A Faculy Room",
            "CIT Shop A Faculyu Lounge|CIT Shop A Faculyu Lounge"];
        }
        else if(s1.value == "CITShopB"){

            var optionArray =["CIT Shop B GLB 1 (Tools and Materials Storage)|CIT Shop B GLB 1 (Tools and Materials Storage)",
            "CIT Shop B GLB 2|CIT Shop B GLB 2",
            "CIT Shop B GLB 3|CIT Shop B GLB 3",
            "CIT Shop B GLB 4|CIT Shop B GLB 4",
            "CIT Shop B GLB 5|CIT Shop B GLB 5",
            "CIT Shop B GLB 6|CIT Shop B GLB 6",
            "CIT Shop B GLB 7|CIT Shop B GLB 7",
            "CIT Shop B GLB 8|CIT Shop B GLB 8",
            "CIT Shop B GLB 9|CIT Shop B GLB 9",
            "CIT Shop B GLB 10|CIT Shop B GLB 10",
            "CIT Shop B GLB 11|CIT Shop B GLB 11",
            "CIT Shop B GLB 12|CIT Shop B GLB 12",
            "CIT Shop B GLB 13|CIT Shop B GLB 13",
            "CIT Shop B GLB 14|CIT Shop B GLB 14",
            "CIT Shop B GLB 15 (Instructor Room)|CIT Shop B GLB 15 (Instructor Room)"];
        }
        else if(s1.value == "CITShopC"){

            var optionArray =["CIT Shop C CIT-IMDC Techno Gazette|CIT Shop C CIT-IMDC Techno Gazette",
            "CIT SHOP C Mechatronics Laboratory Room|CIT SHOP C Mechatronics Laboratory Room",
            "CIT SHOP C Industrial Coordinating Office|CIT SHOP C Industrial Coordinating Office",
            "CIT SHOP C Tool Room Electronics|CIT SHOP C Tool Room Electronics",
            "CIT SHOP C Tool Room Electrical|CIT SHOP C Tool Room Electrical",
            "CIT SHOP C Electrical Lab Room GU1|CIT SHOP C Electrical Lab Room GU1",
            "CIT SHOP C Electrical Lab Room GU2|CIT SHOP C Electrical Lab Room GU2",
            "CIT SHOP C Electrical Lab Room GU3|CIT SHOP C Electrical Lab Room GU3",
            "CIT SHOP C Electrical Lab Room GU4|CIT SHOP C Electrical Lab Room GU4",
            "CIT SHOP C Electronics Lab Room GU5|CIT SHOP C Electronics Lab Room GU5",
            "CIT SHOP C Electronics Lab Room GU6|CIT SHOP C Electronics Lab Room GU6",
            "CIT SHOP C Electronics Lab Room GU7|CIT SHOP C Electronics Lab Room GU7",
            "CIT SHOP C Research Room GU8|CIT SHOP C Research Room GU8",
            "CIT SHOP C Research Room Office GU9|CIT SHOP C Research Room Office GU9",
            "CIT SHOP C Electrical Room GU10|CIT SHOP C Electrical Room GU10",
            "CIT SHOP C Electrical Room GU11|CIT SHOP C Electrical Room GU11",
            "CIT SHOP C Electrical Room GU12|CIT SHOP C Electrical Room GU12",
            "CIT SHOP C Electrical Room GU13|CIT SHOP C Electrical Room GU13",
            "CIT SHOP C Electrical Room GU14|CIT SHOP C Electrical Room GU14",
            "CIT SHOP C CIT Accreditation Office GU15|CIT SHOP C CIT Accreditation Office GU15",
            "CIT SHOP C Office of the Dean CIT|CIT SHOP C Office of the Dean CIT"];
        }
        else if(s1.value == "RDEPBuilding"){

            var optionArray =["RDEP Office of the Director for Production and Services|RDEP Office of the Director for Production and Services",
            "RDEP Intellectual Property Office|RDEP Intellectual Property Office",
            "RDEP Office of the Director of Research and Development|RDEP Office of the Director of Research and Development",
            "RDEP Research and Development Office|RDEP Research and Development Office"];
        }
        else if(s1.value == "ELCBuilding"){

            var optionArray =["ELC F1|ELC F1",
            "ELC F2|ELC F2",
            "ELC F3|ELC F3",
            "ELC S1|ELC S1",
            "ELC S2|ELC S2",
            "ELC S3|ELC S3"];
        }
        else if(s1.value == "CITExtension"){

            var optionArray =["CIT EXT A|CIT EXT A",
            "CIT EXT B|CIT EXT B",
            "CIT EXT C|CIT EXT C",
            "CIT EXT D|CIT EXT D",
            "CIT EXT E|CIT EXT E",
            "CIT EXT F|CIT EXT F",
            "CIT EXT G|CIT EXT G",
            "CIT EXT H|CIT EXT H"];
        }
        else if(s1.value == "HRMBUILDING"){

            var optionArray =["HRM 127B|HRM 127B",
            "HRM 127A|HRM 127A",
            "HRM 126|HRM 126",
            "HRM Function Room|HRM Function Room",
            "HRM 237B|HRM 237B",
            "HRM 237A|HRM 237A",
            "HRM 235|HRM 235",
            "HRM 235A|HRM 235A",
            "HRM 128A|HRM 128A",
            "HRM 9A|HRM 9A",
            "HRM 9B|HRM 9B",
            "HRM Practice House|HRM Practice House",
            "HRM 238|HRM 238",
            "HRM 236|HRM 236"];
        }
        
            for(var option in optionArray){
                var pair = optionArray[option].split("|");
                var newOption = document.createElement("option");
                newOption.value = pair[0];
                newOption.innerHTML = pair[1];
                s2.options.add(newOption);
        }       

        
    }
  

    