const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    let hours = date.getHours();
    const minutes = date.getMinutes();

    const amOrPm = hours >= 12 ? "P.M." : "A.M.";
    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${amOrPm}`;
    return formattedTime;
};

export default formatDate;