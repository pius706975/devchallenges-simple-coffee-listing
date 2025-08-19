import api from "@/services/instance/api";

interface Coffee {
    id: number;
    title: string;
    image: string;
    price: number;
    rating: number | null;
    votes: number;
}

const getCoffeeList = async (): Promise<Coffee[]> => {
    const res = await api.get<Coffee[]>(
        "/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    );
    return res.data;
};

export { getCoffeeList };
