const newProject = [
    {
        id : 1,
        name : "Project1",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe excepturi accusantium deserunt sit quisquam fugit magni? Modi aperiam corrupti est repudiandae tempora dolor illo debitis repellendus, reiciendis magni numquam.",
        path : "https://Project1.com"
    },
    {
        id : 2,
        name : "Project2",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe excepturi accusantium deserunt sit quisquam fugit magni? Modi aperiam corrupti est repudiandae tempora dolor illo debitis repellendus, reiciendis magni numquam.",
        path : "https://Project2.com"
    },
    {
        id : 3,
        name : "Project3",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe excepturi accusantium deserunt sit quisquam fugit magni? Modi aperiam corrupti est repudiandae tempora dolor illo debitis repellendus, reiciendis magni numquam.",
        path : "https://Project3.com"
    },
    {
        id : 4,
        name : "Project4",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe excepturi accusantium deserunt sit quisquam fugit magni? Modi aperiam corrupti est repudiandae tempora dolor illo debitis repellendus, reiciendis magni numquam.",
        path : "https://Project4.com"
    },
];

const project = [...new Set(newProject.map((project)=>{
    return project
}))];

const first = (project)=>{
    document.getElementById("new-project").innerHTML = project.map((creat)=>{
        var{name,description,path} = creat;
        return(
           `<div class="card" style="width: 24rem;">
             <div class="card-body">
               <h2 class="card-title">${name}</h2>
               <p class="card-text">${description}</p>
               <a href="${path}" class="card-link"><button id="btn">Sea Project</button></a>
             </div>
           </div>`
        )
    }).join('')
}
first(project);

var typed = new Typed(".change-text",{
    strings:["am a Web Developer","Know the WordPress","Know the Wix","Know the Shopify"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
});