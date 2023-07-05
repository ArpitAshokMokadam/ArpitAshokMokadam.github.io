 $("#displayform").hide();
 $("#table").hide();

let cityname = {
  "Select": ["Select"],
  "Maharashtra": ["Nagpur", "Mumbai", "Pune", "Wardha", "Bhandara", "Nashik"],
  "Madhya Pradesh": [
    "Bhopal",
    "Indore",
    "Jabalpur",
    "Ujjain",
    "Chhindwara",
    "Khandwa",
  ],
  "Gujrat": ["Ahmedabad", "Vadodara", "Surat", "Rajkot", "Jamnagar", "Bhavnagar"],
  'Karnataka': [
    "Bengaluru",
    "Mangaluru",
    "Shivamogga",
    "Chikkamagaluru",
    "Ballari",
    "Vijayapura",
  ],
  "Tamil Nadu": [
    "Thanjavur",
    "Coimbatore",
    "Madurai",
    "Tirunelveli",
    "Thoothukudi",
    "Salem",
  ],
};

let tabledata = [], globalindex = -1;

$(function () {
  $("#btn").click(function () {
    let userdate = new Date($("#dateid").val());
    let useryear = userdate.getFullYear();
    let currdate = new Date();
    let curryear = currdate.getFullYear();
    let age = curryear - useryear;
    $("#demo").html("your age is " + age);

    if (age >= 18) {
      $("#displayform").show();
      // $("#table").show();
      $("#demo").html("Congratulations :-) :-) you are eligible");
    } else {
      $("#displayform").hide();
      $("#table").hide();
      $("#demo").html("Sorry you are not eligible");
    } 


  });

  $("#uname").keyup(function () {
    let uname = $("#uname").val();
    // console.log(uname);
    let unamepatt = /^[a-zA-Z]{3,}(?:-[a-zA-Z]+)?(?:-[a-zA-Z]+)?$/;
    if (unamepatt.test(uname)) {
      // console.log("if");
      $("#unameval").addClass("text-success").removeClass("text-danger");
      $("#unameval").html("Valid Username");
      $("#uname").addClass("is-valid").removeClass("is-invalid");
    } else {
      // console.log("else");
      $("#unameval").addClass("text-danger").removeClass("text-success");
      $("#unameval").html("Invalid Username");
      $("#uname").addClass("is-invalid").removeClass("is-valid");
    }
  });

  $("#pwd").keyup(function () {
    let pwd = $("#pwd").val();
    // console.log(pwd);
    let pwdpatt = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,20})/;
    if (pwdpatt.test(pwd)) {
      $("#pwdeval").addClass("text-success").removeClass("text-danger");
      $("#pwdeval").html("Valid Password");
      $("#pwd").addClass("is-valid").removeClass("is-invalid");
    } else {
      $("#pwdeval").addClass("text-danger").removeClass("text-success");
      $("#pwdeval").html("Valid Password");
      $("#pwd").addClass("is-invalid").removeClass("is-valid");
    }
  });

  $("#cpwd").keyup(function () {
    let cpwd = $("#cpwd").val();
    let cpwdpatt = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,20})/;
    if (cpwdpatt.test(cpwd)) {
      $("#cpwdeval").addClass("text-success").removeClass("text-danger");
      $("#cpwdeval").html("Valid Confirm Password");
      $("#cpwd").addClass("is-valid").removeClass("is-invalid");
    } else {
      $("#cpwdeval").addClass("text-danger").removeClass("text-success");
      $("#cpwdeval").html("Invalid Password");
      $("#cpwd").addClass("is-invalid").removeClass("is-valid");
    }
  });

  $("#email").keyup(function () {
    let email = $("#email").val();
    let emailpatt = /[^\s]*@[a-z0-9.-]*/i;
    if (emailpatt.test(email)) {
      $("#emailval").addClass("text-success").removeClass("text-danger");
      $("#emailval").html("Valid Email");
      $("#email").addClass("is-valid").removeClass("is-invalid");
    } else {
      $("#emailval").addClass("text-danger").removeClass("text-success");
      $("#emailval").html("Invalid Email");
      $("#email").addClass("is-invalid").removeClass("is-valid");
    }
  });

  $("#userId").mouseenter(function () {
    let userid = $("#uname").val();
    let uid = userid.substring(0, 4);
    let uidinp = Math.floor(Math.random() * (999 - 99 + 1)) + 99;
    $("#userId").val(uid + "@" + uidinp);
    if (userid == "") {
      $("#userId").val("");
    }
  });

  $("#mobile").keyup(function () {
    let mobnum = $("#mobile").val();
    let mobnumpatt = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    if (mobnumpatt.test(mobnum)) {
      $("#mobnumeval").addClass("text-success").removeClass("text-danger");
      $("#mobnumeval").html("Valid Contact Number");
      $("#mobile").addClass("is-valid").removeClass("is-invalid");
    } else {
      $("#mobnumeval").addClass("text-danger").removeClass("text-success");
      $("#mobnumeval").html("Invalid Contact Number");
      $("#mobile").addClass("is-invalid").removeClass("is-valid");
    }
  });

  let str = "";
  for (let x in cityname) {
    // console.log(x);
    str += `<option value ="${x}">${x}</option>`;
  }
  $("#state").html(str);

  $("#state").change(function () {
    let selectedcity = $(this).val();

    // remaining code to load cities
    let str1 = "";
    for (y of cityname[selectedcity]) {
      //console.log(y);
      str1 += `<option>${y}</option>`;
    }
    $("#city").html(str1);
  });



   $("#table").hide();

  $("#submit").click(function () {
    $("#table").show();
    let obj = {
      Uname: $("#uname").val(),
      Pswrd: $("#pwd").val(),
      Cpswrd: $("#cpwd").val(),
      Email: $("#email").val(),
      State: $("#state").val(),
      City: $("#city").val(),
      UserId: $("#userId").val(),
      Mobile: $("#mobile").val(),
    };
  
    // console.log(obj);
    //      obj.password = $("#pwd").val();  <= object can also be created like this..
    tabledata.push(obj);
    // console.log(tabledata);
    let arrdata = "", i = 0;
    for (x of tabledata) {
      arrdata += `<tr>
                <td>${x.Uname}</td>
                <td>${x.Pswrd}</td>
                <td>${x.Cpswrd}</td>
                <td>${x.Email}</td>
                <td>${x.State}</td>
                <td>${x.City}</td>
                <td>${x.UserId}</td>
                <td>${x.Mobile}</td>
                <td><button onclick="editdata(${i})">Edit</button></td>
                <td><button onclick="deldata(${i})">Delete</button></td>
            </tr>`;

      i++;
    }
    // console.log(arrdata);
    $("#demo1").html(arrdata);

    $("#uname").val("");
    $("#pwd").val("");
    $("#cpwd").val("");
    $("#email").val("");
    $("#state").val("");
    $("#city").val("");
    $("#userId").val("");
    $("#mobile").val("");

  
  });

  $("#update").click(function () {
     obj = {
      Uname : $("#uname").val(),
      Pswrd: $("#pwd").val(),
      Cpswrd: $("#cpwd").val(),
      Email: $("#email").val(),
      State: $("#state").val(),
      City: $("#city").val(),
      UserId: $("#userId").val(),
      Mobile: $("#mobile").val(),
     }; 

     tabledata.splice(globalindex,1,obj);
    
      arrdata = "", i = 0;
     for (x of tabledata) {
      arrdata += `<tr>
                <td>${x.Uname}</td>
                <td>${x.Pswrd}</td>
                <td>${x.Cpswrd}</td>
                <td>${x.Email}</td>
                <td>${x.State}</td>
                <td>${x.City}</td>
                <td>${x.UserId}</td>
                <td>${x.Mobile}</td>
                <td><button onclick="editdata(${i})">Edit</button></td>
                <td><button onclick="deldata(${i})">Delete</button></td>
            </tr>`;

      i++;
    }
    // console.log(arrdata);
    $("#demo1").html(arrdata);

     $("#uname").val("");
     $("#pwd").val("");
     $("#cpwd").val("");
     $("#email").val("");
     $("#state").val("");
     $("#city").val("");
     $("#userId").val("");
     $("#mobile").val("");

     $("#update").hide();
     $("#submit").show();
     
  });
});

