import React from "react"
import Card from "./assets/components/Card"
// import Card from "./components/Card"
function App() {
  const data=[
    {
      plan:"FREE",
      price:"0",
      user:"Single User",
      isUser:true,
      storage:"5 GB Storage",
      isStorage:true,
      publicProjects:"Unllimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unlimited private projects",
      isPrivateProjects:true,
      support:"Dedicated Phone Support",
      isSupport:false,
      subDomain:"Free Subdomain",
      isSubDomain:false,
      reports:"Monthly Status Reports",
      isRoprts:false,

    },
    {
      plan:"PLUS",
      price:"9",
      user:"5 User",
      isUser:true,
      storage:"5 GB Storage",
      isStorage:true,
      publicProjects:"Unllimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unlimited private projects",
      isPrivateProjects:true,
      support:"Dedicated Phone Support",
      isSupport:true,
      subDomain:"Free Subdomain",
      isSubDomain:true,
      reports:"Monthly Status Reports",
      isRoprts:false,


    },
    {
      plan:"PRO",
      price:"49",
      user:"Unlimited Users",
      isUser:true,
      storage:"150 GB Storage",
      isStorage:true,
      publicProjects:"Unllimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unlimited private projects",
      isPrivateProjects:true,
      support:"Dedicated Phone Support",
      isSupport:true,
      subDomain:"Free Subdomain",
      isSubDomain:true,
      reports:"Monthly Status Reports",
      isRoprts:true,


    },
  ]
 return <>
      <section className="pricing py-5">
  <div className="container">
    <div className="" style={{display:"flex",gap:"20px"}}>
      {
       data.map((e,i)=>{
        return<Card data ={e} key={i}/>
       }
       )
        
      }
    
      {/* <Card/>
      <Card/>
      <Card/> */}
  </div>
  </div>
</section>
    </>
  
}

export default App
