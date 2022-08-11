import { CardInformation, PortfolioItem } from "./types";
import { useValidItemName } from "../hooks/useValidItemName";

// Image Imports
import wardgrove from "./../img/portfolio/wardgrove/wardgrove.jpeg";
import wardgroveRedesign from "./../img/portfolio/wardgrove/wardgrove-redesign.jpeg";
import wardgroveOriginal from "./../img/portfolio/wardgrove/wardgrove-original.jpeg";
import ncs from "./../img/portfolio/ncs/ncs.jpeg";
import ncsRedesign from "./../img/portfolio/ncs/ncs-redesign.jpeg";
import ncsOriginal from "./../img/portfolio/ncs/ncs-original.jpeg";
import evolve from "./../img/portfolio/evolve/evolve.jpeg";
import evolveMock from "./../img/portfolio/evolve/evolve-mock.jpeg";
import evolveFlat from "./../img/portfolio/evolve/evolve-flat.jpg";
import hillcrest from "./../img/portfolio/hillcrest/hillcrest.jpg";
import hillcrestRedesign from "./../img/portfolio/hillcrest/hillcrest-redesign.jpg";
import calledout from "./../img/portfolio/hillcrest/calledout.jpg";
import vbs2022 from "./../img/portfolio/hillcrest/vbs2022.jpg";
import fruitofthespirit from "./../img/portfolio/hillcrest/fruitofthespirit.jpg";
import fhubound from "./../img/portfolio/fhubound/fhubound.jpg";
import fhubound1 from "./../img/portfolio/fhubound/fhubound1.jpg";
import fhubound2 from "./../img/portfolio/fhubound/fhubound2.jpg";
import kindlly from "./../img/portfolio/kindlly/kindlly.jpg";
import kindllyLayout from "./../img/portfolio/kindlly/kindlly-layout.jpg";
import piday from "./../img/portfolio/piday/piday.jpg";
import pidayLayout from "./../img/portfolio/piday/piday-layout.jpg";
import agile from "./../img/portfolio/agile/agile.jpg";
import esc from "./../img/portfolio/agile/esc-video.jpg";
import plaque from "./../img/portfolio/agile/ship-plaque.jpg";
import coviddashboard from "./../img/portfolio/coviddashboard/coviddashboard.jpg";
import dashboard from "./../img/portfolio/coviddashboard/dashboard.jpg";
import harlans from "./../img/portfolio/harlans/harlans.jpg";
import harlansLayout from "./../img/portfolio/harlans/harlans-layout.jpg";
import fhuYears from "./../img/portfolio/150years/150years.jpg";
import fhuOriginal from "./../img/portfolio/150years/fhu-original.jpg";
import fhuRedesign from "./../img/portfolio/150years/fhu-redesign.jpg";
import st from "./../img/portfolio/st/st.jpg";
import stLayout from "./../img/portfolio/st/sky-traveler.jpg";
import award from "./../img/portfolio/st/fbla.jpeg";

