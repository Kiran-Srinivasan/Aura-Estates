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
        location: "Kabini–Nagarhole belt, Karnataka",
        type: "Backwater estate",
        status: "sold", // Kept as sold per original, user prompt description implies it's "Aura Kabini... sold" or strictly looking at the bottom "Aura Kabini... Key Features". The prompt didn't explicitly say change status for Kabini, only for Ibis and Aranya.
        image: "/images/projects/kabini.png",
        description: "Aura Kabini is a rare collection of riverfront estates offering views to the pristine Kabini backwaters—a sanctuary designed for those who seek solitude, serenity, and an intimate connection with the wild. Nestled in the pristine Kabini–Nagarhole belt of Karnataka, this property enjoys a rare combination of wilderness, water, and accessibility.",
        features: ["Kabini Backwater view and access", "Gated Community", "Managed Landscape", "Location Advantage"]
    },
    {
        id: "wayanad-paddy",
        title: "Aura Ibis",
        location: "Wayanad, Kerala",
        type: "Riverfront plantation",
        status: "ongoing",
        image: "/images/projects/wayanad.png",
        description: "Set along the serene banks of the Kabini River, at the edge of dense forest cover in Kerala, Aura Ibis is a rare living landscape shaped by water, soil, and time. Surrounded by active paddy fields and a fully grown plantation, Aura Ibis offers a way of life that is deeply connected to nature.",
        features: ["Kabini River view and access", "Gated Community", "Fully grown plantation", "Eco-friendly Infrastructure"]
    },
    {
        id: "enclave-one",
        title: "Aura Aranya",
        location: "Kakankote Forest, Karnataka",
        type: "Wild riverfront",
        status: "ongoing",
        image: "/images/hero/2.png",
        description: "Luxury at Aura Aranya is not built—it is felt. It exists in space, silence, security, and the freedom to create a private forest home or riverside retreat that blends seamlessly into its environment. Designed for bespoke villas, legacy residences, and private sanctuaries.",
        priceStart: "₹1.8 Cr",
        features: ["Kabini River view and access", "Fully grown plantation", "Eco-friendly Infrastructure", "Location Advantage"]
    }
];
