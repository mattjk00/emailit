let sendButton = document.getElementById("sendButton");

sendButton.onclick = function() {
    let name = document.getElementById("nameBox").value;
    let loc = document.getElementById("locBox").value;
    window.location.href = `mailto:police@minneapolismn.gov?
    bcc=minneapolis311@minneapolismn.gov,
    citizeninfo@hennepin.us,
    info@mpdfederation.com
    &subject=Justice for the Murder of George Floyd
    &body=Hello, My name is ${name}. I am a resident of ${loc} and I am emailing today to demand accountability for the racist murder of George Floyd.%0D%0A %0D%0A

   I demand that charges be pressed against all officers involved in this heinous racist murder, including specifically Derek Chauvin and Tou Thao. They should not be allowed to keep their jobs and should be charged and prosecuted to the fullest extent of the law for manslaughter. George Floyd should be alive today if it was not for the gross abuse of power and white supremacy exhibited by the Minneapolis Police Department, all officers involved must face consequences for this murder in order to provide his family with justice and prevent further cops from committing brutal acts of violence against our communities. In addition, I demand that we start providing more support towards community efforts and organizations outside of the police forces in order to prevent police brutality and violence in the future. 
   %0D%0A %0D%0A
   Sincerely,%0D%0A
   ${name}
   `;
}