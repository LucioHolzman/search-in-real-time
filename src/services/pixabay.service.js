import axios from "axios";

export const fetchImages = async(search) => {
    try {
        return await axios.get(`https://pixabay.com/api/?key=22046725-cba09e000d278504bc33207d1&q=${search ? search: "Galaxy"}&per_page=30&image_type=photo`)
    } catch (error) {
        console.error(error);
    }
}