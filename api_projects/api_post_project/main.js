const user_container = document.querySelector('.user-container');

const randImg = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg'
]

function selectRandImg(){
    const randomNum = Math.floor(Math.random()*randImg.length);

   const selectImg = randImg[randomNum];

   return selectImg;
}

selectRandImg();

function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayData(data))

    
}

function displayData(data){
       const div = document.createElement('div');
        div.classList.add('user');


 data.forEach(function(entry){
           const div = document.createElement('div');
           div.classList.add('user');


           const user = `
           <div class="left">
           <img src=${selectRandImg()} alt="">
           <p>${entry.name}</p>
       </div>
       <div class="right">
           <p>Username: ${entry.username}</p>
           <p>Email: ${entry.email}</p>
           <p>Phone: ${entry.phone}</p>
           <p>Address: ${entry.address.street}${entry.address.city}</p>
           <p>Website: ${entry.website}</p>

       </div>
           `

           div.innerHTML = user;

           user_container.appendChild(div);
 })
 
   

  
}



loadData();