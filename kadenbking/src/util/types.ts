export type CardInformation = {
    img: string;
    title: string;
    description: string;
    path: string;
}

export type PortfolioItem = {
    title: string;
    displayImgs: Array<PortfolioDisplayItem>;
    description: string;
    testimonial: string;
    previous: string;
    next: string;
}

export type PortfolioDisplayItem = {
    path: string;
    link: string;
}

export type ExperienceData = {
    logos: Array<string>;
    companies: Array<string>;
    dates: Array<string>;
    titles: Array<string>;
    descriptions: Array<string>;
    extraInformation: Array<Array<string>>;
}

export type FormInput = {
    name: string;
    email: string;
    message: string;
}