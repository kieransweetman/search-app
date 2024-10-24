import { API_BASE_URL } from "../../utils/common"

const queryByName = async (str) => {
    const url = API_BASE_URL + `?search=${str}`
    const response = await fetch(url, {
        method: 'POST',
    });
    const data = await response.json();
    return data;
}

const apiHelper = {
    starShipSearch: async (searchString) => {
        return await queryByName(searchString);
    },
}

export default apiHelper;