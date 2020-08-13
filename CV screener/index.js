let data = [{
    name: 'Ram Narayan',
    Age: 23,
    location: 'Dhobighat',
    Occupation: 'Student',
    Gender: 'Male',
    img: 'https://randomuser.me/api/portraits/men/51.jpg'
},
{
    name: 'Shyam Narayan',
    Age: 50,
    location: 'Patan',
    Occupation: 'Student',
    Gender: 'Male',
    img: 'https://randomuser.me/api/portraits/men/52.jpg'
},
{
    name: 'Sita Shakya',
    Age: 20,
    location: 'Dhapakhel',
    Occupation: 'Student',
    Gender: 'Female',
    img: 'https://randomuser.me/api/portraits/women/51.jpg'
},
{
    name: 'Gita Shakya',
    Age: 23,
    location: 'Pulchowk',
    Occupation: 'Student',
    Gender: 'Female',
    img: 'https://randomuser.me/api/portraits/women/56.jpg'
},
{
    name: 'Shawn Narayan',
    Age: 19,
    location: 'Mangalbazar',
    Occupation: 'Student',
    Gender: 'Male',
    img: 'https://randomuser.me/api/portraits/men/59.jpg'
},
{
    name: 'Ramita Kharel',
    Age: 23,
    location: 'Dhobighat',
    Occupation: 'Student',
    Gender: 'Female',
    img: 'https://randomuser.me/api/portraits/women/41.jpg'
}


]
next = document.getElementById('next');


function CViterator(profile) {
    let nextindex = 0;
    return {

        next: function () {
            if (nextindex < profile.length) {
                return {
                    value: profile[nextindex++],
                    done: false
                }
            }

            else {
                return { done: true }
            }
        }
    }
}
const candidate=CViterator(data)
nextCV();
console.log(candidate)
next.addEventListener('click',nextCV)
function nextCV(){
    const currentcandidate=candidate.next().value;
    let img = document.getElementById('img');
    let profile = document.getElementById('profile');
    if(currentcandidate!=undefined){
        img.innerHTML=`<img src="${currentcandidate.img}">`;
        profile.innerHTML=`<ul class="list-group">
  <li class="list-group-item">Name: ${currentcandidate.name}</li>
  <li class="list-group-item">Age: ${currentcandidate.Age} years old</li>
  <li class="list-group-item">Location: ${currentcandidate.location}</li>
  <li class="list-group-item">Occupation: ${currentcandidate.Occupation}</li>
  <li class="list-group-item">Gender: ${currentcandidate.Gender}</li>
</ul>`;
    }
    else{
        alert("End of candidate applicantion");
        window.location.reload();
    }

}