function editdata(id) {
  globalindex = id;
  console.log(id);
  console.log(tabledata[id]);
  $("#submit").hide();
  $("#update").show();

  $("#uname").val(tabledata[id].Uname);
  $("#pwd").val(tabledata[id].Pswrd);
  $("#cpwd").val(tabledata[id].Cpswrd);
  $("#email").val(tabledata[id].Email);
  $("#state").val(tabledata[id].State);
  $("#city").val(tabledata[id].City);
  $("#userId").val(tabledata[id].UserId);
  $("#mobile").val(tabledata[id].Mobile);
}

function deldata(id) {
  tabledata.splice(id,1);

  arrdata = "", i = 0;
  for (x of tabledata) {
   arrdata += `<tr>
             <td>${x.Uname}</td>
             <td>${x.Pswrd}</td>
             <td>${x.Cpswrd}</td>
             <td>${x.Email}</td>
             <td>${x.State}</td>
             <td>${x.City}</td>
             <td>${x.UserId}</td>
             <td>${x.Mobile}</td>
             <td><button onclick="editdata(${i})">Edit</button></td>
             <td><button onclick="deldata(${i})">Delete</button></td>
         </tr>`;

   i++;
 }
 // console.log(arrdata);
 $("#demo1").html(arrdata);
}
