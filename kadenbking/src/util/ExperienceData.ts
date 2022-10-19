import { ExperienceData } from "./types";

// Image Imports
import clearFunction from "./../img/experience/clearfunction.jpg";
import clearFunction2 from "./../img/experience/clearfunction2.jpg";
import freedhardeman from "./../img/experience/freedhardeman.jpg";
import freedhardeman2 from "./../img/experience/freedhardeman2.jpg";
import hillcrest from "./../img/experience/hillcrest.jpg";

export function getExperience(): ExperienceData {
    
    const experience = {
        logos: [clearFunction, freedhardeman, clearFunction2, freedhardeman2, hillcrest],
        companies: ["Clear Function (Memphis, TN)", "Freed-Hardeman University (Henderson, TN)", "Clear Function (Memphis, TN)", "Freed-Hardeman University (Henderson, TN)", "Hillcrest Church of Christ (Neosho, MO)"],
        dates: ["8/22 - Present", "8/19 - 5/23","5/22 - 7/22", "8/21 - 5/22", "5/20 - 8/20 | 5/21 - 8/21"],
        titles: ["Part-Time Software Engineer", "Student - B.S. Computer Science and Interactive Digital Design", "Software Development Intern", "Campus Delegate", "Youth Ministry Intern"],
        descriptions: [
            "Development work for Clear Function and their clients involving a variety of different projects, frameworks, and programming languages.",
            "A double major in Computer Science and Interactive Digital Design with an emphasis in Software Development. FHU has played a pivotal role in my learning and growth as a person. FHU is a fantastic school with amazing people that care deeply about the students. ",
            "Development work for Clear Function with teaching and coaching from their team. CF is made up of a great group of people that enjoy working with and helping each other. ",
            "Work under the University’s Office of Admissions to connect and engage with prospective students. I would give campus tours, travel to various recruiting events, and complete other work as needed. ",
            "My roll was to assist the youth minister in planning events, teaching Bible classes, and encouraging kids. I also preached part-time, redesigned and operated the website, YouTube channel, and started a live video streaming service. "
        ],
        extraInformation: [
            [],
            ["Trustee's Scholar", "FHU President's and Dean's Honor List, 3.90 GPA", "Extracurriculars: Social Club (Chi Beta Chi); Offices (President, Men's Vice President, Men's Sports Captain); Professional Club (FHU Math and Computer Science Club)"],
            [],
            [],
            []
        ]
    }

    return experience;
}
