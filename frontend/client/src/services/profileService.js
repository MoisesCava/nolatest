const getConfig = async () => {
    try {
        const response = await fetch('http://localhost:3000/config');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

const updateConfig = async (profile) => {
    try {
        const response = await fetch('http://localhost:3000/config', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(profile )
        });
        return response.statusText;
    } catch (error) {
        console.error(error);
    }
};
  
export {
    getConfig,
    updateConfig
}