export function getCardInformation(project: string): CardInformation {
    const cardInformation: CardInformation = {
        img: "",
        title: "",
        description: "",
        path: ""
    };

    switch (project) {
        case "wardgrove":
            cardInformation.img = wardgrove;
            cardInformation.title = "Wardgrove";
            cardInformation.description =
            "Static website redesign for a local Christmas Tree Farm";
            cardInformation.path = "wardgrove"
            break;
        case "ncs":
            cardInformation.img = ncs;
            cardInformation.title = "Neosho Christian School";
            cardInformation.description =
            "Logo and Website redesign for local private school";
            cardInformation.path = "ncs";
            break;
        case "evolve":
            cardInformation.img = evolve;
            cardInformation.title = "Evolve";
            cardInformation.description =
            "Album artwork redesign for school project";
            cardInformation.path = "evolve";
            break;
        case "hillcrest":
            cardInformation.img = hillcrest;
            cardInformation.title = "Hillcrest Church of Christ";
            cardInformation.description = "Website redesign and various graphic design projects";
            cardInformation.path = "hillcrest";
            break;
        case "fhubound":
            cardInformation.img = fhubound;
            cardInformation.title = "FHUBound";
            cardInformation.description = "Xamarin mobile app";
            cardInformation.path = "fhubound";
            break;
        case "kindlly":
            cardInformation.img = kindlly;
            cardInformation.title = "Kindlly";
            cardInformation.description = "Full-stack web app for school project";
            cardInformation.path = "kindlly";
            break;
        case "piday":
            cardInformation.img = piday;
            cardInformation.title = "FHU Pi Day";
            cardInformation.description = "Graphic design for a prospective student event at Freed-Hardeman University";
            cardInformation.path = "piday";
            break;
        case "agile":
            cardInformation.img = agile;
            cardInformation.title = "ESCAPE";
            cardInformation.description = "Agile Development class project at Freed-Hardeman University";
            cardInformation.path = "agile";
            break;
        case "coviddashboard":
            cardInformation.img = coviddashboard;
            cardInformation.title = "FHU Covid Dashboard";
            cardInformation.description = "Responsive dashboard site to show Covid-19 statistics";
            cardInformation.path = "coviddashboard";
            break;
        case "harlans":
            cardInformation.img = harlans;
            cardInformation.title = "Harlan's Automotive";
            cardInformation.description = "Logo design for local Automotive Repair Shop";
            cardInformation.path = "harlans";
            break;
        case "150years":
            cardInformation.img = fhuYears;
            cardInformation.title = "150 Years Section Redesign";
            cardInformation.description = "Website section redesign for school project";
            cardInformation.path = "150years";
            break;
        case "st":
            cardInformation.img = st;
            cardInformation.title = "Sky Traveler";
            cardInformation.description = "Platform video game developed for FBLA";
            cardInformation.path = "st";
            break;
    }

    return cardInformation;
}

