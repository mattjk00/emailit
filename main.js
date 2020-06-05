let sendButton = document.getElementById("sendButton");

sendButton.onclick = function() {
    let name = document.getElementById("nameBox").value;
    let loc = document.getElementById("locBox").value;
    /*window.location.href = `mailto:police@minneapolismn.gov?cc=&
    bcc=minneapolis311@minneapolismn.gov,
    citizeninfo@hennepin.us,
    info@mpdfederation.com
    &subject=Justice for the Murder of George Floyd
    &body=Hello, My name is ${name}. I am a resident of ${loc} and I am emailing today to demand accountability for the racist murder of George Floyd.%0D%0A %0D%0A

   I demand that charges be pressed against all officers involved in this heinous racist murder, including specifically Derek Chauvin and Tou Thao. They should not be allowed to keep their jobs and should be charged and prosecuted to the fullest extent of the law for manslaughter. George Floyd should be alive today if it was not for the gross abuse of power and white supremacy exhibited by the Minneapolis Police Department, all officers involved must face consequences for this murder in order to provide his family with justice and prevent further cops from committing brutal acts of violence against our communities. In addition, I demand that we start providing more support towards community efforts and organizations outside of the police forces in order to prevent police brutality and violence in the future. 
   %0D%0A %0D%0A
   Sincerely,%0D%0A
   ${name}
   `;*/

   let phrase1 = pickFrom(["am emailing today to", ""]);
   let phrase2 = pickFrom(["insist", "demand"]);
   let phrase3 = pickFrom(["from", "a resident of"]);
   let phrase4 = pickFrom(["We Demand", "I Demand", ""]);
   let phrase5 = pickFrom(["June 5th", "6/5/2020"]);
   let phrase6 = pickFrom(["March 13th", "3/13/2020"]);

   //console.log(`${phrase1}${phrase2}${phrase3}${phrase4}${phrase5}${phrase6}`);

   window.location.href = `mailto:attorney.general@ag.ky.gov?cc=&
   bcc=greg.fischer@louisvilleky.gov,
   robert.schroeder@louisvilleky.gov
   &subject=${phrase4} Justice for Breonna Taylor
   &body=Hello,

   My name is ${name} and I am ${phrase3} ${loc}. I ${phrase1} demand accountability in the unjust murder of Breonna Taylor. I ${phrase2} that Jonathan Mattingly, Brett Hankison and Myles Cosgrove each be arrested and charged for 2nd degree murder for the wrongful death of Breonna Taylor.%0D%0A %0D%0A
   
   ${phrase5} would have been Breonna’s 27th birthday but she is unable to celebrate because on ${phrase6} your police recklessly executed a raid using a “no knock” warrant on the wrong home.%0D%0A %0D%0A
   
   Despite your almost 3 months of inaction, Breonna’s life matters and I want justice for her.
   %0D%0A %0D%0A
   Sincerely,%0D%0A
   ${name}
   `;
}

function pickFrom(a) {
    let i = Math.floor(Math.random() * a.length);
    return a[i];
}