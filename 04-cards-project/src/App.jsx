import React from "react";
import { Bookmark } from "lucide-react";
import Card from "./components/Card.jsx";
import User from "./components/User.jsx";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://toppng.com/uploads/preview/google-logo-transparent-png-11659866441wanynck5pd.png",
      company: "Google",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://tse3.mm.bing.net/th/id/OIP.zDfdVzAl1LG6wAj2VBBOmgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      company: "Microsoft",
      datePosted: "5 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$52/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://pngimg.com/uploads/apple_logo/apple_logo_PNG19674.png",
      company: "Apple",
      datePosted: "1 week ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Cupertino, USA",
    },
    {
      brandLogo: "https://pngimg.com/d/meta_PNG4.png",
      company: "Meta",
      datePosted: "3 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Menlo Park, USA",
    },
    {
      brandLogo: "https://cdn.freelogovectors.net/wp-content/uploads/2023/03/amazon_logo-freelogovectors.net_.png",
      company: "Amazon",
      datePosted: "10 days ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Chennai, India",
    },
    {
      brandLogo: "https://pngimg.com/uploads/netflix/netflix_PNG10.png",
      company: "Netflix",
      datePosted: "2 weeks ago",
      post: "Frontend UI Developer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Los Gatos, USA",
    },
    {
      brandLogo: "https://tse3.mm.bing.net/th/id/OIP.zH8zMTUoiVkeeQIq4zuUxAHaFB?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      company: "NVIDIA",
      datePosted: "4 days ago",
      post: "React Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Pune, India",
    },
    {
      brandLogo: "https://www.pngmart.com/files/23/Adobe-Logo-PNG-Photos.png",
      company: "Adobe",
      datePosted: "8 days ago",
      post: "Frontend Software Engineer",
      tag1: "Hybrid",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Noida, India",
    },
    {
      brandLogo: "https://tse2.mm.bing.net/th/id/OIP.K6ZgqpFVE7llObFDoyUyBwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      company: "Oracle",
      datePosted: "6 days ago",
      post: "JavaScript Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$46/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://companieslogo.com/img/orig/TSLA-6da550e5.png?t=1740128273",
      company: "Tesla",
      datePosted: "3 weeks ago",
      post: "Frontend Web Developer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$68/hr",
      location: "Austin, USA",
    },
  ];

  console.log(jobOpenings);
  return (
    <div className="parent">
      {jobOpenings.map(function (elem,idx) {
        return <div key={idx}>
          <Card
            brandLogo={elem.brandLogo}
            company={elem.company}
            datePosted={elem.datePosted}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
        </div>
      })}
    </div>
  );
};

export default App;
