let container = document.querySelector(".main-container");
window.addEventListener('DOMContentLoaded', getData);
//fetch api call
function getData() {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      let output = ``;
      data.forEach((job) => {
        const lang = job.languages;
        let lan = " ";
        lang.forEach((name) => {
          lan += `
              <div class="hifi">
              <h5>${name} </h5>
              </div>
             `;
        });

        const tool = job.tools;
        let tol = " ";
        tool.forEach((tec) => {
          tol += `
             <div class="hifi">
             <h5>${tec} </h5>
             </div>
            `;
        });

        output += `
         <!--job card 1-->
         <div class="job-card">
           <!-- job posted company logo-->
           <div class="logo-container">
             <img
               id="logo1"
               src="${job.logo}"
               alt="job posted company logo"
             />
           </div>
           <!--job posted company information-->
           <div class="company-info-container">
             <!--company name-->
             <h3 class="company-name">${job.company}</h3>
             <!--job role-->
             <h1 class="job-role">${job.position}</h1>
             <!--job other information-->
             <ul class="job-more-info">
               <li class="job-post-time">${job.postedAt}</li>
               <li class="job-type">${job.contract}</li>
               <li class="job-location">${job.location}</li>
             </ul>
             <hr />
           </div>
           <!--job profile skill requirement-->
           <div class="job-skill-container">
             <!--skill 1-->
             <div class="skill">
               <h5>${job.role}</h5>
             </div>
             <!--skill 2-->
             <div class="skill">
               <h5>${job.level}</h5>
             </div>
             <!--skill 3-->
             <div class="lang">
               ${lan}
             </div>
             <div class="lang">
              ${tol}
           </div> 
           </div>
         </div>  `;
      });
      // console.log(data);

      container.innerHTML = output;
    })
    .catch((err) => console.log(err));
};
//filter button selection
const allBtn = document.getElementById('all');
const juniorBtn = document.getElementById('junior');
const frontendBtn = document.getElementById('frontend');
const backendBtn = document.getElementById('backend');
const fullStackBtn = document.getElementById('fullstack');
const seniorBtn = document.getElementById('senior');

//function call when button click
allBtn.addEventListener('click',getData);
//filter data function start here
juniorBtn.addEventListener('click',filterData);
seniorBtn.addEventListener('click',filterData);
frontendBtn.addEventListener('click',filterData);
backendBtn.addEventListener('click',filterData);
fullStackBtn.addEventListener('click',filterData);

