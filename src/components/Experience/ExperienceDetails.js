import './Experience.css'
import ExperienceCard from './ExperienceCard'

import Carousel from 'react-material-ui-carousel'

function ExperienceDetails() {
  var experiences = [
    {
      heading: "SMART Lab (UTK)", 
      subheading: "Undergraduate Research Student",
      date: "August 2022 - Present | Knoxville, TN",
      details: [
        "Lead a team of 3 developers",
        "Create a music therapy app on a Pepper robot to help determine the effectiveness of music therapy",
        "Program a NAO robot to assist individuals of various ages through tailored music-oriented exercise"
      ]
    },
    {
      heading: "Sam's Club (Supply Chain Technology)",
      subheading: "Software Engineering Intern",
      date: "May 2023 - August 2023 | Bentonville, AR",
      details: [
        "Identified streamlining opportunities at distribution centers through mobile app data collection",
        "Designed a dashboard to visualize the efficiency of the receiving process at distribution centers"
      ]
    },
    {
      heading: "Trimble Inc. (MEP Division)",
      subheading: "Software Engineering Intern",
      date: "May 2022 - August 2022 | Knoxville, TN",
      details: [
        "Redesigned the mobile workflow for a fabrication shop app to create a more favorable user experience",
        "Imporved the tracking database's services by increasing the speed of queries"
      ]
    },
    {
      heading: "Raising A Voice (Hack 4 Impact UTK)",
      subheading: "Front-End Developer",
      date: "September 2021 - May 2022 | Knoxville, TN",
      details: [
        "Collaborated with a team of 6 developers to create a React-based, mobile-friendly website",
        "Constructed a profile creation system",
        "Implemented a search feature that obtains and filters profiles from a database",
      ]
    },
    {
      heading: "Formula One Fantasy Data Tracker",
      subheading: "Personal Project",
      date: "July 2021 - August 2021",
      details: [
        "Created a React application with an Express backend",
        "Established Mongo database to store users' votes"
      ]
    },
    {
      heading: "Personal Website",
      subheading: "Personal Project",
      date: "June 2021",
      details: [
        "Learned React by completing 55-hour Udemy course",
        "Developed component-driven frontend in React"
      ]
    }

  ]
  return (
    <Carousel 
      autoPlay={false}
      height={"90%"}
      className="carousel"
    >
      {experiences.map((experience) => {
        return (
        <ExperienceCard
          heading={experience.heading}
          subheading={experience.subheading}
          date={experience.date}
          details={experience.details}
        />);
      })}
    </Carousel>
  );
}

export default ExperienceDetails;