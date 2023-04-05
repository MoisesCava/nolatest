const fetchChats = async () => {
    try {
      const response = await fetch('http://localhost:3000/chats');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export default fetchChats;