//fetch data from the json file when button click
function filterData(e){
    fetch("/data.json")
    .then((response) => response.json())
    .then((data)=>{
      //filter output box
      let filterOutput = ``;
      
      switch(e.target.id){
        case "senior":
          filterOutput = `
          <!--job card 1-->
          <div class="job-card">
            <!-- job posted company logo-->
            <div class="logo-container">
              <img
                id="logo1"
                src="${data[0].logo}"
                alt="job posted company logo"
              />
            </div>
            <!--job posted company information-->
            <div class="company-info-container">
              <!--company name-->
              <h3 class="company-name">${data[0].company}</h3>
              <!--job role-->
              <h1 class="job-role">${data[0].position}</h1>
              <!--job other information-->
              <ul class="job-more-info">
                <li class="job-post-time">${data[0].postedAt}</li>
                <li class="job-type">${data[0].contract}</li>
                <li class="job-location">${data[0].location}</li>
              </ul>
              <hr />
            </div>
            <!--job profile skill requirement-->
            <div class="job-skill-container">
              <!--skill 1-->
              <div class="skill">
                <h5>${data[0].role}</h5>
              </div>
              <!--skill 2-->
              <div class="skill">
                <h5>${data[0].level}</h5>
              </div>
              <!--skill 3-->
              <div class="lang">
              <div class="hifi">
              <h5>${data[0].languages[0]}</h5>
              </div>
              <div class="hifi">
              <h5>${data[0].languages[1]}</h5>
              </div>
              <div class="hifi">
              <h5>${data[0].languages[2]}</h5>
              </div>
              </div>
            </div>
          </div>  

          <!--job card 2-->
          <div class="job-card">
            <!-- job posted company logo-->
            <div class="logo-container">
              <img
                id="logo1"
                src="${data[1].logo}"
                alt="job posted company logo"
              />
            </div>
            <!--job posted company information-->
            <div class="company-info-container">
              <!--company name-->
              <h3 class="company-name">${data[1].company}</h3>
              <!--job role-->
              <h1 class="job-role">${data[0].position}</h1>
              <!--job other information-->
              <ul class="job-more-info">
                <li class="job-post-time">${data[1].postedAt}</li>
                <li class="job-type">${data[1].contract}</li>
                <li class="job-location">${data[1].location}</li>
              </ul>
              <hr />
            </div>
            <!--job profile skill requirement-->
            <div class="job-skill-container">
              <!--skill 1-->
              <div class="skill">
                <h5>${data[1].role}</h5>
              </div>
              <!--skill 2-->
              <div class="skill">
                <h5>${data[1].level}</h5>
              </div>
              <!--skill 3-->
              <div class="lang">
              <div class="hifi">
              <h5>${data[1].languages[0]}</h5>
              </div>
              </div>
              <div class="lang">
              <div class="hifi">
                <h5>${data[1].tools[0]}</h5>
               </div> 
              </div> 
            </div>
          </div>
          
          <!--job card 3-->
          <div class="job-card">
            <!-- job posted company logo-->
            <div class="logo-container">
              <img
                id="logo1"
                src="${data[4].logo}"
                alt="job posted company logo"
              />
            </div>
            <!--job posted company information-->
            <div class="company-info-container">
              <!--company name-->
              <h3 class="company-name">${data[4].company}</h3>
              <!--job role-->
              <h1 class="job-role">${data[4].position}</h1>
              <!--job other information-->
              <ul class="job-more-info">
                <li class="job-post-time">${data[4].postedAt}</li>
                <li class="job-type">${data[4].contract}</li>
                <li class="job-location">${data[4].location}</li>
              </ul>
              <hr />
            </div>
            <!--job profile skill requirement-->
            <div class="job-skill-container">
              <!--skill 4-->
              <div class="skill">
                <h5>${data[4].role}</h5>
              </div>
              <!--skill 2-->
              <div class="skill">
                <h5>${data[4].level}</h5>
              </div>
              <!--skill 3-->
              <div class="lang">
              <div class="hifi">
              <h5>${data[4].languages[0]}</h5>
              </div>
              </div>
              <div class="lang">
              <div class="hifi">
                <h5>${data[1].tools[0]}</h5>
               </div> 
               <div class="hifi">
               <h5>${data[1].tools[1]}</h5>
              </div> 
              </div> 
            </div>
          </div>  

          
          <!--job card 4-->
          <div class="job-card">
            <!-- job posted company logo-->
            <div class="logo-container">
              <img
                id="logo1"
                src="${data[8].logo}"
                alt="job posted company logo"
              />
            </div>
            <!--job posted company information-->
            <div class="company-info-container">
              <!--company name-->
              <h3 class="company-name">${data[8].company}</h3>
              <!--job role-->
              <h1 class="job-role">${data[8].position}</h1>
              <!--job other information-->
              <ul class="job-more-info">
                <li class="job-post-time">${data[8].postedAt}</li>
                <li class="job-type">${data[8].contract}</li>
                <li class="job-location">${data[8].location}</li>
              </ul>
              <hr />
            </div>
            <!--job profile skill requirement-->
            <div class="job-skill-container">
              <!--skill 8-->
              <div class="skill">
                <h5>${data[8].role}</h5>
              </div>
              <!--skill 2-->
              <div class="skill">
                <h5>${data[8].level}</h5>
              </div>
              <!--skill 3-->
              <div class="lang">
              <div class="hifi">
              <h5>${data[8].languages[0]}</h5>
              </div>
              <div class="hifi">
              <h5>${data[8].languages[1]}</h5>
              </div>
              </div>
              <div class="lang">
              <div class="hifi">
                <h5>${data[8].tools[0]}</h5>
               </div> 
              </div> 
            </div>
          </div>  
          `;
          break;
          case "fullstack":
            filterOutput = `
            <!--job card 2-->
            <div class="job-card">
              <!-- job posted company logo-->
              <div class="logo-container">
                <img
                  id="logo1"
                  src="${data[1].logo}"
                  alt="job posted company logo"
                />
              </div>
              <!--job posted company information-->
              <div class="company-info-container">
                <!--company name-->
                <h3 class="company-name">${data[1].company}</h3>
                <!--job role-->
                <h1 class="job-role">${data[0].position}</h1>
                <!--job other information-->
                <ul class="job-more-info">
                  <li class="job-post-time">${data[1].postedAt}</li>
                  <li class="job-type">${data[1].contract}</li>
                  <li class="job-location">${data[1].location}</li>
                </ul>
                <hr />
              </div>
              <!--job profile skill requirement-->
              <div class="job-skill-container">
                <!--skill 1-->
                <div class="skill">
                  <h5>${data[1].role}</h5>
                </div>
                <!--skill 2-->
                <div class="skill">
                  <h5>${data[1].level}</h5>
                </div>
                <!--skill 3-->
                <div class="lang">
                <div class="hifi">
                <h5>${data[1].languages[0]}</h5>
                </div>
                </div>
                <div class="lang">
                <div class="hifi">
                  <h5>${data[1].tools[0]}</h5>
                 </div> 
                </div> 
              </div>
            </div>
            
            <!--job card 3-->
            <div class="job-card">
              <!-- job posted company logo-->
              <div class="logo-container">
                <img
                  id="logo1"
                  src="${data[4].logo}"
                  alt="job posted company logo"
                />
              </div>
              <!--job posted company information-->
              <div class="company-info-container">
                <!--company name-->
                <h3 class="company-name">${data[4].company}</h3>
                <!--job role-->
                <h1 class="job-role">${data[4].position}</h1>
                <!--job other information-->
                <ul class="job-more-info">
                  <li class="job-post-time">${data[4].postedAt}</li>
                  <li class="job-type">${data[4].contract}</li>
                  <li class="job-location">${data[4].location}</li>
                </ul>
                <hr />
              </div>
              <!--job profile skill requirement-->
              <div class="job-skill-container">
                <!--skill 4-->
                <div class="skill">
                  <h5>${data[4].role}</h5>
                </div>
                <!--skill 2-->
                <div class="skill">
                  <h5>${data[4].level}</h5>
                </div>
                <!--skill 3-->
                <div class="lang">
                <div class="hifi">
                <h5>${data[4].languages[0]}</h5>
                </div>
                </div>
                <div class="lang">
                <div class="hifi">
                  <h5>${data[1].tools[0]}</h5>
                 </div> 
                 <div class="hifi">
                 <h5>${data[1].tools[1]}</h5>
                </div> 
                </div> 
              </div>
            </div>  
  
            
            <!--job card 4-->
            <div class="job-card">
              <!-- job posted company logo-->
              <div class="logo-container">
                <img
                  id="logo1"
                  src="${data[8].logo}"
                  alt="job posted company logo"
                />
              </div>
              <!--job posted company information-->
              <div class="company-info-container">
                <!--company name-->
                <h3 class="company-name">${data[8].company}</h3>
                <!--job role-->
                <h1 class="job-role">${data[8].position}</h1>
                <!--job other information-->
                <ul class="job-more-info">
                  <li class="job-post-time">${data[8].postedAt}</li>
                  <li class="job-type">${data[8].contract}</li>
                  <li class="job-location">${data[8].location}</li>
                </ul>
                <hr />
              </div>
              <!--job profile skill requirement-->
              <div class="job-skill-container">
                <!--skill 8-->
                <div class="skill">
                  <h5>${data[8].role}</h5>
                </div>
                <!--skill 2-->
                <div class="skill">
                  <h5>${data[8].level}</h5>
                </div>
                <!--skill 3-->
                <div class="lang">
                <div class="hifi">
                <h5>${data[8].languages[0]}</h5>
                </div>
                <div class="hifi">
                <h5>${data[8].languages[1]}</h5>
                </div>
                </div>
                <div class="lang">
                <div class="hifi">
                  <h5>${data[8].tools[0]}</h5>
                 </div> 
                </div> 
              </div>
            </div>  
            `;
            break;
            case "junior":
              filterOutput =`
              <!--job card 1-->
              <div class="job-card">
                <!-- job posted company logo-->
                <div class="logo-container">
                  <img
                    id="logo1"
                    src="${data[2].logo}"
                    alt="job posted company logo"
                  />
                </div>
                <!--job posted company information-->
                <div class="company-info-container">
                  <!--company name-->
                  <h3 class="company-name">${data[2].company}</h3>
                  <!--job role-->
                  <h1 class="job-role">${data[2].position}</h1>
                  <!--job other information-->
                  <ul class="job-more-info">
                    <li class="job-post-time">${data[2].postedAt}</li>
                    <li class="job-type">${data[2].contract}</li>
                    <li class="job-location">${data[2].location}</li>
                  </ul>
                  <hr />
                </div>
                <!--job profile skill requirement-->
                <div class="job-skill-container">
                  <!--skill 2-->
                  <div class="skill">
                    <h5>${data[2].role}</h5>
                  </div>
                  <!--skill 2-->
                  <div class="skill">
                    <h5>${data[2].level}</h5>
                  </div>
                  <!--skill 3-->
                  <div class="lang">
                  <div class="hifi">
                  <h5>${data[2].languages[0]}</h5>
                  </div>
                  </div>
                  <div class="lang">
                  <div class="hifi">
                    <h5>${data[2].tools[0]}</h5>
                   </div> 
                   <div class="hifi">
                   <h5>${data[2].tools[1]}</h5>
                  </div> 
                  </div> 
                </div>
              </div>
              
              <!--job card 2-->
              <div class="job-card">
                <!-- job posted company logo-->
                <div class="logo-container">
                  <img
                    id="logo1"
                    src="${data[3].logo}"
                    alt="job posted company logo"
                  />
                </div>
                <!--job posted company information-->
                <div class="company-info-container">
                  <!--company name-->
                  <h3 class="company-name">${data[3].company}</h3>
                  <!--job role-->
                  <h1 class="job-role">${data[3].position}</h1>
                  <!--job other information-->
                  <ul class="job-more-info">
                    <li class="job-post-time">${data[3].postedAt}</li>
                    <li class="job-type">${data[3].contract}</li>
                    <li class="job-location">${data[3].location}</li>
                  </ul>
                  <hr />
                </div>
                <!--job profile skill requirement-->
                <div class="job-skill-container">
                  <!--skill 3-->
                  <div class="skill">
                    <h5>${data[3].role}</h5>
                  </div>
                  <!--skill 2-->
                  <div class="skill">
                    <h5>${data[3].level}</h5>
                  </div>
                  <!--skill 3-->
                  <div class="lang">
                  <div class="hifi">
                  <h5>${data[3].languages[0]}</h5>
                  </div>
                  <div class="hifi">
                  <h5>${data[3].languages[1]}</h5>
                  </div>
                  </div>
                </div>
              </div> 
                    
              <!--job card 3-->
              <div class="job-card">
                <!-- job posted company logo-->
                <div class="logo-container">
                  <img
                    id="logo1"
                    src="${data[5].logo}"
                    alt="job posted company logo"
                  />
                </div>
                <!--job posted company information-->
                <div class="company-info-container">
                  <!--company name-->
                  <h3 class="company-name">${data[5].company}</h3>
                  <!--job role-->
                  <h1 class="job-role">${data[5].position}</h1>
                  <!--job other information-->
                  <ul class="job-more-info">
                    <li class="job-post-time">${data[5].postedAt}</li>
                    <li class="job-type">${data[5].contract}</li>
                    <li class="job-location">${data[5].location}</li>
                  </ul>
                  <hr />
                </div>
                <!--job profile skill requirement-->
                <div class="job-skill-container">
                  <!--skill 5-->
                  <div class="skill">
                    <h5>${data[5].role}</h5>
                  </div>
                  <!--skill 2-->
                  <div class="skill">
                    <h5>${data[5].level}</h5>
                  </div>
                  <!--skill 3-->
                  <div class="lang">
                  <div class="hifi">
                  <h5>${data[5].languages[0]}</h5>
                  </div>
                  <div class="hifi">
                  <h5>${data[5].languages[1]}</h5>
                  </div>
                  </div>
                  <div class="lang">
                  <div class="hifi">
                    <h5>${data[5].tools[0]}</h5>
                   </div> 
                  </div> 
                </div>
              </div>  
    
              
              <!--job card 4-->
              <div class="job-card">
                <!-- job posted company logo-->
                <div class="logo-container">
                  <img
                    id="logo1"
                    src="${data[6].logo}"
                    alt="job posted company logo"
                  />
                </div>
                <!--job posted company information-->
                <div class="company-info-container">
                  <!--company name-->
                  <h3 class="company-name">${data[6].company}</h3>
                  <!--job role-->
                  <h1 class="job-role">${data[6].position}</h1>
                  <!--job other information-->
                  <ul class="job-more-info">
                    <li class="job-post-time">${data[6].postedAt}</li>
                    <li class="job-type">${data[6].contract}</li>
                    <li class="job-location">${data[6].location}</li>
                  </ul>
                  <hr />
                </div>
                <!--job profile skill requirement-->
                <div class="job-skill-container">
                  <!--skill 6-->
                  <div class="skill">
                    <h5>${data[6].role}</h5>
                  </div>
                  <!--skill 2-->
                  <div class="skill">
                    <h5>${data[6].level}</h5>
                  </div>
                  <!--skill 3-->
                  <div class="lang">
                  <div class="hifi">
                  <h5>${data[6].languages[0]}</h5>
                  </div>
                  <div class="hifi">
                  <h5>${data[6].languages[1]}</h5>
                  </div>
                  </div>
                  <div class="lang">
                  <div class="hifi">
                    <h5>${data[6].tools[0]}</h5>
                   </div> 
                  </div> 
                </div>
              </div> 
              
                <!--job card 5-->
              <div class="job-card">
                <!-- job posted company logo-->
                <div class="logo-container">
                  <img
                    id="logo1"
                    src="${data[7].logo}"
                    alt="job posted company logo"
                  />
                </div>
                <!--job posted company information-->
                <div class="company-info-container">
                  <!--company name-->
                  <h3 class="company-name">${data[7].company}</h3>
                  <!--job role-->
                  <h1 class="job-role">${data[7].position}</h1>
                  <!--job other information-->
                  <ul class="job-more-info">
                    <li class="job-post-time">${data[7].postedAt}</li>
                    <li class="job-type">${data[7].contract}</li>
                    <li class="job-location">${data[7].location}</li>
                  </ul>
                  <hr />
                </div>
                <!--job profile skill requirement-->
                <div class="job-skill-container">
                  <!--skill 7-->
                  <div class="skill">
                    <h5>${data[7].role}</h5>
                  </div>
                  <!--skill 2-->
                  <div class="skill">
                    <h5>${data[7].level}</h5>
                  </div>
                  <!--skill 3-->
                  <div class="lang">
                  <div class="hifi">
                  <h5>${data[7].languages[0]}</h5>
                  </div>
                  </div>
                  <div class="lang">
                  <div class="hifi">
                    <h5>${data[7].tools[0]}</h5>
                   </div> 
                   <div class="hifi">
                   <h5>${data[7].tools[1]}</h5>
                  </div> 
                  </div> 
                </div>
              </div>

              <!--job card 6-->
              <div class="job-card">
                <!-- job posted company logo-->
                <div class="logo-container">
                  <img
                    id="logo1"
                    src="${data[9].logo}"
                    alt="job posted company logo"
                  />
                </div>
                <!--job posted company information-->
                <div class="company-info-container">
                  <!--company name-->
                  <h3 class="company-name">${data[9].company}</h3>
                  <!--job role-->
                  <h1 class="job-role">${data[9].position}</h1>
                  <!--job other information-->
                  <ul class="job-more-info">
                    <li class="job-post-time">${data[9].postedAt}</li>
                    <li class="job-type">${data[9].contract}</li>
                    <li class="job-location">${data[9].location}</li>
                  </ul>
                  <hr />
                </div>
                <!--job profile skill requirement-->
                <div class="job-skill-container">
                  <!--skill 9-->
                  <div class="skill">
                    <h5>${data[9].role}</h5>
                  </div>
                  <!--skill 2-->
                  <div class="skill">
                    <h5>${data[9].level}</h5>
                  </div>
                  <!--skill 3-->
                  <div class="lang">
                  <div class="hifi">
                  <h5>${data[9].languages[0]}</h5>
                  </div>
                  </div>
                  <div class="lang">
                  <div class="hifi">
                    <h5>${data[9].tools[0]}</h5>
                   </div> 
                   <div class="hifi">
                   <h5>${data[9].tools[1]}</h5>
                  </div> 
                  </div> 
                </div>
              </div>
              `;
              break;
              case "frontend":
                filterOutput =
                `
                <!--job card 1-->
                <div class="job-card">
                  <!-- job posted company logo-->
                  <div class="logo-container">
                    <img
                      id="logo1"
                      src="${data[2].logo}"
                      alt="job posted company logo"
                    />
                  </div>
                  <!--job posted company information-->
                  <div class="company-info-container">
                    <!--company name-->
                    <h3 class="company-name">${data[2].company}</h3>
                    <!--job role-->
                    <h1 class="job-role">${data[2].position}</h1>
                    <!--job other information-->
                    <ul class="job-more-info">
                      <li class="job-post-time">${data[2].postedAt}</li>
                      <li class="job-type">${data[2].contract}</li>
                      <li class="job-location">${data[2].location}</li>
                    </ul>
                    <hr />
                  </div>
                  <!--job profile skill requirement-->
                  <div class="job-skill-container">
                    <!--skill 2-->
                    <div class="skill">
                      <h5>${data[2].role}</h5>
                    </div>
                    <!--skill 2-->
                    <div class="skill">
                      <h5>${data[2].level}</h5>
                    </div>
                    <!--skill 3-->
                    <div class="lang">
                    <div class="hifi">
                    <h5>${data[2].languages[0]}</h5>
                    </div>
                    </div>
                    <div class="lang">
                    <div class="hifi">
                      <h5>${data[2].tools[0]}</h5>
                     </div> 
                     <div class="hifi">
                     <h5>${data[2].tools[1]}</h5>
                    </div> 
                    </div> 
                  </div>
                </div>
                
                <!--job card 2-->
                <div class="job-card">
                  <!-- job posted company logo-->
                  <div class="logo-container">
                    <img
                      id="logo1"
                      src="${data[3].logo}"
                      alt="job posted company logo"
                    />
                  </div>
                  <!--job posted company information-->
                  <div class="company-info-container">
                    <!--company name-->
                    <h3 class="company-name">${data[3].company}</h3>
                    <!--job role-->
                    <h1 class="job-role">${data[3].position}</h1>
                    <!--job other information-->
                    <ul class="job-more-info">
                      <li class="job-post-time">${data[3].postedAt}</li>
                      <li class="job-type">${data[3].contract}</li>
                      <li class="job-location">${data[3].location}</li>
                    </ul>
                    <hr />
                  </div>
                  <!--job profile skill requirement-->
                  <div class="job-skill-container">
                    <!--skill 3-->
                    <div class="skill">
                      <h5>${data[3].role}</h5>
                    </div>
                    <!--skill 2-->
                    <div class="skill">
                      <h5>${data[3].level}</h5>
                    </div>
                    <!--skill 3-->
                    <div class="lang">
                    <div class="hifi">
                    <h5>${data[3].languages[0]}</h5>
                    </div>
                    <div class="hifi">
                    <h5>${data[3].languages[1]}</h5>
                    </div>
                    </div>
                  </div>
                </div>  
                
                <!--job card 3-->
                <div class="job-card">
                  <!-- job posted company logo-->
                  <div class="logo-container">
                    <img
                      id="logo1"
                      src="${data[6].logo}"
                      alt="job posted company logo"
                    />
                  </div>
                  <!--job posted company information-->
                  <div class="company-info-container">
                    <!--company name-->
                    <h3 class="company-name">${data[6].company}</h3>
                    <!--job role-->
                    <h1 class="job-role">${data[6].position}</h1>
                    <!--job other information-->
                    <ul class="job-more-info">
                      <li class="job-post-time">${data[6].postedAt}</li>
                      <li class="job-type">${data[6].contract}</li>
                      <li class="job-location">${data[6].location}</li>
                    </ul>
                    <hr />
                  </div>
                  <!--job profile skill requirement-->
                  <div class="job-skill-container">
                    <!--skill 6-->
                    <div class="skill">
                      <h5>${data[6].role}</h5>
                    </div>
                    <!--skill 2-->
                    <div class="skill">
                      <h5>${data[6].level}</h5>
                    </div>
                    <!--skill 3-->
                    <div class="lang">
                    <div class="hifi">
                    <h5>${data[6].languages[0]}</h5>
                    </div>
                    <div class="hifi">
                    <h5>${data[6].languages[1]}</h5>
                    </div>
                    </div>
                    <div class="lang">
                    <div class="hifi">
                      <h5>${data[6].tools[0]}</h5>
                     </div> 
                    </div> 
                  </div>
                </div> 
                
                 
                <!--job card 4-->
                <div class="job-card">
                  <!-- job posted company logo-->
                  <div class="logo-container">
                    <img
                      id="logo1"
                      src="${data[7].logo}"
                      alt="job posted company logo"
                    />
                  </div>
                  <!--job posted company information-->
                  <div class="company-info-container">
                    <!--company name-->
                    <h3 class="company-name">${data[7].company}</h3>
                    <!--job role-->
                    <h1 class="job-role">${data[7].position}</h1>
                    <!--job other information-->
                    <ul class="job-more-info">
                      <li class="job-post-time">${data[7].postedAt}</li>
                      <li class="job-type">${data[7].contract}</li>
                      <li class="job-location">${data[7].location}</li>
                    </ul>
                    <hr />
                  </div>
                  <!--job profile skill requirement-->
                  <div class="job-skill-container">
                    <!--skill 7-->
                    <div class="skill">
                      <h5>${data[7].role}</h5>
                    </div>
                    <!--skill 2-->
                    <div class="skill">
                      <h5>${data[7].level}</h5>
                    </div>
                    <!--skill 3-->
                    <div class="lang">
                    <div class="hifi">
                    <h5>${data[7].languages[0]}</h5>
                    </div>
                    </div>
                    <div class="lang">
                    <div class="hifi">
                      <h5>${data[7].tools[0]}</h5>
                     </div> 
                     <div class="hifi">
                     <h5>${data[7].tools[1]}</h5>
                    </div> 
                    </div> 
                  </div>
                </div>
  
                <!--job card 5-->
                <div class="job-card">
                  <!-- job posted company logo-->
                  <div class="logo-container">
                    <img
                      id="logo1"
                      src="${data[9].logo}"
                      alt="job posted company logo"
                    />
                  </div>
                  <!--job posted company information-->
                  <div class="company-info-container">
                    <!--company name-->
                    <h3 class="company-name">${data[9].company}</h3>
                    <!--job role-->
                    <h1 class="job-role">${data[9].position}</h1>
                    <!--job other information-->
                    <ul class="job-more-info">
                      <li class="job-post-time">${data[9].postedAt}</li>
                      <li class="job-type">${data[9].contract}</li>
                      <li class="job-location">${data[9].location}</li>
                    </ul>
                    <hr />
                  </div>
                  <!--job profile skill requirement-->
                  <div class="job-skill-container">
                    <!--skill 9-->
                    <div class="skill">
                      <h5>${data[9].role}</h5>
                    </div>
                    <!--skill 2-->
                    <div class="skill">
                      <h5>${data[9].level}</h5>
                    </div>
                    <!--skill 3-->
                    <div class="lang">
                    <div class="hifi">
                    <h5>${data[9].languages[0]}</h5>
                    </div>
                    </div>
                    <div class="lang">
                    <div class="hifi">
                      <h5>${data[9].tools[0]}</h5>
                     </div> 
                     <div class="hifi">
                     <h5>${data[9].tools[1]}</h5>
                    </div> 
                    </div> 
                  </div>
                </div>
                `;
                break;
                case "backend":
                  filterOutput =`
                  <!--job card 1-->
                  <div class="job-card">
                    <!-- job posted company logo-->
                    <div class="logo-container">
                      <img
                        id="logo1"
                        src="${data[5].logo}"
                        alt="job posted company logo"
                      />
                    </div>
                    <!--job posted company information-->
                    <div class="company-info-container">
                      <!--company name-->
                      <h3 class="company-name">${data[5].company}</h3>
                      <!--job role-->
                      <h1 class="job-role">${data[5].position}</h1>
                      <!--job other information-->
                      <ul class="job-more-info">
                        <li class="job-post-time">${data[5].postedAt}</li>
                        <li class="job-type">${data[5].contract}</li>
                        <li class="job-location">${data[5].location}</li>
                      </ul>
                      <hr />
                    </div>
                    <!--job profile skill requirement-->
                    <div class="job-skill-container">
                      <!--skill 5-->
                      <div class="skill">
                        <h5>${data[5].role}</h5>
                      </div>
                      <!--skill 2-->
                      <div class="skill">
                        <h5>${data[5].level}</h5>
                      </div>
                      <!--skill 3-->
                      <div class="lang">
                      <div class="hifi">
                      <h5>${data[5].languages[0]}</h5>
                      </div>
                      </div>
                      <div class="lang">
                      <div class="hifi">
                        <h5>${data[5].tools[0]}</h5>
                       </div> 
                      </div> 
                    </div>
                  </div>
                  `;
                  break;
                  default:
                    filterOutput = `
                    <!--job card 5-->
                    <div class="job-card">
                       <h2>No data found ops! please select right button</h2>
                    </div>
                    `
                  break;
      }
       container.innerHTML = filterOutput; 
    })
    .catch((err) => {
      console.log(err);
      container.textContent = " sorry for our error . we are working hard to solve problem as soon as possible."
    })
}





