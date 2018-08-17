

var a = [{ firstname: 'Rohit', lastname: 'Singh', city: 'Guwahati', state: 'Assam' },
{ firstname: 'Rahul', lastname: 'Vohra', city: 'Bangalore', state: 'Karnataka' },
{ firstname: 'Ranjita', lastname: 'Bhagat', city: 'Gorakhpur', state: 'UP' },
{ firstname: 'Rocky', lastname: 'Saikia', city: 'Kolkata', state: 'WB' },
{ firstname: 'Ayush', lastname: 'Jain', city: 'Jaipur', state: 'Rajasthan' },
{ firstname: 'Mithun', lastname: 'Reddy', city: 'Hyderabad', state: 'Telanagana' }

];

var html = "<div align='center' style='background-color:darkgray'>";

for (let i = 0; i < a.length; i++) {

  html += " " + " " +
    " <div style='border-style:solid'>" + " <span style='padding:80px'> " + " Firstname: " + a[i].firstname +
    " </span>" + "<span style='padding:60px'>" + "City: " + a[i].city + " </span>" + "<div>"
    + "<span style='padding:40px'> "
    + " Lastname: " + " " + a[i].lastname + " </span>" + "<span style='padding:10px'>"
    + " State: " + a[i].state + "</span>" + "</div> " + "</div>";

}

document.getElementById("box").innerHTML = html;

