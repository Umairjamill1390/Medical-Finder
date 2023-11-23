// ./src/Services/MedicareHospitalService/MedicareHospitalService.js

import axios from 'axios';

const MEDICARE_API_URL = 'https://data.cms.gov/data-api/v1/dataset/f6f6505c-e8b0-4d57-b258-e2b94133aaf2/data';

const MedicareHospitalService = {
    getHospitalsByZip: async (zipCode) => {
        try {
            const response = await axios.get(MEDICARE_API_URL);
            if (response.status === 200) {
                const filteredData = response.data
                    .filter(hospital => {
                        const apiZip = hospital['ZIP CODE'].substring(0, 5);
                        return apiZip === zipCode;
                    })
                    .map(hospital => ({
                        name: hospital['ORGANIZATION NAME'],
                        addressLine1: hospital['ADDRESS LINE 1'],
                        addressLine2: hospital['ADDRESS LINE 2'],
                        city: hospital['CITY'],
                        state: hospital['STATE'],
                        zip: hospital['ZIP CODE'].substring(0, 5),
                        generalHospital: hospital['SUBGROUP - GENERAL'] === 'Y',
                        childrenHospital: hospital['SUBGROUP - CHILDRENS'] === 'Y',
                        psychiatricHospital: hospital['SUBGROUP - PSYCHIATRIC'] === 'Y',
                        rehabilitationHospital: hospital['SUBGROUP - REHABILITATION'] === 'Y',
                    }));
                return filteredData;
            } else {
                throw new Error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching Medicare hospitals:', error);
            throw error;
        }
    }
};

export default MedicareHospitalService;
