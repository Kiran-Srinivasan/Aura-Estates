export interface Project {
    id: string;
    title: string;
    location: string;
    type: string;
    status: "ongoing" | "upcoming" | "sold";
    image: string;
    description: string;
    priceStart?: string;
    features: string[];
}

export const PROJECTS: Project[] = [
    {
        id: "kabini-serenity",
        title: "Aura Kabini",
        location: "Kabini, Karnataka",
        type: "Riverfront Estate",
        status: "sold",
        image: "/images/projects/kabini.png",
        description: "A rare collection of riverfront estates offering direct access to the Kabini backwaters. Designed for those who seek solitude and a deep connection with the wild.",
        features: ["Direct River Access", "Private Boat Dock", "Gated Community", "Managed Landscape"]
    },
    {
        id: "wayanad-paddy",
        title: "The Paddy Fields",
        location: "Wayanad, Kerala",
        type: "Eco-Luxury Plots",
        status: "upcoming",
        image: "/images/projects/wayanad.png",
        description: "Living amidst the rhythm of nature. These plots are set right next to active paddy fields and a winding stream, offering a grounded, authentic lifestyle.",
        features: ["Paddy View", "Stream Side", "Organic Farming", "Eco-friendly Infrastructure"]
    },
    {
        id: "enclave-one",
        title: "The Enclave at Oak Ridge",
        location: "North Bangalore",
        type: "Gated Community",
        status: "ongoing",
        image: "/images/hero/2.png", // Reusing hero image for now
        description: "Modern luxury meets nature in this exclusive gated community. Featuring wide boulevards, parks, and premium clubhouse amenities.",
        priceStart: "₹1.8 Cr",
        features: ["Clubhouse", "Underground Cabling", "24/7 Security", "Wide Roads"]
    }
];