export function getProject(item: string | undefined): PortfolioItem {
    const project: PortfolioItem = {
        title: "",
        displayImgs: [],
        description: "",
        testimonial: "",
        previous: "",
        next: ""
    };

    switch (item) {
        case "wardgrove":
            project.title = "Wardgrove";
            project.displayImgs = [{path: wardgroveRedesign, link: "https://wardgrove.netlify.app/"}, {path: wardgroveOriginal, link: "http://wardgrove.com/"}];
            project.description = "This was my final class project in Advanced Web Design at Freed-Hardeman University. The assignment was to create a website from scratch redesigning the site of a local Christmas tree farm. Before and after results are displayed below.";
            project.next = "ncs";
            break;
        case "ncs":
            project.title = "Neosho Christian School";
            project.displayImgs = [{path: ncsRedesign, link: "https://neoshochristianschool.com/"}, {path: ncsOriginal, link: ""}];
            project.description ="Neosho Christian School asked me to update their logo and website. The logo was the result of sketching and pen tool work in Adobe Illustrator. The website was created with WordPress and the Divi theme. Before and after results are displayed below.";
            project.previous = "wardgrove";
            project.next = "evolve";
            break;
        case "evolve":
            project.title = "Evolve - Imagine Dragons";
            project.displayImgs = [{path: evolveMock, link: ""}, {path: evolveFlat, link: ""}];
            project.description = "An assignment for a Graphic Design class at Freed-Hardeman University. The goal was to redesign an album cover of choice and create professional mockup images for a CD cover and Vinyl case.";
            project.previous = "ncs";
            project.next = "hillcrest";
            break;
        case "hillcrest":
            project.title = "Hillcrest Church of Christ";
            project.displayImgs = [{path: hillcrestRedesign, link: "https://neoshochurchofchrist.org/"}, {path: calledout, link: ""}, {path: vbs2022, link: ""}, {path: fruitofthespirit, link: ""}];
            project.description = "I worked as the Youth Ministry Intern at Hillcrest Church of Christ two separate summers while studying at FHU. Aside from my responsibilities as the Youth Intern, I redesigned the website (using WordPress), created a YouTube channel, posted hundreds of sermon videos, and updated their streaming services to live video. Since then, I have also done several graphic design projects for the church, including logos, t-shirts, stickers, and book covers.";
            project.previous = "evolve";
            project.next = "fhubound";
            break;
        case "fhubound":
            project.title = "FHUBound";
            project.displayImgs = [{path: fhubound1, link: ""}, {path: fhubound2, link: ""}];
            project.description = "FHUBound is a cross-platform mobile app built with Microsoft's Xamarin by several Freed-Hardeman University students. The app is for prospective students to learn more about the University, schedule campus visits, and apply to FHU. I specifically spent a large amount of time on the rewards page.";
            project.previous = "hillcrest";
            project.next = "kindlly";
            break;
        case "kindlly":
            project.title = "Kindlly";
            project.displayImgs = [{path: kindllyLayout, link: ""}];
            project.description = "Kindlly was a full-stack web application project for my Application Development class at Freed-Hardeman University. The front end was developed in Vue.js, the API was developed in Node.js , and the database was an Amazon DynamoDB. I also designed the UX, logo, and graphics for the project.";
            project.previous = "fhubound";
            project.next = "piday";
            break;
        case "piday":
            project.title = "FHU Pi Day";
            project.displayImgs = [{path: pidayLayout, link: ""}];
            project.description = "I designed this sticker to promote an event for prospective students to experience a day on campus with the Computer Science department at Freed-Hardeman University. Students who attended received a Raspberry Pi and were taught how to use it by FHU professors and upperclassmen students.";
            project.previous = "kindlly";
            project.next = "agile";
            break;
        case "agile":
            project.title = "ESCAPE";
            project.displayImgs = [{path: esc, link: "https://www.youtube.com/watch?v=JCnL4nKODOs"}, {path: plaque, link: ""}];
            project.description = "In a class at Freed-Hardeman University dedicated to learning Agile Development practices, my classmates and I built a futuristic, space-themed Escape Room. While working on this room, I used a Raspberry Pi (programmed with Python to control potentiometers and LED lights), Adobe Premiere Pro (where I created and edited the introductory video), and other Adobe Suite products (to create labels and graphics throughout the room). I also created an Admin station to watch potential Escapees from an installed hidden camera, and I set up a system to relay to the Escapees their time remaining and hints for completing puzzles. Below is a link to the intro video that was watched before beginning the escape room, and a plaque to honor the students who worked on the project.";
            project.previous = "fhubound";
            project.next = "coviddashboard";
            break;
         case "coviddashboard":
            project.title = "FHU Covid Dashboard";
            project.displayImgs = [{path: dashboard, link: "https://coviddashboard.netlify.app/"}];
            project.description = "This was a project in my Application Development class. This site uses jQuery to receive current Covid-19 statistics from an API and display the information (and how it has changed) throughout the course of the semester.";
            project.previous = "agile";
            project.next = "harlans";
            break;
        case "harlans":
            project.title = "Harlan's Automotive";
            project.displayImgs = [{path: harlansLayout, link: ""}];
            project.description = "This is what was said about this logo design:";
            project.testimonial = `"Kaden designed a sleek and awesome logo for one of my clients! I highly recommend his services. He is great at communicating, fast response times, and very kind. Look no further for your graphic design needs."`;
            project.previous = "coviddashboard";
            project.next = "150years";
            break;
        case "150years":
            project.title = "FHU 150 Years Section Redesign";
            project.displayImgs = [{path: fhuRedesign, link: "https://fhu-150-years.netlify.app/"}, {path: fhuOriginal, link: ""}];
            project.description = "Another project for Advanced Web Design at Freed-Hardeman. This assignment was to redesign the section of the website that displayed the “150 Years” logo and the three values of the University. Before and after results are displayed below.";
            project.previous = "harlans";
            project.next = "st";
            break;
        case "st":
            project.title = "Sky Traveler";
            project.displayImgs = [{path: stLayout, link: ""}, {path: award, link: ""}];
            project.description = `Sky Traveler was a 2-D pixel, platform video game that I developed second semester of my senior year of high school. The game was made for a Future Business Leaders of America (FBLA) competition called "Computer Game and Simulation Programming". After winning 1st place in the state of Missouri, I took the project to San Antonio, Texas, where I placed 10th in the nation.`;
            project.previous = "150years";
            break;
        default:
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useValidItemName();
    }

    return project;
}